import Image from "next/image"
import Link from "next/link"
import { PortableText } from "@portabletext/react"
import Script from "next/script"

interface SinglePostProps {
  post: {
    title: string
    mainImage: string
    excerpt: string
    content: any
    publishedAt: string
    category?: {
      title: string
      slug: string
    }
  }
}

export default function SinglePost({ post }: SinglePostProps) {
  if (!post) return null

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.mainImage,
    "datePublished": post.publishedAt,
    "articleSection": post.category?.title,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/${post.category?.slug}`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Blog",
      "url": process.env.NEXT_PUBLIC_SITE_URL
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Ana Sayfa",
          "item": process.env.NEXT_PUBLIC_SITE_URL
        },
        ...(post.category ? [{
          "@type": "ListItem",
          "position": 2,
          "name": post.category.title,
          "item": `${process.env.NEXT_PUBLIC_SITE_URL}/kategori/${post.category.slug}`
        }] : []),
        {
          "@type": "ListItem",
          "position": post.category ? 3 : 2,
          "name": post.title,
          "item": `${process.env.NEXT_PUBLIC_SITE_URL}/${post.category?.slug || ''}`
        }
      ]
    }
  }

  return (
    <article className="container max-w-4xl py-8">
      <Script
        id="post-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <div className="mb-8">
        {post.category && (
          <div className="mb-6">
            <Link 
              href={`/category/${post.category.slug}`}
              className="text-sm text-muted-foreground hover:text-primary"
            >
              {post.category.title}
            </Link>
          </div>
        )}
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
        {post.publishedAt && (
          <time className="text-sm text-muted-foreground">
            {new Date(post.publishedAt).toLocaleDateString('tr-TR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        )}
      </div>

      {/* Featured Image */}
      {post.mainImage && (
        <div className="relative w-full mb-8">
          <div className="aspect-[16/9] sm:aspect-[21/9] lg:aspect-[21/9] overflow-hidden rounded-lg">
            <Image
              src={post.mainImage}
              alt={post.title}
              title={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        </div>
      )}

      {/* Content */}
      {post.content && (
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <PortableText 
            value={post.content}
            components={{
              types: {
                image: ({ value }: any) => (
                  value?.asset?.url ? (
                    <div className="relative w-full my-8">
                      <div className="aspect-[16/9] overflow-hidden rounded-lg">
                        <Image
                          src={value.asset.url}
                          alt={value.alt || ''}
                          title={value.alt || post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                        />
                      </div>
                    </div>
                  ) : null
                ),
              },
            }}
          />
        </div>
      )}
    </article>
  )
}