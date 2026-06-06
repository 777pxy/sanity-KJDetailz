import {defineField, defineType} from 'sanity'

export const reviewType = defineType({
  name: 'customer_review',
  title: 'Customer Review',
  type: 'document',
  fields: [
    defineField({
      name: 'customer_name',
      type: 'string',
    }),
    defineField({
        name: 'body',
        type: 'string',
    }),
    defineField({
      name: 'service_type',
      type: 'string'
    }),
    defineField({
    name: 'stars',
    type: 'number',
    validation: (Rule) => Rule.min(0).max(5).integer(),
    })
  ],
})