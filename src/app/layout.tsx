import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import ThirdPartyScripts from "@/components/ThirdPartyScripts";
import { client } from "@/lib/sanity";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
    const query = `*[_type == "globalSettings"][0]{
        seoTitle,
        seoDescription,
        "ogImage": ogImage.asset->url
    }`;
    const data = await client.fetch(query);

    return {
        title: data?.seoTitle || "SwiftSupport - Professional Business Consultancy in Nepal",
        description: data?.seoDescription || "Expert business consultancy services in Nepal including Registration, Tax, VAT, and Accounting.",
        openGraph: data?.ogImage ? {
            images: [data.ogImage],
        } : undefined,
    };
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <ThirdPartyScripts />
            </head>
            <body className={inter.className}>
                {children}
                <WhatsAppButton />
            </body>
        </html>
    );
}
