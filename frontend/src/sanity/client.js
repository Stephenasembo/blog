import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "44wpwbl4",
  dataset: "development",
  apiVersion: "2024-01-01",
  useCdn: false,
});
