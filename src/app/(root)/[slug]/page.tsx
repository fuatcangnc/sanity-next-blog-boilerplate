import { client } from "@/sanity/lib/client"
import { getPost } from "@/sanity/queries/posts"
import { getCategory } from "@/sanity/queries/categories"
import SinglePost from "@/components/shared/single-post"
import SingleCategory from "@/components/shared/single-category"
import { notFound } from "next/navigation"
import { Metadata } from "next"

interface Props {
  params: Promise<{
    slug: string
  }>
}

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog yazıları ve kategorileri",
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params
  const { slug } = resolvedParams

  try {
    // Önce post olarak kontrol et
    const post = await client.fetch(getPost, { slug })
    if (post) {
      metadata.title = `${post.title}`
      metadata.description = post.excerpt
      return <SinglePost post={post} />
    }

    // Post bulunamazsa kategori olarak kontrol et
    const category = await client.fetch(getCategory, { slug })
    if (category) {
      metadata.title = `${category.title}`
      metadata.description = category.description || `${category.title} kategorisindeki yazılar`
      return <SingleCategory category={category} />
    }

    // Hiçbiri bulunamazsa 404
    notFound()
  } catch (error) {
    console.error('Error:', error)
    notFound()
  }
} 