import { groq } from 'next-sanity'

export const getFeaturedPosts = groq`
  *[_type == "post" && isFeatured == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    "mainImage": mainImage.asset->url,
    publishedAt,
    "category": category->{
      title,
      slug
    }
  }
`

export const getSliderPosts = groq`
  *[_type == "post" && onSlider == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    "mainImage": mainImage.asset->url,
    publishedAt,
    "category": category->{
      title,
      slug
    }
  }
`

export const getAllPosts = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    "mainImage": mainImage.asset->url,
    publishedAt,
    "category": category->{
      title,
      slug
    }
  }
`

export const getPostsByCategory = groq`
  *[_type == "category"] {
    _id,
    title,
    "slug": slug.current,
    showOnHomepage,
    "posts": *[_type == "post" && references(^._id)] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      "mainImage": mainImage.asset->url
    }
  }
`

export const getPost = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "mainImage": mainImage.asset->url,
    content[] {
      ...,
      _type == "image" => {
        "asset": {
          "url": asset->url
        }
      }
    },
    publishedAt,
    category->{
      title,
      "slug": slug.current
    }
  }
` 