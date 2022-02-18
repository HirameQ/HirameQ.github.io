---
id: moriot
title: MORIoTプロジェクト
sidebar_label: MORIoTプロジェクト
---

## 概要

MORIoTは、遠隔で連携しながら忌避音を出力する獣害対策機器です。

仁愛大学の安彦教授の研究で使用するハードウェア、ソフトウエアなどを開発しました。

以前のモンスターウルフ拡張基板の応用発展版となります。

![](/img/docs/moriot/installation.jpg)

設置例：設置個所によっては柵に直接取り付けるといったことも可能です。

![](/img/docs/moriot/example.jpg)

現在福井の越前海岸にて実証実験をおこなっており、このような環境下でも動作しております。

![](/img/docs/moriot/location.jpg)

太陽光パネルで発電した電力で動作しているため電源のない地域でも動作ができます。


## 特徴

WiSUN FAN というメッシュネットワークを構成することで山間部などの通信状態がよくない状況でも別のモジュールを経由し、データを送信できるような工夫をしています。

このおかげで親機のみLTEや無線LANなどでネットワークを経由してすべての子機の状態を把握することができます。

![](/img/docs/moriot/line.png)

LINE BOTでMORIoTのデバイスを管理でき、チャットのやり取りで動作状態やスピーカの音量など設定値の変更をできるようにしています。

現地でWiSUNの電波到達実験では、直線距離で3km程到達しており、1㎞程度であればかなり安定して通信ができます。

![](/img/docs/moriot/reach.jpg)


## Link集

- [MORIoTプロジェクトをリリース！　MORI（森）×IoT で地域問題解決を目指す](https://www.jindai.ac.jp/department/human/communication/topics/004102.html)
- [高音でシカ撃退する機器、操作はスマホで自宅から　福井県の水仙畑で実験、農家の期待集める](https://www.fukuishimbun.co.jp/articles/-/1383031)
