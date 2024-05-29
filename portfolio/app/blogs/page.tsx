// Blog list page

import Link from "next/link"
import { getBlogs } from "./fetchers"
import Navbar from "../_components/Navbar"

export default async function BlogsPage() {
  const blogs = await getBlogs()
  // Sort by date

  // The Date() constructor in JavaScript can parse a variety of date string formats. It's generally recommended to use a format that conforms to the ISO 8601 standard, which is YYYY-MM-DD for just the date. -- Github Copilot

  // I have an idea. I could make the date string, use string slicing to separate it, assign each slice to a variable, then reconstruct it in YYY-MM-DD format. Then I could use the Date() constructor to parse it.
  // blogs.sort((a, b) => new Date(b.frontmatter.publishDate).getTime() - new Date(a.frontmatter.publishDate).getTime())

  blogs.sort((a, b) => {
    const aDateParts = a.frontmatter.publishDate.split('-');
    const bDateParts = b.frontmatter.publishDate.split('-');
    const aDate = new Date(`${aDateParts[2]}-${aDateParts[0]}-${aDateParts[1]}`);
    const bDate = new Date(`${bDateParts[2]}-${bDateParts[0]}-${bDateParts[1]}`);
    return bDate.getTime() - aDate.getTime();
  });

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
            <p>::{blog.frontmatter.publishDate}</p>
            {/* <Link href={`/blogs/${blog.slug}`}>Read More</Link> */}
          </article>
        
      ))}
      </section>
    </main>
  )
}
// hi