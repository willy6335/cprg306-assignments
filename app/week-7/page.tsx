"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import itemsData from "./items.json";

export default function Week7Page() {
  const [items, setItems] = useState<any[]>(itemsData);

  function handleAddItem(item: {
    id: string;
    name: string;
    quantity: number;
    category: string;
  }) {
    setItems([...items, item]);
  }

  return (
    <main className="p-5">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <div className="mt-6">
        <ItemList items={items} />
      </div>
    </main>
  );
}