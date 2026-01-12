import { defineType, defineField } from "sanity";

export const service = defineType({
    name: "service",
    title: "Service",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title", maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "icon",
            title: "Icon (Lucide name)",
            type: "string",
            description: "e.g., LineChart, Shield, Landmark",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            rows: 4,
        }),
        defineField({
            name: "content",
            title: "Detailed Content",
            type: "array",
            of: [{ type: "block" }],
        }),
    ],
});
