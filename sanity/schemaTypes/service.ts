import { defineField, defineType } from "sanity";

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
            name: "description",
            title: "Description",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "iconIdentifier",
            title: "Icon Identifier",
            type: "string",
            description: "An identifier for the icon to use (e.g., 'web', 'mobile', 'interactive'). Maps to a Lucide icon.",
            options: {
                list: [
                    { title: "Web Development (Layout)", value: "web" },
                    { title: "App Design (Smartphone)", value: "mobile" },
                    { title: "Interactive Experiences (Zap)", value: "interactive" },
                    { title: "Backend (Terminal)", value: "backend" },
                    { title: "Design (Palette)", value: "design" },
                    { title: "Performance (Cpu)", value: "performance" },
                ],
            },
        }),
        defineField({
            name: "order",
            title: "Order",
            type: "number",
        }),
    ],
});
