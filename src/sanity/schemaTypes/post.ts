export const post = {
  name: 'post',
  title: 'Blog Yazıları',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Başlık',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Özet',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required().min(50).max(200)
    },
    {
      name: 'category',
      title: 'Kategori',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Ana Görsel',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternatif Metin',
          description: 'Görsel için açıklayıcı metin'
        }
      ],
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'content',
      title: 'İçerik',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternatif Metin',
              description: 'Görsel için açıklayıcı metin'
            }
          ]
        }
      ],
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'isFeatured',
      title: 'Öne Çıkan',
      type: 'boolean',
      description: 'Bu yazı öne çıkan yazılar arasında gösterilsin mi?',
      initialValue: false
    },
    {
      name: 'onSlider',
      title: 'Slider\'da Göster',
      type: 'boolean',
      description: 'Bu yazı ana slider\'da gösterilsin mi?',
      initialValue: false
    },
    {
      name: 'publishedAt',
      title: 'Yayın Tarihi',
      type: 'datetime',
      validation: (Rule: any) => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category.title',
      media: 'mainImage'
    },
    prepare(selection: any) {
      const { title, category, media } = selection
      return {
        title: title,
        subtitle: category,
        media: media
      }
    }
  },
  orderings: [
    {
      title: 'Yayın Tarihi, Yeni',
      name: 'publishedAtDesc',
      by: [
        { field: 'publishedAt', direction: 'desc' }
      ]
    }
  ]
} 