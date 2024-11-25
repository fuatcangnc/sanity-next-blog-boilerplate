import { groq } from 'next-sanity'

export const getAnalyticsSettings = groq`
  *[_type == "analyticsSettings"][0] {
    googleAnalyticsId,
    microsoftClarityId
  }
` 