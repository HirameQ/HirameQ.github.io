import React from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import {HQ, HQPage} from '../components/HQShell';
import LedShelf from '../components/LedShelf';

// 出典: keyence/led_bar/decks「棚下LEDガイド ご紹介」（2026-09）。
// 納品した実績ではなく、デモ機で動きを見せられる仕組みなので、実績（/works/）の下には置かない。
// 「デモでお見せできる」と「作り込みで対応する」を必ず書き分ける（できないことを、できるように見せない）。

const TITLE = '棚下LEDガイド｜キーエンス ハンディターミナルで読むと棚が光る ピッキング・棚入れ | 合同会社HirameQ';
const DESC = 'キーエンスのハンディターミナル（BT-A1000）でQRを読むと、棚の下のLEDバーが決めた場所・色・光り方で光ります。ピッキング・棚入れ・工具の返却など、探す・覚える・見比べる作業を光で示す仕組みです。PC・サーバなし、棚1列から始められます。';

const places = [
  { t: '「どこだっけ」と探している棚', d: '品番が多い・似ている・使う頻度が低い。棚の前で手が止まる場所。' },
  { t: '取り間違えると困る部品', d: '見た目が似ている、左右違い・色違い。間違えると後の工程で気づく部品。' },
  { t: '覚えている人しかできない作業', d: 'その人が休むと止まる、教えるのに時間がかかる。棚入れ・部品そろえなど。' },
  { t: '順番や急ぎを伝えたい作業', d: '先に使うもの、急ぎのもの、古いものから。口頭や貼り紙で伝えている作業。' },
];

// demo: デモでお見せできる / false: 作り込みで対応
const uses = [
  { t: 'ピッキング', demo: true, now: '伝票の棚番を見て、棚の札を1つずつ探す。似た部品が並ぶと、隣の間口から取ってしまう。', lit: '伝票を読むと、取る棚が光る。光っている間口から取り、もう一度読んで消す。' },
  { t: '棚入れ', demo: true, now: 'しまう場所を覚えている人しか棚入れできず、その人に作業が集まる。', lit: '部品のラベルを読めば置き場が光る。初めての人でも、同じ速さで棚入れできる。' },
  { t: '工具・治具の返却', demo: true, lit: '返す物を読むと、戻す場所が光る。置き場が乱れない。' },
  { t: '急ぎの部品', demo: true, lit: '急ぎのものだけ、赤で速く点滅。優先が一目で伝わる。' },
  { t: '組立の部品そろえ', demo: false, now: '部品表を見ながら1点ずつ棚を探す。1つ取り忘れても気づきにくい。', lit: '作業指示を読むと、使う部品の棚が順に光る。全部そろうと消え、取り忘れが残らない。' },
  { t: '複数人の同時作業', demo: false, now: '同じ棚に2人以上が入ると、どの棚が誰の指示か分からなくなる。', lit: '作業者ごとに色を分ける。自分の色だけを追えばよい。' },
  { t: '先入れ先出し', demo: false, lit: '古いロットの棚を先に光らせる。在庫の情報とつなぎます。' },
  { t: '補充・棚卸し', demo: false, lit: '補充が要る棚、数え残した棚を光らせる。在庫の情報とつなぎます。' },
];

const flow = [
  { t: 'ハンディ端末', d: 'QRを読み、対応表で光らせる場所を決めて、無線（Bluetooth）で送ります。' },
  { t: '小型コントローラ', d: 'LEDバー1本に1台。自分宛ての指示だけを受け、バーを光らせます。' },
  { t: '棚下LEDバー', d: 'LEDを1個ずつ、決めた色・光り方で点けたり消したりします。' },
];

const points = [
  { t: '光らせる場所を細かく選べる', d: '間口ごと、LED1個の細かさまで。1本のバーを区切って使えます。' },
  { t: '色と光り方を選べる', d: '色、点灯・点滅・ゆっくり明滅、何秒で自動で消えるかを決められます。' },
  { t: '何台のハンディからでも', d: '同じ棚を、別の作業者のハンディから光らせられます。' },
  { t: '棚へ引くのは電源だけ', d: '指示は無線で届くので、PC・サーバも、棚との通信の線も要りません。' },
  { t: '棚1列から始められる', d: 'LEDバー1本とハンディ1台で動きます。棚が増えたら、バーを足すだけです。' },
  { t: '光らせ方は、あとから変えられる', d: 'どのQRで、どこを、何色で光らせるかは、ハンディの画面で登録し直せます。' },
];

const levels = [
  { t: 'ハンディだけ', tag: 'デモの形', d: '読んだものに合わせて光る。対応表はハンディの中にあり、PCもサーバも要りません。' },
  { t: '事務所のPCとつなぐ', d: '事務所から「これを取って」と棚を光らせる。誰が・いつ・どの棚から取ったかを残せます。' },
  { t: '在庫・生産管理とつなぐ', d: '補充が要る棚、古いロット、数え残した棚を自動で光らせる。生産の予定に合わせて、次に使う部品を先に光らせます。' },
];

const custom = [
  ['読むもの', 'いまお使いの伝票・かんばん・部品ラベルのQRやバーコードをそのまま読み、中の品番・伝票番号から光らせる棚を決めます。'],
  ['棚と品番の対応', '品番マスタや棚番表（Excel・CSV）から、まとめて作ります。変更も表の差し替えで済みます。'],
  ['光らせ方', '作業者ごと・急ぎ・工程ごとなど、御社のルールで色と点滅の意味を決めます。'],
  ['画面と操作', '担当者・数量の入力や作業の記録など、御社の作業の流れに合わせます。'],
  ['LEDバー', '棚の幅・段数に合わせて、長さと本数、取り付け方を決めます。'],
];

function Badge({demo}) {
  return demo
    ? <span style={{ fontSize: 11, fontWeight: 700, color: HQ.green, background: '#EEF7F2', border: `1px solid ${HQ.green}55`, borderRadius: 999, padding: '2px 10px', whiteSpace: 'nowrap' }}>デモでお見せできます</span>
    : <span style={{ fontSize: 11, fontWeight: 700, color: HQ.sub, background: HQ.bgAlt, border: `1px solid ${HQ.line}`, borderRadius: 999, padding: '2px 10px', whiteSpace: 'nowrap' }}>作り込みで対応</span>;
}

function SectionHead({eyebrow, title, lead}) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div className="hq-eyebrow">{eyebrow}</div>
      <h2 className="hq-h2" style={{ marginTop: 14 }}>{title}</h2>
      {lead && <p style={{ fontSize: 14, color: HQ.sub, lineHeight: 1.95, marginTop: 14, marginBottom: 0, maxWidth: 780 }}>{lead}</p>}
    </div>
  );
}

export default function LedGuide() {
  const brokenLinks = useBrokenLinks();
  ['places', 'uses', 'how', 'custom'].forEach(id => brokenLinks.collectAnchor(id));
  return (
    <HQPage current="resources">
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESC}/>
        <meta property="og:title" content={TITLE}/>
        <meta property="og:description" content={DESC}/>
      </Head>

      <section style={{ background: HQ.bgAlt, borderBottom: `1px solid ${HQ.line}` }}>
        <div className="hq-wrap hq-g2" style={{ paddingTop: 64, paddingBottom: 56, gap: 48, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 12, color: HQ.sub, marginBottom: 12 }}>
              <Link to="/" className="hq-link">ホーム</Link>
              <span style={{ margin: '0 10px', color: HQ.line }}>/</span>
              <Link to="/resources/" className="hq-link">資料</Link>
              <span style={{ margin: '0 10px', color: HQ.line }}>/</span>
              <span style={{ color: HQ.ink }}>棚下LEDガイド</span>
            </div>
            <div className="hq-eyebrow">KEYENCE HANDY TERMINAL × LED</div>
            <h1 className="hq-h1" style={{ marginTop: 14, fontSize: 40 }}>読んだら、棚が光る。<br/><span style={{ fontSize: 26 }}>棚下LEDガイド</span></h1>
            <p style={{ fontSize: 15, color: HQ.sub, lineHeight: 2, marginTop: 20 }}>
              キーエンスのハンディターミナル（BT-A1000）でQRを読むと、棚の下のLEDバーが、決めた場所・色・光り方で光ります。
              「探す」「覚える」「見比べる」を光に任せる、光で示すピッキング・棚入れの仕組みです。
            </p>
            <p style={{ fontSize: 12, color: HQ.sub, marginTop: 12, marginBottom: 0 }}>
              デモ機で動きをお見せできます。実際には、御社の伝票・データ・棚に合わせて作り込みます。
            </p>
          </div>
          <LedShelf/>
        </div>
      </section>

      <section id="places" style={{ scrollMarginTop: 80 }}>
        <div className="hq-wrap" style={{ paddingTop: 80, paddingBottom: 72 }}>
          <SectionHead eyebrow="WHERE IT HELPS" title="こんな棚・作業が、光ると楽になります"/>
          <div className="hq-g2">
            {places.map(p => (
              <div key={p.t} style={{ padding: 22, border: `1px solid ${HQ.line}`, borderRadius: 8, background: '#fff' }}>
                <div style={{ fontSize: 16, fontWeight: 700 }}>{p.t}</div>
                <p style={{ fontSize: 13, color: HQ.sub, lineHeight: 1.85, margin: '8px 0 0' }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="uses" style={{ scrollMarginTop: 80, background: HQ.bgAlt, borderTop: `1px solid ${HQ.line}`, borderBottom: `1px solid ${HQ.line}` }}>
        <div className="hq-wrap" style={{ paddingTop: 80, paddingBottom: 72 }}>
          <SectionHead eyebrow="USE CASES" title="使い道" lead="いまデモ機で動きをお見せできるものと、光らせ方を作り込んで実現するものを分けて書いています。"/>
          <div className="hq-g2">
            {uses.map(u => (
              <div key={u.t} style={{ padding: 22, border: `1px solid ${HQ.line}`, borderRadius: 8, background: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <div style={{ fontSize: 16, fontWeight: 700 }}>{u.t}</div>
                  <Badge demo={u.demo}/>
                </div>
                {u.now && <p style={{ fontSize: 13, color: HQ.sub, lineHeight: 1.85, margin: '10px 0 0' }}>いま：{u.now}</p>}
                <p style={{ fontSize: 13, color: HQ.ink, lineHeight: 1.85, margin: '8px 0 0' }}><b style={{ color: HQ.green }}>▶ </b>{u.lit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" style={{ scrollMarginTop: 80 }}>
        <div className="hq-wrap" style={{ paddingTop: 80, paddingBottom: 72 }}>
          <SectionHead eyebrow="HOW IT WORKS" title="しくみ：ハンディから無線で、LEDバーへ直接指示します" lead="間にPCやサーバを置かないので、つなぐ手間も、止まる箇所も増えません。"/>
          <div style={{ display: 'flex', gap: 12, alignItems: 'stretch', flexWrap: 'wrap' }}>
            {flow.map((f, i) => (
              <React.Fragment key={f.t}>
                {i > 0 && <div style={{ alignSelf: 'center', color: HQ.blue, fontSize: 20 }}>→</div>}
                <div style={{ flex: '1 1 220px', padding: 20, border: `1px solid ${HQ.blue}55`, borderRadius: 8, background: HQ.blueLight }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: HQ.blueDark }}>{f.t}</div>
                  <p style={{ fontSize: 13, color: HQ.ink, lineHeight: 1.85, margin: '8px 0 0' }}>{f.d}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="hq-g3" style={{ marginTop: 24 }}>
            {points.map(p => (
              <div key={p.t} style={{ padding: 20, border: `1px solid ${HQ.line}`, borderRadius: 8, background: '#fff' }}>
                <div style={{ fontSize: 15, fontWeight: 700 }}>{p.t}</div>
                <p style={{ fontSize: 13, color: HQ.sub, lineHeight: 1.85, margin: '8px 0 0' }}>{p.d}</p>
              </div>
            ))}
          </div>

          <h3 className="hq-h3" style={{ marginTop: 56 }}>つなぐと、光で伝えられることが増えます</h3>
          <p style={{ fontSize: 13, color: HQ.sub, lineHeight: 1.9, marginTop: 8 }}>まずはハンディとLEDバーだけで始め、効果が見えたところから広げる進め方ができます。</p>
          <div className="hq-g3" style={{ marginTop: 16 }}>
            {levels.map((l, i) => (
              <div key={l.t} style={{ padding: 20, borderTop: `3px solid ${HQ.blue}`, background: HQ.bgAlt, borderRadius: 4 }}>
                <div style={{ fontSize: 11, color: HQ.blue, fontWeight: 700, letterSpacing: 2, fontFamily: 'ui-monospace, monospace' }}>STEP {i + 1}{l.tag ? `・${l.tag}` : ''}</div>
                <div style={{ fontSize: 15, fontWeight: 700, marginTop: 6 }}>{l.t}</div>
                <p style={{ fontSize: 13, color: HQ.sub, lineHeight: 1.85, margin: '8px 0 0' }}>{l.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="custom" style={{ scrollMarginTop: 80, background: HQ.bgAlt, borderTop: `1px solid ${HQ.line}` }}>
        <div className="hq-wrap" style={{ paddingTop: 80, paddingBottom: 72 }}>
          <SectionHead eyebrow="FOR YOUR SITE" title="御社向けに作るとき" lead="デモは「読むと光る」動きを見ていただくための見本です。ハンディとLEDバーの組み合わせはそのままに、読むもの・データ・画面を御社の業務に合わせます。"/>
          <div style={{ border: `1px solid ${HQ.line}`, borderRadius: 8, background: '#fff' }}>
            {custom.map(([k, v], i) => (
              <div key={k} style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 24px', padding: '16px 22px', borderTop: i ? `1px solid ${HQ.line}` : 0 }}>
                <div style={{ flex: '0 0 140px', fontSize: 14, fontWeight: 700 }}>{k}</div>
                <div style={{ flex: '1 1 320px', fontSize: 13, color: HQ.sub, lineHeight: 1.85 }}>{v}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, padding: 24, background: HQ.blueDark, color: '#fff', borderRadius: 8 }}>
            <div style={{ fontSize: 18, fontWeight: 700 }}>御社の現場では、どこが光ると楽になりそうですか</div>
            <p style={{ fontSize: 13, color: '#B7C7DD', lineHeight: 1.95, marginTop: 8 }}>
              お手元の伝票や品番の表をお借りできれば、それに沿った形でご提案します。デモ機で「読むと光る」動きもお見せできます。
            </p>
            <Link to="/contact/" className="hq-cta" style={{ marginTop: 6, padding: '12px 22px', display: 'inline-block', background: '#fff', color: HQ.blueDark }}>棚下LEDガイドについて相談する →</Link>
          </div>
          <p style={{ fontSize: 13, color: HQ.sub, marginTop: 24, marginBottom: 0 }}>
            ハンディターミナルの業務アプリの事例は <Link to="/works/handy/" style={{ color: HQ.blue, fontWeight: 600 }}>キーエンス ハンディターミナル導入事例</Link> をご覧ください。
          </p>
        </div>
      </section>
    </HQPage>
  );
}
