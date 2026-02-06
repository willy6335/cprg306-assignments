export default function Item({ name, quantity, category }) {
    return (
      <li className="bg-gray-800 text-white p-4 rounded-lg shadow">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm text-gray-300">
          Buy {quantity} in <span className="capitalize">{category}</span>
        </p>
      </li>
    );
  }