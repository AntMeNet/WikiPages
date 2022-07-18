// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AntMe!',
  tagline: 'learn programming the easy way',
  url: 'https://wiki.antme.net',
  trailingSlash: false,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'AntMe', // Usually your GitHub org/user name.
  projectName: 'WikiPages', // Usually your repo name.
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      de:{
        htmlLang: 'de-DE'
      },
      en:{
        htmlLang: 'en-GB'
      }
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
            return `https://github.com/AntMeNet/WikiPages/edit/main/${versionDocsDirPath}/${docPath}`;
          },
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
      algolia:{
        appId: 'VF5H4JE0D4',
        apiKey: '3ffce13e29c20431f33ec44d30f4f130',
        indexName: 'antme'
      },
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
            docId: 'tutorials/installation/installation',
            position: 'left',
            label: 'Tutorials',
          },
          {
            type: 'localeDropdown',
            position: 'right'
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
            label: 'Impressum',
            to: '/imprint',
          }
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
