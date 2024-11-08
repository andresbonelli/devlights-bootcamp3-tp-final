import { auth } from "@/auth";
import Logout from "@/components/logout";
import { UserFromDB } from "@/interfaces/user";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  console.log(session, " SESSION");
  const user: UserFromDB | null = session?.user ?? null;

  return (
    <div className="flex flex-col justify-start">
      <main className="flex flex-col h-screen justify-around items-center gap-5">
        {session?.user ? (
          <>
            {session && (
              <p>
                Signed in as {user?.firstName} {user?.lastName}
              </p>
            )}
            <Logout />
          </>
        ) : (
          <Link href="/login">LOGIN</Link>
        )}

        <div className="grid grid-cols-2 gap-8">
          <h1 className="text-5xl font-ultralight">Ultralight</h1>
          <h1 className="text-5xl font-ultralight-italic">Ultralight Italic</h1>
          <h1 className="text-5xl font-thin">Thin</h1>
          <h1 className="text-5xl font-thin-italic">Thin Italic</h1>
          <h1 className="text-5xl font-light">Light</h1>
          <h1 className="text-5xl font-light-italic">Light Italic</h1>
          <h1 className="text-5xl font-regular">Regular</h1>
          <h1 className="text-5xl font-regular-italic">Regular Italic</h1>
          <h1 className="text-5xl font-medium">Medium</h1>
          <h1 className="text-5xl font-medium-italic">Medium Italic</h1>
          <h1 className="text-5xl font-semibold">Semibold</h1>
          <h1 className="text-5xl font-semibold-italic">Semibold Italic</h1>
          <h1 className="text-5xl font-bold">Bold</h1>
          <h1 className="text-5xl font-bold-italic">Bold Italic</h1>
          <h1 className="text-5xl font-heavy">Heavy</h1>
          <h1 className="text-5xl font-heavy-italic">Heavy Italic</h1>
          <h1 className="text-5xl font-black">Black</h1>
          <h1 className="text-5xl font-black-italic">Black Italic</h1>
        </div>
      </main>
    </div>
  );
}
