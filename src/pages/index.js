import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const hardware_features = [
    {
        title: <>Nefryシリーズ</>,
        imageUrl: 'img/main/nefry.png',
        description: (
            <>
                dotstudio株式会社さんと共同で開発したIoT開発ボードです。<br/>
                「ネットに簡単につながる」ことを実現するために2015年から基板からファームウェア、デバイス設定用Webサイトなど一括して開発しました。<br/>
                無線LANに接続して、ネットワークにある様々なサービスとデバイスのセンサーなどを簡単なプログラムを書くだけで接続できます。<br/>
                試作から製造、販売まで行い、これまでに累計数千台ほど販売させていただきました。
            </>
        ),
        link: "docs/nefry/",
    },
    {
        title: <>CocoaBit</>,
        imageUrl: 'img/main/cocoabit.png',
        description: (
            <>
                ワンフットシーバスさんの試作から専用基板を作成し、NefryをベースにしたlittleBits専用IoT開発ボードです。<br/>
                littleBitsというマグネット式の各モジュールをつなぎ合わせることで、電子回路を楽しく学べるものでIoTを学べます。<br/>
                デジタルハイクさんから部材の支援をいただきました。<br/>
                基板の設計、ファームウエアの開発、少量量産を行いました。<br/>
            </>
        ),
        link: "docs/cocoabit/",
    },
    {
        title: <>モンスターウルフ拡張基板</>,
        imageUrl: 'img/main/monster_wolf.png',
        description: (
            <>
                株式会社exMediaさんと仁愛大学の安彦先生による共同研究で使用するモンスターウルフの機能を拡張する基板作成しました。<br/>
                害獣に対するセンシングや警告音声を再生する機能を搭載し、モンスターウルフの効果範囲を拡張します。<br/>
                xbeeを用いメッシュネットワークを構成し、山間部でも通信が確立できるようにしています。<br/>
                基板の設計、ファームウェアの開発、少量量産を行いました。<br/>
            </>
        ),
        link: "docs/monster_wolf/",
    },
    // {
    //     title: <>CountIT</>,
    //     description: (
    //         <>
    //             ピノベーション株式会社さんの金型管理システムを作成しました。<br/>
    //             ElasticSearchを用い、金型の管理情報を一括で管理、可視化を行っています。<br/>
    //             ハードウエアから可視化する仕組みまですべて一括して実装しました。
    //         </>
    //     ),
    //     link: "docs/countit/",
    // },
];

const software_features = [
    {
        title: <>入室管理システム</>,
        description: (
            <>
                Suicaや指紋認証を使用した入室管理システムです。<br/>
                対象ユーザーに権限がある場合、外付けしたスマートロックを制御し、カギの制御を行います。<br/>
                入室データは即時にSlackに投稿されるほかネットワークに保存されており、あとからどのような動作があったか検証確認できます。
            </>
        ),
        link: "docs/door/",
    },
    {
        title: <>在庫管理システム</>,
        description: (
            <>
                バーコードリーダーを用い、商品の入出荷時にバーコードを読み取ることでデータの管理を行うシステムです。<br/>
                ブラウザ上で動作するため、WindowsやAndroidといったデバイスに固定されることなく稼働させられるようになっています。<br/>
                実績データはすべてネットワークに保存されており、その実績をグラフ化して確認できます。
            </>
        ),
        link: "docs/barcode/",
    },
];

const other_features = [
    {
        title: <>執筆活動</>,
        imageUrl:"img/main/book.png",
        description: (
            <>
                Nefryの説明本やFlutterの入門本を出版しました。
            </>
        ),
    },
    {
        title: <>イベント開催</>,
        description: (
            <>
                IoTLT名古屋や同人ハードウエア meetupの開催をしています。
            </>
        ),
        imageUrl:"img/main/event.jpg",
        link: "https://connpass.com/user/wamisnet/open/",
    },
];

function Feature({imageUrl, title, description, link}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('row', styles.features)}>
            {imgUrl && (
                <div className="text--center">
                    <div className={styles.featureImageBox}>
                        <img className={styles.featureImage} src={imgUrl} alt={title}/>
                    </div>
                </div>
            )}
            <div className={clsx('col', styles.feature)}>
                <h3>{title}</h3>
                <p>{description}</p>
                {link && (
                    <Link
                        className={clsx(
                            'button button--outline button--secondary'
                        )}
                        to={useBaseUrl(link)}>
                        詳細はこちら
                    </Link>
                )}
            </div>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`${siteConfig.title}へようこそ`}
            description="ハードウエア、モバイルアプリ、Webを一括開発できるメリット生かし、お客様のさまざまなアイデアの実装をお手伝いします">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('about/')}>
                            About
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {hardware_features && hardware_features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <h2　className={styles.titles}>ハードウエア・ファームウェアの開発</h2>
                            {hardware_features.map((props, idx) => (
                                <Feature key={idx} {...props} />
                            ))}
                        </div>
                    </section>
                )}
                {software_features && software_features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <h2　className={styles.titles}>ソフトウエアの開発</h2>
                            {software_features.map((props, idx) => (
                                <Feature key={idx} {...props} />
                            ))}
                        </div>
                    </section>
                )}
                {other_features && other_features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <h2　className={styles.titles}>その他</h2>
                            {other_features.map((props, idx) => (
                                <Feature key={idx} {...props} />
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default Home;
