// Blog list page

import Link from "next/link"
import { getBlogs } from "./fetchers"
import Navbar from "../_components/Navbar"

export default async function BlogsPage() {
  const blogs = await getBlogs()
  // sort by date
  blogs.sort((a, b) => new Date(b.frontmatter.publishDate) - new Date(a.frontmatter.publishDate))
  return (
    <main>
      <Navbar />
      {blogs.map((blog, i) => (
        <div className="flex justify-center max-h-screen text-base">
        <article key={i} className="grid grid-cols-4">
          <Link
          href={`/blogs/${blog.slug}`}>
            <h1 className="hover:text-gray-400 hover:underlinee">
              {blog.frontmatter.title}
            </h1>
          </Link>
          
          <p>{blog.frontmatter.author}</p>
          <p>{blog.frontmatter.publishDate}</p>
          {/* <Link href={`/blogs/${blog.slug}`}>Read More</Link> */}
        </article>
        </div>
      ))}
    </main>
  )
}
