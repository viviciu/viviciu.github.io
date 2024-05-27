import Navbar from "../_components/Navbar"
import Blog1 from "./blog1.mdx"
import Blog2 from "./page2.mdx"

export default function Blog() {
    return (
        <main className="min-h-screen justify-between p-2">
            <Navbar />
            <h2>this is my Blog</h2>
            <div className="prose prose-slate">
            <Blog1 />
            <Blog2 />
                </div>
            
        </main>

    )
}