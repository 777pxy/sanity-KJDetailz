import {defineField, defineType} from 'sanity'

export const gallaryImageType = defineType({
  name: 'gallary_image',
  title: 'Gallary Image',
  type: 'document',
  fields: [
    defineField({
      name: 'image_name',
      title: 'Image Name',
      type: 'string',
    }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image'
    }),
    defineField({
      name: 'isVisible',
      title: 'Display on site?',
      type: 'boolean',
      initialValue: true,
    })
  ],
})