import InfoBlockPreview from '../../components/InfoBlockPreview';

export default {
  name: 'infoBock',
  title: 'Info Block',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
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
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      image: 'image',
      content: 'content',
    },
    prepare(selection) {
      return selection;
    },
    component: InfoBlockPreview,
  },
};
