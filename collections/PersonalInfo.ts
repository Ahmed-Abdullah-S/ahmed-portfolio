import type { CollectionConfig } from 'payload'

export const PersonalInfo: CollectionConfig = {
  slug: 'personal-info',
  admin: {
    useAsTitle: 'name',
    description: 'Manage your personal information displayed on the portfolio',
  },
  access: {
    read: () => true, // Public read access
  },
  // Make it a singleton - only one document allowed
  versions: false,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'nameAr',
      label: 'Name (Arabic)',
      type: 'text',
      admin: {
        description: 'Your name in Arabic',
      },
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      admin: {
        description: 'Your job title (e.g., "Junior Software Engineer")',
      },
    },
    {
      name: 'roleAr',
      label: 'Role (Arabic)',
      type: 'text',
      admin: {
        description: 'Your job title in Arabic',
      },
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'locationAr',
      label: 'Location (Arabic)',
      type: 'text',
      admin: {
        description: 'Your location in Arabic',
      },
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'bio',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Your professional bio/description in English',
      },
    },
    {
      name: 'bioAr',
      label: 'Bio (Arabic)',
      type: 'textarea',
      admin: {
        description: 'Your professional bio/description in Arabic',
      },
    },
    {
      name: 'availability',
      type: 'text',
      required: true,
      defaultValue: 'Open for opportunities',
    },
    {
      name: 'availabilityAr',
      label: 'Availability (Arabic)',
      type: 'text',
      defaultValue: 'متاح للفرص',
    },
    {
      name: 'profileImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Your profile picture',
      },
    },
    {
      name: 'socialLinks',
      type: 'group',
      fields: [
        {
          name: 'github',
          type: 'text',
          admin: {
            description: 'GitHub profile URL',
          },
        },
        {
          name: 'linkedin',
          type: 'text',
          admin: {
            description: 'LinkedIn profile URL',
          },
        },
        {
          name: 'twitter',
          type: 'text',
          admin: {
            description: 'Twitter/X profile URL',
          },
        },
        {
          name: 'website',
          type: 'text',
          admin: {
            description: 'Personal website URL',
          },
        },
      ],
    },
  ],
}
