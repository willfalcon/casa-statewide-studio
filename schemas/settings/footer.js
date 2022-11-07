import { isValidPhoneNumber } from 'libphonenumber-js';

export default {
  name: 'footerSettings',
  title: 'Footer Settings',
  type: 'document',
  fields: [
    {
      name: 'address',
      title: 'Address',
      type: 'blockContent',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: 'email', // Error message is "Does not match email-pattern"
            invert: false, // Boolean to allow any value that does NOT match pattern
          }
        ),
    },
    {
      name: 'message',
      title: 'Message',
      type: 'blockContent',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'url',
        },
      ],
    },
    {
      name: 'phoneHeading',
      title: 'Phone Numbers Heading',
      type: 'string',
    },
    {
      name: 'numbers',
      title: 'Phone Numbers',
      type: 'array',
      of: [
        {
          type: 'string',
          validation: Rule => Rule.custom(number => (isValidPhoneNumber(number, 'US') ? true : 'Must be a valid phone number.')),
        },
      ],
    },
  ],
};
