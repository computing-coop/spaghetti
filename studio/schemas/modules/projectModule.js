export default {
  title: 'Project Content',
  name: 'projectModule',
  type: 'object',
  // hidden: true,
  fieldsets: [
    {
      name: 'media',
      title: 'Project Media',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
  ],
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string'
    },
    {
      name: 'url',
      title: 'Project URL',
      type: 'url'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'content.main.name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      type: 'image',
      title: 'Project Card',
      options: {
        hotspot: true
      },
      fieldset: 'media'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal link',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [
                      { type: 'user' },
                      { type: 'studio' }
                      // other types you may want to link to
                    ]
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  ]
}
