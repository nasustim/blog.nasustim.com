---
title: "Hugoで新しいブログを作成した"
date: 2023-01-10T14:40:16Z
draft: false
---

あなたが今開いているこのブログを作成しました。

新年の勢いにまかせて早くブログを作成したかったので、[GitHub Pages](https://docs.github.com/ja/pages) + [Hugo](https://gohugo.io/)でのクイックスタートしつつ、継続的にデプロイできるような足回りを整えることを意識しました。

リポジトリはこちら  
https://github.com/nasustim/blog.nasustim.com

## Hugo のセットアップ

Hugo は Homebrew などマシンのパッケージ管理ツールでもインストールできるが、別のマシンでの記事作成も想定して Docker で利用することにした。

Dockerfile

```Dockerfile
# Dockerfile
FROM klakegg/hugo:0.107.0-alpine

WORKDIR /work
```

hugo

```bash
#!/bin/bash

IMAGE_NAME="nasustim/blog"

image_builded=$(docker image ls | grep "$IMAGE_NAME")
if [ -z "$image_builded" ]; then
  echo "image building..."
  docker build -t "$IMAGE_NAME" .
fi

docker run -v $(pwd):/work -it "$IMAGE_NAME" $*
```

以下のコマンドでブログのスケルトンを作成

```bash
$ chmod 777 hugo
$ ./hugo new site --force ./
```

config.toml が作成されるので、自分のブログ用の設定に書き換える

```toml
baseURL = "https://blog.nasustim.com/"
languageCode = "ja-jp"
title = "nasustim's weblog"
```

### テーマをインストールする

Hugo のデザインテーマは`themes/`直下にテーマのリポジトリをダウンロードすることでインストールできる。  
https://themes.gohugo.io に主要なテーマが一覧されている。[paper](https://themes.gohugo.io/themes/hugo-paper/)のシンプルなスタイルに惹かれたのでこれをインストールする。

```bash
$ git submodule add https://github.com/nanxiaobei/hugo-paper themes/paper
$ echo "theme = \"paper\"" >> config.toml
```

### contentDir を設定

記事を置くディレクトリを設定する

```bash
$ echo "contentDir = \"articles/\"" >> config.toml
```

## GitHub リポジトリをセットアップする

### デプロイスクリプトの作成

[Host on GitHub | Hugo](https://gohugo.io/hosting-and-deployment/hosting-on-github/#build-hugo-with-github-action) に GitHub Actions で記述されたデプロイスクリプトがあるのでそれをそのまま流用する。  
上記ページのコードスニペットを`.github/workflows/`以下に YAML ファイルとして保存して作成完了。これで`main`ブランチにコードが push されたタイミングで Hugo のビルドが実行され、結果が`gh-pages`ブランチに commit される。  
上記デプロイスクリプトは `main`ブランチ以外のフックではビルドまで実行されるため、テストとしても活用できる。

### Renovate を導入する

https://github.com/apps/renovate より。  
このリポジトリの依存パッケージのアップデートを自動で管理してくれる。

[Hugo のセットアップ](#hugo-のセットアップ)にて Hugo のベースイメージを Dockerfile の`FROM`句で指定することでこちらも管理対象となる。

また、submodule でインストールした Hugo テーマも`renovate.json`に以下の設定を追加するとバージョン管理の対象となる。  
https://docs.renovatebot.com/modules/manager/git-submodules/

```js
{
  ..., // 既存設定
  "git-submodules": {
    "enabled": true
  }
}
```
