import {defineField, defineType} from 'sanity'

export const extra_service = defineType({
  name: 'extra_service',
  title: 'Extra Service',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'price',
      type: 'number',
    })
  ]
})

export const packageType = defineType({
  name: 'package',
  title: 'Valet Package',
  type: 'document',
  fields: [
    defineField({
      name: 'package_name',
      type: 'string',
    }),
    defineField({
        name: 'package_services',
        type: 'array',
        of: [{type: 'string'}]
    }),
    defineField({
      name: 'extra_services',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'extra_service'}] }]

    }),
    defineField({
      name: 'price',
      type: 'number',
    }),
    defineField({
      name: 'isVisible',
      title: 'Display on site?',
      type: 'boolean',
      initialValue: true,
    })
  ],
})