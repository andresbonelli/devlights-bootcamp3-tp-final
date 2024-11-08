"use client";

import { logOut } from "@/actions/auth";

export default function Logout() {
  return (
    <div>
      <button onClick={() => logOut()}>Sign Out</button>
    </div>
  );
}
