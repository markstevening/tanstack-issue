"use client";
import { Heart } from "lucide-react";
import { toggleList, listContains } from "@/db-collections/local";
import { ClientOnly } from "@tanstack/react-router";

export function AddToListButton({
  item,
}: {
  item: { slug: string; name: string };
}) {
  const inList = listContains(item.slug);
  return (
    <ClientOnly>
      <button
        className='m-1 p-2 border'
        onClick={(e) => {
          e.preventDefault();
          toggleList(item.slug, item.name);
        }}
      >
        <Heart className='mr-1 w-4 h-4 inline' fill={inList ? "red" : "none"} />
        {inList ? "Remove" : "Add"} {item.name}
      </button>
    </ClientOnly>
  );
}
