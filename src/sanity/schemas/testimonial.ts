import { defineType, defineField } from "sanity";

export const testimonial = defineType({
    name: "testimonial",
    title: "Testimonial",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Client Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "role",
            title: "Client Role / Company",
            type: "string",
        }),
        defineField({
            name: "image",
            title: "Client Image",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "rating",
            title: "Rating (1-5)",
            type: "number",
            initialValue: 5,
            validation: (Rule) => Rule.min(1).max(5).integer(),
        }),
        defineField({
            name: "content",
            title: "Testimonial Content",
            type: "text",
            rows: 4,
            validation: (Rule) => Rule.required(),
        }),
    ],
});
