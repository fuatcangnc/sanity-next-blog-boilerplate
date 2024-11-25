import { client } from "@/sanity/lib/client"
import { getPost } from "@/sanity/queries/posts"
import SinglePost from "@/components/shared/single-post"
import { notFound } from "next/navigation"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params
  const post = await client.fetch(getPost, { slug })

  if (!post) {
    notFound()
  }

  return <SinglePost post={post} />
} 