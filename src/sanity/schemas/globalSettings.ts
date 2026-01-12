import { defineType, defineField } from "sanity";

export const globalSettings = defineType({
    name: "globalSettings",
    title: "Global Settings",
    type: "document",
    fields: [
        defineField({
            name: "whatsappNumber",
            title: "WhatsApp Number",
            type: "string",
            description: "e.g., +977-9801234567",
        }),
        defineField({
            name: "gmailRecipient",
            title: "Contact Form Recipient Address",
            type: "string",
            description: "e.g., info@swiftsupportsolutions.com.np",
        }),
        defineField({
            name: "siteName",
            title: "Site Name",
            type: "string",
        }),
        defineField({
            name: "logo",
            title: "Logo",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "seoTitle",
            title: "Default SEO Title",
            type: "string",
        }),
        defineField({
            name: "seoDescription",
            title: "Default SEO Description",
            type: "text",
        }),
        defineField({
            name: "ogImage",
            title: "Open Graph Image",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "customScripts",
            title: "Third-Party Scripts",
            description: "Paste GTM, FB Pixel, or any custom <script> or <meta> tags here. These will be injected into the <head>.",
            type: "text",
        }),
    ],
});
