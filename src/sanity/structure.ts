import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('İçerik')
    .items([
      S.listItem()
        .title('Ana Sayfa Ayarları')
        .id('homeSettings')
        .child(
          S.document()
            .schemaType('homeSettings')
            .documentId('homeSettings')
        ),
      S.listItem()
        .title('Site Ayarları')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Sosyal Medya Ayarları')
        .id('socialSettings')
        .child(
          S.document()
            .schemaType('socialSettings')
            .documentId('socialSettings')
        ),
      S.listItem()
        .title('Analiz Ayarları')
        .id('analyticsSettings')
        .child(
          S.document()
            .schemaType('analyticsSettings')
            .documentId('analyticsSettings')
        ),
      ...S.documentTypeListItems().filter(
        (item) => !['homeSettings', 'siteSettings', 'socialSettings', 'analyticsSettings'].includes(item.getId() as string)
      ),
    ])
