// import { Inter } from "next/font/google";
"use client"
import "./globals.css";
import { useState, useEffect } from "react";
import Navbar from "./_components/Navbar";
import Cursor from "./_components/Cursor";
import Head from "next/head"
import { Analytics } from "@vercel/analytics/react";
import AboutOverlay from "./_components/AboutOverlay";

// const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setIsAboutOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/cube.svg" />
        <link rel="apple-touch-icon" type="image/svg+xml" href="/cube.svg" />
      </Head>
      <head>
        <title>staicu, viviana</title>
      </head>
      <body className="">
        {/* Must set cursor: none; in Globals css to make cursor component work */}
        {/* <Cursor /> */}
        <Navbar onAboutClick={() => setIsAboutOpen(true)} />
        {children}
        <AboutOverlay isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
        <Analytics />
      </body>
    </html>
  );
}
