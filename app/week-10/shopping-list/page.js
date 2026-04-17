"use client";

import { useEffect, useState } from "react";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";
import Link from "next/link";
import { useUserAuth } from "@/app/contexts/AuthContext";
import { getItems, addItem } from "./_services/shopping-list-service";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const loadItems = async () => {
    const itemsData = await getItems(user.uid);
    setItems(itemsData);
  };

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  const handleAddItem = async (item) => {
    const id = await addItem(user.uid, item);
    setItems([...items, { id, ...item }]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.split(",")[0].trim();
    setSelectedItemName(cleanedName);
  };

  if (!user) {
    return (
      <main className="p-6">
        <p>
          You must be logged in to view the shopping list.{" "}
          <Link href="/week-9" className="text-blue-600 underline">
            Go to login
          </Link>
        </p>
      </main>
    );
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>

      <NewItem onAddItem={handleAddItem} />

      <div className="flex gap-8 mt-6">
        <ItemList items={items} onItemSelect={handleItemSelect} />
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}