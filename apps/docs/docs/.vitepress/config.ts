import { defineConfig } from 'vitepress';
import { version } from '../../package.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: `Custom Belt`,
  base: '/custom-belt/',
  description: 'Custom Belt demo and documentation',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Demo', link: '/demo' },
      { text: 'Documentation', link: '/introduction/what-is-custom-belt' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Custom Belt?', link: '/introduction/what-is-custom-belt' },
          { text: 'Quick Start', link: '/introduction/quick-start' },
          { text: 'Examples', link: '/introduction/examples' }
        ]
      },
      {
        text: 'API',
        items: [
          {
            text: 'Modules',
            collapsed: true,
            items: [{ text: 'Belt', link: '/api/modules/Belt' }]
          },
          {
            text: 'Classes',
            collapsed: true,
            items: [{ text: 'BeltSystem', link: '/api/classes/BeltSystem.BeltSystem' }]
          },
          {
            text: 'Enums',
            collapsed: true,
            items: [
              { text: 'BeltCallbackType', link: '/api/enums/Belt.BeltCallbackType' },
              { text: 'BeltType', link: '/api/enums/Belt.BeltType' },
              { text: 'BeltTypeStandard', link: '/api/enums/Belt.BeltTypeStandard' },
              { text: 'StripePosition', link: '/api/enums/Belt.StripePosition' }
            ]
          },
          {
            text: 'Interfaces',
            collapsed: true,
            items: [
              { text: 'Belt', link: '/api/interfaces/Belt.Belt' },
              { text: 'BeltColor', link: '/api/interfaces/Belt.BeltColor' },
              { text: 'BeltProps', link: '/api/interfaces/Belt.BeltProps' },
              { text: 'BeltRDF', link: '/api/interfaces/Belt.BeltRDF' },
              { text: 'RandomSettings', link: '/api/interfaces/Belt.RandomSettings' }
            ]
          }
        ]
      },
      { text: `Version: ${version}` }
    ],
    search: {
      provider: 'local',
      options: {
        disableDetailedView: true
      }
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/jeffholst/custom-belt' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Jeff Holst'
    },

    editLink: {
      pattern: 'https://github.com/jeffholst/custom-belt/edit/main/docs/:path'
    }
  }
});
