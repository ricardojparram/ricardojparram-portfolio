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
            name: "contacts",
            title: "Contacts",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "title", type: "string" }),
                        defineField({ name: "link", type: "url" }),
                        defineField({ name: "type", type: "string" }), // e.g. 'github', 'linkedin'
                    ],
                },
            ],
        }),
    ],
});
