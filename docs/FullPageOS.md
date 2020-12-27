---
id: FullPageOS
title: FullPageOS
sidebar_label: FullPageOS
---

## 概要

FullPageOSというフルスクリーンでChromiumを自動起動してくれる便利なRaspberry Pi専用のOSです。

<iframe width="100%" height="400" src="https://www.youtube.com/embed/NMhoc9sRcNc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

https://youtu.be/NMhoc9sRcNc

WebページのURLを設定するだけで使用でき、ユーザからのインプットを待つ受付のようなシステムやデジタルサイネージに用いることができます。

このサイトにて、公開しているOSは日本語入力やタイムゾーンなど日本での使用しやすいように当方にて改造をしております。

## 動作確認済みRaspberry Pi
すべてのサイトが正しく表示されることを保証するものではありません。

- Raspberry Pi 4B
- Raspberry Pi Zero W(重すぎて使い物にならないが起動はする)

一例として、CSSアニメーションなどを多用したサイトではカクツクといった性能不足が見られることがあります。

## OSダウンロード

### 2020/12/27 ビルド

[2020-12-02-raspios-buster-armhf-lite.zip](https://drive.google.com/file/d/125SgLnvZzRnSX3o8RvN3rScSnQ69wyvB/view?usp=sharing)

## 使用方法

### OSをダウンロードする

上記のビルド済みのものをダウンロードします。
ダウンロードが済んだら、ZIPファイルの展開を行います。

### SDカードにOSを書き込む

Raspberry Pi公式でSDカードに書き込むツールを出しているので、それを使うとよいと思います。

https://www.raspberrypi.org/software/

インストールを済ましたら、このようなアプリが起動します。

![sdcard writer](/img/docs/fullpageos/writer.png)


書き込むOSを設定します。
【Operating System】と書かれた項目を選択し、【Use custom】を選択して、ダウンロードしてZIP展開済みのフォルダの中にある【build.img.gz】のファイルを選びます。

![os select](/img/docs/fullpageos/os_select.png)



あとはOSを書き込むSDを選択し、【WRITE】のボタンを押すと、SDカードにOSを書き込めます。

### 表示したいサイトを設定しよう

書き込みができたら、SDカードの中身を編集します。

SDカードの中に「fullpageos.txt」というファイルがあります。

そのファイルを開き、表示したいURLに置き換えます。

![site url](/img/docs/fullpageos/siteurl.png)

### おまけ：無線LANでネットワークに接続したいとき

SDカードの中に「fullpageos-wpa-supplicant.txt」というファイルを探します。

そのファイルを開き、「＃」でコメントアウトされているものを外してSSIDやパスワードを適切なものに変更します。

![wireless](/img/docs/fullpageos/wireless.png)

## Link集

- [使っていないRaspberry PiをWebページやTwitterを表示して活用しよう](https://qiita.com/wamisnet/items/6be7b45e0096ec1da4af)
- [ベースになっているGitHub](https://github.com/guysoft/FullPageOS)


