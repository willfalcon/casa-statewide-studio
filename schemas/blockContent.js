import React from 'react';
import { BsTextCenter } from 'react-icons/bs';
import { BiLinkExternal, BiLinkAlt } from 'react-icons/bi';
import GetInvolvedPreview from '../components/GetInvolvedPreview';

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
          {
            title: 'Centered',
            value: 'centered',
            blockEditor: {
              icon: BsTextCenter,
              render: props => <span style={{ textAlign: 'center' }}>{props.children}</span>,
            },
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            icon: BiLinkExternal,
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
          {
            title: 'Internal Link',
            name: 'internalLink',
            type: 'object',
            icon: BiLinkAlt,
            fields: [
              {
                title: 'Link',
                name: 'link',
                type: 'reference',
                to: [{ type: 'page' }, { type: 'homePage' }, { type: 'stories' }],
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'image',
      name: 'image',
      title: 'Image',
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
        {
          name: 'size',
          title: 'Size',
          type: 'string',
          options: {
            list: [
              { title: 'Normal', value: 'normal' },
              { title: 'Wide', value: 'wide' },
              { title: 'Full Width', value: 'full' },
            ],
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: 'mediaText',
      title: 'Media + Text',
      type: 'mediaText',
    },
    {
      name: 'button',
      title: 'Button',
      type: 'button',
    },
    {
      name: 'infoBlock',
      title: 'Info Block',
      type: 'infoBock',
    },
    {
      name: 'getInvolved',
      title: 'Get Involved / Sub Nav',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
      ],
      preview: {
        select: {
          heading: 'heading',
        },
        component: GetInvolvedPreview,
      },
    },
    {
      name: 'accordions',
      title: 'Accordions',
      type: 'accordions',
    },
    {
      name: 'form',
      title: 'Form',
      type: 'reference',
      to: [{ type: 'form' }],
    },
    {
      type: 'youtube',
    },
  ],
};
