import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'featured', 'updatedAt'],
  },
  access: {
    read: () => true, // Public read access
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'titleAr',
      label: 'Title (Arabic)',
      type: 'text',
      admin: {
        description: 'Project title in Arabic',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly version of the title (e.g., "my-awesome-project")',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'descriptionAr',
      label: 'Description (Arabic)',
      type: 'textarea',
      admin: {
        description: 'Project description in Arabic',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Web', value: 'Web' },
        { label: 'Backend', value: 'Backend' },
        { label: 'AI', value: 'AI' },
        { label: 'Open Source', value: 'Open Source' },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'tech',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'technology',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'link',
      type: 'text',
      admin: {
        description: 'Live demo URL (optional)',
      },
    },
    {
      name: 'github',
      type: 'text',
      admin: {
        description: 'GitHub repository URL (optional)',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Show this project on the homepage',
      },
    },
  ],
}
