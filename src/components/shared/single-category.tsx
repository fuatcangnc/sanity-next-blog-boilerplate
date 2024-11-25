import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

interface CategoryProps {
  category: {
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
  }
}

export default function SingleCategory({ category }: CategoryProps) {
  if (!category) return null

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": category.title,
    "description": category.description,
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Ana Sayfa",
          "item": process.env.NEXT_PUBLIC_SITE_URL
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Kategoriler",
          "item": `${process.env.NEXT_PUBLIC_SITE_URL}/kategori`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": category.title,
          "item": `${process.env.NEXT_PUBLIC_SITE_URL}/kategori/${category.slug}`
        }
      ]
    }
  }

  return (
    <>
      <Script
        id="category-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{category.title}</h1>
          {category.description && (
            <p className="text-xl text-muted-foreground">{category.description}</p>
          )}
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.posts?.map((post) => (
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
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
