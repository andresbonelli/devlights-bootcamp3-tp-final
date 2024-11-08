"use server";

import { signOut } from "@/auth";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  console.log("login function");

  const mockUser = {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    role: "customer",
    cart: "1",
  };

  if (email === "john.doe@example.com" && password === "password") {
    return {
      success: true,
      payload: mockUser,
    };
  } else {
    throw new Error("Invalid credentials");
  }
}

export async function logOut() {
  return signOut({ redirectTo: "/login" });
}
