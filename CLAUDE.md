# CLAUDE.md

このファイルは、このリポジトリで作業する Claude Code へのガイドです。

## プロジェクト概要

- プロジェクト名: task-board
- 内容: タスク管理ボードアプリケーション
- 技術スタック: React 19 + Vite（JavaScript / JSX）、Lint は oxlint
- 構成: `src/App.jsx`（画面とタスク状態の管理、localStorage への保存）、`src/index.css`（スタイル）

## 開発コマンド

```bash
npm install      # 依存関係のインストール
npm run dev      # 開発サーバー起動（http://localhost:5173）
npm run lint     # Lint
npm run build    # 本番ビルド（dist/ に出力）
npm run preview  # ビルド結果のプレビュー
```

## デプロイ

- GitHub Pages で公開: https://mamiott.github.io/task-board/
- `main` へのプッシュで `.github/workflows/deploy.yml` が自動でビルド・デプロイする
- `vite.config.js` の `base: './'` は Pages のサブパスで動かすための設定なので変更しない

## コーディング規約

- 既存コードのスタイル・命名規則に合わせる
- コメントやドキュメントは日本語で記述する（コード上の識別子は英語）
- 1つの変更は1つの目的に絞る

## Git運用ルール

### 基本方針

- **コードを変更するたびに、コミットして GitHub にプッシュすること。**
  変更をローカルに溜めたまま作業を終えない。
- 作業の区切り（機能追加・バグ修正・リファクタリングなど）ごとにコミットする。

### 手順

1. 変更内容を確認する: `git status` / `git diff`
2. 関連ファイルのみをステージする: `git add <ファイル>`
   （`.env` などの秘密情報や不要なファイルを含めないこと）
3. コミットする: `git commit -m "<メッセージ>"`
4. プッシュする: `git push`
   （初回は `git push -u origin <ブランチ名>`）

### コミットメッセージ

- 日本語で、何をなぜ変更したかを簡潔に書く
- 先頭にプレフィックスを付ける:
  - `feat:` 新機能
  - `fix:` バグ修正
  - `refactor:` リファクタリング
  - `docs:` ドキュメント
  - `style:` 見た目・フォーマットのみの変更
  - `chore:` 設定・依存関係など

例: `feat: タスクのドラッグ＆ドロップ移動を追加`

### 注意事項

- `git push --force` は使わない（必要な場合は必ずユーザーに確認する）
- プッシュに失敗した場合は、`git pull --rebase` で取り込んでから再度プッシュする。
  コンフリクトが起きた場合は自己判断で解消せず、ユーザーに報告する
- 秘密情報（APIキー、パスワード等）は `.gitignore` で除外し、絶対にコミットしない
