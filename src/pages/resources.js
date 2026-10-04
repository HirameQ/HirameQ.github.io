import React from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import {HQ, HQPage} from '../components/HQShell';

// 資料の入口。ヘッダーから行けるページ（サービス・実績・進め方・会社情報など）は並べ直さない。
// 「ご検討中の方向けの紹介資料」と「導入済みのお客様の作業手順」は読み手も用途も違うので、2枚に分けて混ぜない。
const groups = [
  { eyebrow: 'FOR PROSPECTS', who: 'ご検討中の方へ', to: '/works/handy/', t: 'ハンディターミナル導入事例',
    d: 'キーエンスのハンディターミナルを使った、受入・出荷・検査・在庫の7社の導入事例です。重量計や棚のLEDなど、つなげられる機器もご紹介しています。',
    links: [['/works/handy/#cases', '7社の事例'], ['/works/handy/#devices', '重量計 × ハンディ端末 操作デモ動画'], ['/works/handy/#weighing', '重量計で入荷・在庫を記録するご提案例'], ['/led-guide/', '棚下LEDガイド（読んだら棚が光る）']] },
  { eyebrow: 'FOR CUSTOMERS', who: '導入済みのお客様へ', to: '/setup/', t: '導入済み端末の設定手順',
    d: 'HirameQ のアプリを入れた端末（Android）の設定手順を、動画でご案内しています。初めて設定するときは 01 から順にご覧ください。',
    links: [['/setup/#wifi', '01 QRコードを使ったWi-Fiの設定'], ['/setup/#install', '02 HirameQ App Store のインストール'], ['/setup/#store', '03 アプリストアの設定'], ['/setup/#update', '04 アプリの更新']] },
];

export default function Resources() {
  return (
    <HQPage current="resources">
      <Head>
        <title>資料 | 合同会社HirameQ</title>
        <meta name="description" content="ハンディターミナルの導入事例・デモ動画と、導入済みのお客様向けの端末設定手順の入口です。"/>
      </Head>

      <section style={{ background: HQ.bgAlt, borderBottom: `1px solid ${HQ.line}` }}>
        <div className="hq-wrap" style={{ paddingTop: 64, paddingBottom: 48 }}>
          <div style={{ fontSize: 12, color: HQ.sub, marginBottom: 12 }}>
            <Link to="/" className="hq-link">ホーム</Link>
            <span style={{ margin: '0 10px', color: HQ.line }}>/</span>
            <span style={{ color: HQ.ink }}>資料</span>
          </div>
          <div className="hq-eyebrow">RESOURCES</div>
          <h1 className="hq-h1" style={{ marginTop: 14, fontSize: 44 }}>資料</h1>
          <p style={{ fontSize: 15, color: HQ.sub, lineHeight: 2, marginTop: 20, marginBottom: 0, maxWidth: 760 }}>
            ご検討中の方向けの事例集と、導入いただいたお客様向けの設定手順です。
          </p>
        </div>
      </section>

      <section>
        <div className="hq-wrap hq-g2" style={{ paddingTop: 56, paddingBottom: 72, gap: 24 }}>
          {groups.map(g => (
            <div key={g.to} style={{ padding: 28, border: `1px solid ${HQ.line}`, borderRadius: 8, background: '#fff', display: 'flex', flexDirection: 'column' }}>
              <div className="hq-eyebrow">{g.eyebrow}</div>
              <div style={{ fontSize: 13, color: HQ.sub, marginTop: 6 }}>{g.who}</div>
              <Link to={g.to} style={{ fontSize: 22, fontWeight: 700, marginTop: 6, color: HQ.ink }}>{g.t}</Link>
              <p style={{ fontSize: 13, color: HQ.sub, lineHeight: 1.9, margin: '10px 0 0' }}>{g.d}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '18px 0 0', borderTop: `1px solid ${HQ.line}` }}>
                {g.links.map(([to, label]) => (
                  <li key={to} style={{ borderBottom: `1px solid ${HQ.line}`, margin: 0 }}>
                    <Link to={to} className="hq-link" style={{ display: 'flex', justifyContent: 'space-between', gap: 12, padding: '11px 2px', fontSize: 14 }}>
                      <span>{label}</span><span style={{ color: HQ.blue }}>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 'auto', paddingTop: 20 }}>
                <Link to={g.to} className="hq-ghost" style={{ display: 'inline-block' }}>{g.t}を開く →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </HQPage>
  );
}
