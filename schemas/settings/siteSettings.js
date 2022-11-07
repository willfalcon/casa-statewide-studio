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
      name: 'customCSS',
      title: 'Custom CSS',
      type: 'code',
      options: {
        language: 'css',
      },
    },
  ],
};
