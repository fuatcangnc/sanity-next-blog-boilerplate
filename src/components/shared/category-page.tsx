import Image from "next/image"
import Link from "next/link"

interface CategoryPageProps {
  categories: Array<{
    _id: string
    title: string
    slug: string
    description?: string
    posts: Array<{
      _id: string
      title: string
      slug: string
      excerpt: string
      mainImage: string
      publishedAt: string
    }>
  }>
}

export default function CategoryPage({ categories }: CategoryPageProps) {
  if (!categories?.length) return null

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Kategoriler</h1>
      
      <div className="grid gap-12">
        {categories.map((category) => (
          <div key={category._id}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
              </div>
              <Link 
                href={`/kategori/${category.slug}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Tümünü Gör
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.posts?.slice(0, 3).map((post) => (
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
        ))}
      </div>
    </div>
  )
}
