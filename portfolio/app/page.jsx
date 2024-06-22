import Navbar from './_components/Navbar.jsx';
import Footer from './_components/Footer';
import HorizontalScrollCarousel from './_components/HorizontalScrollCarousel';



import dynamic from "next/dynamic"

const Scene2 = dynamic(() => import("./_components/Scene2"), { ssr: false })
const Scene3 = dynamic(() => import("./_components/Scene3"), { ssr: false })
const Scene = dynamic(() => import("./_components/Scene"), { ssr: false })

export default function Home() {
  return (
    <main className="relative h-screen m-0">
      <Navbar className='absolute top-0 left-0' />
      <Scene3  />
      {/* <HorizontalScrollCarousel /> */}
      <Footer />
    </main>
  );
}

