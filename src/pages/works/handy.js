import React, {useState} from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import {HQ, HQPage} from '../../components/HQShell';
import LedShelf from '../../components/LedShelf';

// 出典: keyence/casebook「HirameQ ハンディターミナル導入事例集」社名なし版（2026-09）。
// ★公開ページなので、お客様の社名・品番・取引先名・拠点名・人名は書かない。
//   画面写真は社名なし版で伏せ字を掛けたもの。C社の「手配書の中身」画面は
//   商品名から会社が特定できるため使っていない。
// ★並びは読み手（キーエンスのハンディで検索して来た人）の問いの順:
//   自分の困りごとは解決できるか → 自分の業務に近い例はあるか → 機器とつなげるか
//   → 導入後に困らないか・いくらか → どう始めるか。資料の章立て（3つの働き・共通の土台）は持ち込まない。

const TITLE = 'キーエンス ハンディターミナルの業務アプリ開発・導入事例（BT-A1000 / BT-A2000）| 合同会社HirameQ';
const DESC = 'キーエンスのハンディターミナル（BT-A1000 / BT-A2000）向けに、受入検品・出荷検品・検査・在庫管理の業務アプリを開発しています。製造業・食品など7社の導入事例と実際の画面、重量計・ラベルプリンターなどの機器連携をご紹介します。';

const jobs = [
  { id: 'in', t: '受入・入庫' },
  { id: 'out', t: '出荷' },
  { id: 'qc', t: '検査' },
  { id: 'stock', t: '在庫・棚' },
];

const troubles = [
  { t: 'ラベルと伝票を、目で見比べている', now: '件数が多いと見落とす。品名や容量の取り違えが、そのまま出荷される。', fix: '読んだものを端末が予定・伝票と突き合わせ、違えば画面いっぱいの赤と音でその場で止めます。', refs: ['a', 'b', 'c', 'f'] },
  { t: '数えて・書いて・打ち込んでいる', now: '枚数を数えて入力する。期限別の数量を手書きする。読んだあとに数量を打ち込む。', fix: '数える・書き写す作業そのものを無くします。数量は予定とそろうまで登録させません。', refs: ['b', 'c', 'a', 'g'] },
  { t: '後から「やった」と示せない', now: 'トラブルのとき、入れた・受けた・出したの記録が無く、話し合いの根拠が持てない。', fix: '誰が・いつ・何をしたかが事務所のPCに残り、一覧で探してCSVで出せます。直した・取り消した跡も消しません。', refs: ['a', 'd', 'g'] },
  { t: '伝票・表と現物がそろわない', now: '伝票より先に物が届く。明細書が届かない便がある。品番の表記が少し違う。', fix: '仮に預かって後から引き当てる、紙の納品書から登録する、近い候補を出して人が選ぶ、といった逃げ道を用意します。', refs: ['a', 'g', 'd'] },
];

const cases = [
  { k: 'a', jobs: ['in'], title: '製造業 A社', work: '支給部品の受入検品', meta: '取引先から支給される部品の受入 ｜ BT-A1000 ＋ 事務所のPC',
    voices: ['案内書とラベルの品番・オーダーNo.・数量を目で見比べ、見落とす', '数量は読んだあと手で打ち込み、打ち間違いがそのまま実績になる', '「送ったはず」と言われても、受入の記録が無く根拠が持てない', '支給伝票より先に物が届くことがある'],
    did: ['支給伝票は事務所のPCが自動で取り込み、端末へ配る', '現場はラベルを読むだけで、伝票と突き合わせて受入を消し込む', '置き場の札をその場で刷って貼る', '未受取・受入実績を事務所で確かめる'],
    hand: '読むだけで受入完了', pc: '事務所のPC：未受取・受入実績・仮受入を1画面で' },
  { k: 'b', jobs: ['out'], title: '自動車シートカバーメーカー B社', work: 'シートカバーの出荷検品', meta: '得意先向けのカバー出荷 ｜ BT-A1000 ＋ 事務所のPC',
    voices: ['毎便、紙の指示書を印刷し、専用の治具とバインダで読み分けている', '外したかんばんが1日およそ700枚。枚数を目で数えて入力している', '現物とかんばんの相違や、枚数不足の異常が起きたことがある', '明細表に担当区分が書かれていない'],
    did: ['基幹の出力から、積む順番のリストを作って配る', '現場はかんばんとカバーの刻印を読む', '積む順番どおりに1台ずつ照合して記録', '便ごとの進み具合を事務所で見る'],
    hand: '順番どおりに照合', pc: '事務所のPC：便ごとの進み具合と検品実績' },
  { k: 'c', jobs: ['out'], title: '食品メーカー C社', work: '製品の出荷照合', meta: '食品の出荷（ケース品・バラ品・業務用の段箱） ｜ BT-A1000 ＋ 事務所のPC',
    voices: ['品名の間違いや、30kgと20kgの取り違えがある', '40個出荷すべきところ、39個しか載せていない', '前回より古い賞味期限を後日出荷すると、先入れ先出し違反のクレームにつながる', '混載時は品名別・期限別の数を手書きしている'],
    did: ['朝、出荷予定を取り込んで端末へ配る', '手配書の受注No.を読むと、中身が端末に出る', '箱を1つ読み、賞味期限を読んで数を入れる', '予定とそろえば完了。出荷実績は事務所で確かめる'],
    hand: '受注No.を読む', pc: '事務所のPC：出荷実績を検索・CSVで出力' },
  { k: 'd', jobs: ['in', 'stock'], title: '製造業 D社', work: '部品の入庫記録', meta: '内製部品・購入部品の仕分と入庫 ｜ BT-A1000 ＋ 事務所のPC',
    voices: ['トラブルのときに、ちゃんと入れたと示したい', 'どの棚に入れたかを、後から履歴で見たい', 'まずは入庫記録の部分だけ、小さく始めたい', 'ラベルが分かれて貼られている部品もある'],
    did: ['作業者と棚の札を読む', '現品票をまとめて読む', '棚と合っていれば、その場で記録', '入庫の履歴を事務所で検索・CSVで出す'],
    hand: '登録は時刻まで残る', pc: '事務所のPC：入庫の履歴を検索・CSVで出力' },
  { k: 'e', jobs: ['in', 'out', 'stock'], title: 'パイプ加工メーカー E社', work: '入荷・出荷・在庫の管理', meta: 'パイプ材の加工品・構成品（約1,000品番） ｜ BT-A1000 ＋ 事務所のPC',
    voices: ['かんばんを目で見て転記しており、入力の間違いと手間が出ている', 'かんばんのQRは得意先ごとに仕様がさまざま', 'パイプ材は外径×肉厚×長さで見分ける', '外国籍の作業者の方もいる'],
    did: ['作業者証と工程の札を読むと、その人の言葉・その工程の画面に', 'かんばん・現品票を読んで登録', '使った部品は自動で引き落とし', '在庫と作業の記録を事務所で見る'],
    hand: '工程ごとのメニュー', pc: '事務所のPC：入出庫・作業の記録' },
  { k: 'f', jobs: ['qc'], title: '自動車内装品メーカー F社', work: '補給品の仕様検査', meta: '自動車内装品（補給品） ｜ BT-A2000 ＋ 事務所のPC',
    voices: ['仕様照合の人為ミスで不具合が流出しうる', '検査に1日1時間ほどかかっている', '確認項目が作業者任せで、多くの品番から仕様一覧表を探している', '補給品以外の検査にも使える形にしたい'],
    did: ['生産指示書を読むと、その品番の検査項目が出る', '現物のタグを読んで、同じ物か確かめる', '見本の写真を見ながら項目ごとに合否', 'チェックシートを事務所で自動作成・印刷'],
    hand: '写真を見て合否', pc: '事務所のPC：検査実績とチェックシートの印刷' },
  { k: 'g', jobs: ['out', 'qc'], title: '製造業 G社', work: '出荷検品と箱の検査', meta: 'FAXで届く明細書にもとづく出荷 ｜ BT-A1000 ＋ 事務所の画面（クラウド）',
    voices: ['明細書の中身を、Excelへ手で打っている', 'トラブルのときは、エラーの時刻から監視カメラの映像を確かめたい', '重要なミスは作業を止め、管理者が解除したい', '検査のチェックもしたい。明細書が届かない便もある'],
    did: ['FAXの明細書を事務所で読み取り、便を作る', '現場はかんばんと社内のQRを読んで照合', '残りの箱数を見ながら積み込む', 'ピッキングリスト・日報を事務所で出す'],
    hand: '照合OKで残りが減る', pc: '事務所の画面（クラウド）：階ごとのピッキングリスト' },
];
const caseByKey = Object.fromEntries(cases.map(c => [c.k, c]));

const devices = [
  { t: '重量計', d: '秤の値を端末で受け取り、1個あたりの重さから個数を出します。', ex: 'ネジなど小物の数取り／入荷数の確認', st: 'A&D EW-1500i で実機確認済み' },
  { t: '棚のLED（光で示す）', d: '札を読むと、該当する棚が決めた色で光ります。もう一度読むと消えます。', ex: '取る棚を光で示すピッキング', st: '実機で動作を確認済み（デモ機あり）', to: '#led', link: '下の棚下LEDガイドを見る ↓' },
  { t: 'デジタルメジャー', d: '測ってボタンを押すと、長さが端末に入ります。書き写しが要りません。', ex: '寸法の記録と一覧への書き出し', st: 'ヤマヨ DTM-20S で実機確認済み' },
  { t: 'ラベルプリンター', d: '照合が通ったときだけ、その場でQRラベルや棚の札を刷ります。', ex: '受入時の置き場札／端数ラベルの出し直し', st: 'Brother QL-820NWB で印字まで確認済み' },
  { t: '事務所のプリンター・複合機', d: 'チェックシート・棚の札・社員証をPCから刷ります。FAXで届いた明細書も取り込めます。', ex: '検査のチェックシート（F社）／FAXの明細書（G社）' },
  { t: '基幹システム・取引先のデータ', d: '伝票や出荷予定のCSVを事務所のPCが自動で取り込み、実績をCSVで書き出します。', ex: '支給伝票の自動取込（A社）' },
];

// 出典: 重量計連携_入荷在庫管理_ご提案書（2026-09）。納品済みではなく提案の構成なので「ご提案例」と明記する。
//   範囲・対象外・ご確認事項・検定の扱いは商談で話すことなので載せない。
const weighSteps = [
  { t: '現品票を読む', d: '品目とロットが決まります。手入力はありません。' },
  { t: '台に載せる', d: '台の表示が安定するのを待ちます。値はハンディの画面にも出ます。' },
  { t: '確定する', d: 'その瞬間の重量が1件として保存されます。決めた範囲を外れれば、赤い画面と音で止まります。' },
];
const weighAfter = [
  { t: '転記がなくなる', d: '計った値がそのまま記録になり、紙の伝票も Excel への打ち直しもなくなります。' },
  { t: '残量がその場で分かる', d: '入荷と払出の差から、品目ごとの残量を事務所のブラウザで確認できます。' },
  { t: '履歴が残る', d: '日時・品目・重量・判定・作業者を1件ごとに保存し、CSVで書き出せます。' },
];

const faqs = [
  { q: '自社のラベルやかんばんが読めるか分かりません。', a: '現場で使っている紙を1枚お見せください。ご提案の前に、お客様の現物が実機で読めるかを確かめます。バーコードやQRだけでなく、印字された文字を読む形や、読むものが無い物に札を用意して置き場に貼る形も取れます。' },
  { q: 'ハンディターミナルをまだ持っていません。', a: '端末の台数や機種の選び方からご相談いただけます。既にお持ちのキーエンスの端末を使うこともできます。' },
  { q: 'サーバーを用意する必要はありますか。', a: '要りません。事務所のPC1台で動き、一覧は事務所のどのPCのブラウザからでも開けます。クラウドで動かす形にもできます（G社）。' },
  { q: '倉庫の奥など、電波が届きにくい場所でも使えますか。', a: '記録はいったん端末に残り、つながったときに事務所のPCへ届きます。通信が途切れても作業は止まりません。' },
  { q: '一部の業務だけから始められますか。', a: 'はい。まず1つの業務から始めるのをおすすめしています（D社は入庫記録だけから始めました）。記録の仕組みは共通なので、あとから広げても作り直しになりません。' },
  { q: '導入した後に直してほしいところが出たら？', a: '直したバージョンは配布の仕組みからお届けし、端末で「更新」を押すだけで入れ替わります。訪問は要りません。画面にはいつもバージョンが出ているので、どれが入っているかもすぐ分かります。' },
  { q: '動かなくなったときは、来てもらう必要がありますか。', a: '端末とPCの記録を送っていただければ、訪問しなくても何が起きたかを調べられます。' },
  { q: '費用はどのくらいかかりますか。', a: '業務の範囲と端末の台数によって変わります。内容を伺ったうえで、お見積書をお出しします。相見積もりも歓迎します。' },
];

const steps = [
  { t: '伺う', d: '現場の流れとお困りごとを伺い、紙やラベルの実物を見せていただきます。' },
  { t: '現物で確かめる', d: 'お客様のラベルや印字が読めるかを、実機で確かめてからご提案します。' },
  { t: '小さく始める', d: 'まず1つの業務から。使い始めてから対象を広げられます。' },
  { t: '使いながら直す', d: '使っていただき、ご指摘を反映したバージョンをお届けします。' },
];

const feedback = [
  'C社：全部の箱を読む案から、1箱読んで数を入れる形へ。札は箱ではなく置き場に貼る形へ',
  'D社：記録を後から直す・取り消す機能と、続けて同じ登録をしようとしたときの確認を追加',
  'A社：置き場が分からないときは、受入が済んでいても赤で知らせる形へ',
  'G社：箱の検査を追加。明細書が届かない便は、紙の納品書から登録できるように',
];

const jobLabel = Object.fromEntries(jobs.map(j => [j.id, j.t]));

function SectionHead({eyebrow, title, lead}) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div className="hq-eyebrow">{eyebrow}</div>
      <h2 className="hq-h2" style={{ marginTop: 14 }}>{title}</h2>
      {lead && <p style={{ fontSize: 14, color: HQ.sub, lineHeight: 1.95, marginTop: 14, marginBottom: 0, maxWidth: 780 }}>{lead}</p>}
    </div>
  );
}

function List({items}) {
  return (
    <ul style={{ margin: '10px 0 0', paddingLeft: 18, fontSize: 13, color: HQ.ink, lineHeight: 1.9 }}>
      {items.map(v => <li key={v} style={{ marginBottom: 2 }}>{v}</li>)}
    </ul>
  );
}

function CaseBlock({c}) {
  const hand = useBaseUrl(`/img/handy-cases/case-${c.k}-handy.jpg`);
  const pc = useBaseUrl(`/img/handy-cases/case-${c.k}-pc.jpg`);
  return (
    <article id={`case-${c.k}`} style={{ scrollMarginTop: 96, borderTop: `1px solid ${HQ.line}`, padding: '40px 0' }}>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {c.jobs.map(j => <span key={j} className="hq-tag">{jobLabel[j]}</span>)}
      </div>
      <h3 className="hq-h3" style={{ marginTop: 10, fontSize: 22 }}>{c.title}　{c.work}</h3>
      <div style={{ fontSize: 12, color: HQ.sub, marginTop: 6 }}>{c.meta}</div>
      <div className="hq-g2" style={{ marginTop: 22 }}>
        <div style={{ padding: 20, border: `1px solid ${HQ.line}`, borderRadius: 8, background: '#fff' }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: HQ.sub }}>伺ったお困りごと</div>
          <List items={c.voices}/>
        </div>
        <div style={{ padding: 20, border: `1px solid ${HQ.green}55`, borderRadius: 8, background: '#EEF7F2' }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: HQ.green }}>できるようになった業務</div>
          <List items={c.did}/>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 16, marginTop: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <figure style={{ margin: 0, flex: '0 0 auto', width: 170 }}>
          <img src={hand} alt={`${c.title} キーエンス ハンディターミナルの画面：${c.hand}`} loading="lazy" style={{ width: '100%', display: 'block', border: `1px solid ${HQ.line}`, borderRadius: 6 }}/>
          <figcaption style={{ fontSize: 11, color: HQ.sub, marginTop: 6, textAlign: 'center' }}>端末：{c.hand}</figcaption>
        </figure>
        <figure style={{ margin: 0, flex: '1 1 320px', minWidth: 0 }}>
          <img src={pc} alt={c.pc} loading="lazy" style={{ width: '100%', display: 'block', border: `1px solid ${HQ.line}`, borderRadius: 6 }}/>
          <figcaption style={{ fontSize: 11, color: HQ.sub, marginTop: 6 }}>{c.pc}</figcaption>
        </figure>
      </div>
    </article>
  );
}

export default function Handy() {
  const brokenLinks = useBrokenLinks();
  ['trouble', 'cases', 'devices', 'led', 'weighing', 'faq', 'start', ...cases.map(c => `case-${c.k}`)].forEach(id => brokenLinks.collectAnchor(id));
  const [job, setJob] = useState('all');
  const shown = job === 'all' ? cases : cases.filter(c => c.jobs.includes(job));
  const pickJob = id => {
    setJob(id);
    const el = typeof document !== 'undefined' && document.getElementById('cases');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  // 困りごとから事例へ飛ぶときは、絞り込みを外してから飛ぶ（絞り込み中だと行き先が隠れている）
  const goCase = k => e => {
    setJob('all');
    e.preventDefault();
    setTimeout(() => {
      const el = document.getElementById(`case-${k}`);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };
  const demo = useBaseUrl('/video/demo-weighing-scale.mp4');
  const demoPoster = useBaseUrl('/video/demo-weighing-scale.jpg');
  const tabStyle = active => ({
    padding: '8px 16px', borderRadius: 999, cursor: 'pointer', fontSize: 13, fontFamily: 'inherit',
    border: `1px solid ${active ? HQ.blue : HQ.line}`, background: active ? HQ.blue : '#fff', color: active ? '#fff' : HQ.ink, fontWeight: active ? 600 : 400,
  });
  return (
    <HQPage current="works">
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESC}/>
        <meta property="og:title" content={TITLE}/>
        <meta property="og:description" content={DESC}/>
      </Head>

      <section style={{ background: HQ.bgAlt, borderBottom: `1px solid ${HQ.line}` }}>
        <div className="hq-wrap" style={{ paddingTop: 64, paddingBottom: 56 }}>
          <div style={{ fontSize: 12, color: HQ.sub, marginBottom: 12 }}>
            <Link to="/" className="hq-link">ホーム</Link>
            <span style={{ margin: '0 10px', color: HQ.line }}>/</span>
            <Link to="/works/" className="hq-link">実績</Link>
            <span style={{ margin: '0 10px', color: HQ.line }}>/</span>
            <span style={{ color: HQ.ink }}>ハンディターミナル導入事例</span>
          </div>
          <div className="hq-eyebrow">KEYENCE HANDY TERMINAL</div>
          <h1 className="hq-h1" style={{ marginTop: 14, fontSize: 42 }}>キーエンス ハンディターミナル<br/>導入事例</h1>
          <p style={{ fontSize: 15, color: HQ.sub, lineHeight: 2, marginTop: 22, maxWidth: 780 }}>
            受入・出荷・検査・在庫の現場で、目で見比べる・数える・書き写す作業を、ハンディで読んで照合する形に置き換えてきました。
            HirameQ は、キーエンスのハンディターミナル（BT-A1000 / BT-A2000）で動く業務アプリと、事務所のPCの画面までを一括で開発しています。
          </p>
          <div style={{ marginTop: 24, fontSize: 13, color: HQ.ink, fontWeight: 600 }}>業務から事例を探す</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 10 }}>
            {jobs.map(j => (
              <button key={j.id} type="button" onClick={() => pickJob(j.id)} style={tabStyle(false)}>
                {j.t}の事例 <span style={{ color: HQ.sub, fontSize: 11, marginLeft: 2 }}>{cases.filter(c => c.jobs.includes(j.id)).length}</span>
              </button>
            ))}
          </div>
          <p style={{ fontSize: 12, color: HQ.sub, marginTop: 18, marginBottom: 0 }}>
            ※ 守秘義務のため、お客様名は業種と「A社〜G社」で表記し、画面の品番・取引先名・人名などは伏せています。
          </p>
        </div>
      </section>

      {/* お困りごと */}
      <section id="trouble" style={{ scrollMarginTop: 80 }}>
        <div className="hq-wrap" style={{ paddingTop: 80, paddingBottom: 72 }}>
          <SectionHead eyebrow="PROBLEMS WE SOLVE" title="こんなお困りごとを、解決してきました" lead="業種は違っても、お困りごとの形は似ています。近いものから、実際の事例をご覧ください。"/>
          <div className="hq-g2">
            {troubles.map(t => (
              <div key={t.t} style={{ padding: 22, border: `1px solid ${HQ.line}`, borderRadius: 8, background: '#fff' }}>
                <div style={{ fontSize: 17, fontWeight: 700 }}>{t.t}</div>
                <p style={{ fontSize: 13, color: HQ.sub, lineHeight: 1.85, margin: '8px 0 0' }}>{t.now}</p>
                <p style={{ fontSize: 13, color: HQ.ink, lineHeight: 1.85, margin: '10px 0 0' }}><b style={{ color: HQ.green }}>▶ </b>{t.fix}</p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 12, fontSize: 12 }}>
                  {t.refs.map(k => (
                    <a key={k} href={`#case-${k}`} onClick={goCase(k)} style={{ color: HQ.blue, fontWeight: 600 }}>{caseByKey[k].title}の事例 →</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 事例 */}
      <section id="cases" style={{ scrollMarginTop: 72, background: HQ.bgAlt, borderTop: `1px solid ${HQ.line}`, borderBottom: `1px solid ${HQ.line}` }}>
        <div className="hq-wrap" style={{ paddingTop: 80, paddingBottom: 40 }}>
          <SectionHead eyebrow="CASES" title="業務別の導入事例" lead="伺ったお困りごとと、できるようになった業務、実際の画面です。業務で絞り込めます。"/>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
            <button type="button" onClick={() => setJob('all')} style={tabStyle(job === 'all')}>すべて {cases.length}</button>
            {jobs.map(j => (
              <button key={j.id} type="button" onClick={() => setJob(j.id)} style={tabStyle(job === j.id)}>
                {j.t} {cases.filter(c => c.jobs.includes(j.id)).length}
              </button>
            ))}
          </div>
          {shown.map(c => <CaseBlock key={c.k} c={c}/>)}
        </div>
      </section>

      {/* 機器 */}
      <section id="devices" style={{ scrollMarginTop: 80 }}>
        <div className="hq-wrap" style={{ paddingTop: 80, paddingBottom: 72 }}>
          <SectionHead eyebrow="DEVICES" title="重量計・プリンターなどの機器ともつなげます" lead="読み取りだけでは手が残る作業も、機器をキーエンスのハンディターミナルにつなぐと端末の中で完結します。"/>

          <div className="hq-g2" style={{ alignItems: 'center', marginBottom: 32, padding: 24, border: `1px solid ${HQ.line}`, borderRadius: 8, background: HQ.bgAlt }}>
            <video className="hq-video" controls preload="none" poster={demoPoster} playsInline>
              <source src={demo} type="video/mp4"/>
            </video>
            <div>
              <div style={{ fontSize: 11, color: HQ.blue, fontWeight: 700, letterSpacing: 2 }}>操作デモ動画（約30秒）</div>
              <div className="hq-h3" style={{ marginTop: 8 }}>重量計 × ハンディ端末</div>
              <p style={{ fontSize: 13, color: HQ.sub, lineHeight: 1.95, marginTop: 10, marginBottom: 0 }}>
                品物を重量計に置くだけで、重さがそのまま手元の端末に届きます。1個あたりの重さを登録した品目は、重さから個数を自動で出すので、人が数える必要がありません。
              </p>
            </div>
          </div>

          <div className="hq-g3">
            {devices.map(d => (
              <div key={d.t} style={{ padding: 22, border: `1px solid ${HQ.line}`, borderRadius: 8, background: '#fff' }}>
                <div style={{ fontSize: 15, fontWeight: 700 }}>{d.t}</div>
                <p style={{ fontSize: 13, color: HQ.sub, lineHeight: 1.85, margin: '8px 0 0' }}>{d.d}</p>
                <p style={{ fontSize: 12, color: HQ.sub, lineHeight: 1.8, margin: '8px 0 0' }}>例：{d.ex}</p>
                {d.st && <div style={{ fontSize: 11, color: HQ.green, marginTop: 10, fontWeight: 600 }}>▶ {d.st}</div>}
                {d.to && <Link to={d.to} style={{ display: 'inline-block', marginTop: 10, fontSize: 13, color: HQ.blue, fontWeight: 600 }}>{d.link}</Link>}
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: HQ.sub, lineHeight: 1.95, marginTop: 18, marginBottom: 0 }}>
            秤・メジャー・プリンターは、機種によって端末とつなげるかどうかが変わります。つなげることを確かめた機種からご提案し、無い場合は実機で確かめてからお勧めします。
          </p>

          <div id="led" style={{ scrollMarginTop: 96, marginTop: 48, padding: 28, border: `1px solid ${HQ.line}`, borderRadius: 8, background: HQ.bgAlt }}>
            <span className="hq-tag">棚下LEDガイド</span>
            <div className="hq-g2" style={{ marginTop: 10, gap: 32, alignItems: 'center' }}>
              <div>
                <h3 className="hq-h3">読んだら、棚が光る</h3>
                <p style={{ fontSize: 13, color: HQ.sub, lineHeight: 1.95, marginTop: 8, marginBottom: 0 }}>
                  ハンディでQRを読むと、棚の下のLEDバーが、決めた場所・色・光り方で光ります。
                  ハンディから無線で直接指示するので、PC・サーバは要らず、棚へ引くのは電源だけ。棚1列から始められます。
                </p>
                <div style={{ fontSize: 13, fontWeight: 700, marginTop: 16 }}>デモ機でお見せできる使い道</div>
                <ul style={{ margin: '6px 0 0', paddingLeft: 18, fontSize: 13, color: HQ.ink, lineHeight: 1.9 }}>
                  <li>ピッキング：伝票を読むと、取る棚が光る</li>
                  <li>棚入れ：部品を読むと、しまう場所が光る</li>
                  <li>工具・治具の返却：返す物を読むと、戻す場所が光る</li>
                  <li>急ぎの部品：急ぎのものだけ、赤で速く点滅</li>
                </ul>
                <Link to="/led-guide/" style={{ display: 'inline-block', marginTop: 14, fontSize: 13, color: HQ.blue, fontWeight: 600 }}>棚下LEDガイドを詳しく見る →</Link>
              </div>
              <LedShelf/>
            </div>
          </div>

          <div id="weighing" style={{ scrollMarginTop: 96, marginTop: 48, padding: 28, border: `1px solid ${HQ.line}`, borderRadius: 8, background: HQ.bgAlt }}>
            <span className="hq-tag">ご提案例</span>
            <h3 className="hq-h3" style={{ marginTop: 10 }}>重量計で、入荷・在庫の重さを記録する</h3>
            <p style={{ fontSize: 13, color: HQ.sub, lineHeight: 1.95, marginTop: 8, marginBottom: 0, maxWidth: 820 }}>
              計量値を紙に控えて事務所で打ち直している現場向けに、いまお使いの重量計（RS-232C 出力のあるもの）をハンディ端末につなぎ、
              作業者が確定した瞬間の重さを1件として記録する仕組みです。重量計の型式をお知らせいただければ、つなげるかどうかをお調べします。
            </p>
            <div className="hq-g3" style={{ marginTop: 20 }}>
              {weighSteps.map((w, i) => (
                <div key={w.t} style={{ borderTop: `2px solid ${HQ.blue}`, paddingTop: 12 }}>
                  <div style={{ fontSize: 14, fontWeight: 700 }}><span style={{ color: HQ.blue, marginRight: 6 }}>{i + 1}</span>{w.t}</div>
                  <p style={{ fontSize: 13, color: HQ.sub, lineHeight: 1.85, margin: '6px 0 0' }}>{w.d}</p>
                </div>
              ))}
            </div>
            <div className="hq-g3" style={{ marginTop: 20 }}>
              {weighAfter.map(w => (
                <div key={w.t} style={{ padding: 16, border: `1px solid ${HQ.green}55`, borderRadius: 8, background: '#EEF7F2' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: HQ.green }}>{w.t}</div>
                  <p style={{ fontSize: 13, color: HQ.ink, lineHeight: 1.8, margin: '6px 0 0' }}>{w.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* よくあるご質問 */}
      <section id="faq" style={{ scrollMarginTop: 80, background: HQ.bgAlt, borderTop: `1px solid ${HQ.line}` }}>
        <div className="hq-wrap" style={{ paddingTop: 80, paddingBottom: 72 }}>
          <SectionHead eyebrow="FAQ" title="導入前によくいただくご質問"/>
          <div style={{ border: `1px solid ${HQ.line}`, borderRadius: 8, background: '#fff' }}>
            {faqs.map((f, i) => (
              <div key={f.q} style={{ padding: '18px 22px', borderTop: i ? `1px solid ${HQ.line}` : 0 }}>
                <div style={{ fontSize: 15, fontWeight: 700 }}><span style={{ color: HQ.blue, marginRight: 8 }}>Q.</span>{f.q}</div>
                <p style={{ fontSize: 13, color: HQ.sub, lineHeight: 1.9, margin: '8px 0 0', paddingLeft: 26 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 進め方 */}
      <section id="start" style={{ scrollMarginTop: 80, background: HQ.blueDark, color: '#fff' }}>
        <div className="hq-wrap" style={{ paddingTop: 80, paddingBottom: 72 }}>
          <div className="hq-eyebrow" style={{ color: '#9DB8DA' }}>HOW WE START</div>
          <h2 className="hq-h2" style={{ marginTop: 14, color: '#fff' }}>ご相談から導入まで</h2>
          <p style={{ fontSize: 14, color: '#B7C7DD', marginTop: 14, lineHeight: 1.95 }}>資料だけで決めず、現場の紙・ラベル・かんばんが読めるかを先に確かめてから、小さく始めます。</p>
          <div className="hq-g2" style={{ marginTop: 28 }}>
            {steps.map((s, i) => (
              <div key={s.t} style={{ padding: 20, border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8 }}>
                <div style={{ fontSize: 11, color: '#9DB8DA', fontFamily: 'ui-monospace, monospace', letterSpacing: 2 }}>0{i + 1}</div>
                <div style={{ fontSize: 16, fontWeight: 700, marginTop: 6 }}>{s.t}</div>
                <p style={{ fontSize: 13, color: '#B7C7DD', lineHeight: 1.85, margin: '6px 0 0' }}>{s.d}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28, padding: 20, background: 'rgba(255,255,255,0.06)', borderRadius: 8 }}>
            <div style={{ fontSize: 14, fontWeight: 700 }}>使い始めてから、現場のご指摘で変えた例</div>
            <ul style={{ margin: '10px 0 0', paddingLeft: 18, fontSize: 13, color: '#D5E0EE', lineHeight: 1.9 }}>
              {feedback.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
          <div style={{ marginTop: 36 }}>
            <div style={{ fontSize: 18, fontWeight: 700 }}>まずは、現場のラベルを1枚お見せください</div>
            <p style={{ fontSize: 13, color: '#B7C7DD', lineHeight: 1.95, marginTop: 8 }}>
              ラベル・かんばん・現品票・指示書など、いま現場で使っている紙をお見せください。実機で読めるかを確かめ、どこまでを端末に任せられるかをご一緒に整理します。
            </p>
            <Link to="/contact/" className="hq-cta" style={{ marginTop: 8, padding: '12px 22px', display: 'inline-block', background: '#fff', color: HQ.blueDark }}>ハンディターミナルについて相談する →</Link>
          </div>
        </div>
      </section>
    </HQPage>
  );
}
