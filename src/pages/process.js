import React from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import {HQ, HQPage} from '../components/HQShell';

const stepDetails = [
  { n: '01', t: '相談', dur: '無料・30分〜', d: 'メールやお問い合わせフォームから、気軽にご連絡ください。アイデア段階や、技術的に実現できるか判断できない段階でも構いません。NDA対応も可能です。', detail: ['対応形式: オンライン (Zoom / Google Meet) / 対面 (愛知県)', '相談内容: アイデアの実現性、技術選定、進め方の概要、ざっくりの予算感'] },
  { n: '02', t: '要件整理', dur: '1〜2週', d: '実現したいこと、必要な機能、関わる人や既存システム、予算・納期の制約をすり合わせます。技術的な実現性と概算をお伝えします。', detail: ['アウトプット: 要件メモ・概算見積・進め方の提案', '体制が足りない場合はフリーランスや他社との組み合わせもご提案'] },
  { n: '03', t: '見積・契約', dur: '〜1週', d: 'ハードウェア試作、Androidアプリ単体、Web/業務システムなど、案件に応じてフェーズ分割しやすい形でご提案します。試作・PoCから始めて、運用・追加開発までを段階的に契約することも可能です。', detail: ['契約形態: 受託開発 / 月額 / フェーズ分割', 'フェーズ分割例（HW案件）: ① 実現性検証 → ② 試作 → ③ 量産化 → ④ 運用保守', 'フェーズ分割例（アプリ・Web案件）: ① プロトタイプ → ② MVP開発 → ③ 機能追加・改善'] },
  { n: '04', t: '開発・試作', dur: '1〜6ヶ月', d: '進捗を共有しながら開発を進めます。要件のずれや想定外の課題は、早い段階でお知らせ・相談します。ハードウェア／アプリ／Webそれぞれに合わせた進め方で対応します。', detail: ['コミュニケーション: 定例 / Slack / Backlog 等', 'HW案件: 試作で動作検証しながら、課題を早めに洗い出し', 'アプリ・Web案件: 動くものを早めに見ていただきながら、フィードバックを反映'] },
  { n: '05', t: '納品・運用', dur: '継続', d: '納品後の量産・保守・追加開発まで継続対応可能です。引き継ぎを意識した納品物（ドキュメント・テストコード・運用マニュアル）をお渡しします。', detail: ['納品物例（HW）: 基板データ / ファームウェア / 製造ファイル / 運用マニュアル', '納品物例（アプリ・Web）: ソースコード / API仕様 / ストア申請対応 / 運用ドキュメント', '保守: 継続契約・スポット対応どちらも相談可'] },
];

const phases = [
  {
    tag: 'PHASE 1',
    t: '試作・実現性検証',
    price: '50〜200',
    d: '動くプロトタイプで「そもそも実現できるか」「どう動くか」を確かめたい段階。少数の試作機・MVPアプリ・PoC的なWebシステムなど。',
    items: ['IoTデバイス試作（数台規模）', 'スマートフォンアプリのプロトタイプ', '小規模Webシステム（管理画面など）'],
  },
  {
    tag: 'PHASE 2',
    t: '小〜中規模開発',
    price: '100〜500',
    d: '1機能完結の業務システム、現場で使える業務アプリ、IoT機器の試作量産（数十〜数百台）など、本番運用を前提とした開発。',
    items: ['業務改善Webシステム（1機能完結）', 'ハンディ・決済端末向けアプリ', 'IoT機器の少量量産（〜数百台）'],
  },
  {
    tag: 'PHASE 3',
    t: '本格開発・複数領域',
    price: '500〜',
    d: 'ハードウェア＋アプリ＋Webを横断する大型案件、長期間の継続開発、複数機能を組み合わせた業務基盤など。',
    items: ['HW・アプリ・Web 一気通貫開発', '長期の継続開発・運用保守付き', '上流相談から量産・運用まで伴走'],
  },
];

const faqs = [
  { q: 'まだ仕様もアイデア段階ですが相談していいですか？', a: '大歓迎です。むしろ早い段階のほうが、技術的な選択肢を含めた良い提案ができます。実現性の検討や概算もお伝えできます。' },
  { q: '小さな改修や1機能だけの依頼でも対応できますか？', a: '対応可能です。フェーズ分割で着手しやすい形にしますので、まずは内容をお聞かせください。' },
  { q: '当社の業界に近い実績はありますか？', a: '製造業・医療・建設・農業・教育・小売など幅広く実績があります。守秘義務の関係で公開していない案件も多いので、近い事例があるかは個別にお答えします。' },
  { q: '量産まで対応してもらえますか？', a: '〜数百台規模の少量量産まで対応可能です。それ以上の量産は信頼できる量産パートナーと連携してご対応します。' },
  { q: '見積もりだけ出してもらうことは可能ですか？', a: '可能です。要件整理（1〜2週）の段階で概算見積をお出しします。' },
  { q: '当社で対応が難しい場合はどうなりますか？', a: '当社では対応できないとお伝えした上で、これまでの繋がりの中から、信頼できる他の開発会社・専門家をご紹介することがあります。' },
];

export default function Process() {
  return (
    <HQPage current="process">
      <Head>
        <title>発注の流れ・予算感 | 合同会社HirameQ</title>
        <meta name="description" content="相談から納品・運用までの5ステップと、予算感の目安。初回相談は無料・NDA対応可。"/>
      </Head>

      <section style={{ background: HQ.bgAlt, borderBottom: `1px solid ${HQ.line}` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '64px 40px 56px' }}>
          <div style={{ fontSize: 12, color: HQ.sub, marginBottom: 12 }}>
            <Link to="/" className="hq-link">ホーム</Link>
            <span style={{ margin: '0 10px', color: HQ.line }}>/</span>
            <span style={{ color: HQ.ink }}>進め方</span>
          </div>
          <div className="hq-eyebrow">PROCESS</div>
          <h1 className="hq-h1" style={{ marginTop: 14, fontSize: 44 }}>発注の流れと、進め方。</h1>
          <p style={{ fontSize: 15, color: HQ.sub, lineHeight: 2, marginTop: 22, maxWidth: 760 }}>
            アイデア段階や、技術的に実現できるかわからない段階のご相談を歓迎します。<br/>
            初回ヒアリング（30分）は無料・NDA対応可。気軽な雑談からどうぞ。
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: '0 auto', padding: '64px 40px 24px' }}>
        <div style={{ background: '#fff', border: `2px solid ${HQ.blue}`, borderRadius: 10, padding: '36px 40px', display: 'grid', gridTemplateColumns: '64px 1fr', gap: 28, alignItems: 'start' }}>
          <div style={{ width: 64, height: 64, background: HQ.blueLight, color: HQ.blue, display: 'grid', placeItems: 'center', borderRadius: 999, fontSize: 28, fontWeight: 700, fontFamily: 'ui-monospace, monospace' }}>!</div>
          <div>
            <div className="hq-h3" style={{ fontSize: 22, marginBottom: 8 }}>相見積もり・他社との比較検討も歓迎です。</div>
            <p style={{ fontSize: 14, color: HQ.sub, lineHeight: 2, margin: 0 }}>
              他社さんとの相見積もりでも構いません。当社の得意領域と合わない場合や、規模・タイミングが折り合わない場合は、これまでの繋がりの中から信頼できる開発会社・専門家をご紹介できることもあります。<br/>
              <b style={{ color: HQ.ink, fontWeight: 600 }}>「とりあえず話を聞いてもらう」用途で構いません。</b>気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: '0 auto', padding: '56px 40px' }}>
        <div className="hq-eyebrow">5 STEPS</div>
        <h2 className="hq-h2" style={{ marginTop: 14, fontSize: 30 }}>相談から納品・運用まで</h2>
        <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 0 }}>
          {stepDetails.map((s, i) => (
            <div key={s.n} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 32, padding: '36px 0', borderTop: i ? `1px solid ${HQ.line}` : 'none' }}>
              <div>
                <div style={{ width: 64, height: 64, background: HQ.blue, color: '#fff', borderRadius: 999, display: 'grid', placeItems: 'center', fontSize: 18, fontWeight: 700, fontFamily: 'ui-monospace, monospace' }}>{s.n}</div>
                <div style={{ fontSize: 11, color: HQ.blue, marginTop: 14, fontFamily: 'ui-monospace, monospace', letterSpacing: 1 }}>{s.dur}</div>
              </div>
              <div>
                <h3 className="hq-h3" style={{ fontSize: 22 }}>{s.t}</h3>
                <p style={{ fontSize: 15, color: HQ.sub, lineHeight: 2, marginTop: 10, maxWidth: 800 }}>{s.d}</p>
                <ul style={{ marginTop: 14, paddingLeft: 18 }}>
                  {s.detail.map(d => <li key={d} style={{ fontSize: 13, color: HQ.sub, lineHeight: 1.9 }}>{d}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="budget" style={{ borderTop: `1px solid ${HQ.line}`, background: '#fff', scrollMarginTop: 90 }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '72px 40px' }}>
          <div className="hq-eyebrow">BUDGET GUIDE</div>
          <h2 className="hq-h2" style={{ marginTop: 14, fontSize: 30 }}>予算感の目安</h2>
          <p style={{ fontSize: 14, color: HQ.sub, lineHeight: 2, marginTop: 18, maxWidth: 760 }}>
            実際の金額は要件・規模・期間によって大きく変わりますが、過去案件の傾向から「この規模ならこのくらい」という目安をお伝えします。<br/>
            <b style={{ color: HQ.ink, fontWeight: 600 }}>初回相談・概算見積もりは無料</b>です。予算感が合うかどうかも含めて、まずは気軽にご相談ください。
          </p>
          <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {phases.map(p => (
              <div key={p.tag} style={{ padding: 28, border: `1px solid ${HQ.line}`, borderRadius: 8, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 11, color: HQ.blue, fontWeight: 700, fontFamily: 'ui-monospace, monospace', letterSpacing: 1.5 }}>{p.tag}</div>
                <div className="hq-h3" style={{ marginTop: 10, fontSize: 19 }}>{p.t}</div>
                <div style={{ marginTop: 16, display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span style={{ fontSize: 32, fontWeight: 700, color: HQ.ink, letterSpacing: -0.5 }}>{p.price}</span>
                  <span style={{ fontSize: 14, color: HQ.sub, fontWeight: 600 }}>万円</span>
                  <span style={{ fontSize: 12, color: HQ.sub, marginLeft: 4 }}>目安</span>
                </div>
                <p style={{ fontSize: 13, color: HQ.sub, lineHeight: 1.95, marginTop: 16 }}>{p.d}</p>
                <div style={{ marginTop: 'auto', paddingTop: 18, borderTop: `1px solid ${HQ.line}` }}>
                  <div style={{ fontSize: 11, color: HQ.sub, fontFamily: 'ui-monospace, monospace', letterSpacing: 1, marginBottom: 8 }}>EXAMPLES</div>
                  <ul style={{ margin: 0, paddingLeft: 16 }}>
                    {p.items.map(it => <li key={it} style={{ fontSize: 12, color: HQ.ink, lineHeight: 1.85 }}>{it}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, padding: '20px 24px', background: HQ.bgAlt, borderRadius: 8, fontSize: 12, color: HQ.sub, lineHeight: 1.9 }}>
            ※ 上記はあくまで目安です。要件・期間・関わる人数によって変動します。<br/>
            ※ フェーズ分割でのご契約も可能です（例：まず試作、結果を見て本開発へ進む等）。<br/>
            ※ 予算が合わない場合は、要件の優先順位を調整するご提案や、規模感の合う他社をご紹介することもあります。
          </div>
        </div>
      </section>

      <section style={{ background: HQ.bgAlt, borderTop: `1px solid ${HQ.line}`, borderBottom: `1px solid ${HQ.line}` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '72px 40px' }}>
          <div className="hq-eyebrow">FAQ</div>
          <h2 className="hq-h2" style={{ marginTop: 14, fontSize: 30 }}>よくあるご質問</h2>
          <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {faqs.map(f => (
              <div key={f.q} style={{ padding: 24, background: '#fff', border: `1px solid ${HQ.line}`, borderRadius: 8 }}>
                <div style={{ display: 'flex', gap: 10 }}>
                  <span style={{ color: HQ.blue, fontWeight: 700, fontFamily: 'ui-monospace, monospace', flexShrink: 0 }}>Q.</span>
                  <div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.6 }}>{f.q}</div>
                </div>
                <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
                  <span style={{ color: HQ.sub, fontWeight: 700, fontFamily: 'ui-monospace, monospace', flexShrink: 0 }}>A.</span>
                  <p style={{ fontSize: 13, color: HQ.sub, lineHeight: 1.95, margin: 0 }}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </HQPage>
  );
}
