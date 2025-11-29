import { defineField, defineType } from "sanity";

export const project = defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "subtitle",
            title: "Subtitle",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "img",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "video",
            title: "Video",
            type: "file",
        }),
        defineField({
            name: "alt",
            title: "Alt Text",
            type: "string",
        }),
        defineField({
            name: "technologies",
            title: "Technologies",
            type: "array",
            of: [{ type: "reference", to: [{ type: "technology" }] }],
        }),
        defineField({
            name: "link",
            title: "Live Link",
            type: "url",
        }),
        defineField({
            name: "github",
            title: "GitHub Link",
            type: "url",
        }),
        defineField({
            name: "mobile",
            title: "Is Mobile Project?",
            type: "boolean",
            initialValue: false,
        }),
    ],
});
