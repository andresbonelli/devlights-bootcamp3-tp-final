"use client";

import { login } from "@/actions/user";
import { FormEvent, useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    await login(formData);
  }
  return (
    <form
      className="flex flex-col gap-2 items-center border"
      onSubmit={(e) => handleSubmit(e)}
    >
      <p className="text-red-500">{error}</p>
      <label>
        Email
        <input required name="email" type="email" />
      </label>
      <label>
        Password
        <input required name="password" type="password" />
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
}
