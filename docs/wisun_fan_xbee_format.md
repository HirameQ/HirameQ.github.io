---
id: wisun_fan_xbee_format
title: WiSUN FAN Xbee互換基板
sidebar_label: WiSUN FAN Xbee互換基板
---

## 概要

WiSUN FAN Xbee互換基板は、ROHMの「BP35C5」をXbeeの基板と互換性のあるように配線をしています。

WiSUN FANはメッシュネットワークを構築でき、他のLPWAと比べ高速な通信を行えます。

![](/img/docs/wisun/top.jpg)
### 仕様

|項目|最小|標準|最大|
|---|---|---|---|
|電源|2.6V|3.3V|3.6V|
|温度|-30°C|25°C|85°C|

- 搭載モジュール: BP35C5
- アンテナコネクタ: U.FL or I-PEX
- サイズ: 25.0 × 28.5 × 10.5

|Board IO|BP35C5 pin No|BP35C5 IOタイプ|コマンドファームウエア機能|
|---|---|---|---|
|1|VDD|VDD|電源+|
|2|TX|Digital O|TX|
|3|RX|Digital I|RX|
|4|-|-|-|
|5|Reset|Reset|0VにするとReset|
|6|-|-|-|
|7|SWDIO|SWDIO Digital I/O|-|
|8|SWDCLK|SWDCLK Digital Input|-|
|9|-|-|-|
|10|GND|電源-|
|11|-|-|-|
|12|GPIO D1|Digital I/O|CTS|
|13|GPIO A0|Digital I/O|LED|
|14|-|-|-|
|15|-|-|-|
|16|GPIO D0|Digital I/O|RTS|
|17|-|-|-|
|18|-|-|-|
|19|GPIO B7|Digital I/O|RX 2|
|20|GPIO C0|Digital I/O|TX 2|

![](/img/docs/wisun/circuit.png)
    
## 特徴

メッシュネットワークを構築でき、920MHzの帯域を使用しているため回り込み性も高いです。

機器の設置条件によっては数km離れても通信可能です。

## Link集

[ローム　ドキュメント](https://www.rohm.co.jp/products/wireless-communication/specified-low-power-radio-modules/bp35c5-product#designResources)
[NISSIN SYSTEMS サポートサイト コマンドリスト](https://e-support.co-nss.co.jp/wisunfan.html)