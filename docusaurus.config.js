// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "hirishu10/simple-date-time",
  tagline:
    "Simple and very helpful package to get the Date Time functionality.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "hirishu10", // Usually your GitHub org/user name.
  projectName: "simple-date-time", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "hi"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // 'https://github.com/hirishu10/simple-date-time/blob/main/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "hirishu10/simple-date-time",
        logo: {
          alt: "simple-date-time",
          src: "/img/logo.svg",
          srcDark: "/img/logo-dark.svg",
        },
        items: [
          // {
          //   type: "doc",
          //   position: "left",
          //   // docId: "intro",
          //   label: "Docs",
          // },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          // {
          //   href: "https://github.com/facebook/docusaurus",
          //   // label: "",
          //   position: "right",
          //   // icon:"Github"
          // },
          //
          // This is Dropdown
          // {
          //   type: "dropdown",
          //   label: "Version",
          //   position: "right",
          //   items: [
          //     {
          //       label: "Facebook",
          //       href: "https://www.facebook.com",
          //     },
          //     // ... more items
          //   ],
          // },
          // {
          //   type: "docsVersion",
          //   position: "right",
          //   to: "/path",
          //   label: "label",
          // },
          // This is doc version dropdown
          // {
          //   type: "dropdown",
          //   position: "right",
          //   to: "/path",
          //   label: "v.2.0.0",
          //   items: [
          //     {
          //       label: "v.1.1.0",
          //       href: "#",
          //     },
          //   ],
          // },
          // This is for version
          // {
          //   type: "docsVersion",
          //   position: "right",
          //   to: "/path",
          //   label: "label",
          // },
          //
          // This is for Language local
          {
            type: "localeDropdown",
            position: "right",
            items: [{}],
          },
          // {
          //   href: "https://github.com/facebook/docusaurus",
          //   position: "right",
          //   className: "header-github-link",
          //   "aria-label": "GitHub repository",
          //   label: "GitHub",
          // },
          // This is custom HTML for Navbar
          {
            type: "html",
            position: "right",
            value:
              "<a style='display:flex;justify-content:center;align-items:center;' href='https://github.com/hirishu10' target='_blank' ><img  width='24px' height='24px' src='/img/github-logo.svg' alt='githu/hirishu10'/></a>",
          },
        ],
        // This is for scroll navbar sticky
        hideOnScroll: true,
      },

      // Announcement Bar top of the page
      // announcementBar: {
      //   id: "support_us",
      //   content: "@hirishu10/simple-date-time",
      //   // content:
      //   //   'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      //   backgroundColor: "#fafbfc",
      //   textColor: "#091E42",
      //   isCloseable: false,
      // },
      //
      footer: {
        // style: "dark",// This is for default
        logo: {
          alt: "Rishu Chowdhary",
          src: "/img/logo_black.png",
          srcDark: "/img/logo_white.png",
          href: "https://rishuchowdhary.vercel.app/",
          target: "_blank",
        },
        links: [
          {
            title: "Learn",
            items: [
              {
                label: "Introduction",
                to: "/docs/intro",
              },
              {
                label: "react-native-customized-box",
                href: "https://www.npmjs.com/package/react-native-customized-box",
              },
            ],
          },
          //
          {
            title: "Blog",
            items: [
              {
                label: "Blog Page",
                to: "/blog",
              },
              {
                label: "Discord",
                href: "#",
              },
              {
                label: "Twitter",
                href: "#",
              },
            ],
          },
          //
          {
            title: "More",
            items: [
              {
                label: "Github-Readme-Design",
                href: "https://github-readme-design.vercel.app/",
              },
              {
                label: "Payment App (Razorpay)",
                href: "https://payment-page-with-razorpay.netlify.app/",
              },
              {
                html: `
                    <a href="https://rishuapi.vercel.app/api" target="_blank" rel="noreferrer noopener" aria-label="rishuapi">
                      <img src="https://rishuapi.vercel.app/assets/test.svg" alt="Learn rishuapi" width="114" height="51" />
                    </a>
                  `,
              },
            ],
          },
          //
          {
            title: "Connect",
            items: [
              {
                label: "Github",
                href: "#",
              },
              {
                label: "Stack Overflow",
                href: "#",
              },
              {
                html: `
                    <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                      <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
                    </a>
                  `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} hirishu10/simple-date-time. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // ...
      algolia: {
        // The application ID provided by Algolia
        appId: "AYL28D7P2H",

        // Public API key: it is safe to commit it
        apiKey: "6dbab3b8dfaddee29e255ebaeccf12c7",

        indexName: "date-time-algolia",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: "/docs/", // or as RegExp: /\/docs\//
          to: "/",
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        //... other Algolia params
        algoliaOptions: {
          facetFilters: ["language:en"],
        },
      },
    }),
};

module.exports = config;
