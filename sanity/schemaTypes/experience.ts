import { defineField, defineType } from "sanity";

export const experience = defineType({
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        defineField({
            name: "role",
            title: "Role",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "company",
            title: "Company",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "date",
            title: "Date",
            type: "string",
        }),
        defineField({
            name: "info",
            title: "Information",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "active",
            title: "Is Active?",
            type: "boolean",
            initialValue: false,
        }),
    ],
});
