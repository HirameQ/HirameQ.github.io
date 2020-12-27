module.exports = {
  title: '合同会社HirameQ 公式サイト',
  tagline: "ハードウエア、モバイルアプリ、Webを一括開発できるメリット生かし、お客様のさまざまなアイデアの実装をお手伝いします",
  url: 'https://hirameq.jp',
  baseUrl: '/',
  onBrokenLinks: 'throw',
   favicon: 'img/favicon.ico',
  organizationName: 'wamisnet', // Usually your GitHub org/user name.
  projectName: 'wamisnet.github.io', // Usually your repo name.
  themeConfig: {
    gtag: {
      trackingID: 'G-W6MG748R1H',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    image:"img/hirameq_logo.jpg",
    navbar: {
      title: '',
      logo: {
        alt: 'HirameQLogo',
        src: 'img/hirameq.png',
      },
      items: [
        {to: 'about', label: 'About', position: 'left'},
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '作品・事例リスト',
          position: 'left',
        },
        {to: 'contact', label: 'Contact', position: 'left'},
        {
          href: 'https://github.com/wamisnet',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    customFields:{
      about: {
        text:"- 電子基板の設計、製造、販売<br />- モバイルアプリ開発<br />- Web技術を用いたデータの可視化やアプリ開発<br />- これらの技術を活用した受託開発、コンサルティング<br />- 情報を広めるための勉強会主催など<br /><br />アイデアを現実に実現するサポートしていきます",
        link:"/about",
      },
    },
    footer: {
      logo: {
        src:"img/hirameq_logo.png",
      },

      style: 'dark',
      links: [
        {
          title: 'Works',
          items: [
            {label: 'About', to: 'about/',},
            {label: 'Contact　ご相談はこちら', to: 'contact/',},
            {label: '作品・事例リスト', to: 'docs/',},
            {html:'<h4 style="margin-top: 15px;margin-bottom: 5px;">外部リンク</h4><ul class="footer__items"><a href="https://nefry.studio" target="_blank" rel="noopener noreferrer" class="footer__link-item">Nefry</a></li><li class="footer__item"><a href="https://sofmo.pw" target="_blank" rel="noopener noreferrer" class="footer__link-item">Sofmo</a></li></ul>'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Twitter', href: 'https://twitter.com/wamisnet',},
            {label: 'GitHub', href: 'https://github.com/wamisnet',},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HirameQ LLC.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // docs: require.resolve('./sidebars.js'),
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'top',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
