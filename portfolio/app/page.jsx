import Navbar from './_components/Navbar.jsx';
import Footer from './_components/Footer';



import dynamic from "next/dynamic"

const Scene2 = dynamic(() => import("./_components/Scene2"), { ssr: false })

export default function Home() {
  return (
    <main className="h-full w-full">
      {/* <Navbar /> */}
      <Scene2  />
      {/* <Footer /> */}
    </main>
  );
}

