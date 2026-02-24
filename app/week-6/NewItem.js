"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();
  
    const item = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      quantity,
      category,
    };
  
    onAddItem(item);
  
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      <div>
        <label className="block font-semibold mb-1">Item Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Enter item name"
        />
      </div>

      <div className="flex gap-4 items-end">
        <div className="flex-1">
          <label className="block font-semibold mb-1">Quantity</label>
          <input
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="flex-1">
          <label className="block font-semibold mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
        >
          +
        </button>
      </div>
    </form>
  );
}