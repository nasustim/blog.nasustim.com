---
slug: "/ci-cd-conference-2023"
title: "CI/CD Conference 2023に参加した"
date: 2023-03-27T11:21:24Z
draft: false
tags:
  - CI/CD
  - プログラミング
---

現地参加してきました。

https://event.cloudnativedays.jp/cicd2023

同時期に開催していた[YAPC::Kyoto 2023](https://yapcjapan.org/2023kyoto/)の合言葉が「ブログを書くまでが YAPC」だったようで、感想記事が多く投稿されていたことに感化されて、私も参加記を残しておこうと思います。

## なんで CI/CD？

普段はサービス開発に携わっていますが、今いる職場ではインフラの一部を[AWS CDK](https://aws.amazon.com/jp/cdk/)で構築していたり、CI/CD を GitHub Actions で実施しています。また私自身も興味がある領域だったので、現職に入ってからサービス全体への CloudFront 導入や GitHub Actions の self-hosted runners 導入に一部関わったりしました。  
同僚が登壇した発表 → https://techcon.mixi.co.jp/d3-2

そんな状況もあり、業界的なトレンドや新しい知見をキャッチアップしたいと思いこのカンファレンスに参加しました。

また私は 2020 年新卒なので、社会人生活が始まると同時にフルリモートワークがスタンダードになってしまいました。そのためテックカンファレンスに現地参加するのも今回が初めてで、直接セッションを聴講して刺激を受けられればと思っておりました。

## 気になった発表

### 大規模レガシーテストを倒すための CI 基盤の作り方

https://event.cloudnativedays.jp/cicd2023/talks/1773

[ミラティブ](https://www.mirrativ.co.jp/)で Perl, Go 両方のアプリケーションコードを運用する中でどのような CI/CD 基盤を構築しているかの話でした。
「テスト実行時の MySQL コンテナの扱い」のような実践的なチューニングも参考になりそうでしたが、私も本業で Perl と Go 両方を運用しているので、これまでサービスを支えてくれた Perl のコードに敬意を払って運用するという考え方にはとても共感できました。

### 最高の開発者体験を目指して AWS CDK で CI/CD パイプラインを改善し続けている話

https://event.cloudnativedays.jp/cicd2023/talks/1777

インフラ構築に AWS CDK を利用してフルサイクルエンジニアリングを推進している話。
私自身も CDK があったことで AWS マネコンに閉じていたノウハウを学ぶことができたので、インフラの裾野をアプリケーションエンジニアにも広げてサービス開発のアジリティを高められるという感覚の強度を高められました。
また、CDK を TypeScript から使う利点も改めて言語化されて良いなと思いました。

登壇者の方にも共感されてた

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">nullableなパラメータを持つAPIとお付き合いする時、TypeScriptは開発者体験が良いの本当にそう <a href="https://t.co/S3IFhg9i8j">https://t.co/S3IFhg9i8j</a></p>&mdash; あんどぅ (@integrated1453) <a href="https://twitter.com/integrated1453/status/1637688964223205377?ref_src=twsrc%5Etfw">March 20, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## リアルカンファレンスいいですね

セッションの他にも、企業ブースでの設計レビュー大会に参加したり、ホワイトボードでわいわいしたり、普段の業務では味わえない刺激を受けられました。
私は今期 Perl テストの基盤載せ替えをやり切れなかったけど、来期こそは倒したい気持ちを高められたので満足です。
