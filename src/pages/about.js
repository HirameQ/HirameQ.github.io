import React from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import {HQ, HQPage} from '../components/HQShell';

const companyInfo = [
  ['会社名', '合同会社 HirameQ（ひらめく）'],
  ['法人番号', '3011003011609'],
  ['資本金', '6,000,000円'],
  ['設立', '2020年9月2日'],
  ['所在地', '〒447-0043 愛知県碧南市幸町5-8'],
  ['連絡先', 'info at hirameq.jp（または お問い合わせフォームより）'],
  ['事業内容', 'ハードウェア・モバイルアプリ・Webサイトなどの開発、製造、販売、運用 ／ それらに付随する関連業務'],
];

const history = [
  { y: '2017〜2019', t: 'ロボットメーカー勤務', d: 'コミュニケーションロボット開発。Androidアプリ・組込み・社外向け開発ツールなどを担当。' },
  { y: '2019〜2020', t: 'IoT機器メーカー勤務', d: 'ハードウェア・ライブラリ・ドキュメント整備、初心者向けキット作成なども担当。' },
  { y: '2020〜', t: '合同会社HirameQ 設立', d: '中小企業向けにIoT機器の製造開発、業務改善ソフトウェアの開発・提案を行う。' },
];

export default function About() {
  return (
    <HQPage current="about">
      <Head>
        <title>会社情報 | 合同会社HirameQ</title>
        <meta name="description" content="合同会社HirameQ の会社情報。ビジョン・ミッション、沿革、会社概要。"/>
      </Head>

      <section style={{ background: HQ.bgAlt, borderBottom: `1px solid ${HQ.line}` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '64px 40px 56px' }}>
          <div style={{ fontSize: 12, color: HQ.sub, marginBottom: 12 }}>
            <Link to="/" className="hq-link">ホーム</Link>
            <span style={{ margin: '0 10px', color: HQ.line }}>/</span>
            <span style={{ color: HQ.ink }}>会社情報</span>
          </div>
          <div className="hq-eyebrow">ABOUT</div>
          <h1 className="hq-h1" style={{ marginTop: 14, fontSize: 44 }}>会社情報</h1>
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: '0 auto', padding: '88px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          <div>
            <div className="hq-eyebrow">VISION</div>
            <h2 className="hq-h2" style={{ marginTop: 14, fontSize: 28 }}>ひらめきを、埋もれさせない。</h2>
            <p style={{ fontSize: 15, color: HQ.sub, lineHeight: 2.1, marginTop: 18 }}>
              各人が持つ才能やアイデアはとても素晴らしい。けれど、それを実際にカタチにすることはとても難しい。<br/>
              そのままでは埋もれてしまうアイデアを実現させるために必要な支援を行い、共に未来にわくわくできるような楽しい世界を作る。
            </p>
          </div>
          <div>
            <div className="hq-eyebrow">MISSION</div>
            <h2 className="hq-h2" style={{ marginTop: 14, fontSize: 28 }}>確実に実現し、予想を上回る。</h2>
            <p style={{ fontSize: 15, color: HQ.sub, lineHeight: 2.1, marginTop: 18 }}>
              アイデアを実際に具現化できるように、プロフェッショナルとして様々な技術や手法を学び、そのアイデアを確実に実現させ、かつ元の予想を上回るような提案や支援をしていく。
            </p>
          </div>
        </div>
      </section>

      <div className="hq-divider"/>

      <section style={{ background: HQ.bgAlt }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '72px 40px' }}>
          <div className="hq-eyebrow">NAMING</div>
          <h2 className="hq-h2" style={{ marginTop: 14, fontSize: 28 }}>“HirameQ”の由来</h2>
          <p style={{ fontSize: 15, color: HQ.sub, lineHeight: 2.1, marginTop: 18, maxWidth: 720 }}>
            わくわくするようなアイデアが「<b style={{ color: HQ.ink, fontWeight: 600 }}>ひらめく</b>」ような世界を作りたい。<br/>
            そのアイデアを<b style={{ color: HQ.ink, fontWeight: 600 }}>素早く（Quick）、質良く（Quality）</b>実現に向けて、未来を拓く支援をしていく。<br/>
            そんな目標を込めて「HirameQ」と名付けました。
          </p>
        </div>
      </section>

      <div className="hq-divider"/>

      <section style={{ maxWidth: 1180, margin: '0 auto', padding: '72px 40px' }}>
        <div className="hq-eyebrow">COMPANY</div>
        <h2 className="hq-h2" style={{ marginTop: 14, fontSize: 28 }}>会社概要</h2>
        <div style={{ marginTop: 32, border: `1px solid ${HQ.line}`, borderRadius: 8, overflow: 'hidden' }}>
          {companyInfo.map(([k, v], i) => (
            <div key={k} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderTop: i ? `1px solid ${HQ.line}` : 'none' }}>
              <div style={{ background: HQ.bgAlt, padding: '18px 24px', fontSize: 13, color: HQ.sub, fontWeight: 600 }}>{k}</div>
              <div style={{ padding: '18px 24px', fontSize: 14, color: HQ.ink }}>{v}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: HQ.bgAlt, borderTop: `1px solid ${HQ.line}` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '72px 40px' }}>
          <div className="hq-eyebrow">HISTORY</div>
          <h2 className="hq-h2" style={{ marginTop: 14, fontSize: 28 }}>沿革と背景</h2>
          <p style={{ fontSize: 14, color: HQ.sub, lineHeight: 2, marginTop: 18, maxWidth: 760 }}>
            代表は、ロボットメーカーでコミュニケーションロボットのAndroidアプリ・組込み・Web開発を、その後IoT機器メーカーでハードウェア設計・ライブラリ・ドキュメント整備までを経験。2020年に独立し、合同会社HirameQを設立しました。
          </p>
          <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
            {history.map(c => (
              <div key={c.y} style={{ padding: 22, background: '#fff', border: `1px solid ${HQ.line}`, borderRadius: 8 }}>
                <div style={{ fontSize: 11, color: HQ.blue, fontFamily: 'ui-monospace, monospace', letterSpacing: 1, fontWeight: 700 }}>{c.y}</div>
                <div style={{ fontSize: 15, fontWeight: 700, marginTop: 8 }}>{c.t}</div>
                <p style={{ fontSize: 12, color: HQ.sub, lineHeight: 1.85, marginTop: 10, marginBottom: 0 }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </HQPage>
  );
}
