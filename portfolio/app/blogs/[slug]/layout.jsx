// Apestien didn't use this file.
// Next.js suggested to use this file to wrap the content of the MDX file.

import Footer from "../../_components/Footer";
import Navbar from "../../_components/Navbar";
import Link from 'next/link'

export default function MdxLayout({ children }) {
    // Create any shared layout or styles here
    return <div>
      <Navbar />
        {children}
        <Link className="hover:text-white hover:underline mt-8 mx-auto px-5 max-w-2xl" href="/blogs">Back to Blogs</Link>
      <Footer />
      </div>
  }