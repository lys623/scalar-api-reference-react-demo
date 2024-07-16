import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import type { ScalarOptions } from '@scalar/docusaurus'
import { themes as prismThemes } from 'prism-react-renderer'

const config: Config = {
  title: 'ShopeeFood OpenApi',
  tagline: 'ShopeeFood are cool',
  favicon: 'https://food-dev.uat.shopee.co.id/favicon.ico?v=1',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'ShopeeFood', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@scalar/docusaurus',
      {
        label: 'Scalar',
        route: '/scalar',
        configuration: {
          spec: {
            url: 'https://petstore3.swagger.io/api/v3/openapi.json',
          },
          withApiClient:false
        },
      } as ScalarOptions,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'https://food-dev.uat.shopee.co.id/jira/static/logo.67b91c82.svg',
    navbar: {
      title: 'ShopeeFood',
      logo: {
        alt: 'ShopeeFood OpenApi Logo',
        src: 'https://food-dev.uat.shopee.co.id/jira/static/logo.67b91c82.svg',
      },
      items: [
        { to: '/docs', label: 'Docs', position: 'left' },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
