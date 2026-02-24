"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button
          className={`px-3 py-1 border rounded ${
            sortBy === "name" ? "bg-gray-300" : ""
          }`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>

        <button
          className={`px-3 py-1 border rounded ${
            sortBy === "category" ? "bg-gray-300" : ""
          }`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>

      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}