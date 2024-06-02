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
      <section className="flex flex-col items-start">
        {/* DIRECTORY DIV */}
        <section className="grid grid-cols-5 w-full pt-80 pb-20">
          <div></div>
          <div></div>
          <div></div>
          {/* NOTE ON GRIDS:  child divs will each take up one column, regardless of their content. Thus, we can't highlight the whole box of 'directory', since its text size and thus width takes up more than 1 column.*/}
          <div className="inline-block h-9">
            {/* recall text-9xl is reset in tailwind.config */}
            <h1 className="text-white 
            font-medium 
            text-9xl
            leading-6 
            tracking-tight">Directory</h1>
          </div>
          <div></div>
        </section>
         {/* BLOG HEADER DIV */}
         <section className="bg-blog-headerBlock flex justify-end gap-x-64 text-lg w-full items-center h-8">
          <div className="flex w-40 gap-x-9 text-white font-serif ">
            <h2>published</h2>
            <h2>entry</h2>
          </div>
          <div className="text-white font-serif">desc.</div>
         </section>
         {/* BLOG ENTRY COMPONENTS */}
         <section className="flex flex-col justify-end items-end w-full ">
          <BlogEntry />
         </section>
      </section>
    </main>
  )
}
// hi