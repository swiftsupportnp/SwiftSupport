import { defineType, defineField } from "sanity";

// ... existing blocks ...

// 1. Corporate Hero
export const blockHero = defineType({
    name: "blockHero",
    title: "Corporate Hero",
    type: "object",
    fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subheading", title: "Subheading", type: "text" }),
        defineField({ name: "primaryCTA", title: "Primary CTA Label", type: "string" }),
        defineField({ name: "secondaryCTA", title: "Secondary CTA Label", type: "string" }),
        defineField({ name: "backgroundImage", title: "Background Image", type: "image", options: { hotspot: true } }),
    ],
});

// 2. Service Grid
export const blockServiceGrid = defineType({
    name: "blockServiceGrid",
    title: "Service Grid",
    type: "object",
    fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
    ],
});

// 3. About Section
export const blockAbout = defineType({
    name: "blockAbout",
    title: "About / Overview",
    type: "object",
    fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "content", title: "Content", type: "array", of: [{ type: "block" }] }),
        defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    ],
});

// 4. Stats / Impact
export const blockStats = defineType({
    name: "blockStats",
    title: "Stats / Impact",
    type: "object",
    fields: [
        defineField({
            name: "stats",
            title: "Stats",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "value", title: "Value", type: "string" },
                        { name: "label", title: "Label", type: "string" },
                    ],
                },
            ],
        }),
    ],
});

// 5. Why Choose Us (Bento Grid)
export const blockWhyChooseUs = defineType({
    name: "blockWhyChooseUs",
    title: "Why Choose Us (Bento)",
    type: "object",
    fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({
            name: "items",
            title: "Bento Items",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "title", title: "Title", type: "string" },
                        { name: "description", title: "Description", type: "text" },
                        { name: "icon", title: "Icon (Lucide)", type: "string" },
                    ],
                },
            ],
        }),
    ],
});

// 6. Process Workflow
export const blockProcess = defineType({
    name: "blockProcess",
    title: "Process Workflow",
    type: "object",
    fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({
            name: "steps",
            title: "Steps",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "stepNumber", title: "Step Number", type: "string" },
                        { name: "title", title: "Title", type: "string" },
                        { name: "description", title: "Description", type: "text" },
                    ],
                },
            ],
        }),
    ],
});

// 7. Team / Experts
export const blockTeam = defineType({
    name: "blockTeam",
    title: "Team / Experts",
    type: "object",
    fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({
            name: "members",
            title: "Members",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "name", title: "Name", type: "string" },
                        { name: "role", title: "Role", type: "string" },
                        { name: "image", title: "Image", type: "image", options: { hotspot: true } },
                    ],
                },
            ],
        }),
    ],
});

// 8. FAQ
export const blockFAQ = defineType({
    name: "blockFAQ",
    title: "FAQ",
    type: "object",
    fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({
            name: "items",
            title: "FAQ Items",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "question", title: "Question", type: "string" },
                        { name: "answer", title: "Answer", type: "text" },
                    ],
                },
            ],
        }),
    ],
});

// 9. Logo Wall
export const blockLogoWall = defineType({
    name: "blockLogoWall",
    title: "Client Logo Wall",
    type: "object",
    fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({
            name: "logos",
            title: "Logos",
            type: "array",
            of: [{ type: "image", options: { hotspot: true } }],
        }),
    ],
});

// 10. Contact Section
export const blockContact = defineType({
    name: "blockContact",
    title: "Contact Section",
    type: "object",
    fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
    ],
});

// NEW: Testimonials Block
export const blockTestimonials = defineType({
    name: "blockTestimonials",
    title: "Testimonials Slider",
    type: "object",
    fields: [
        defineField({ name: "title", title: "Title", type: "string", initialValue: "What Our Clients Say" }),
        defineField({
            name: "testimonials",
            title: "Select Testimonials",
            type: "array",
            of: [{ type: "reference", to: [{ type: "testimonial" }] }],
        }),
    ],
});
