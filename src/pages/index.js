import React from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {HQ, HQPage} from '../components/HQShell';

const services = [
  { no: '01', t: 'ハードウェア', s: 'IoT機器・遠隔制御・規格対応', d: 'センサーで現場のデータを取得し、無線でクラウドへつなぐ装置や、ビル・住宅全体の電力使用を最適化する制御システムまで。', tags: ['IoTデバイス', '遠隔制御', 'KNX/DALI', 'ECHONET Lite', 'OCPP'] },
  { no: '02', t: 'モバイルアプリ', s: '業務用端末から一般向けまで', d: 'ハンディターミナル・決済端末・医療機器など現場で使う業務アプリから、BLE機器と連携する一般ユーザー向けアプリまで対応します。', tags: ['ハンディターミナル', 'キーエンス', '決済端末', '医療現場', 'Android'] },
  { no: '03', t: 'Webアプリケーション', s: '管理画面・業務改善・可視化', d: 'IoT機器の管理サイト、紙やExcelからの業務改善、データ可視化ダッシュボード、既存システムとのAPI連携まで。', tags: ['管理画面', '業務システム', '可視化', 'API連携', '新規サービス'] },
];

const works = [
  { c: '#DCE7F5', cat: 'IoT / HW', t: 'IoT開発ボード Nefry', d: 'dotstudio社と共同開発。基板〜量産販売まで一括対応、累計数千台。', meta: '販売実績 数千台', img: '/img/main/nefry.png' },
  { c: '#E5DEF5', cat: '研究 / HW', t: 'モンスターウルフ拡張基板', d: '大学との共同研究。xbeeメッシュで山間部通信を実現。基板とファームウェアを開発。', meta: '共同研究', img: '/img/main/monster_wolf.png' },
  { c: '#DFE9DA', cat: '教育 / HW', t: 'CocoaBit', d: 'ワンフットシーバスと共同。littleBits対応のIoT開発ボード。基板〜少量量産。', meta: '受託開発', img: '/img/main/cocoabit.png' },
];

const reasons = [
  { n: '01', t: '“最後の1mm”まで届く', d: '基板からアプリのUIまで、同じチームが責任を持って整えます。', kpi: 'HW + Firmware + Mobile + Web' },
  { n: '02', t: '0→1から、1→10まで', d: '新規事業の立ち上げや実現性調査が得意分野です。小さく試して、量産化・運用フェーズまで伴走します。', kpi: '実績例：建設現場IoT、医療用IoT' },
  { n: '03', t: 'クライアントと一緒に考える', d: '仕様書がなくても大丈夫。「こんなことができないか」という漠然としたアイデアから、一緒に具体化していきます。', kpi: '要件整理から伴走 / 仕様書なしOK' },
];

const steps = [
  { n: '01', t: '相談', d: 'メール or フォームから', dur: '無料・30分〜' },
  { n: '02', t: '要件整理', d: '予算感を早めに教えていただければ、それに合わせた提案をします', dur: '1〜2週' },
  { n: '03', t: '見積・契約', d: 'フェーズ分割で着手しやすく', dur: '〜1週' },
  { n: '04', t: '開発・試作', d: '進捗共有しながら試作を進行', dur: '1〜6ヶ月' },
  { n: '05', t: '納品・運用', d: '量産・保守・改善まで', dur: '継続' },
];

function WorkCard({w}) {
  const imgUrl = useBaseUrl(w.img);
  return (
    <Link to="/works/" className="hq-card" style={{ overflow: 'hidden', cursor: 'pointer', display: 'block', textDecoration: 'none', color: 'inherit' }}>
      <div style={{ aspectRatio: '4 / 3', background: w.c, position: 'relative', overflow: 'hidden', padding: 28 }}>
        <img src={imgUrl} alt={w.t} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}/>
      </div>
      <div style={{ padding: '22px 24px 26px' }}>
        <div style={{ fontSize: 11, color: HQ.blue, letterSpacing: 1.5, fontWeight: 600 }}>{w.cat}</div>
        <div style={{ fontSize: 18, fontWeight: 700, marginTop: 6 }}>{w.t}</div>
        <p style={{ fontSize: 13, color: HQ.sub, lineHeight: 1.85, marginTop: 10, marginBottom: 14 }}>{w.d}</p>
        <div style={{ fontSize: 11, color: HQ.sub, fontFamily: 'ui-monospace, monospace', borderTop: `1px solid ${HQ.line}`, paddingTop: 12 }}>{w.meta}</div>
      </div>
    </Link>
  );
}

export default function Home() {
  const {siteConfig = {}} = useDocusaurusContext();
  return (
    <HQPage current="home">
      <Head>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.tagline}/>
      </Head>

      {/* HERO */}
      <section style={{ maxWidth: 1180, margin: '0 auto', padding: '88px 40px 72px', display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 64, alignItems: 'center' }}>
        <div className="hq-fade">
          <div className="hq-eyebrow">HARDWARE × MOBILE × WEB</div>
          <h1 className="hq-h1" style={{ marginTop: 24, fontSize: 52 }}>
            アイデアを、<br />
            <span style={{ color: HQ.blue }}>素早く・質良く</span>、<br />
            実装まで。
          </h1>
          <p style={{ fontSize: 16, lineHeight: 2, color: HQ.sub, marginTop: 28, maxWidth: 540 }}>
            電子基板の設計から、ファームウェア、モバイルアプリ、Webまで。<br/>
            一括して開発できる体制で、皆さまのIoTプロダクトや業務改善を、構想から運用まで伴走します。
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
            <Link to="/contact/" className="hq-cta" style={{ padding: '14px 28px', textDecoration: 'none', color: '#fff', display: 'inline-block' }}>無料で相談する →</Link>
            <Link to="/works/" className="hq-ghost" style={{ padding: '14px 24px', textDecoration: 'none', display: 'inline-block' }}>実績を見る</Link>
          </div>
          <p style={{ fontSize: 12, color: HQ.sub, marginTop: 18 }}>
            アイデア段階のご相談歓迎 ／ NDA対応可 ／ <b style={{ color: HQ.ink, fontWeight: 600 }}>当社で難しい場合は他社のご紹介も可能です</b>
          </p>
        </div>

        <div style={{ position: 'relative', height: 460 }}>
          <svg viewBox="0 0 480 460" style={{ width: '100%', height: '100%' }}>
            <defs>
              <linearGradient id="hq-hero-g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor={HQ.blue} stopOpacity="0.12"/>
                <stop offset="1" stopColor={HQ.blue} stopOpacity="0"/>
              </linearGradient>
              <pattern id="hq-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M24 0 L0 0 0 24" stroke={HQ.line} strokeWidth="1" fill="none"/>
              </pattern>
            </defs>
            <rect width="480" height="460" fill="url(#hq-grid)"/>
            <circle cx="240" cy="230" r="180" fill="url(#hq-hero-g)"/>
            {[[120, 140], [360, 140], [240, 230], [120, 320], [360, 320], [240, 80], [240, 380]].map(([x,y], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="6" fill={HQ.blue}/>
                <circle cx={x} cy={y} r="14" fill="none" stroke={HQ.blue} strokeWidth="1" opacity="0.3"/>
              </g>
            ))}
            <path d="M 240 80 L 240 230 L 120 140 M 240 230 L 360 140 M 240 230 L 120 320 M 240 230 L 360 320 M 240 230 L 240 380" stroke={HQ.blue} strokeWidth="1.5" fill="none" opacity="0.5"/>
            <text x="240" y="234" textAnchor="middle" fill="#fff" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="700">Q</text>
          </svg>
          <div style={{ position: 'absolute', bottom: 16, right: 0, fontSize: 10, color: HQ.sub, letterSpacing: 2, fontFamily: 'ui-monospace, monospace' }}>FIG. 01 / SYSTEM</div>
        </div>
      </section>

      {/* 信頼指標 */}
      <section style={{ borderTop: `1px solid ${HQ.line}`, borderBottom: `1px solid ${HQ.line}`, background: HQ.bgAlt }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '28px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32 }}>
          <span style={{ fontSize: 12, color: HQ.sub, letterSpacing: 1, whiteSpace: 'nowrap' }}>これまでに支援してきた業界</span>
          <div style={{ display: 'flex', gap: 28, fontSize: 13, color: HQ.subLight, fontWeight: 500, flexWrap: 'wrap' }}>
            <span>製造業</span><span>医療</span><span>建設</span><span>農業・獣害対策</span><span>教育・研究</span><span>太陽光・エネルギー</span><span>小売・POS</span><span>物流・在庫</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ maxWidth: 1180, margin: '0 auto', padding: '96px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, gap: 32 }}>
          <div>
            <div className="hq-eyebrow">SERVICES — 01</div>
            <h2 className="hq-h2" style={{ marginTop: 14 }}>3つの領域を、ひとつのチームで。</h2>
          </div>
          <p style={{ fontSize: 14, color: HQ.sub, lineHeight: 1.95, maxWidth: 380, margin: 0 }}>
            複数のベンダーに分かれがちな領域を一括で受託。<br/>
            仕様の橋渡しコストを最小化し、量産・運用までのリードタイムを短縮します。
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {services.map(s => (
            <Link to="/services/" key={s.no} className="hq-card" style={{ padding: 32, cursor: 'pointer', display: 'block', textDecoration: 'none', color: 'inherit' }}>
              <div style={{ fontSize: 11, color: HQ.blue, fontWeight: 700, letterSpacing: 2, fontFamily: 'ui-monospace, monospace' }}>{s.no}</div>
              <div className="hq-h3" style={{ marginTop: 14, fontSize: 21 }}>{s.t}</div>
              <div style={{ fontSize: 12, color: HQ.blue, marginTop: 4 }}>{s.s}</div>
              <p style={{ fontSize: 13, color: HQ.sub, lineHeight: 1.95, marginTop: 18 }}>{s.d}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 24 }}>
                {s.tags.map(t => <span key={t} className="hq-tag">{t}</span>)}
              </div>
              <div style={{ marginTop: 22, fontSize: 12, color: HQ.blue, fontWeight: 600 }}>領域の詳細を見る →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* WORKS preview */}
      <section style={{ background: HQ.bgAlt, borderTop: `1px solid ${HQ.line}`, borderBottom: `1px solid ${HQ.line}` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '96px 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, gap: 32 }}>
            <div>
              <div className="hq-eyebrow">WORKS — 02</div>
              <h2 className="hq-h2" style={{ marginTop: 14 }}>これまでの実績、抜粋。</h2>
            </div>
            <Link to="/works/" style={{ fontSize: 14, color: HQ.blue, fontWeight: 600, cursor: 'pointer' }}>すべての実績を見る →</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {works.map(w => <WorkCard key={w.t} w={w}/>)}
          </div>

          <div style={{ marginTop: 36, padding: '20px 28px', background: '#fff', border: `1px dashed ${HQ.blue}66`, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 18 }}>
            <div style={{ width: 36, height: 36, background: HQ.blueLight, borderRadius: 999, display: 'grid', placeItems: 'center', color: HQ.blue, fontWeight: 700, fontFamily: 'ui-monospace, monospace', flexShrink: 0 }}>i</div>
            <div style={{ fontSize: 13, color: HQ.sub, lineHeight: 1.85 }}>
              <b style={{ color: HQ.ink, fontWeight: 600 }}>守秘義務によりサイトに掲載していない案件も多数あります。</b> 業界・規模・技術スタックの近い事例があるかは、お気軽にお問い合わせください。
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section style={{ maxWidth: 1180, margin: '0 auto', padding: '96px 40px' }}>
        <div style={{ marginBottom: 56 }}>
          <div className="hq-eyebrow">WHY HIRAMEQ — 03</div>
          <h2 className="hq-h2" style={{ marginTop: 14 }}>選ばれる、3つの理由。</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {reasons.map(c => (
            <div key={c.n} style={{ borderTop: `2px solid ${HQ.blue}`, paddingTop: 22 }}>
              <div style={{ fontSize: 11, color: HQ.blue, fontWeight: 700, letterSpacing: 2, fontFamily: 'ui-monospace, monospace' }}>POINT {c.n}</div>
              <div className="hq-h3" style={{ marginTop: 12, fontSize: 22 }}>{c.t}</div>
              <p style={{ fontSize: 14, color: HQ.sub, lineHeight: 2, marginTop: 14 }}>{c.d}</p>
              <div style={{ fontSize: 11, color: HQ.sub, fontFamily: 'ui-monospace, monospace', marginTop: 18, paddingTop: 14, borderTop: `1px dashed ${HQ.line}` }}>{c.kpi}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS preview */}
      <section style={{ background: HQ.blueDark, color: '#fff' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '96px 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, gap: 32 }}>
            <div>
              <div className="hq-eyebrow" style={{ color: '#9DB8DA' }}>PROCESS — 04</div>
              <h2 className="hq-h2" style={{ marginTop: 14, color: '#fff' }}>発注の流れ。</h2>
              <p style={{ fontSize: 14, color: '#B7C7DD', marginTop: 14, lineHeight: 1.95, maxWidth: 540 }}>
                ふわっとしたアイデアからのご相談で大丈夫です。<b style={{ color: '#fff', fontWeight: 600 }}>当社で対応が難しい案件は、信頼できる他社をご紹介することも可能</b>。気軽な雑談からどうぞ。
              </p>
            </div>
            <Link to="/process/" style={{ fontSize: 14, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>詳しい流れを見る →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 22, left: '10%', right: '10%', height: 1, background: 'rgba(255,255,255,0.18)', zIndex: 0 }}/>
            {steps.map(p => (
              <div key={p.n} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{ width: 44, height: 44, background: HQ.blueDark, border: `2px solid #fff`, borderRadius: 999, margin: '0 auto', display: 'grid', placeItems: 'center', fontSize: 13, fontWeight: 700, color: '#fff', fontFamily: 'ui-monospace, monospace' }}>{p.n}</div>
                <div style={{ fontSize: 16, fontWeight: 700, marginTop: 18, color: '#fff' }}>{p.t}</div>
                <div style={{ fontSize: 12, color: '#B7C7DD', marginTop: 6, lineHeight: 1.7, padding: '0 12px' }}>{p.d}</div>
                <div style={{ fontSize: 11, color: '#9DB8DA', marginTop: 10, fontFamily: 'ui-monospace, monospace' }}>{p.dur}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </HQPage>
  );
}
