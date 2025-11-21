import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "Fitness 101",
  description: "Sample website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
      </Head>
      <body>
        <StoreProvider>
          {children}
          <Footer />
          <Cart />
        </StoreProvider>
      </body>
    </html>
  );
}
