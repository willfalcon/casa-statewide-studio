import ColorSelect from './ColorSelect';

export default {
  name: 'subNavItem',
  title: 'Sub Nav Item',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'homePage' }],
    },
    {
      name: 'externalUrl',
      title: 'External Url',
      type: 'url',
    },
    {
      name: 'color',
      title: 'Button Color',
      type: 'string',
      inputComponent: ColorSelect,
    },
    {
      name: 'background',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
