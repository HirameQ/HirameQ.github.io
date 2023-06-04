---
id: obniz_grove
title: obniz Groveコネクタ
sidebar_label: obniz Groveコネクタ
---

## 概要

obniz Groveコネクタは、obnizとGroveを簡単に接続できるようにした基板です。

GroveとはSeeed Studioが開発したは様々なセンサやアクチュエータを同一コネクタを使用し簡単に接続ができるようにしたモジュールです。

obnizは株式会社obnizが開発したIoTを第一に考えられて作られたシステムになります。

![](/img/docs/obniz_grove/top.jpg)
![](/img/docs/obniz_grove/bottom.jpg)

![](/img/docs/obniz_grove/sample.jpg)

サイズ: 45.5 × 23.3 × 12.0

## 特徴

obniz Boardとobniz Board 1Yを本基板ではサポートしています。

ソケットが縦のタイプと横のタイプがあります。
好みではありますが、開発時には横タイプ、ケースに仕舞うときには縦タイプが小規模に収まりますのでオススメです。

配線は次のようになっています。

- 0 : Grove0(0)
- 1 : Grove0(1)
- 2 : Grove1(0)
- 3 : Grove1(1)
- 4 : Power + (裏面の半田ジャンパーで使用するか選択可)
- 5 : Power - (裏面の半田ジャンパーで使用するか選択可)

![](/img/docs/obniz_grove/circuit.png)

また、追加で半田付けをすることで、obniz Board 1Yから追加された電源コネクタを使用できます。

基板の下部には追加のコネクタを半田付けできるようになっており、上のIOの並びと同様のコネクタがあり、Grove以外のセンサーを繋ぐことも可能です。

### サンプルプログラム

Grove [LED](https://www.switch-science.com/products/1254) を使用した場合

```html
<html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <script src="https://obniz.io/js/jquery-3.2.1.min.js"></script>
      <script src="https://unpkg.com/obniz@2.3.0/obniz.js" crossorigin="anonymous"></script>
    </head>
    <body>
     
        <div id="obniz-debug"></div>
        <h3 class="text-center">Turning on a LED</h3>
        <button class="btn btn-primary" id="on">LED ON</button>
        <button class="btn btn-outline-primary" id="off">LED OFF</button>

         
        <script>
        const obniz = new Obniz("OBNIZ_ID");
        obniz.onconnect = async function () {
            // IO5をGNDとして使う
            obniz.io5.output(false);
            // IO4を5Vの電源として使う
            obniz.io4.output(true);
            $("#on").click(function() {
                obniz.io0.output(true);//Grove 0
                //obniz.io2.output(true);//Grove 1
                obniz.display.clear();
                obniz.display.print("ON");
            });

            $("#off").click(function() {
                obniz.io0.output(false);//Grove 0
                // obniz.io2.output(false);//Grove 2
                obniz.display.clear();
                obniz.display.print("OFF");
            });
        }
         
        </script>
    </body>
</html>
```

## Link集

- [ユーザ記事](https://www.1ft-seabass.jp/memo/2019/10/04/wamisnet-obniz-grove-board-first-step/)
