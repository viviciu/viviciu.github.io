// Blog list page

import Link from "next/link"
import Lenis from 'lenis'
import { getBlogs } from "./fetchers"
import Navbar from "../_components/Navbar"
import BlogEntry from "../_components/BlogEntry"



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
      {/* comonents we need:
      Navbar DONE
      Directory title section
      blog headers section
      blog entries section
        -> blog entry component */}
      <Navbar />



      <section className="wraps-the-whole-blog"> 
        {/* DIRECTORY DIV */}
        <section className="
        grid lg:grid-cols-5 gap-5 w-full h-80
        grid-cols-3
        ">
          <h1 className="text-white 
            font-medium 
            lg:text-9xl
            md:text-6xl
            xs:text-6xl
            leading-6 
            tracking-tight
            self-end
            lg:col-start-4
            col-start-2
            pb-16
            md:pb-32
            ">Directory</h1>
        </section>


         {/* BLOG HEADER DIV */}
         <section className="
            grid gap-5 w-full h-8 
            text-white font-serif text-lg
            xs:text-md
            grid-cols-3
            lg:grid-cols-5
            
">
            <h2 className="
              self-end justify-self-end pr-0
              lg:col-start-3
            ">published</h2>
            <h2 className="
              self-end
              xs:pr-0 
            ">entry</h2>
            <p className="
              self-end
              xs:pr-0
            ">desc.</p>
        </section>



         {/* BLOG ENTRY COMPONENTS */}
         <section className="w-full">
          <BlogEntry />
         </section>
      </section>
    </main>
  )
}
// hi