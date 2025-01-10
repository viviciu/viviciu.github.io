// import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./_components/SmoothScrolling.jsx";
import Navbar from "./_components/Navbar";
import Cursor from "./_components/Cursor";
import Head from "next/head"

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "viviana staicu",
  description: "viviana staicu design portfolio. hi i see you hit the inspect tool",
  // icons: {
  //   icon: ["/favicon.ico?v-1"],
  //   apple: ["/apple-touch-icon.png?v=4"],
  //   shortcut: ['/apple-touch-icon-png']
  // },
  // manifest: '/site.webmanifest'
};

export default function RootLayout({ children }) {
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
        <Cursor />
        {/* <SmoothScrolling> */}
          <Navbar />
          {children}
        {/* </SmoothScrolling> */}
      </body>
    </html>
  );
}
