import { client } from "@/sanity/lib/client"
import { getPostsByCategory } from "@/sanity/queries/posts"
import Image from "next/image"
import Link from "next/link"

interface Category {
  _id: string
  title: string
  slug: string
  showOnHomepage: boolean
  posts: Array<{
    _id: string
    title: string
    slug: string
    excerpt: string
    mainImage: string
  }>
}

export default async function CategoryPosts() {
  const categories = await client.fetch<Category[]>(getPostsByCategory)

  // Ana sayfada gösterilecek kategorileri filtrele
  const homepageCategories = categories?.filter(category => category.showOnHomepage)

  if (!homepageCategories?.length) return null

  return (
    <section className="container py-8">
      {homepageCategories.map((category) => (
        category.posts?.length > 0 && (
          <div key={category._id} className="mb-12 last:mb-0">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">{category.title}</h2>
              <Link 
                href={`/${category.slug}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Tümünü Gör
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.posts.slice(0, 3).map((post) => (
                <article key={post._id} className="group">
                  <Link href={`/${post.slug}`}>
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
                    <p className="text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        )
      ))}
    </section>
  )
}