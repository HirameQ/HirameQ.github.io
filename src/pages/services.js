import React from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import {HQ, HQPage} from '../components/HQShell';

const hwCards = [
  { t: 'IoTデバイス', d: 'センサーから取得したデータを、Wi-Fi・BLE・LTE・LoRa・Sub-GHz（920MHz帯）・Zigbeeメッシュなど用途に合った無線でクラウドへ送る装置を構築します。' },
  { t: '遠隔制御・監視デバイス', d: '機器の稼働状況を遠隔で確認し、必要に応じて制御する仕組み。OTA更新により、設置後もファームウェアを安全に書き換えできます。' },
  { t: 'ビル・住宅向け制御システム', d: 'KNX / DALI / ECHONET Lite などの規格を活用し、オフィスや住宅全体の照明・空調・電力使用を最適化するシステムを設計・実装します。' },
  { t: 'EV充電・エネルギー機器連携', d: 'OCPP（EV充電器の業界標準）に準拠した制御や、太陽光・蓄電池などのエネルギー機器と連携する仕組みに対応します。' },
  { t: '基板設計（軽量案件）', d: '小規模な回路の試作・設計に対応します。専業ではないため、大規模・高密度な基板は信頼できるパートナーと連携してご提案します。' },
  { t: '少量量産・部材調達', d: '〜数百台規模の少量量産まで対応。試作で終わらず「現場に納める」ところまで伴走します。' },
];

const mobileCards = [
  { t: 'ハンディターミナル向けアプリ', d: 'バーコード・QRコードを読み取って入出庫や在庫確認を行うアプリ。製造業のポカヨケ機構や物流現場での運用実績があります。' },
  { t: '決済端末向けアプリ', d: 'クレジットカード・QR決済に対応したPOS／決済端末アプリ。飲食店向けの注文〜会計フローまで実装した経験があります。' },
  { t: '医療・現場業務向けアプリ', d: '点滴機器の操作支援アプリなど、現場のオペレーションに密着した業務アプリを開発。誤操作を防ぐUIと安全性を重視した設計が可能です。' },
  { t: '一般ユーザー向けアプリ', d: 'Androidアプリの開発に対応します。BLE機器と連携するIoT製品向けアプリの実装経験があります（iOS版が必要な場合は、信頼できるパートナー企業と連携してご対応します）。' },
];

const webCards = [
  { t: 'IoT機器の管理サイト', d: '導入先ごとに機器の稼働状況を確認、遠隔で再起動・設定変更、ログ確認、利用権限の制御まで。出荷後の運用を想定したサイトを構築します。' },
  { t: '業務改善Webシステム', d: '紙やExcelで運用されている入出庫・点検記録・入退室管理・予約管理などを、現場が無理なく使えるWebに置き換えます。' },
  { t: 'データ可視化ダッシュボード', d: '稼働状況・生産実績・電力使用量・センサーデータなどを集計・グラフ化し、経営判断や現場改善に使える形に整理します。' },
  { t: '既存システムとの連携', d: '基幹システム・SaaS・他社製品が提供するAPIと連携し、データの取り込みや業務フローの自動化を実装します。' },
  { t: '小〜中規模Webサービス', d: '会員制サイト、予約システム、社内ポータル、独自サービスのプロトタイプなど、新規事業の立ち上げにも対応します。' },
];

const consultCards = [
  { t: '実現性調査・技術選定', d: '「これは作れるか／いくらかかるか」を、過去の実績ベースで率直にお答えします。技術的な制約や落とし穴も含めて整理します。' },
  { t: 'ビジネス面の壁打ち', d: 'プロダクトとして成立するか、誰がいくらで買うのか、競合と何が違うのか。技術視点だけでなく事業視点での提案も行います。' },
  { t: '開発体制づくり', d: '当社だけで足りない領域は、信頼できるフリーランスや専門会社と組んでチームを編成。お客様側で人を集める負担を減らします。' },
  { t: '他社のご紹介', d: '当社の専門外・規模感が合わない場合は、信頼できる他社をご紹介します。「無理に受けない」のが当社の方針です。' },
];

function Section2col({id, level, levelSub, title, desc, cards, alt}) {
  return (
    <section id={id} style={{ scrollMarginTop: 120, background: alt ? HQ.bgAlt : '#fff' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '88px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 48, alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: 13, color: HQ.blue, fontWeight: 700, fontFamily: 'ui-monospace, monospace', letterSpacing: 1 }}>{level}</div>
            <div style={{ fontSize: 11, color: HQ.sub, marginTop: 6, fontFamily: 'ui-monospace, monospace', letterSpacing: 1 }}>{levelSub}</div>
          </div>
          <div>
            <h2 className="hq-h2" style={{ marginBottom: 12 }}>{title}</h2>
            <p style={{ fontSize: 15, color: HQ.sub, lineHeight: 2, marginTop: 0, maxWidth: 720 }}>{desc}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginTop: 32 }}>
              {cards.map(c => (
                <div key={c.t} style={{ padding: 22, border: `1px solid ${HQ.line}`, borderRadius: 8, background: alt ? '#fff' : '#fff' }}>
                  <div style={{ fontSize: 15, fontWeight: 700 }}>{c.t}</div>
                  <p style={{ fontSize: 13, color: HQ.sub, lineHeight: 1.85, marginTop: 8, marginBottom: 0 }}>{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <HQPage current="services">
      <Head>
        <title>サービス領域 | 合同会社HirameQ</title>
        <meta name="description" content="ハードウェア・モバイル・Webの3領域を一括で対応。IoT機器・業務アプリ・管理サイトから上流相談まで。"/>
      </Head>

      <section style={{ background: HQ.bgAlt, borderBottom: `1px solid ${HQ.line}` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '64px 40px 56px' }}>
          <div style={{ fontSize: 12, color: HQ.sub, marginBottom: 12 }}>
            <Link to="/" className="hq-link">ホーム</Link>
            <span style={{ margin: '0 10px', color: HQ.line }}>/</span>
            <span style={{ color: HQ.ink }}>サービス</span>
          </div>
          <div className="hq-eyebrow">SERVICES</div>
          <h1 className="hq-h1" style={{ marginTop: 14, fontSize: 44 }}>サービス領域</h1>
          <p style={{ fontSize: 15, color: HQ.sub, lineHeight: 2, marginTop: 22, maxWidth: 720 }}>
            ハードウェア・モバイル・Webの3領域を一括で対応します。<br/>
            業界別・課題別での実績は <Link to="/works/" style={{ color: HQ.blue, fontWeight: 600 }}>実績ページ</Link> をご覧ください。
          </p>
        </div>
      </section>

      <section style={{ borderBottom: `1px solid ${HQ.line}`, background: '#fff', position: 'sticky', top: 73, zIndex: 20 }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '14px 40px', display: 'flex', gap: 28, fontSize: 13, flexWrap: 'wrap' }}>
          <span style={{ color: HQ.sub, fontFamily: 'ui-monospace, monospace', fontSize: 11, letterSpacing: 1 }}>領域 →</span>
          <a href="#hw" className="hq-link">01. ハードウェア</a>
          <a href="#mobile" className="hq-link">02. モバイルアプリ</a>
          <a href="#web" className="hq-link">03. Webアプリケーション</a>
          <a href="#consult" className="hq-link">04. 上流相談・伴走支援</a>
        </div>
      </section>

      <Section2col
        id="hw" level="L1 / HW" levelSub="HARDWARE"
        title="ハードウェア"
        desc={<>センサーで現場のデータを取得する装置、無線でつながるIoT機器、設備を遠隔で制御する仕組みなど、現場で実際に使われるハードウェアをつくります。<br/>ファームウェアまで自社で開発できるため、企画段階から「実機で動くもの」を見据えた設計が可能です。</>}
        cards={hwCards}
      />
      <div className="hq-divider"/>
      <Section2col
        id="mobile" level="L2 / SW" levelSub="MOBILE / FIRMWARE"
        title="モバイルアプリ"
        desc={<>スマートフォン・タブレット・専用端末で動くアプリをつくります。<br/>医療・小売・物流など現場で使う業務アプリの実績が豊富で、外部機器（BLEセンサー・プリンター・決済端末など）との連携を伴うものが得意です。</>}
        cards={mobileCards}
        alt
      />
      <div className="hq-divider"/>
      <Section2col
        id="web" level="L3 / WEB" levelSub="WEB / CLOUD"
        title="Webアプリケーション"
        desc={<>ブラウザから使える業務システムや管理画面をつくります。<br/>IoT機器とつなげて遠隔から状態を確認・制御するもの、社内の業務フローを電子化するもの、現場のデータを集計して可視化するものなど、「人が日常的に使い続けるWeb」を意識して設計します。</>}
        cards={webCards}
      />
      <div className="hq-divider"/>
      <Section2col
        id="consult" level="L4 / ADV" levelSub="ADVISORY"
        title="上流相談・伴走支援"
        desc={<>「アイデアはあるが、何から始めればいいか分からない」「そもそも実現可能なのかを知りたい」段階のご相談を歓迎します。<br/>技術選定からビジネス面の整理、開発体制づくりまで、新規事業の0→1・1→10フェーズを伴走します。</>}
        cards={consultCards}
        alt
      />
    </HQPage>
  );
}
