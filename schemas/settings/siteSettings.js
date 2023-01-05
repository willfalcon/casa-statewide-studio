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
      name: 'subNav',
      title: 'Sub Nav',
      description: 'Used on the home page and in regular pages with the "Sub Nav" block.',
      type: 'array',
      of: [{ type: 'subNavItem' }],
    },
    {
      name: 'specialCategories',
      title: 'Stories Slider Categories',
      description: 'The Stories slider on the home page and archive pages will show posts in these categories.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    },
    {
      name: 'sliderSlides',
      title: 'Number of Stories Slider Posts',
      type: 'number',
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
      name: 'postsPerPage',
      title: 'Posts Per Page',
      description: 'How many posts show at a time on the post archive pages.',
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
