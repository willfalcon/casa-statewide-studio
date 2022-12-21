import S from '@sanity/desk-tool/structure-builder';
import { MdSettings } from 'react-icons/md';
import { FaPager } from 'react-icons/fa';

const hiddenDocTypes = listItem => !['generalSettings', 'footerSettings', 'homePage', 'stories'].includes(listItem.getId());

export default () => {
  return S.list()
    .title('CASA of Mississippi')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(MdSettings)
        .child(
          S.list()
            .title('Site Settings')
            .items([
              S.listItem()
                .title('General Settings')
                .child(
                  S.editor().title('General Settings').id('generalSettings').schemaType('generalSettings').documentId('generalSettings')
                ),
              S.listItem()
                .title('Footer Settings')
                .child(S.editor().title('Footer Settings').id('footerSettings').schemaType('footerSettings').documentId('footerSettings')),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Preset Pages')
        .icon(FaPager)
        .child(
          S.list()
            .title('Preset Pages')
            .items([
              S.listItem().title('Home').child(S.editor().title('Home Page').id('homePage').schemaType('homePage').documentId('homePage')),
              S.listItem()
                .title('Stories')
                .child(S.editor().title('Stories Page').id('stories').schemaType('stories').documentId('stories')),
            ])
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
};
