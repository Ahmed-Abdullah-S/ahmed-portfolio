import type { CollectionConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'updatedAt'],
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
        description: 'Article title in Arabic',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
    },
    {
      name: 'excerptAr',
      label: 'Excerpt (Arabic)',
      type: 'textarea',
      admin: {
        description: 'Article excerpt in Arabic',
      },
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor(),
      required: true,
    },
    {
      name: 'contentAr',
      label: 'Content (Arabic)',
      type: 'richText',
      editor: lexicalEditor(),
      admin: {
        description: 'Article content in Arabic',
      },
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'readTime',
      label: 'Read Time (e.g., "5 min read")',
      type: 'text',
    },
    {
      name: 'readTimeAr',
      label: 'Read Time (Arabic)',
      type: 'text',
      admin: {
        description: 'Read time in Arabic (e.g., "5 دقائق قراءة")',
      },
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
      admin: {
        description: 'List of tags (e.g., Design, React, Backend)',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};
