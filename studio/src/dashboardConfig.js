export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60170d85cb006f6e1d89b821',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ijhjoe2m',
                  apiId: '9b132cdf-d891-4cb3-8126-f27d4e9650a6'
                },
                {
                  buildHookId: '60170d8534cec95569e08bd5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-xnsmo8e1',
                  apiId: 'e9ffc3de-da1e-444e-b4c6-464999e31e9b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/snunn91/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-xnsmo8e1.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
