export default {
  title: 'Select Field',
  name: 'select',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Options',
      name: 'options',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'fieldOptions',
      type: 'fieldOptions',
    },
  ],
};
