export const contact = {
  name: 'contact',
  title: 'İletişim Mesajları',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Ad Soyad',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'email',
      title: 'E-posta',
      type: 'string',
      validation: (Rule: any) => Rule.required().email()
    },
    {
      name: 'subject',
      title: 'Konu',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'message',
      title: 'Mesaj',
      type: 'text',
      rows: 5,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'createdAt',
      title: 'Gönderim Tarihi',
      type: 'datetime',
      options: {
        readonly: true
      }
    },
    {
      name: 'isRead',
      title: 'Okundu',
      type: 'boolean',
      initialValue: false
    }
  ]
} 