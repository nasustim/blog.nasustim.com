---
slug: get-task-arn-by-task-definitions-base-image
title: "AWS CLIでベースイメージからECSで実行中のタスクのarnを取得する"
date: 2023-02-14T13:39:10Z
draft: false
tags:
  - プログラミング
  - AWS
  - 自分用メモ
---

<code>
task_arns=$(aws ecs list-tasks --cluster <クラスタ名> | jq -c -r '.taskArns[]')
# 実行中のtask arnの一覧を取得

for task in $tasks; do \
  image_name=$( aws ecs describe-tasks --cluster <クラスタ名> --tasks $task | jq -c -r '.tasks[0].containers[0].image' ) # タスク1つ, コンテナ1つの場合

if[["$image" =~ ^"my-target-image:latest"$]]; then
echo $task # my-target-image:latest をベースイメージにしたタスク
fi
done

</code>

special thanks: ChatGPT

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">サンキューChatGPT <a href="https://t.co/uMel5BhAkc">pic.twitter.com/uMel5BhAkc</a></p>&mdash; おみつ (@nasustim) <a href="https://twitter.com/nasustim/status/1623988756683591680?ref_src=twsrc%5Etfw">February 10, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
