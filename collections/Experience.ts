import type { CollectionConfig } from 'payload'

export const Experience: CollectionConfig = {
  slug: 'experience',
  admin: {
    useAsTitle: 'role',
    defaultColumns: ['role', 'company', 'period', 'updatedAt'],
  },
  access: {
    read: () => true, // Public read access
  },
  fields: [
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
      required: true,
    },
    {
      name: 'period',
      type: 'text',
      required: true,
      admin: {
        description: 'Time period (e.g., "2023 - Present")',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Display order (lower numbers appear first, most recent should be first)',
      },
      defaultValue: 0,
    },
  ],
  defaultSort: '-order',
}

