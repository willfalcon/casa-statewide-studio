import ColorSelect from '../ColorSelect';
export default {
  name: 'menuItem',
  title: 'Menu Item',
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
      to: [{ type: 'page' }, { type: 'homePage' }, { type: 'stories' }],
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
  ],
  preview: {
    select: {
      label: 'label',
      longLabel: 'longLabel',
      link: 'link.title',
    },
    prepare(selection) {
      if (!selection.label && selection.link) {
        return {
          title: selection.link,
        };
      }
      return { title: selection.label };
    },
  },
};
