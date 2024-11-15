import Link from "next/link";
import DividerLine from "../shapes/divider-line";

export default function Footer() {
  return (
    <footer>
      <DividerLine color="gray-500" />
      <div className="w-full flex flex-col gap-2 sm:flex-row justify-between items-center ">
        <p>
          Copyright © {new Date(Date.now()).getFullYear()} - All rights reserved
        </p>
        <nav>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of use</Link>
          <Link href="#">Sales</Link>
          <Link href="#">Legal</Link>
          <Link href="#">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
