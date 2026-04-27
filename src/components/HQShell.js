import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export const HQ = {
  blue: '#1E4D8C',
  blueDark: '#0F2D5C',
  blueLight: '#E8F0FA',
  ink: '#0E1726',
  sub: '#5A6B82',
  subLight: '#7C8DA8',
  line: '#E3E8F0',
  bg: '#FFFFFF',
  bgAlt: '#F7F9FC',
  accent: '#D6A14A',
  green: '#1F8C5A',
};

export const HQStyles = () => (
  <style>{`
    html, body { margin: 0; padding: 0; }
    .hq-root, .hq-root * { box-sizing: border-box; }
    .hq-root {
      font-family: 'Noto Sans JP', system-ui, -apple-system, sans-serif;
      color: ${HQ.ink};
      background: ${HQ.bg};
      -webkit-font-smoothing: antialiased;
      font-feature-settings: 'palt';
      line-height: 1.7;
    }
    .hq-root a { color: inherit; text-decoration: none; }
    @keyframes hq-fade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
    .hq-root .hq-fade { animation: hq-fade 0.7s both; }
    .hq-root .hq-link { color: ${HQ.sub}; transition: color 0.2s; }
    .hq-root .hq-link:hover { color: ${HQ.blue}; }
    .hq-root .hq-card { background: #fff; border: 1px solid ${HQ.line}; border-radius: 8px; transition: all 0.25s; }
    .hq-root .hq-card:hover { transform: translateY(-2px); box-shadow: 0 12px 32px -16px rgba(15,45,92,0.18); border-color: ${HQ.blue}33; }
    .hq-root .hq-cta { padding: 12px 24px; font-size: 14px; border: none; background: ${HQ.blue}; color: #fff; border-radius: 4px; cursor: pointer; font-weight: 600; transition: background 0.2s; font-family: inherit; }
    .hq-root .hq-cta:hover { background: ${HQ.blueDark}; color: #fff; }
    .hq-root .hq-ghost { padding: 12px 22px; font-size: 14px; border: 1px solid ${HQ.line}; background: #fff; color: ${HQ.ink}; border-radius: 4px; cursor: pointer; transition: all 0.2s; font-family: inherit; }
    .hq-root .hq-ghost:hover { background: ${HQ.blueLight}; border-color: ${HQ.blue}33; color: ${HQ.ink}; }
    .hq-root .hq-tag { display: inline-block; font-size: 11px; padding: 4px 10px; background: ${HQ.blueLight}; color: ${HQ.blueDark}; border-radius: 999px; font-weight: 500; }
    .hq-root .hq-eyebrow { font-size: 11px; color: ${HQ.blue}; letter-spacing: 3px; font-weight: 600; }
    .hq-root .hq-h1 { font-size: 48px; line-height: 1.35; font-weight: 700; letter-spacing: -0.5px; margin: 0; }
    .hq-root .hq-h2 { font-size: 34px; line-height: 1.4; font-weight: 700; letter-spacing: -0.3px; margin: 0; }
    .hq-root .hq-h3 { font-size: 20px; line-height: 1.5; font-weight: 700; margin: 0; }
    .hq-root .hq-mono { font-family: ui-monospace, "SF Mono", Menlo, monospace; }
    .hq-root .hq-divider { height: 1px; background: ${HQ.line}; }
  `}</style>
);

const NAV_ITEMS = [
  { id: 'services', t: 'サービス', to: '/services/' },
  { id: 'works', t: '実績', to: '/works/' },
  { id: 'process', t: '進め方', to: '/process/' },
  { id: 'about', t: '会社情報', to: '/about/' },
  { id: 'docs', t: '作品・事例', to: '/docs/' },
];

export const HQHeader = ({ current = 'home' }) => {
  const logoUrl = useBaseUrl('/img/hirameq.png');
  return (
    <header style={{ position: 'sticky', top: 0, background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(8px)', borderBottom: `1px solid ${HQ.line}`, zIndex: 50 }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '18px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
          <img src={logoUrl} alt="HirameQ" style={{ height: 36, width: 'auto', display: 'block' }}/>
        </Link>
        <nav style={{ display: 'flex', gap: 28, fontSize: 14 }}>
          {NAV_ITEMS.map(it => (
            <Link key={it.id} to={it.to}
              style={{ color: current === it.id ? HQ.ink : HQ.sub, fontWeight: current === it.id ? 600 : 400, cursor: 'pointer', transition: 'color 0.2s', position: 'relative', paddingBottom: 2, borderBottom: current === it.id ? `2px solid ${HQ.blue}` : '2px solid transparent' }}>
              {it.t}
            </Link>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 10 }}>
          <Link to="/contact/" className="hq-cta" style={{ padding: '10px 20px', fontSize: 13, display: 'inline-block', textDecoration: 'none', color: '#fff' }}>お問い合わせ →</Link>
        </div>
      </div>
    </header>
  );
};

const FOOTER_COLS = [
  { h: 'サービス', l: [['/services/', 'サービス領域'], ['/process/', '発注の流れ・予算感']] },
  { h: '会社・実績', l: [['/about/', '会社情報'], ['/works/', '実績一覧'], ['/docs/', '作品・事例リスト']] },
  { h: 'コンタクト', l: [['/contact/', 'お問い合わせ'], ['ext:https://nefry.studio', 'Nefry'], ['ext:https://github.com/hirameq', 'GitHub']] },
];

export const HQFooter = () => {
  const logoUrl = useBaseUrl('/img/hirameq_logo.png');
  return (
    <footer style={{ background: '#F4F6FA', color: '#5C6B85', padding: '64px 0 36px', marginTop: 0, borderTop: `1px solid #D8DEE8` }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 48 }}>
        <div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <img src={logoUrl} alt="HirameQ" style={{ height: 32, width: 'auto', display: 'block' }}/>
          </div>
          <div style={{ color: HQ.ink, fontWeight: 700, letterSpacing: 0.5, marginTop: 12, fontSize: 13 }}>合同会社 HirameQ</div>
          <p style={{ fontSize: 12, lineHeight: 1.95, marginTop: 18, color: '#5C6B85' }}>
            〒447-0043 愛知県碧南市幸町5-8<br/>
            info at hirameq.jp<br/>
            法人番号 3011003011609
          </p>
          <p style={{ fontSize: 12, color: HQ.blue, marginTop: 18, lineHeight: 1.8, fontWeight: 600 }}>
            “アイデアを、素早く・質良く、<br/>実装まで”
          </p>
        </div>
        {FOOTER_COLS.map(c => (
          <div key={c.h}>
            <div style={{ color: HQ.blue, fontSize: 11, letterSpacing: 2, fontWeight: 700 }}>{c.h.toUpperCase()}</div>
            <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 11, fontSize: 13 }}>
              {c.l.map(([to, label]) => {
                if (to.startsWith('ext:')) {
                  return <a key={label} href={to.slice(4)} target="_blank" rel="noopener noreferrer" className="hq-link" style={{ color: '#5C6B85' }}>{label}</a>;
                }
                return <Link key={label} to={to} className="hq-link" style={{ color: '#5C6B85' }}>{label}</Link>;
              })}
            </div>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1180, margin: '40px auto 0', padding: '24px 40px 0', borderTop: '1px solid #D8DEE8', fontSize: 11, color: '#8898B0' }}>
        <span>© {new Date().getFullYear()} HirameQ LLC.</span>
      </div>
    </footer>
  );
};

export const HQConsultCTA = () => (
  <section style={{ background: HQ.bgAlt, borderTop: `1px solid ${HQ.line}`, borderBottom: `1px solid ${HQ.line}` }}>
    <div style={{ maxWidth: 1180, margin: '0 auto', padding: '72px 40px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'center' }}>
      <div>
        <div className="hq-eyebrow">LET'S TALK</div>
        <h2 className="hq-h2" style={{ marginTop: 14 }}>
          まずは、<span style={{ color: HQ.blue }}>気軽に</span>ご相談ください。
        </h2>
        <p style={{ fontSize: 14, color: HQ.sub, marginTop: 18, lineHeight: 2 }}>
          アイデア段階でも、技術的に実現できるか分からなくても大丈夫です。<br/>
          初回ヒアリングは無料。<b style={{ color: HQ.ink, fontWeight: 600 }}>当社で対応が難しい場合は、信頼できる他社をご紹介することも可能です。</b>まずは話を聞かせてください。
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Link to="/contact/" className="hq-cta" style={{ padding: '16px 28px', fontSize: 14, textAlign: 'center', textDecoration: 'none', color: '#fff', display: 'inline-block' }}>お問い合わせフォーム →</Link>
        <Link to="/process/" className="hq-ghost" style={{ padding: '16px 26px', textAlign: 'center', textDecoration: 'none', display: 'inline-block' }}>発注の流れを見る</Link>
        <div style={{ fontSize: 12, color: HQ.sub, marginTop: 8, paddingLeft: 4 }}>
          メール: info at hirameq.jp ／ 初回相談 30分・無料 ／ NDA対応可
        </div>
      </div>
    </div>
  </section>
);

export const HQPage = ({ current, children, includeCTA = true }) => (
  <div className="hq-root">
    <HQStyles />
    <HQHeader current={current} />
    {children}
    {includeCTA && <HQConsultCTA />}
    <HQFooter />
  </div>
);
