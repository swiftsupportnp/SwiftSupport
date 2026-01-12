"use client";

import { useActionState, useState, useEffect } from "react";
import { sendEmail } from "@/actions/sendEmail";

export default function ContactForm() {
    const [state, action, isPending] = useActionState(sendEmail, null);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (state?.success) {
            setIsSuccess(true);
        }
    }, [state]);

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center p-8 bg-green-50 border border-green-200 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-green-700">Thank You!</h3>
                <p className="mt-2 text-green-600">
                    Your message has been sent successfully. We'll get back to you soon.
                </p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 text-green-700 font-semibold hover:underline"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form action={action} className="w-full max-w-lg space-y-4">
            {/* Honeypot Field - Hidden from users */}
            <div className="hidden">
                <input
                    type="text"
                    name="honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>

            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 sm:text-sm p-3 bg-white border"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 sm:text-sm p-3 bg-white border"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 sm:text-sm p-3 bg-white border"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    How can we help you?
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 sm:text-sm p-3 bg-white border"
                ></textarea>
            </div>

            {state?.error && (
                <p className="text-red-500 text-sm font-medium">{state.error}</p>
            )}

            <button
                type="submit"
                disabled={isPending}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-md text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition-colors"
            >
                {isPending ? "Submitting Request..." : "Book Free Consultation"}
            </button>
        </form>
    );
}
