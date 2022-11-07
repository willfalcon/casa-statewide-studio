import React from 'react';

export default {
  name: 'colorOption',
  title: 'Color Option',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'color',
    },
  ],
  preview: {
    select: {
      title: 'label',
      color: 'color.hex',
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: () => <span style={{ width: '35px', height: '35px', background: selection.color, display: 'inline-block' }} />,
      };
    },
  },
};
