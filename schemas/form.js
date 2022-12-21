import { AiOutlineBuild } from 'react-icons/ai';

export default {
  name: 'form',
  title: 'Forms',
  type: 'document',
  icon: AiOutlineBuild,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'ID',
      name: 'formId',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'blockContent',
    },
    {
      title: 'Form Builder',
      name: 'formBuilder',
      type: 'array',
      of: [
        { type: 'textField' },
        { type: 'textArea' },
        { type: 'checkBoxes' },
        { type: 'radioButtons' },
        { type: 'select' },
        { type: 'emailField' },
        { type: 'phoneField' },
        { type: 'addressField' },
        // { type: 'fileUpload' },
      ],
    },
    {
      title: 'Success Message',
      name: 'successMessage',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Submit Button Text',
      name: 'submitText',
      type: 'string',
    },
  ],
};
