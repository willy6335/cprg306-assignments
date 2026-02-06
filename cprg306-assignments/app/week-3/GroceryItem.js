export default function GroceryItem({ name, quantity, category }) {
    return (
      <li className="bg-slate-800 p-4 rounded-lg shadow-md mb-3">
        <p className="text-lg font-bold">{name}</p>
        <p className="text-sm text-slate-300">Quantity: {quantity}</p>
        <p className="text-sm text-slate-400 capitalize">Category: {category}</p>
      </li>
    );
  }