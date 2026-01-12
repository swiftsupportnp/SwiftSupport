import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./src/sanity/schemas";

export default defineConfig({
    name: "default",
    title: "MedSpa Theme",

    projectId: "your-project-id", // User will need to replace this
    dataset: "production",

    basePath: "/studio",

    plugins: [deskTool()],

    schema: {
        types: schemaTypes,
    },
});
