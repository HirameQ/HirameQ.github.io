// @ts-check
// Docusaurus v3 configuration for hirameq.jp.

const config = {
  title: '合同会社HirameQ 公式サイト',
  tagline: 'ハードウエア、モバイルアプリ、Webを一括開発できるメリット生かし、お客様のさまざまなアイデアの実装をお手伝いします',
  url: 'https://hirameq.jp',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'wamisnet',
  projectName: 'hirameq.jp',
  trailingSlash: true,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // .md as CommonMark (lenient with raw HTML in legacy docs);
  // .mdx files (none currently) would still parse as MDX.
  markdown: {
    format: 'detect',
  },

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  clientModules: [require.resolve('./src/clientModules/gtag-stub.js')],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // gtag is only registered in production builds; the plugin's
        // route listener calls window.gtag(...) which is undefined in dev,
        // so loading it during `npm run start` raises a runtime error.
        ...(process.env.NODE_ENV === 'production'
          ? { gtag: { trackingID: 'G-W6MG748R1H', anonymizeIP: true } }
          : {}),
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/hirameq_logo.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'HirameQ',
          src: 'img/hirameq.png',
        },
        items: [
          { to: '/services/', label: 'サービス', position: 'left' },
          { to: '/works/', label: '実績', position: 'left' },
          { to: '/process/', label: '進め方', position: 'left' },
          { to: '/about/', label: '会社情報', position: 'left' },
          { to: '/docs/', label: '作品・事例リスト', position: 'left', activeBasePath: 'docs' },
          { to: '/contact/', label: 'お問い合わせ', position: 'left' },
          { href: 'https://github.com/hirameq', label: 'GitHub', position: 'right' },
        ],
      },
      footer: {
        logo: { src: 'img/hirameq_logo.png' },
        style: 'dark',
        links: [
          {
            title: 'Pages',
            items: [
              { label: 'サービス', to: '/services/' },
              { label: '実績', to: '/works/' },
              { label: '進め方', to: '/process/' },
              { label: '会社情報', to: '/about/' },
              { label: '作品・事例リスト', to: '/docs/' },
              { label: 'お問い合わせ', to: '/contact/' },
            ],
          },
          {
            title: 'External',
            items: [
              { label: 'Nefry', href: 'https://nefry.studio' },
              { label: 'GitHub (HirameQ)', href: 'https://github.com/hirameq' },
              { label: 'GitHub (wamisnet)', href: 'https://github.com/wamisnet' },
              { label: 'Twitter', href: 'https://twitter.com/wamisnet' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HirameQ LLC.`,
      },
    }),
};

module.exports = config;
