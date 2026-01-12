import { defineType, defineField } from "sanity";

export const page = defineType({
    name: "page",
    title: "Page",
    type: "document",
    fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title", maxLength: 96 },
        }),
        defineField({
            name: "pageBuilder",
            title: "Page Builder",
            type: "array",
            of: [
                { type: "blockHero" },
                { type: "blockServiceGrid" },
                { type: "blockAbout" },
                { type: "blockStats" },
                { type: "blockWhyChooseUs" },
                { type: "blockProcess" },
                { type: "blockTeam" },
                { type: "blockFAQ" },
                { type: "blockLogoWall" },
                { type: "blockContact" },
                { type: "blockTestimonials" },
            ],
        }),
    ],
});
