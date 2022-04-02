// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AntMe!',
  tagline: 'Das große krabbeln',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'AntMe', // Usually your GitHub org/user name.
  projectName: 'AntMeDoc', // Usually your repo name.
  
  i18n: {
    defaultLocale: 'de',
    locales: ['de']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: "https://github.com/AntMeNet/WikiPages/tree/develop/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      
      colorMode:{
        respectPrefersColorScheme : true
      },
      navbar: {
        title: 'AntMe!',
        logo: {
          alt: 'AntMe logo',
          src: 'img/favicon.ico',
        },      
        items: [
          {
            type: 'doc',
            docId: 'tutorials/Installation/VisualStudio',
            position: 'left',
            label: 'Tutorials',
          },
          {
            href: 'https://github.com/AntMeNet/AntMeClassic',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/antme2',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/c/TomWendel',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/bobstriker',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AntMe! GmbH`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp'],
      },
    }),
};

module.exports = config;
