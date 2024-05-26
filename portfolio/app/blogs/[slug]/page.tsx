// This page is the static page CONTENT for each blog post
// It is generated at build time and is static

import { getBlogBySlug, getAllBlogSlug } from "../fetchers"

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
    <main className="">
      <article>{blog.content}</article>
    </main>
  )
}
