import React from 'react'
import Link from 'next/link'
import { getBlogs } from "../blogs/fetchers"

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

function BlogEntry() {
  return (
    <div>
        {blogs.map((blog, i) => (
            <div key={blog.slug} className='
            grid grid-cols-3 lg:grid-cols-5 my-5'>
                <article key={blog.slug} className="
                col-span-full
                grid lg:grid-cols-5 gap-5 w-full
                xs:grid-cols-3
                xs:text-sm
                ">

                        <p className='
                        lg:col-start-3
                        md:text-lg
                        xs:text-sm
                        justify-self-end'>::{blog.frontmatter.publishDate}</p>
                        <Link
                        href={`/blogs/${blog.slug}`}>
                            <h1 className="
                            md:text-lg
                            xs:text-sm">{blog.frontmatter.title}</h1>
                        </Link>

                    {/* DESC. SECTION */}
                    <p className='
                        md:text-lg
                        xs:text-sm'>{blog.frontmatter.author}</p>

                    {/* BREAK LINE */}
                    

                </article>
                <hr className='h-px mt-0.5 bg-gray-200 border-0 dark:bg-gray-700
                col-end-4 col-span-2
                lg:col-end-6 lg:col-span-2' />
            </div>
        ))}
    </div>
  )
}

export default BlogEntry