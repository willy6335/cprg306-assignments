export default function Item({ item, onSelect }) {
  return (
    <li
      onClick={() => onSelect(item)}
      className="p-4 my-2 bg-slate-800 hover:bg-slate-700 rounded-lg cursor-pointer"
    >
      <h2 className="text-xl font-bold text-white">{item.name}</h2>
      <p className="text-slate-300">
        Buy {item.quantity} in {item.category}
      </p>
    </li>
  );
}