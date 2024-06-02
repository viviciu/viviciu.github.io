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
    <div className=''>
        {blogs.map((blog, i) => (
            <div key={blog.slug} className='h-fit'>
                <article key={blog.slug} className="flex h-0 text-lg gap-x-60">
                    {/* PUBLISHED AND ENTRY LINKS GROUPED */}
                    <div className='flex gap-x-8'>
                        <p>::{blog.frontmatter.publishDate}</p>
                        <Link
                        href={`/blogs/${blog.slug}`}>
                            <h1 className>{blog.frontmatter.title}</h1>
                        </Link>
                    </div>
                    {/* DESC. SECTION */}
                    <p>{blog.frontmatter.author}</p>
                </article>
                <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
            </div>
        ))}
        
    </div>
  )
}

export default BlogEntry