export default {
  title: 'SEO Settings',
  name: 'seoSettings',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'The page meta title will use the title of the page by default. Override it here.',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: "We'll attempt to create the meta description from content from the page by default. Specify it explicitly here.",
    },
  ],
};
