import type { CollectionConfig } from 'payload'

export const Skills: CollectionConfig = {
  slug: 'skills',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'level', 'updatedAt'],
  },
  access: {
    read: () => true, // Public read access
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'level',
      type: 'number',
      required: true,
      min: 0,
      max: 100,
      admin: {
        description: 'Skill level as a percentage (0-100)',
      },
    },
    {
      name: 'icon',
      type: 'select',
      required: true,
      options: [
        { label: 'Layout (React/Next.js)', value: 'Layout' },
        { label: 'Code2 (TypeScript)', value: 'Code2' },
        { label: 'Terminal (Node.js)', value: 'Terminal' },
        { label: 'Database (PostgreSQL)', value: 'Database' },
        { label: 'Sparkles (AI/ML)', value: 'Sparkles' },
        { label: 'Cpu (System Design)', value: 'Cpu' },
      ],
      admin: {
        description: 'Icon to display for this skill',
      },
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Display order (lower numbers appear first)',
      },
      defaultValue: 0,
    },
  ],
  defaultSort: 'order',
}

