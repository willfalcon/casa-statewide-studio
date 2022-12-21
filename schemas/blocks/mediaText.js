import MediaTextPreview from '../../components/MediaTextPreview';
import ColorSelect from '../ColorSelect';
export default {
  name: 'mediaText',
  title: 'Media + Text',
  type: 'object',

  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
    {
      name: 'color',
      title: 'Background Color',
      type: 'string',
      inputComponent: ColorSelect,
    },
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
      name: 'alignment',
      title: 'Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Image Right', value: 'img-right' },
          { title: 'Image Left', value: 'img-left' },
        ],
      },
    },
  ],
  initialValue: {
    alignment: 'img-right',
  },
  preview: {
    select: {
      heading: 'heading',
      text: 'text',
      color: 'color',
      image: 'image',
      alignment: 'alignment',
    },
    component: MediaTextPreview,
  },
};
