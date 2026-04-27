import React, {useState} from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {HQ, HQPage} from '../components/HQShell';

const allCases = [
  // 製造業
  { ind: 'mfg', t: 'ハンディ × PLC ポカヨケ機構', d: 'BT-A1000を活用し、PLCと連携。製造機器への投入口を開ける条件を制御することで、指示書と乖離した材料を物理的に投入できないようにする仕組み。誤組立・誤投入によるロスをゼロに近づける。', tech: 'BT-A1000 / PLC' },
  { ind: 'mfg', t: '入出荷検品・ピッキング連動', d: 'BT-A500を用いて、出荷指示や受入予定とハンディスキャンを照合し、誤出荷・誤受入を防止。現場のオペレーションに合わせて画面遷移やアラートを設計。', tech: 'BT-A500 / 基幹連携' },
  { ind: 'mfg', t: 'ハンディターミナル × ラベルプリンター連携', d: 'ハンディでスキャンしたデータを基に、業務作業に応じて現品票・移動票・棚卸結果票などのラベルを即時発行。手書きや別端末での発行作業を削減し、現場のオペレーションをそのまま電子化。', tech: 'ハンディ / ラベルプリンター' },
  { ind: 'mfg', t: 'ハンディターミナル入出庫', d: '入出庫時に基幹システムのデータと照合することで、紙や電話でのやり取りを大幅に削減した業務改善システム。', tech: 'Kotlin / Firebase / Next.js' },
  { ind: 'mfg', t: 'AC100V機器の稼働監視', d: 'コンセントと機器の間に取り付けることで稼働状態を取得。投資効果を確認できるダッシュボードまで一括構築。', tech: 'IoT / Web' },
  { ind: 'mfg', t: 'AIカメラ 不良品検査', d: 'キーエンスのAIカメラ「IV3」を用いた不良品チェックシステム。物の設置を検知して検査を開始し、不良品があればブザーで異常を通知。', tech: 'キーエンス IV3 / IoT' },
  { ind: 'mfg', t: 'CountIT 生産管理デバイス', d: 'Pinnovation株式会社からの依頼で開発。製造機械に外付けする生産管理デバイス。磁気・加速度から機械の稼働を判定する基板とハードウェア。', tech: '基板 / ハード' },
  { ind: 'mfg', t: 'サイロIoT', d: 'サイロに外付けで稼働状態を把握できるIoT。配線をクランプするだけの簡単設置。基板・ファームウェア・Webアプリまで一括。', tech: '基板 / ファーム / Web / Firebase' },

  // 医療
  { ind: 'med', t: '医療用IoTシステム（点滴機器連携・主導開発）', d: '点滴機器の流量管理から記録のサーバ送信、看護師が状態を確認できるWebサイト、業務用Androidアプリまでを一気通貫で開発。短納期の中、他社と共同でAndroidアプリ・Webサイト・IoT機器の連携システムを主導し、仕様確定や他社との通信仕様調整も担当。', tech: 'TS / Kotlin / OpenAPI / C++' },

  // 小売・飲食
  { ind: 'shop', t: 'POS Androidアプリ', d: 'クレジットカード・QRコード決済対応のAndroid POSアプリ。決済・商品登録・管理者用訂正機能を実装。既存コードのMVVM準拠化やテスト整備も実施。', tech: 'Kotlin' },
  { ind: 'shop', t: 'MIS連携 注文アプリ', d: '回転ずし・焼肉店等で使われる注文アプリ。注文レーンとの同期など店舗オペレーションに必要な機能を実装し、既存システムと連携。', tech: 'Android' },

  // 物流・インフラ
  { ind: 'log', t: 'QRコード業務改善', d: 'ラズベリーパイを活用し、バーコードリーダーやラベルプリンターを安価に計測・連携できる環境を構築。荷物発送時の追跡番号読取からユーザー通知までを自動化し、低コストで運用開始できる業務改善を実現。', tech: 'Raspberry Pi / Web / API' },
  { ind: 'log', t: 'スマートマット', d: '重量を計るIoTデバイス。物の重さを基準に残り個数を把握し、在庫切れを防ぐ。基板・ファームウェアを開発。', tech: '基板 / ファーム' },

  // その他
  { ind: 'etc', t: 'IoT開発ボード Nefry', d: 'dotstudio株式会社と共同開発したIoT開発ボード。基板・ファームウェア・設定用Webサイトまで一括して開発。試作から少量量産・販売まで対応し、累計数千台。', tech: '基板 / ファーム / Web', img: '/img/main/nefry.png' },
  { ind: 'etc', t: 'CocoaBit', d: 'ワンフットシーバスと共同。littleBits対応のIoT開発ボード。基板の設計、ファームウェアの開発、少量量産を実施。', tech: '基板 / ファーム', img: '/img/main/cocoabit.png' },
  { ind: 'etc', t: '獣害対策デバイス（モンスターウルフ拡張基板）', d: '大学との共同研究で獣害対策デバイスを開発。xbeeメッシュネットワークで山間部通信を実現。基板とファームウェアを開発。', tech: '基板 / ファーム / メッシュ', img: '/img/main/monster_wolf.png' },
  { ind: 'etc', t: 'KNX / DALI 設備制御', d: 'ホーム・ビルオートメーションで使われる照明・空調制御規格を活用。自社オフィスに導入しデモ展開。機器選定・専用ソフト設定も対応可。', tech: 'KNX / DALI' },
  { ind: 'etc', t: 'IoT機器管理サイト', d: '開発したIoT機器を遠隔で再起動・ログ確認・メモ記載などができる管理サイト。権限制御と導入先管理機能を備える。', tech: 'Next.js / Node.js / Firebase' },
  { ind: 'etc', t: '建設現場向けIoTシステム', d: '中小企業と共にニーズ調査から仕様策定。リソース不足はフリーランス採用で補強し、ハードウェア・ソフトウェアまで一気通貫で開発。', tech: 'C++ / Firebase / Next.js / Nuxt' },
  { ind: 'etc', t: '防災システム 補助解析ライブラリ', d: '煩雑な設定が必要な部分を隠蔽し、既存システムと連携するためのデータ変換ライブラリを開発。', tech: 'Python' },
];

const tabs = [
  { id: 'all', t: 'すべて' },
  { id: 'mfg', t: '製造業' },
  { id: 'med', t: '医療' },
  { id: 'shop', t: '小売・飲食' },
  { id: 'log', t: '物流・インフラ' },
  { id: 'etc', t: 'その他' },
];
const indLabel = { mfg: '製造業', med: '医療', shop: '小売・飲食', log: '物流・インフラ', etc: 'その他' };

function CaseImg({src, alt}) {
  const url = useBaseUrl(src);
  return (
    <div style={{ background: HQ.bgAlt, border: `1px solid ${HQ.line}`, borderRadius: 6, padding: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 140, width: '100%', boxSizing: 'border-box', overflow: 'hidden' }}>
      <img src={url} alt={alt} style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', objectFit: 'contain', display: 'block' }}/>
    </div>
  );
}

export default function Works() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? allCases : allCases.filter(c => c.ind === active);
  return (
    <HQPage current="works">
      <Head>
        <title>実績 | 合同会社HirameQ</title>
        <meta name="description" content="製造業・医療・小売・物流など、業界別の開発実績一覧。守秘義務により非公開の案件も多数。"/>
      </Head>

      <section style={{ background: HQ.bgAlt, borderBottom: `1px solid ${HQ.line}` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '64px 40px 56px' }}>
          <div style={{ fontSize: 12, color: HQ.sub, marginBottom: 12 }}>
            <Link to="/" className="hq-link">ホーム</Link>
            <span style={{ margin: '0 10px', color: HQ.line }}>/</span>
            <span style={{ color: HQ.ink }}>実績</span>
          </div>
          <div className="hq-eyebrow">WORKS</div>
          <h1 className="hq-h1" style={{ marginTop: 14, fontSize: 44 }}>これまでの開発実績</h1>
          <p style={{ fontSize: 15, color: HQ.sub, lineHeight: 2, marginTop: 22, maxWidth: 760 }}>
            業界ごとに、これまでの開発実績をご紹介します。<br/>
            <b style={{ color: HQ.ink, fontWeight: 600 }}>守秘義務によりお取引先名やプロジェクト詳細を公開できない案件も多数ございます。</b>
            業界・規模・技術スタックの近い事例があるかは、お気軽に <Link to="/contact/" style={{ color: HQ.blue, fontWeight: 600 }}>お問い合わせ</Link> ください。
          </p>
          <p style={{ fontSize: 13, color: HQ.sub, marginTop: 16 }}>
            個別の作品紹介は <Link to="/docs/" style={{ color: HQ.blue, fontWeight: 600 }}>作品・事例リスト</Link> もご覧いただけます。
          </p>
        </div>
      </section>

      <section style={{ borderBottom: `1px solid ${HQ.line}`, background: '#fff', position: 'sticky', top: 73, zIndex: 20 }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px', display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setActive(t.id)}
              style={{ padding: '16px 18px', border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 13, fontFamily: 'inherit',
                color: active === t.id ? HQ.ink : HQ.sub,
                fontWeight: active === t.id ? 600 : 400,
                borderBottom: active === t.id ? `2px solid ${HQ.blue}` : '2px solid transparent',
                marginBottom: -1,
              }}>
              {t.t} <span style={{ marginLeft: 4, fontSize: 11, color: HQ.sub, fontFamily: 'ui-monospace, monospace' }}>{t.id === 'all' ? allCases.length : allCases.filter(c => c.ind === t.id).length}</span>
            </button>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: '0 auto', padding: '72px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 0 }}>
          {filtered.map((c, i) => (
            <React.Fragment key={c.t}>
              <div style={{ padding: '24px 0', fontFamily: 'ui-monospace, monospace', fontSize: 11, color: HQ.blue, fontWeight: 700, borderTop: `1px solid ${HQ.line}`, letterSpacing: 1 }}>
                {String(i+1).padStart(3, '0')} <span style={{ color: HQ.sub, fontWeight: 400 }}>/ {indLabel[c.ind]}</span>
              </div>
              <div style={{ padding: '24px 0 24px 32px', borderTop: `1px solid ${HQ.line}`, borderLeft: `1px solid ${HQ.line}`, position: 'relative', display: 'grid', gridTemplateColumns: c.img ? '1fr 200px' : '1fr', gap: 24, alignItems: 'start' }}>
                <div style={{ position: 'absolute', left: -5, top: 30, width: 9, height: 9, background: HQ.blue, borderRadius: 999, border: `2px solid #fff` }}/>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: HQ.ink }}>{c.t}</div>
                  <p style={{ fontSize: 13, color: HQ.sub, lineHeight: 1.95, margin: '8px 0 0', maxWidth: 720 }}>{c.d}</p>
                  {c.tech && <div style={{ marginTop: 12, fontSize: 11, color: HQ.sub, fontFamily: 'ui-monospace, monospace' }}>使用技術 — {c.tech}</div>}
                </div>
                {c.img ? <CaseImg src={c.img} alt={c.t}/> : null}
              </div>
            </React.Fragment>
          ))}
          <div style={{ padding: '24px 0', fontFamily: 'ui-monospace, monospace', fontSize: 11, color: HQ.sub, borderTop: `1px solid ${HQ.line}`, letterSpacing: 1 }}>
            ・・・
          </div>
          <div style={{ padding: '24px 0 24px 32px', borderTop: `1px solid ${HQ.line}`, borderLeft: `1px solid ${HQ.line}`, position: 'relative', background: HQ.bgAlt, paddingRight: 28, marginRight: -28 }}>
            <div style={{ position: 'absolute', left: -5, top: 30, width: 9, height: 9, background: HQ.sub, borderRadius: 999, border: `2px solid ${HQ.bgAlt}` }}/>
            <div style={{ fontSize: 16, fontWeight: 700, color: HQ.ink }}>その他、非公開案件 多数</div>
            <p style={{ fontSize: 13, color: HQ.sub, lineHeight: 1.95, margin: '8px 0 0', maxWidth: 800 }}>
              守秘義務契約により、お取引先名・案件詳細を公開できない開発案件が多数あります。<br/>
              「自社の業界に近い実績はあるか」「同じ技術スタックの経験はあるか」など、具体的なご質問は個別にお答えできます。
            </p>
            <Link to="/contact/" className="hq-cta" style={{ marginTop: 16, padding: '10px 18px', fontSize: 13, display: 'inline-block', textDecoration: 'none', color: '#fff' }}>近い事例の有無を聞いてみる →</Link>
          </div>
        </div>
      </section>
    </HQPage>
  );
}
