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
      <section className="grid grid-cols-5 gap-4 text-3xl mt-10 px-20 text-white">
        <h2>title</h2>
        <h2>author</h2>
        <h2>date</h2>
      </section>
      <hr className="border-1 border-neutral-700 mt-2 w-1/2"/>
      <section className="flex-col text-3xl mt-10 px-20">
      {blogs.map((blog, i) => (
          <article key={blog.slug} className="max-h-screen text-base grid grid-cols-5 gap-x-4">
            <Link
            href={`/blogs/${blog.slug}`}>
              <h1 className>
                {blog.frontmatter.title}
              </h1>
            </Link>
            
            <p>{blog.frontmatter.author}</p>
            <p>{blog.frontmatter.publishDate}</p>
            {/* <Link href={`/blogs/${blog.slug}`}>Read More</Link> */}
          </article>
        
      ))}
      </section>
    </main>
  )
}
// hi