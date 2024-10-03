// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Invictus',
    tagline: 'Сделать фитнес привычкой',
    favicon: 'img/logo.svg',

    // Set the production url of your site here
    url: 'https://your-docusaurus-site.example.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'invictus', // Usually your GitHub org/user name.
    projectName: 'invictusapp', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'ru',
        locales: ['ru', 'kz'],
        localeConfigs: {
            ru: {
                label: 'Русский',
            },
            kz: {
                label: 'Қазақша',
            },
        },
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    routeBasePath: '/',

                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: false,

                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'Invictus',
                logo: {
                    alt: 'Invictus Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Demo',
                    },
                    {
                        type: 'localeDropdown',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Demo',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/',
                            },
                        ],
                    },
                    {
                        title: 'Invictus',
                        items: [
                            {
                                label: 'Go',
                                href: 'https://invictusgo.kz',
                            },
                            {
                                label: 'Girls',
                                href: 'https://invictusfitness.kz/girls2',
                            },
                            {
                                label: 'Fitness',
                                href: 'https://invictusfitness.kz/',
                            },
                        ],
                    },
                    {
                        title: 'Правила и условия',
                        items: [
                            {
                                label: 'Публичная оферта на русском',
                                href: 'https://docs.google.com/document/d/1RkZaYD2VoYHkptfBpiNVhgQWlmCeFXpN/edit',
                            },
                            {
                                label: 'Публичная оферта на казахском',
                                href: 'https://docs.google.com/document/d/1mKLB3uF4_78oUt-cfoTKlQ0ooIWRJ2GO/edit',
                            },
                            {
                                label: 'Политика конфедценциальности',
                                href: 'https://docs.google.com/document/d/155RizJ0qXgIKbQoJf17BIy6T8m0hqIOa/edit',
                            },
                        ],
                    },
                ],
                copyright: `© ${new Date().getFullYear()} Invictus`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
            algolia: {
                appId: 'R2IYF7ETH7',
                apiKey: '599cec31baffa4868cae4e79f180729b',
                indexName: 'docsearch',
                contextualSearch: true,
                replaceSearchResultPathname: {
                    from: '/',
                    to: '/',
                },
            },
        }),
};

export default config;
