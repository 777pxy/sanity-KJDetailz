import {defineField, defineType} from 'sanity'

export const gallaryImageType = defineType({
  name: 'gallary_image',
  title: 'Gallary Image',
  type: 'document',
  fields: [
    defineField({
      name: 'image_name',
      type: 'string',
    }),
    defineField({
        name: 'image',
        type: 'image'
    })
  ],
})