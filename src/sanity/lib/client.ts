import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "r16othfc", // Replace with your Sanity project ID
  dataset: "production",        // Replace with your dataset name (e.g., "production")
  apiVersion: "2025-01-15",     // Use the latest API version (or the one matching your schema)
  useCdn: false,                // `true` for production, `false` for real-time updates
});
