import { FaPager } from 'react-icons/fa';

export default {
  name: 'stories',
  title: 'Stories Page',
  type: 'document',
  icon: FaPager,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
