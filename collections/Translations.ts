import type { CollectionConfig } from 'payload'

export const Translations: CollectionConfig = {
  slug: 'translations',
  admin: {
    useAsTitle: 'key',
    defaultColumns: ['key', 'en', 'ar', 'updatedAt'],
    description: 'Manage UI translations for English and Arabic',
  },
  access: {
    read: () => true, // Public read access
  },
  fields: [
    {
      name: 'key',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Translation key (e.g., "nav.home", "hero.hello")',
      },
    },
    {
      name: 'en',
      label: 'English',
      type: 'text',
      required: true,
    },
    {
      name: 'ar',
      label: 'Arabic',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Navigation', value: 'nav' },
        { label: 'Hero Section', value: 'hero' },
        { label: 'Sections', value: 'section' },
        { label: 'Contact', value: 'contact' },
        { label: 'Projects', value: 'projects' },
        { label: 'Articles', value: 'articles' },
        { label: 'Profile', value: 'profile' },
        { label: 'Other', value: 'other' },
      ],
      admin: {
        description: 'Category for organizing translations',
      },
    },
  ],
  defaultSort: 'key',
}

