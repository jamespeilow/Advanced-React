import { list } from '@keystone-next/keystone/schema';
import { text, select, integer, relationship } from '@keystone-next/fields';

export const Product = list({
  // TODO:
  // access:
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    status: select({
      options: [
        { value: 'draft', label: 'Draft' },
        { value: 'available', label: 'Available' },
        { value: 'unavailable', label: 'Unavailable' },
      ],
      defaultValue: 'draft',
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' },
      },
    }),
    price: integer(),
    photo: relationship({
      ref: 'ProductImage.product',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
  },
});
