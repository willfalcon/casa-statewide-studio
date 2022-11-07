import { FaPager } from 'react-icons/fa';

export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: FaPager,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        {
          name: 'image',
          title: 'Hero Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt',
              type: 'string',
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
        {
          name: 'text',
          title: 'Hero Text',
          type: 'blockContent',
        },
        {
          name: 'button',
          title: 'Hero Button',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'string',
            },
            {
              name: 'link',
              title: 'Link',
              type: 'internalLink',
            },
            {
              name: 'externalUrl',
              title: 'External Url',
              type: 'url',
            },
          ],
        },
      ],
    },
    {
      name: 'bannerText',
      title: 'Banner Text',
      type: 'string',
    },
    {
      name: 'subNav',
      title: 'Sub Nav',
      type: 'array',
      of: [{ type: 'subNavItem' }],
    },
    {
      name: 'seoOptions',
      title: 'SEO Options',
      type: 'seoSettings',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
};
