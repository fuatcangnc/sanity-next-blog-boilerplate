import { groq } from 'next-sanity'

export const getCategories = groq`
  *[_type == "category"] {
    _id,
    title,
    description,
    "slug": slug.current,
    "posts": *[_type == "post" && references(^._id)] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      "mainImage": mainImage.asset->url,
      publishedAt
    }
  }
`

export const getCategory = groq`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    title,
    description,
    "slug": slug.current,
    "posts": *[_type == "post" && references(^._id)] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      "mainImage": mainImage.asset->url,
      publishedAt
    }
  }
` 