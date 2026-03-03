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
            name: "startDate",
            title: "Start Date",
            type: "date",
            options: { dateFormat: "YYYY-MM" },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "endDate",
            title: "End Date",
            type: "date",
            options: { dateFormat: "YYYY-MM" },
            description: "Leave empty if this is your current position.",
            hidden: ({ document }) => !!document?.active,
        }),
        defineField({
            name: "date",
            title: "Date Label",
            type: "string",
            description: "Display label shown on the card (e.g. 'Jan 2023 – Present'). Auto-filled if left empty.",
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
