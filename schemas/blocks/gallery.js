export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'object',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'galleryImage' }],
      options: {
        layout: 'grid',
      },
    },
  ],
};

export const galleryImage = {
  name: 'galleryImage',
  title: 'Gallery Image',
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
};
