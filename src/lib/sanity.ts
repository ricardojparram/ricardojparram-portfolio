
import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: import.meta.env.PUBLIC_SANITY_DATASET,
    apiVersion: "2024-03-20",
    useCdn: true,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}
