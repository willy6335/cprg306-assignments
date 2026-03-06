"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...items];

  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <div>
      <div className="mb-4">
        <span className="mr-2 font-semibold">Sort By:</span>

        <button
          onClick={() => setSortBy("name")}
          className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
        >
          Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Category
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}