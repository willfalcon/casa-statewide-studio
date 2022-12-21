// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import category from './category';

import localeString from './locale/String';
import localeText from './locale/Text';
import localeBlockContent from './locale/BlockContent';

import siteSettings from './settings/siteSettings';
import footerSettings from './settings/footer';
import footerColumn from './settings/footerColumn';
import colorOption from './settings/colorOption';
import menuItem from './settings/menuItem';
import internalLink from './internalLink';
import subNavItem from './subNavItem';
import mediaText from './blocks/mediaText';
import infoBock from './blocks/infoBock';
import accordions from './blocks/accordions';
import button from './blocks/button';
import youtube from './blocks/youtube';
// import gallery, { galleryImage } from './blocks/gallery';

import formFields from './formFields/index';
import form from './form';

import seoSettings from './seoSettings';
import page from './page';
import post from './post';
import homePage from './homePage';
import storiesPage from './storiesPage';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    // product,
    // vendor,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    localeText,
    localeBlockContent,
    localeString,

    footerSettings,
    footerColumn,
    colorOption,
    menuItem,
    siteSettings,
    internalLink,
    subNavItem,
    mediaText,
    infoBock,
    accordions,
    button,
    youtube,
    ...formFields,
    // galleryImage,
    // gallery,

    seoSettings,
    page,
    post,
    homePage,
    storiesPage,
    category,
    form,
  ]),
});
