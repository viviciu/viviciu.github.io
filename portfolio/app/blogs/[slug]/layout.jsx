// Apestien didn't use this file.
// Next.js suggested to use this file to wrap the content of the MDX file.

import Navbar from "../../_components/Navbar";

export default function MdxLayout({ children }) {
    // Create any shared layout or styles here
    return <div>
      <Navbar />
        {children}
      </div>
  }