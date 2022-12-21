import AccordionsPreview from '../../components/AccordionsPreview';

export default {
  name: 'accordions',
  title: 'Accordions',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          name: 'section',
          type: 'object',
          fields: [
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
            },
            {
              name: 'slug',
              title: 'Slug',
              type: 'slug',
              options: {
                source: (doc, options) => options.parent.heading,
                maxLength: 96,
              },
              validation: Rule => Rule.required(),
            },
            {
              name: 'content',
              title: 'Content',
              type: 'blockContent',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      sections: 'sections',
    },
    prepare(selection) {
      return selection;
    },
    component: AccordionsPreview,
  },
};
