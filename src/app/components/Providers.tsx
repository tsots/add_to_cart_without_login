"use client";
import { FC, ReactNode } from "react";
import CartProvider from "../context/CartProvider";
import { SessionProvider } from "next-auth/react";

interface Props {
  children: ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return (
    <SessionProvider>
      <CartProvider>{children}</CartProvider>
    </SessionProvider>
  );
};

export default Providers;
