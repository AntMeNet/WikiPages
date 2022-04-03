// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AntMe!',
  tagline: 'Spielend Porgrammieren lernen',
  url: 'https://your-docusaurus-test-site.com',
  trailingSlash: false,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'AntMe', // Usually your GitHub org/user name.
  projectName: 'WikiPages', // Usually your repo name.
  
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
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
            docId: 'tutorials/Installation/Installation',
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
            label: 'Impressum',
            to: '/impressum',
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
