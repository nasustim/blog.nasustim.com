---
title: "CI/CD Conference 2023に参加した"
date: 2023-03-27T11:21:24Z
draft: false
tags:
- CI/CD
- プログラミング
---

現地参加してきました。

https://event.cloudnativedays.jp/cicd2023

同時期に開催していた[YAPC::Kyoto 2023](https://yapcjapan.org/2023kyoto/)で「ブログを書くまでがYAPC」を合言葉に感想記事が沢山投稿されていたのに感化されて、私も参加記を残しておきます。

## なんでCI/CD？

普段はプロダクトの開発をメインにしていますが、今の職場ではインフラの一部を[AWS CDK](https://aws.amazon.com/jp/cdk/)で構築していたり、CIをGitHub Actionsで動かしていたりする関係でCI/CDパイプラインの面倒を見ることも多いです。

直近ではGitHub Actionsのself-hosted runner導入に一部関わったりしました。  
同僚が登壇した発表 → https://techcon.mixi.co.jp/d3-2

そんな中で、業界的なトレンドや新しい知見をキャッチアップしたいと思い参加しました。

また私は2020年新卒で、社会人になったと同時に新型コロナウイルスが流行していました。そのため社会人になってからテックカンファレンスに参加するのも今回が初めてで、生で講演を聞いて直接刺激を受けられる体験に大きな期待を抱いて参加しました。


## 気になった発表

### 大規模レガシーテストを倒すためのCI基盤の作り方

https://event.cloudnativedays.jp/cicd2023/talks/1773

ミラティブでPerlとGo両方のアプリケーションコードを運用する中でどのようにCI/CDを利用しているかという話でした。
テスト実行時のMySQLコンテナの扱いのような実践的なチューニングも参考になりそうでしたが、私も本業でPerlとGo両方を運用しているので「これまでサービスを支えてくれたPerlのコードに敬意を払って運用する」という言葉は、まだPerlで動いているシステムに対しても最後まで安全にインテグレーション&デリバリーをしなければいけない、技術負債に対する姿勢を改めて考えました。

### 最高の開発者体験を目指してAWS CDKでCI/CDパイプラインを改善し続けている話

https://event.cloudnativedays.jp/cicd2023/talks/1777

インフラ構築にAWS CDKを利用してフルサイクルエンジニアリングを推進している話。
私自身もCDKがあることでインフラという新たな領域を開拓できたし、CDKはいいぞと思っているので共感できるセッションでした。
また、CDKをTypeScriptから使う利点も改めて言語化されていいな〜と思いました。

登壇者の方にも共感されてた

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">nullableなパラメータを持つAPIとお付き合いする時、TypeScriptは開発者体験が良いの本当にそう <a href="https://t.co/S3IFhg9i8j">https://t.co/S3IFhg9i8j</a></p>&mdash; あんどぅ (@integrated1453) <a href="https://twitter.com/integrated1453/status/1637688964223205377?ref_src=twsrc%5Etfw">March 20, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## リアルカンファレンスいいですね

セッションの他にも、企業ブースでのレビュー大会に参加したり、ホワイトボードでわいわいしたり、普段の業務では味わえない刺激を受けられました。
私は今期Perlテストの基盤載せ替えをやり切れなかったけど、来年こそは倒したいなと思ってます。

