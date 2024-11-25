export const analyticsSettings = {
  name: 'analyticsSettings',
  title: 'Analiz Ayarları',
  type: 'document',
  fields: [
    {
      name: 'googleAnalyticsId',
      title: 'Google Analytics ID',
      type: 'string',
      description: 'Google Analytics ölçüm ID (G-XXXXXXXXXX)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'microsoftClarityId',
      title: 'Microsoft Clarity ID',
      type: 'string',
      description: 'Microsoft Clarity proje ID',
      validation: (Rule: any) => Rule.required(),
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Analiz Ayarları'
      }
    }
  }
} 