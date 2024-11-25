import { client } from "@/sanity/lib/client"
import { getSliderPosts } from "@/sanity/queries/posts"
import Image from "next/image"
import Link from "next/link"

export default async function SliderPosts() {
  const posts = await client.fetch(getSliderPosts)

  if (!posts?.length) return null

  return (
    <section className="container py-8">
      <div className="relative aspect-[21/9] overflow-hidden rounded-lg">
        {posts.map((post: any) => (
          <Link key={post._id} href={`/${post.slug.current}`}>
            <div className="relative h-full">
              <Image
                src={post.mainImage}
                alt={post.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <h2 className="text-3xl font-bold mb-2">{post.title}</h2>
                <p className="text-lg line-clamp-2">{post.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}