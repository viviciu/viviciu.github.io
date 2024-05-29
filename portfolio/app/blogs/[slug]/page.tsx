// This page is the static page CONTENT for each blog post
// It is generated at build time and is static
import { getBlogBySlug, getAllBlogSlug } from "../fetchers"
import Link from "next/link"

export async function generateStaticParams() {
  return getAllBlogSlug()
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string }
}) {
  const blog = await getBlogBySlug(params.slug)
  return (
    // Blog Post itself
    // Helpful tailwind css typography reference github: https://github.com/tailwindlabs/tailwindcss-typography
    <main className="prose  mt-8 mx-auto px-5 max-w-2xl">
      <article className=' prose-headings:text-white
      prose-p:text-neutral-400
      prose-ul:text-neutral-400
      prose-blockquote:text-neutral-400
      prose-code:text-neutral-400
      prose-pre:bg-white prose-pre:rounded-xl 
      prose-a:text-yellow-200 prose-a:font-bold
      prose-em:text-white
      prose-strong:text-white
      prose-p:font-medium
      prose-ul:font-medium'>
      <p className="prose-p:text-neutral-400">date created:: {blog.frontmatter.publishDate}</p>
        {blog.content}
      </article>
      {/* <Link> component does not get prose applied to it. It wont inherit. I guess because it isnt mdx content. */}
      <Link className="hover:text-white hover:underline text-neutral-400 font-medium" href="/blogs">Back to Blogs</Link>
    </main>
  )
}
