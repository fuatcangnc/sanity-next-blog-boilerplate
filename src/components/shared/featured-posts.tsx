import { client } from "@/sanity/lib/client"
import { getFeaturedPosts } from "@/sanity/queries/posts"
import Image from "next/image"
import Link from "next/link"

export default async function FeaturedPosts() {
  const posts = await client.fetch(getFeaturedPosts)

  if (!posts?.length) return null

  return (
    <section className="container py-8">
      <h2 className="text-3xl font-bold mb-6">Öne Çıkan Yazılar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: any) => (
          <article key={post._id} className="group">
            <Link href={`/${post.slug.current}`}>
              <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
                <Image
                  src={post.mainImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
                {post.title}
              </h3>
              <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}