import NextAuth, { NextAuthOption } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialProvider({
      type: "credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "Enter Email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "Enter password",
        },
      },
      authorize(credentials, req) {
        const { email, password } = credentials;
        if (email !== "admin@gmail.com" || password !== "12345") {
          return null;
        }
        return { id: 1, name: "admin" };
      },
    }),
  ],
  pages: { signIn: "/Auth/login" },
};

export default NextAuth(authOptions);
