---
slug: "/create-new-blog"
title: "Hugoで新しいブログを作成した"
date: 2023-01-10T14:40:16Z
draft: false
tags:
  - プログラミング
  - Hugo
---

あなたが今開いてるこのブログを作成した。

新年の何かやりたい勢いにまかせて、とにかく早くブログを用意したかったので、使い慣れた[GitHub Pages](https://docs.github.com/ja/pages) + 日本語ドキュメントも多い[Hugo](https://gohugo.io/)でクイックスタートしつつ、継続的にデプロイできる最低限の足回りの整備を意識しました。

リポジトリはこちら  
https://github.com/nasustim/blog.nasustim.com

---

## Hugo のセットアップ

Hugo は Homebrew などのパッケージ管理ツールでもインストールできるが、自分は普段使いの macOS の他に windows(WSL)を利用することもあるので、プラットフォーム間での執筆環境の可搬性を確保するために Docker で利用することにした。  
[Renovate を導入する](#renovate-を導入する)でも説明するが、ベースイメージを Dockerfile の`FROM`句で指定しておくことで、Renovate でのバージョン管理対象となる。

<code>
# Dockerfile
FROM klakegg/hugo:0.107.0-alpine

WORKDIR /work

</code>

<code>
# hugo

#!/bin/bash

IMAGE_NAME="blog"

image_builded=$(docker image ls | grep "$IMAGE_NAME")
if [ -z "$image_builded" ]; then
echo "image building..."
docker build -t "$IMAGE_NAME" .
fi

docker run --rm -v $(pwd):/work -it -p 1313:1313 "$IMAGE_NAME" $\*

</code>

以下のコマンドでブログのスケルトンを作成

<code>
$ chmod 777 hugo
$ ./hugo new site --force ./
</code>

`config.toml` が作成されるので、自分のブログ用の設定に書き換える

<code>
# config.toml

baseURL = "https://blog.nasustim.com/"
languageCode = "ja-jp"
title = "nasustim's weblog"

</code>

### テーマをインストールする

Hugo のデザインテーマは`themes/`直下にテーマのリポジトリをダウンロードすることでインストールできる。
https://themes.gohugo.io に主要なテーマが一覧されている。[paper](https://themes.gohugo.io/themes/hugo-paper/)のシンプルなスタイルに惹かれたのでこれをインストールする。

<code>
$ git submodule add https://github.com/nanxiaobei/hugo-paper themes/paper
$ echo "theme = \"paper\"" >> config.toml
</code>

### contentDir を設定

記事を置くディレクトリを設定する

<code>
$ echo "contentDir = \"articles/\"" >> config.toml
</code>

## GitHub リポジトリをセットアップする

### デプロイスクリプトの作成

[Host on GitHub | Hugo](https://gohugo.io/hosting-and-deployment/hosting-on-github/#build-hugo-with-github-action) に GitHub Actions で使えるデプロイスクリプトがあるのでこれを利用する。
上記ページのコードスニペットを`.github/workflows/`以下に YAML ファイルとして保存してセットアップ完了。`main`ブランチにコードが push されるとビルドが実行され、その出力結果が`gh-pages`ブランチに commit される。
上記デプロイスクリプトは `main`ブランチ以外ではビルドのみ実行されるため、記事のテストとしても活用できる。

### Renovate を導入する

https://github.com/apps/renovate より。
このリポジトリの依存パッケージのアップデートを自動で管理してくれる。

[Hugo のセットアップ](#hugo-のセットアップ)にて Hugo のベースイメージを Dockerfile の`FROM`句で指定することでこちらも管理対象となる。

また、submodule でインストールした Hugo テーマも`renovate.json`に以下の設定を追加するとバージョン管理の対象となる。
https://docs.renovatebot.com/modules/manager/git-submodules/

`renovate.json`

<code>
{
  ..., // 既存設定
  "git-submodules": {
    "enabled": true
  }
}
</code>
