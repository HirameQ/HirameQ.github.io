import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import clsx from "clsx";

function Contact() {
    return (
        <Layout title="Contact">

            <div class="container padding-vert--lg">
                <h1>Contact</h1>
                <p>記事についての質問や受託開発の依頼など受け付けております。</p>
                <p>ご気軽にご相談ください。</p>
                <form action="https://formspree.io/moqkrgqe" method="POST">
                    <label>
                        メールアドレス
                        <input className={styles.form}　type="email" name="_replyto" placeholder="your_mail_Address@hirameq.jp"/>
                    </label>
                    <div></div>
                    <label>
                        お問合せ内容
                        <textarea className={clsx(styles.form,styles.form_text)}　name="message" placeholder="例：工場の機械のランプからエラーが起こったらスマートフォンに教えてくれるようなものがほしい"></textarea>
                    </label>

                    <button type="submit" className={clsx("button button--outline button--secondary button--lg",styles.form)}>Send</button>
                </form>
            </div>
        </Layout>
    );
}

export default Contact;
