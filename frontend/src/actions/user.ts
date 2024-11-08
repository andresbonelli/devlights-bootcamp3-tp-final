"use server";

import { signIn } from "@/auth";

export async function login(formData: FormData) {
  console.log("login function");
  const email = formData.get("email");
  const password = formData.get("password");

  await signIn("credentials", {
    redirectTo: "/",
    email,
    password,
  });
}
