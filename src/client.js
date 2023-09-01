import sanityClient, { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  // projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  projectId: "gs01i64e",
  dataset: "production",
  apiVersion: "2023-08-31",
  useCdn: false,
  // ignoreBrowserTokenWarning: true,
  token:
    "skOgggEVupKA1XdEjoE2sKuGSjhUmJ7hs03kFvVLYrBcHNPdXMyeHr5hKDyUJSNs79DLaXwGx30kKb2PRJTGXBumdT5NzNAwIJSoQY6V06UQ9zpvYDY3NFUiJqQ4SRFyk0hKNq0thqgFgUtw0cg4Co1v3Ug2yB2Y3NwkSW8ErExxRlP7WjIe",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
