import { createCollection, eq, useLiveQuery } from "@tanstack/react-db";
import { localStorageCollectionOptions } from "@tanstack/react-db";
import { createClientOnlyFn } from "@tanstack/react-start";
import { z } from "zod";

// Define schema
export const itemSchema = z.object({
  slug: z.string(),
  name: z.string(),
  modified: z.number(),
});

export type Item = z.infer<typeof itemSchema>;

const itemCollection = createCollection(
  localStorageCollectionOptions({
    storageKey: "items",
    getKey: (item) => item.slug,
    schema: itemSchema,
  }),
);

export { itemCollection };

export const listContains = createClientOnlyFn((slug: string) => {
  const { data } = useLiveQuery((q) =>
    q
      .from({ item: itemCollection })
      .where(({ item }) => eq(item.slug, slug))
      .findOne(),
  );
  if (data != undefined) return true;
  return false;
});

export const toggleList = createClientOnlyFn((slug: string, name: string) => {
  if (itemCollection.has(slug)) {
    itemCollection.delete(slug);
  } else {
    itemCollection.insert({ slug, modified: Date.now(), name });
  }
});
