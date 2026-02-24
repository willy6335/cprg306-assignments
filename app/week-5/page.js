import NewItem from "./NewItem";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900 flex justify-center items-center p-6">
      <div>
        <h1 className="text-white text-3xl font-bold mb-6 text-center">
          Week 5 Assignment
        </h1>
        <NewItem />
      </div>
    </main>
  );
}