import NextAuth, { AuthError } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginResponse, UserFromDB } from "./interfaces/user";
import { login } from "./actions/auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  secret: process.env.JWT_SECRET || "session_jwt_secret",
  providers: [
    Credentials({
      name: "Credentials",

      async authorize(credentials) {
        console.log("credentials", credentials);
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        try {
          const result: LoginResponse = await login({
            email,
            password,
          });

          if (result.success) {
            return result.payload;
          } else {
            throw new Error("Failed to authorize");
          }
        } catch (error) {
          if (error instanceof Error) {
            throw new AuthError(error.message);
          } else {
            throw new AuthError("An unexpected error occurred");
          }
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.firstName = (user as LoginResponse["payload"]).firstName;
        token.lastName = (user as LoginResponse["payload"]).lastName;
        token.role = (user as LoginResponse["payload"]).role;
        token.cartId = (user as LoginResponse["payload"]).cart;
      }
      return token;
    },
    async session({ session, token }) {
      const user = session.user as UserFromDB;

      user.id = token.id as string;
      user.firstName = token.firstName as string;
      user.lastName = token.lastName as string;
      user.role = token.role as string;
      user.cart = token.cartId as string;

      return session;
    },
  },
});
