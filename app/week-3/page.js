import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="bg-slate-900 min-h-screen text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      <GroceryItemList />
    </main>
  );
}