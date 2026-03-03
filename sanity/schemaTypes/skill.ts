import { defineField, defineType } from "sanity";

export const skill = defineType({
    name: "skill",
    title: "Skill",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "string",
            description: "Short list of tools/technologies (e.g. 'React, Astro, Tailwind').",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "iconIdentifier",
            title: "Icon",
            type: "string",
            description: "Identifier that maps to a built-in icon.",
            options: {
                list: [
                    { title: "Code (Frontend)", value: "code" },
                    { title: "Palette (Design)", value: "palette" },
                    { title: "Terminal (Backend)", value: "terminal" },
                    { title: "CPU (Mobile)", value: "cpu" },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "order",
            title: "Order",
            type: "number",
            description: "Display order (lower = first).",
        }),
    ],
});
