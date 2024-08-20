---
title: "Macbook Air セットアップ記録 - 2023年6月"
date: 2023-06-23T15:08:50Z
draft: false
---

私物の Macbook を新調した。

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">my new gear... <a href="https://t.co/GV1dBZnQVU">pic.twitter.com/GV1dBZnQVU</a></p>&mdash; おみつ (@nasustim) <a href="https://twitter.com/nasustim/status/1672139641791852544?ref_src=twsrc%5Etfw">June 23, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

ルーチンワークと化している PC のセットアップを毎回思い出しながらやっていることに気づいたので、備忘録がてらやったことを残しておく。

## 1. Homebrew の導入

何をするにも追加でパッケージを入れられなければ始まらない。せっかくならあらゆるパッケージをコマンドラインツールでインストールして再現性を高めたいし、開発を始めたらどっちみち必要になるので最初の内に入れておく。

<code>
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
</code>

https://brew.sh/index_ja

上記 URL 通りにコマンドを実行する。このタイミングで Xcode のコマンドラインツールのインストールも実施してくれて、終われば git も使えるので便利。

## 2. SSH キーペアの作成

リモートリポジトリ（主に GitHub）とやりとりするために必要。

参考: https://qiita.com/pupupupupu/items/e071ab2b6e59a9be7603

ed25519 で作成することにした。

<code>
$ ssh-keygen -t ed25519 -C mitsu@boston
$ cat ~/.ssh/id_ed25519.pub | pbcopy

#=> 公開鍵を github.com の個人設定ページから追加する

</code>

私物コンピュータのホスト名は海外の地名から取ることが多いのだが、たまたまこの時は[タイタニック見学ツアー事故](https://www.bbc.com/japanese/65958731)が話題でボストンからの中継映像を見ていたので`boston`にした。

## 3. dotfile 展開

自分の dotfile を GitHub に置いている。`make`だけで展開できてお手軽だったので我ながら GJ である。

https://github.com/nasustim/dotfiles

## 4. 最低限必要なツールを導入する

- Google Chrome
  - https://formulae.brew.sh/cask/google-chrome
  - 言わずもがな、使い慣れた web ブラウザ
- ghq
  - https://github.com/x-motemen/ghq#macos
  - はてなの motemen さん謹製リポジトリ管理ツール
  - git のローカルリポジトリが自ずと`~/ghq`配下に集約されることが便利で利用している
- VSCode
  - https://formulae.brew.sh/cask/visual-studio-code
  - メインウエポン
- 1password
  - 1password なしでは生きられない身体になっている
  - https://my.1password.com/signin

# まとめ

ここまでインストールすれば他の必要なツールはすぐにインストール可能になったはず。

Brewfile で管理するとか、anyenv 入れておくかどうかとか、やると便利だろうけどインストールに時間もかかるだろうし、そもそもストレージを圧迫するサイズだから自分の端末全てに一律で入れたいか......？と考えると微妙だからまだやっていない。
