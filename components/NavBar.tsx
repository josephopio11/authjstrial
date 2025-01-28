import { signIn } from "@/auth";
import getSession from "@/lib/getSession";
import Link from "next/link";
import { Button } from "./ui/button";
import UserButton from "./UserButton";

export default async function NavBar() {
  // Server side session fetching
  // requires server component and must be async
  const session = await getSession();
  const user = session?.user;

  return (
    <header className="sticky top-0 z-50 px-3 shadow-lg">
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-3">
        <Link href="/" className="font-bold">
          <h1 className="text-2xl font-bold">Next.js</h1>
        </Link>
        {!user ? <SignInButton /> : <UserButton user={user} />}
      </nav>
    </header>
  );
}

function SignInButton() {
  //This works server side
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <Button type="submit">Sign In</Button>
    </form>
  );
}
