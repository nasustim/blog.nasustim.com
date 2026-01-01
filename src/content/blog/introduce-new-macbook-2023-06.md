---
slug: introduce-new-macbook-2023-06
title: "Macbook Air セットアップ記録 - 2023年6月"
date: 2023-06-23T15:08:50Z
draft: false
tags:
  - MacOS
---

Macbook を新調した。

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">my new gear... <a href="https://t.co/GV1dBZnQVU">pic.twitter.com/GV1dBZnQVU</a></p>&mdash; おみつ (@nasustim) <a href="https://twitter.com/nasustim/status/1672139641791852544?ref_src=twsrc%5Etfw">June 23, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

セットアップする度に同じようなことを調べているので、個人的備忘録として残しておく。

## 1. Homebrew の導入

今後入れるパッケージ管理をしやすくするためにパッケージマネージャーを入れる。macOS なら homebrew[^homebrew]が安定だと思っている

```bash
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

コマンド一発で Xcode のコマンドラインツールもインストールされるので、git もセットアップされている。便利


## 2. SSH キーペアの作成

主に GitHub とやりとりするために必要

参考: https://qiita.com/pupupupupu/items/e071ab2b6e59a9be7603

ed25519で作成することにした。

```bash
$ ssh-keygen -t ed25519 -C mitsu@boston
$ cat ~/.ssh/id_ed25519.pub | pbcopy
```

クリップボードに公開鍵文字列が格納されるので、GitHub の個人設定に登録する。

## 3. dotfile 展開

自分の dotfile を GitHub で管理している。`make` コマンドだけで展開できるので楽ちん。

https://github.com/nasustim/dotfiles

## 4. 最低限必要なツールを導入する

- Google Chrome
  - https://formulae.brew.sh/cask/google-chrome
- ghq
  - https://github.com/x-motemen/ghq#macos
  - `~/ghq` 配下に clone して git のローカルリポジトリを管理している
- VSCode
  - https://formulae.brew.sh/cask/visual-studio-code
  - 普段遣いのエディタ
- 1password
  - https://my.1password.com/signin

# まとめ

ここまでインストールすれば他の必要なツールはすぐにインストール可能になったはず。

Brewfile で管理するとか、anyenv 入れておくかどうかとか、やると便利だろうけど時間もかかるし、自分の端末全てに一律で入れたいか......？と考えると微妙だからまだやっていない。


[^homebrew]: https://brew.sh/index_ja