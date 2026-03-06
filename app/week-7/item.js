export default function Item({ item }) {
  return (
    <li className="bg-orange-100 p-3 my-2 rounded text-black">
      <h2 className="font-bold text-lg text-black">{item.name}</h2>
      <p className="text-black">
        Buy {item.quantity} in {item.category}
      </p>
    </li>
  );
}