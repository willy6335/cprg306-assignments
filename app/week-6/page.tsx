"use client";

import { useState } from "react";
import itemsData from "./items.json";
import NewItem from "./NewItem";
import ItemList from "./item-list";

export default function Page() {
  const [items, setItems] = useState(itemsData); 

  function handleAddItem(newItem: any) {
    setItems([...items, newItem]);
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>

      <NewItem onAddItem={handleAddItem} />

      <ItemList items={items} />
    </main>
  );
}