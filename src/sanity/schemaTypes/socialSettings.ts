export const socialSettings = {
  name: 'socialSettings',
  title: 'Sosyal Medya Ayarları',
  type: 'document',
  fields: [
    {
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
      description: 'Facebook profil veya sayfa linki'
    },
    {
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
      description: 'Instagram profil linki'
    },
    {
      name: 'twitter',
      title: 'X (Twitter) URL',
      type: 'url',
      description: 'X (Twitter) profil linki'
    },
    {
      name: 'youtube',
      title: 'YouTube URL',
      type: 'url',
      description: 'YouTube kanal linki'
    },
    {
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
      description: 'LinkedIn profil veya şirket sayfası linki'
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Sosyal Medya Ayarları'
      }
    }
  }
} 