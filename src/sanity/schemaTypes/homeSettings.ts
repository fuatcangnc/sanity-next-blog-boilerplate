export const homeSettings = {
  name: 'homeSettings',
  title: 'Ana Sayfa Ayarları',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'featuredPosts',
      title: 'Öne Çıkan Yazılar',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'post' }],
          options: {
            disableNew: true
          }
        }
      ],
      validation: (Rule: any) => Rule.max(6)
    },
    {
      name: 'featuredCategories',
      title: 'Öne Çıkan Kategoriler',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
          options: {
            disableNew: true
          }
        }
      ],
      validation: (Rule: any) => Rule.max(4)
    },
    {
      name: 'heroTitle',
      title: 'Hero Başlık',
      type: 'string',
    },
    {
      name: 'heroDescription',
      title: 'Hero Açıklama',
      type: 'text',
      rows: 3
    },
    {
      name: 'heroImage',
      title: 'Hero Görsel',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
} 