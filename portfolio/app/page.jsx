import Navbar from './_components/Navbar.jsx';
import Footer from './_components/Footer';
import Head from 'next/head.js';
import { metadata } from './layout.js';


export default function Home() {
  return (
    <main>
      <Head>
        <link rel="icon" type="image/svg+xml" href="portfolio/public/assets/images/apple.svg" />
        <title>{metadata.title}</title>
      </Head>
      <Navbar />
      <Footer />
    </main>
  );
}

