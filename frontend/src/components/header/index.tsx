import { auth } from "@/auth";
import Link from "next/link";
import Logout from "../logout";
import { UserFromDB } from "@/interfaces/user";

export default async function Header() {
  const session = await auth();
  const user: UserFromDB | null = session?.user ?? null;
  console.log(session, " SESSION");
  return (
    <header className="fixed top-0 w-full z-50">
      <nav
        className="
                    w-full h-16 
                    flex flex-row
                    justify-center place-items-center 
                    gap-5 
                    font-light text-sm
                    shadow-lg
                   "
      >
        <Link href="/">HOME</Link>
        <h1>List</h1>
        <h1>List</h1>
        <h1>List</h1>
        <h1>List</h1>
        {user && <h1>Signed in as {user.firstName}</h1>}
        {session ? <Logout /> : <Link href="/login">Login</Link>}
      </nav>
    </header>
  );
}
