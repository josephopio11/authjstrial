import db from "@/lib/database";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const users = await db.user.findMany();
  return (
    <main className="flex flex-col items-center gap-6 px-3 py-10">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <h1 className="text-center text-4xl font-bold">Next-Auth V5</h1>
      <h2 className="text-center text-2xl font-semibold">Users</h2>
      <ul>
        {users.map((user) => (
          <Link
            href={`/users/${user.id}`}
            key={user.id}
            className={`hover:underline`}
          >
            <li className="m-2 bg-emerald-100 p-4">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}
