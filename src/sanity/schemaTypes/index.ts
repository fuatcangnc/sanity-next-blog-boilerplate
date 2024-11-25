import { type SchemaTypeDefinition } from 'sanity'
import { siteSettings } from './siteSettings'
import { socialSettings } from './socialSettings'
import { post } from './post'
import { category } from './category'
import { contact } from './contact'
import { analyticsSettings } from './analyticsSettings'
import { homeSettings } from './homeSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homeSettings,
    siteSettings, 
    socialSettings, 
    analyticsSettings,
    post, 
    category, 
    contact
  ]
}
