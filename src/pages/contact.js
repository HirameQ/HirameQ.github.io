import React from 'react';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import {useForm, ValidationError} from '@formspree/react';
import {HQ, HQPage} from '../components/HQShell';

const FORMSPREE_FORM_ID = 'moqkrgqe';
// Public site key — safe to embed in client-side code. The matching
// secret key is configured on the Formspree dashboard.
const RECAPTCHA_SITE_KEY = '6LeZKswsAAAAALItcnp_AekRgEd2lfK5RoqaQ1G5';
const RECAPTCHA_ACTION = 'contact';

const fields = [
  { l: 'お名前', name: 'name', req: true, type: 'text', ph: '山田 太郎' },
  { l: '会社名', name: 'company', req: false, type: 'text', ph: '株式会社サンプル' },
  { l: 'メールアドレス', name: 'email', req: true, type: 'email', ph: 'sample@example.com' },
  { l: '電話番号', name: 'tel', req: false, type: 'tel', ph: '0123-456-789' },
];

const categories = ['ハードウェア開発', 'モバイルアプリ', 'Webシステム', '上流相談・実現性確認', '見積もり依頼', 'その他'];

function inputStyle() {
  return { padding: '12px 14px', border: `1px solid ${HQ.line}`, borderRadius: 4, fontSize: 14, fontFamily: 'inherit' };
}

function executeRecaptcha() {
  return new Promise((resolve, reject) => {
    const g = typeof window !== 'undefined' ? window.grecaptcha : null;
    if (!g || typeof g.ready !== 'function') {
      reject(new Error('reCAPTCHA がまだ読み込まれていません。少し時間をおいて再度お試しください。'));
      return;
    }
    g.ready(() => {
      g.execute(RECAPTCHA_SITE_KEY, { action: RECAPTCHA_ACTION }).then(resolve, reject);
    });
  });
}

function ContactForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);
  const [captchaError, setCaptchaError] = React.useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setCaptchaError('');
    // Capture the form element synchronously — React nulls SyntheticEvent
    // properties after the handler returns, so we cannot rely on `e` after `await`.
    const form = e.currentTarget;
    let token = '';
    try {
      token = await executeRecaptcha();
    } catch (err) {
      setCaptchaError(err && err.message ? err.message : 'reCAPTCHA の実行に失敗しました。');
      return;
    }

    // Build a plain data object from the form so @formspree/react does not
    // re-read the (now-stale) event target. Multiple values for the same name
    // (e.g. category checkboxes) are collapsed into an array.
    const formData = new FormData(form);
    formData.set('g-recaptcha-response', token);
    const data = {};
    for (const [key, value] of formData.entries()) {
      if (key in data) {
        data[key] = Array.isArray(data[key]) ? [...data[key], value] : [data[key], value];
      } else {
        data[key] = value;
      }
    }
    handleSubmit(data);
  }

  if (state.succeeded) {
    return (
      <div style={{ marginTop: 32, padding: 32, border: `2px solid ${HQ.green}`, borderRadius: 8, background: '#F0FAF5' }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: HQ.green }}>✓ 送信を受け付けました</div>
        <p style={{ fontSize: 13, color: HQ.sub, lineHeight: 1.95, marginTop: 12, marginBottom: 0 }}>
          営業日 2〜3日以内に、ご記載のメールアドレスへご返信いたします。<br/>
          お急ぎの場合は info at hirameq.jp までメールでもご連絡ください。
        </p>
      </div>
    );
  }

  const submitting = state.submitting;

  return (
    <form onSubmit={onSubmit}
      style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 22 }}>
      <input type="hidden" name="_subject" value="[hirameq.jp] お問い合わせ"/>
      <input type="hidden" name="g-recaptcha-response" value=""/>
      {/* honeypot anti-spam — bots fill it, humans never see it */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}/>

      {fields.map(f => (
        <label key={f.name} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ fontSize: 13, fontWeight: 600 }}>
            {f.l} {f.req && <span style={{ color: '#C03030', fontWeight: 400, fontSize: 11 }}>必須</span>}
          </span>
          <input id={f.name} type={f.type} name={f.name} placeholder={f.ph} required={f.req} disabled={submitting} style={inputStyle()}/>
          <ValidationError prefix={f.l} field={f.name} errors={state.errors}
            style={{ fontSize: 12, color: '#C03030', marginTop: 2 }}/>
        </label>
      ))}

      <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 600 }}>ご相談内容のカテゴリ</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {categories.map(c => (
            <label key={c} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: `1px solid ${HQ.line}`, borderRadius: 4, fontSize: 13, cursor: 'pointer' }}>
              <input type="checkbox" name="category" value={c} disabled={submitting}/> {c}
            </label>
          ))}
        </div>
      </label>

      <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 600 }}>
          ご相談内容 <span style={{ color: '#C03030', fontWeight: 400, fontSize: 11 }}>必須</span>
        </span>
        <textarea id="message" name="message"
          placeholder="例: 自社製品にIoTセンサーを後付けしたい。配線せず計測できる方法があるか相談したい..."
          rows={6} required disabled={submitting}
          style={{ ...inputStyle(), resize: 'vertical', lineHeight: 1.7 }}/>
        <ValidationError prefix="ご相談内容" field="message" errors={state.errors}
          style={{ fontSize: 12, color: '#C03030', marginTop: 2 }}/>
        <span style={{ fontSize: 11, color: HQ.sub }}>NDA締結後にお話しすることも可能です。その場合はその旨ご記載ください。</span>
      </label>

      <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: HQ.sub, lineHeight: 1.7 }}>
        <input type="checkbox" required disabled={submitting} style={{ marginTop: 4 }}/>
        個人情報の取り扱いに同意します。お預かりした情報はご返信目的のみに使用します。
      </label>

      {/* reCAPTCHA v3 disclosure required by Google's terms when using invisible mode */}
      <p style={{ fontSize: 11, color: HQ.sub, lineHeight: 1.7, margin: 0 }}>
        このサイトは reCAPTCHA によって保護されており、Google の <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: HQ.blue }}>プライバシーポリシー</a> と <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" style={{ color: HQ.blue }}>利用規約</a> が適用されます。
      </p>

      {(captchaError || (state.errors && Object.keys(state.errors).length > 0)) && (
        <div style={{ padding: '14px 18px', borderRadius: 6, background: '#FBECEC', border: '1px solid #E8B6B6', color: '#A12A2A', fontSize: 13, lineHeight: 1.7 }}>
          {captchaError || <ValidationError errors={state.errors}/>}
        </div>
      )}

      <button type="submit" className="hq-cta" disabled={submitting}
        style={{ padding: '16px 32px', fontSize: 14, alignSelf: 'flex-start', opacity: submitting ? 0.6 : 1, cursor: submitting ? 'wait' : 'pointer' }}>
        {submitting ? '送信中...' : '送信する →'}
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <HQPage current="contact" includeCTA={false}>
      <Head>
        <title>お問い合わせ | 合同会社HirameQ</title>
        <meta name="description" content="アイデア段階のご相談、見積もり依頼、技術的な質問などお気軽にどうぞ。初回ヒアリング 30分は無料・NDA対応可。"/>
        <script src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`} async defer></script>
      </Head>

      <section style={{ background: HQ.bgAlt, borderBottom: `1px solid ${HQ.line}` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '64px 40px 56px' }}>
          <div style={{ fontSize: 12, color: HQ.sub, marginBottom: 12 }}>
            <Link to="/" className="hq-link">ホーム</Link>
            <span style={{ margin: '0 10px', color: HQ.line }}>/</span>
            <span style={{ color: HQ.ink }}>お問い合わせ</span>
          </div>
          <div className="hq-eyebrow">CONTACT</div>
          <h1 className="hq-h1" style={{ marginTop: 14, fontSize: 44 }}>お問い合わせ</h1>
          <p style={{ fontSize: 15, color: HQ.sub, lineHeight: 2, marginTop: 22, maxWidth: 720 }}>
            アイデア段階のご相談、見積もり依頼、技術的な質問などお気軽にどうぞ。<br/>
            初回ヒアリング 30分は無料・NDA対応可。<b style={{ color: HQ.ink, fontWeight: 600 }}>当社で難しい場合は他社のご紹介も可能</b>です。
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: '0 auto', padding: '64px 40px 96px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56 }}>
          <div>
            <div className="hq-eyebrow">FORM</div>
            <h2 className="hq-h2" style={{ marginTop: 14, fontSize: 26 }}>お問い合わせフォーム</h2>
            <BrowserOnly>{() => <ContactForm/>}</BrowserOnly>
          </div>

          <aside>
            <div style={{ padding: 28, border: `1px solid ${HQ.line}`, borderRadius: 8, background: HQ.bgAlt }}>
              <div className="hq-eyebrow">DIRECT</div>
              <div style={{ fontSize: 16, fontWeight: 700, marginTop: 12 }}>直接ご連絡の場合</div>
              <div style={{ marginTop: 18, fontSize: 13, color: HQ.sub, lineHeight: 1.95 }}>
                <div style={{ fontSize: 11, color: HQ.sub, fontFamily: 'ui-monospace, monospace', letterSpacing: 1 }}>EMAIL</div>
                <div style={{ fontSize: 15, color: HQ.ink, fontWeight: 600, marginTop: 4 }}>info at hirameq.jp</div>
                <div style={{ fontSize: 11, color: HQ.sub, fontFamily: 'ui-monospace, monospace', letterSpacing: 1, marginTop: 18 }}>ADDRESS</div>
                <div style={{ marginTop: 4 }}>〒447-0043<br/>愛知県碧南市幸町5-8</div>
              </div>
            </div>

            <div style={{ marginTop: 20, padding: 28, border: `1px solid ${HQ.line}`, borderRadius: 8 }}>
              <div className="hq-eyebrow">FYI</div>
              <div style={{ fontSize: 16, fontWeight: 700, marginTop: 12 }}>ご相談前のヒント</div>
              <ul style={{ marginTop: 14, paddingLeft: 18, fontSize: 13, color: HQ.sub, lineHeight: 1.95 }}>
                <li>仕様が固まっていなくてOKです</li>
                <li>「実現できるか」だけのご相談も歓迎</li>
                <li>ざっくりの希望予算・納期を添えていただけると助かります</li>
                <li>NDA締結を希望される場合は、その旨ご記載ください</li>
                <li>当社で難しい場合は他社のご紹介も可</li>
              </ul>
            </div>

            <div style={{ marginTop: 20, padding: 28, borderRadius: 8, background: HQ.blueDark, color: '#fff' }}>
              <div style={{ fontSize: 11, color: '#9DB8DA', letterSpacing: 2, fontWeight: 600 }}>RESPONSE</div>
              <div style={{ fontSize: 16, fontWeight: 700, marginTop: 12 }}>お返事の目安</div>
              <p style={{ fontSize: 13, color: '#B7C7DD', lineHeight: 1.95, marginTop: 12, marginBottom: 0 }}>
                営業日 2〜3日以内にご返信します。<br/>
                内容によってはオンラインでの簡単なヒアリング（30分・無料）をご案内することがあります。
              </p>
            </div>
          </aside>
        </div>
      </section>
    </HQPage>
  );
}
