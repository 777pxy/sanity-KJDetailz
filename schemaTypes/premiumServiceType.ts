import {defineField, defineType} from 'sanity'

export const premiumServiceType = defineType({
  name: 'premium_service',
  title: 'Premium Service',
  type: 'document',
  fields: [
    defineField({
      name: 'service_name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      description: 'Short persuasive blurb shown on the premium services page.',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      description: 'Photo shown for this service on /premium-services and in the homepage preview.',
    }),
    defineField({
      name: 'package_services',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'extra_services',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'extra_service'}]}],
    }),
    defineField({
      name: 'price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isVisible',
      title: 'Display on site?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
