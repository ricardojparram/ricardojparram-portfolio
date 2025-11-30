import { defineField, defineType } from "sanity";

export const profile = defineType({
    name: "profile",
    title: "Profile",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
        }),
        defineField({
            name: "role",
            title: "Role",
            type: "string",
        }),
        defineField({
            name: "location",
            title: "Location",
            type: "string",
        }),
        defineField({
            name: "bio",
            title: "Bio",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "contacts",
            title: "Contacts",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "title",
                            title: "Title",
                            type: "string"
                        }),
                        defineField({
                            name: "link",
                            title: "Link",
                            type: "url",
                            validation: (Rule) => Rule.uri({
                                scheme: ['http', 'https', 'mailto']
                            })
                        }),
                        defineField({
                            name: "type",
                            title: "Type",
                            type: "string",
                            options: {
                                list: [
                                    { title: "Email", value: "email" },
                                    { title: "Github", value: "github" },
                                    { title: "Linkedin", value: "linkedin" },
                                    { title: "CV", value: "cv" },
                                ],
                            },
                        }),
                    ],
                },
            ],
        }),
    ],
});
