import { NextRequest, NextResponse } from "next/server";

const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

/**
 * A basic proxy handler for request forwarding with rate limiting.
 */
export default async function proxyRequest(req: NextRequest, targetUrl: string) {
    const ip = req.headers.get("x-forwarded-for") || "anonymous";
    const now = Date.now();

    const rateData = rateLimitMap.get(ip) || { count: 0, lastReset: now };

    if (now - rateData.lastReset > RATE_LIMIT_WINDOW) {
        rateData.count = 1;
        rateData.lastReset = now;
    } else {
        rateData.count++;
    }

    rateLimitMap.set(ip, rateData);

    if (rateData.count > MAX_REQUESTS) {
        return NextResponse.json(
            { error: "Too many requests. Please try again later." },
            { status: 429 }
        );
    }

    try {
        const url = new URL(targetUrl);
        const headers = new Headers(req.headers);
        headers.delete("host");

        const response = await fetch(url.toString(), {
            method: req.method,
            headers: headers,
            body: req.method !== "GET" && req.method !== "HEAD" ? await req.blob() : null,
            cache: "no-store",
        });

        return new NextResponse(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
        });
    } catch (error) {
        console.error("Proxy error:", error);
        return NextResponse.json({ error: "Failed to proxy request" }, { status: 500 });
    }
}
