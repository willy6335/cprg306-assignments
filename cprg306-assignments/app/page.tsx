import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">CPRG 306 Assignments</h1>

      <ul className="list-disc pl-6 space-y-3 text-lg">
        <li>
          <Link className="text-blue-500 hover:underline" href="/week-2">
            Week 2
          </Link>
        </li>

        <li>
          <Link className="text-blue-500 hover:underline" href="/week-3">
            Week 3
          </Link>
        </li>

        <li>
          <Link className="text-blue-500 hover:underline" href="/week-4">
            Week 4
          </Link>
        </li>

        <li>
          <Link className="text-blue-500 hover:underline" href="/week-5">
            Week 5
          </Link>
        </li>
        <li>
          <Link className="text-blue-500 hover:underline" href="/week-6">
         Week 6
          </Link>
</li>
      </ul>
    </main>
  );
}