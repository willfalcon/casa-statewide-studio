export default {
  name: 'generalSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'colorPalette',
      title: 'Color Palette',
      type: 'array',
      of: [
        {
          type: 'colorOption',
        },
      ],
    },
    {
      name: 'mainMenu',
      title: 'Main Menu',
      type: 'array',
      of: [
        {
          type: 'menuItem',
        },
      ],
    },
    {
      name: 'pageTitleBackground',
      title: 'Page Title Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'postsPerPage',
      title: 'Stories Per Page',
      type: 'number',
    },
    {
      name: 'customCSS',
      title: 'Custom CSS',
      type: 'code',
      options: {
        language: 'css',
      },
    },
  ],
};
