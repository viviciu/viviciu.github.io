import Navbar from './_components/Navbar.jsx';
import Footer from './_components/Footer';
import HorizontalScrollCarousel from './_components/HorizontalScrollCarousel';
import App from './_components/monitors/src/App.js'
import dynamic from "next/dynamic"

// const Scene = dynamic(() => import("./_components/_unusedComponents/Scene.jsx"), { ssr: false })


export default function Home() {
  return (
    <main className="relative h-screen">
      {/* <Navbar className='z-10' /> */}
      {/* <Scene /> */}
      <App />
      <HorizontalScrollCarousel />
      <Footer />
    </main>
  );
}

