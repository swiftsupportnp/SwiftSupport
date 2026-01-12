"use strict";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: any, formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    const honeypot = formData.get("honeypot") as string;

    // Honeypot check: If the hidden field is filled, it's likely a bot.
    // We return a "success" response to fool the bot without sending an email.
    if (honeypot) {
        console.log("Honeypot triggered, ignoring request.");
        return { success: true };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: "SwiftSupport <onboarding@resend.dev>",
            to: ["info@swiftsupportsolutions.com.np"],
            subject: `New Business Inquiry: ${name}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px;">
                    <h2 style="color: #004A99; border-bottom: 2px solid #004A99; padding-bottom: 10px;">New Business Inquiry</h2>
                    <p>You have received a new consultation request from the website.</p>
                    
                    <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; margin: 20px 0;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p style="font-size: 1.2em; color: #004A99;"><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
                    </div>

                    <div style="margin-top: 20px;">
                        <h3 style="color: #475569;">Message:</h3>
                        <p style="white-space: pre-wrap; color: #1e293b; line-height: 1.6;">${message}</p>
                    </div>

                    <p style="font-size: 0.8em; color: #64748b; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 10px;">
                        This inquiry was sent via the SwiftSupport Business Consultancy website.
                    </p>
                </div>
            `,
            replyTo: email,
        });

        if (error) {
            console.error("Resend error:", error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (err) {
        console.error("Server Action error:", err);
        return { success: false, error: "An unexpected error occurred." };
    }
}
