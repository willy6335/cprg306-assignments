"use client";

import { useState } from "react";
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";
import { NOTIMP } from "dns";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item: any) => {
    setItems([...items, item]);
  };

  const handleItemSelect = (item: any) => {
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .toLowerCase();

    setSelectedItemName(cleanedName);
  };

  return (
    <main className="p-6 bg-slate-900 min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-6">Shopping List</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}