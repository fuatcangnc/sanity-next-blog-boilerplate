import { groq } from 'next-sanity'

export const getSiteSettings = groq`
  *[_type == "siteSettings"][0] {
    title,
    description,
    "logo": logo.asset->url,
    "favicon": favicon.asset->url,
    "ogImage": ogImage.asset->url
  }
`

export const getSocialSettings = groq`
  *[_type == "socialSettings"][0]
` 