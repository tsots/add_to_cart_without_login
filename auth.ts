import nextAuth, { NextAuthConfig } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

const authConfig: NextAuthConfig = {
  providers: [
    CredentialProvider({
      credentials: {},
      async authorize(credentials, request) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (email === "tsotsi@email.com" && password === "1234") {
          return { email, id: "123", name: "Tsotetsi Mosala" };
        }
        return null;
      },
    }),
  ],
};

export const {
  auth,
  handlers: { GET, POST },
} = nextAuth(authConfig);
