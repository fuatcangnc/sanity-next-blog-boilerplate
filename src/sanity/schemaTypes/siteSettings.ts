export const siteSettings = {
  name: 'siteSettings',
  title: 'Site Ayarları',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Başlığı',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Site Açıklaması',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'En az 32x32 piksel olmalıdır',
      options: {
        accept: '.ico,.png',
      },
    },
    {
      name: 'ogImage',
      title: 'Open Graph Resmi',
      type: 'image',
      description: '1200x630 piksel önerilir',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'social',
      title: 'Sosyal Medya Ayarları',
      type: 'socialSettings',
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'logo',
    },
  },
} 