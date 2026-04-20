// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Belajar Matematika Diskrit',
  tagline: 'Matematika Diskrit Itu Keren!! ⚡🧠 Yuk, Belajar Bareng !',
  favicon: 'img/new_logo_again.png',

  
  url: 'https://discrete-org.github.io',
  baseUrl: '/discrete-sh/', 

  organizationName: 'discrete-org', 
  projectName: 'discrete-sh', 
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

 
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          
          editUrl:
            'https://github.com/discrete-org/discrete-sh/tree/main/', 
        },
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: false,
          },
         
          editUrl:
            'https://github.com/discrete-org/discrete-sh/tree/main/', 
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      
      image: 'img/new_logo_again.png',
      navbar: {
        title: '.discrete-sh',
        logo: {
          alt: 'Logo Matematika Diskrit', 
          src:'img/new_logo_again.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/mayendradwika/discrete-sh',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Learn',
                to: '/docs/a_intro',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mayendradwika/discrete-sh',
              },
            ],
          },
        ],
        copyright: `.discrete-sh © 2026`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;