import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

export default function PlayLayout({ children }) {
  // Create any shared layout or styles here
  return (
    <section>
      {children}
      <Footer />
    </section>
  );
}
