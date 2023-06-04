---
id: lte_nrf9160_xbee_format
title: Nefry Cellular Bee
sidebar_label: Nefry Cellular Bee
---

## 概要

Nefry Cellular Beeは、Nordic製LTEモデム(nRF9160)を搭載し、Xbeeの基板と互換性のあるように配線をしています。
そのため既存のXbeeのArduinoシールドを用いて、LTE通信を始められます。

nRF9160はLTE-M/NB-IoTをサポートしています。

また、本モジュール内にファームウエアを書き込むことができるためESP32と同じように1chipでさまざまなプログラミングができます。
出荷時にはATコマンドでやり取りできるファームウエアを書き込んでいます。

![](/img/docs/lte/top.jpg)
![](/img/docs/lte/bottom.jpg)

### 仕様

|項目|最小|標準|最大|
|---|---|---|---|
|電源|3.0V|3.3V|3.6V|
|温度|-20°C|25°C|60°C|

- 搭載モジュール: nRF9160-SICA-B1A
- アンテナコネクタ: U.FL or I-PEX

|Board IO|nRF9160 pin No|nRF9160 IOタイプ|ATコマンドファームウエア機能|
|---|---|---|---|
|1|VDD,VDD_GPIO|VDD,VDD_GPIO|電源+|
|2|P0.02|Digital I/O|TX|
|3|P0.05|Digital I/O|RX|
|4|P0.27|Digital I/O|-|
|5|Reset|nReset|0VにするとReset|
|6|P0.29|Digital I/O|-|
|7|SWDIO|SWDIO Digital I/O|ファームウエア書き込み デバッグ|
|8|SWDCLK|SWDCLK Digital Input|ファームウエア書き込み デバッグ|
|9|P0.00|Digital I/O|-|
|10|GND|電源-|
|11|P0.01|Digital I/O|-|
|12|P0.31|Digital I/O|-|
|13|P0.30|Digital I/O|-|
|14|P0.21|Digital I/O|-|
|15|P0.22|Digital I/O|-|
|16|P0.23|Digital I/O|-|
|17|P0.24|Digital I/O|-|
|18|P0.15(AIN2)|Digital I/O Analog Input|-|
|19|P0.14(AIN1)|Digital I/O Analog Input|-|
|20|P0.13(AIN0)|Digital I/O Analog Input|-|

![](/img/docs/lte/circuit.png)

### ファームウエアの書き換え

3.3Vのモードで書き込んでください。

VDD,GND,Reset,SWDIO,SWDCLKを接続すれば書き換えできます。
J-Linkで書き換えできます。

### ATコマンド例

```
AT+CFUN=0
AT+CGDCONT=0,"IP","soracom.io"
AT+CGAUTH=0,2,"sora", "sora"

//Network通信エラー通知
AT+CNEC=24
//Network登録ステータス通知
AT+CEREG=3

AT+CFUN=1


//接続状態
AT+CEREG?
//IPaddress
AT+CGDCONT?
//電波強度
AT+CESQ
+CESQ: 99,99,255,255,15,39
//99,99,255,255,RSRQ,RSRP
```

## 特徴

プログラミングができ、省電力に強みを持つnRF9160を活用することで電池駆動のモノや小型ながらさまざまなセンサーを接続できます。

日本の通信会社ではKDDIの相互接続性試験については完了していることを確認しました。

## Link集

- [nRF9160 Product Specification v2.1](https://infocenter.nordicsemi.com/pdf/nRF9160_PS_v2.1.pdf)
- [nrf9160 operator certifications](https://infocenter.nordicsemi.com/index.jsp?topic=/comp_matrix_nrf9160/COMP/nrf9160/nrf9160_operator_certifications.html)
- [ATコマンド](https://infocenter.nordicsemi.com/index.jsp?topic=%2Fref_at_commands%2FREF%2Fat_commands%2Fintro.html)
- [ATコマンド](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/applications/serial_lte_modem/README.html#nrf9160-serial-lte-modem)
- [アンテナリスト](https://www.nordicsemi.com/Products/Low-power-cellular-IoT/nRF9160-Revision-1-global-and-regulatory-certifications)

使用できるアンテナは上のリストになります。
用途や状況により適切なアンテナは異なりますが、「SRFC015-100」が安価でよいかもしれません。

