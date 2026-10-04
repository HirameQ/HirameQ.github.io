import React from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import {HQ, HQPage} from '../components/HQShell';

// 導入済みの端末を設定するお客様向けの手順。紹介・営業用の動画（/handy/ のデモ）とは用途が別なので、
// ここには載せない／あちらにも手順動画を載せない。
const guides = [
  { id: 'wifi', no: '01', file: 'setup-1-wifi', t: 'QRコードを使ったWi-Fiの設定', dur: '約1分20秒',
    steps: [
      '端末の「設定」から、Wi-Fiの追加画面を開きます（設定 → ネットワークとインターネット → インターネット → ネットワークを追加）。',
      'ネットワーク名の右にあるQRコードのマークを押します。',
      'Wi-Fi設定用のQRコードを読み込むと、設定が完了します。',
    ],
    note: 'ネットワークの種類によってはQRコードで設定できないものもあります。その場合は、ネットワーク名などを手入力で設定してください。' },
  { id: 'install', no: '02', file: 'setup-2-appstore-install', t: 'HirameQ App Store のインストール', dur: '約1分',
    steps: [
      '端末のブラウザを開き、URL欄でQRコードを読み込むか、URLを入力します。',
      '確認画面「ダウンロードしたAPKをインストールしますか？」で「OK」を押します。',
      '必要に応じて「この提供元のアプリを許可」をオンにし、「インストール」を押します。',
    ],
    url: 'https://app.hirameq.jp/download/app' },
  { id: 'store', no: '03', file: 'setup-3-appstore-settings', t: 'アプリストアの設定', dur: '約1分50秒',
    steps: [
      'HirameQ App Store を開き、ログイン用のQRコードを読み込みます（メールアドレスの場合はパスワードを入力します）。',
      '自動的にログインされ、お使いいただくアプリの一覧が出ます。',
      'アプリの「インストール」を押し、終わったら「完了」を押します。',
    ],
    note: '事前に「02 HirameQ App Store のインストール」を済ませてください。動画の後半では、アプリの更新手順もあわせて説明しています。' },
  { id: 'update', no: '04', file: 'setup-4-app-update', t: 'アプリの更新', dur: '約40秒',
    steps: [
      'HirameQ App Store を開き、右上の更新ボタンでアプリの一覧を更新します。',
      '更新があるアプリの「アップデート」を押します。',
      '確認画面が出たら「更新」を押します。',
      '「最新版です」に変われば、更新は完了です。',
    ],
    note: '新しいバージョンは自動では入りません。ご案内があったときに、この手順で更新してください。' },
];

function Guide({g}) {
  const src = useBaseUrl(`/video/${g.file}.mp4`);
  const poster = useBaseUrl(`/video/${g.file}.jpg`);
  return (
    <article id={g.id} style={{ scrollMarginTop: 96, borderTop: `1px solid ${HQ.line}`, padding: '40px 0' }}>
      <div className="hq-g2" style={{ alignItems: 'start' }}>
        <video className="hq-video" controls preload="none" poster={poster} playsInline>
          <source src={src} type="video/mp4"/>
        </video>
        <div>
          <div style={{ fontSize: 11, color: HQ.blue, fontWeight: 700, letterSpacing: 2, fontFamily: 'ui-monospace, monospace' }}>STEP {g.no} ・ {g.dur}</div>
          <h2 className="hq-h3" style={{ marginTop: 8, fontSize: 22 }}>{g.t}</h2>
          <ol style={{ margin: '14px 0 0', paddingLeft: 20, fontSize: 14, lineHeight: 1.9 }}>
            {g.steps.map(s => <li key={s} style={{ marginBottom: 4 }}>{s}</li>)}
          </ol>
          {g.url && (
            <div style={{ marginTop: 12, fontSize: 13 }}>
              URL：<code style={{ background: HQ.blueLight, color: HQ.blueDark, padding: '2px 8px', borderRadius: 4, wordBreak: 'break-all' }}>{g.url}</code>
            </div>
          )}
          {g.note && (
            <p style={{ marginTop: 14, marginBottom: 0, fontSize: 12, color: HQ.sub, lineHeight: 1.85, padding: '10px 14px', background: HQ.bgAlt, borderRadius: 6 }}>※ {g.note}</p>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Setup() {
  const brokenLinks = useBrokenLinks();
  guides.forEach(g => brokenLinks.collectAnchor(g.id));
  return (
    <HQPage current="resources" includeCTA={false}>
      <Head>
        <title>導入済み端末の設定手順 | 合同会社HirameQ</title>
        <meta name="description" content="HirameQ のアプリを導入いただいたお客様向けの、端末の設定手順（Wi-Fi設定・HirameQ App Store のインストールと設定・アプリの更新）の動画です。"/>
      </Head>

      <section style={{ background: HQ.bgAlt, borderBottom: `1px solid ${HQ.line}` }}>
        <div className="hq-wrap" style={{ paddingTop: 64, paddingBottom: 48 }}>
          <div style={{ fontSize: 12, color: HQ.sub, marginBottom: 12 }}>
            <Link to="/" className="hq-link">ホーム</Link>
            <span style={{ margin: '0 10px', color: HQ.line }}>/</span>
            <Link to="/resources/" className="hq-link">資料</Link>
            <span style={{ margin: '0 10px', color: HQ.line }}>/</span>
            <span style={{ color: HQ.ink }}>導入済み端末の設定手順</span>
          </div>
          <div className="hq-eyebrow">SETUP GUIDE</div>
          <h1 className="hq-h1" style={{ marginTop: 14, fontSize: 40 }}>導入済み端末の設定手順</h1>
          <p style={{ fontSize: 15, color: HQ.sub, lineHeight: 2, marginTop: 20, maxWidth: 780 }}>
            HirameQ のアプリを導入いただいたお客様向けの、端末（Android）の設定手順です。
            初めて設定するときは、01 から順にご覧ください。
          </p>
          <div style={{ marginTop: 18, padding: '14px 18px', background: '#fff', border: `1px dashed ${HQ.blue}66`, borderRadius: 8, fontSize: 13, color: HQ.sub, lineHeight: 1.85, maxWidth: 780 }}>
            このページは<b style={{ color: HQ.ink }}>ご契約いただいたお客様の作業手順</b>です。
            ハンディターミナルでできることのご紹介は <Link to="/works/handy/" style={{ color: HQ.blue, fontWeight: 600 }}>ハンディターミナル導入事例</Link> をご覧ください。
            Wi-Fi やログイン用のQRコードは、お客様ごとにお渡ししているものをお使いください（動画のQRコードは見本です）。
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 20 }}>
            {guides.map(g => <a key={g.id} href={`#${g.id}`} className="hq-tag" style={{ fontSize: 12, padding: '6px 12px' }}>{g.no} {g.t}</a>)}
          </div>
        </div>
      </section>

      <section>
        <div className="hq-wrap" style={{ paddingTop: 24, paddingBottom: 72 }}>
          {guides.map(g => <Guide key={g.id} g={g}/>)}
          <div style={{ borderTop: `1px solid ${HQ.line}`, paddingTop: 32, fontSize: 13, color: HQ.sub, lineHeight: 1.9 }}>
            手順どおりに進まないときは、画面の状態（写真で構いません）とアプリのバージョンを添えて、
            <Link to="/contact/" style={{ color: HQ.blue, fontWeight: 600 }}>お問い合わせ</Link>（info at hirameq.jp）からご連絡ください。
          </div>
        </div>
      </section>
    </HQPage>
  );
}
