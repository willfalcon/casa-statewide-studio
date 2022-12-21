import ButtonPreview from '../../components/ButtonPreview';
import ColorSelect from '../ColorSelect';

export default {
  name: 'button',
  title: 'Button',
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
    {
      name: 'alignment',
      title: 'Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'flex-start' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'flex-end' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
  ],
  preview: {
    select: {
      label: 'label',
      color: 'color',
      alignment: 'alignment',
    },
    component: ButtonPreview,
  },
};
