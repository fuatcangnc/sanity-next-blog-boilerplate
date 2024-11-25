export const category = {
  name: 'category',
  title: 'Kategoriler',
  type: 'document',
  groups: [
    {
      name: 'display',
      title: 'Görünüm Ayarları',
    },
    {
      name: 'content',
      title: 'İçerik',
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Başlık',
      type: 'string',
      group: 'content',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Açıklama',
      type: 'text',
      group: 'content',
      rows: 3
    },
    {
      name: 'showOnHomepage',
      title: 'Ana Sayfada Göster',
      type: 'boolean',
      group: 'display',
      initialValue: false
    },
    {
      name: 'showInNavigation',
      title: 'Tab Panelde Göster',
      type: 'boolean',
      group: 'display',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'title',
      showOnHomepage: 'showOnHomepage',
      showInNavigation: 'showInNavigation'
    },
    prepare({ title, showOnHomepage, showInNavigation }: any) {
      const badges = [
        showOnHomepage && '🏠',
        showInNavigation && '📑'
      ].filter(Boolean)

      return {
        title,
        subtitle: badges.length ? badges.join(' ') : 'Görünmez'
      }
    }
  }
} 