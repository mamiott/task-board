# CLAUDE.md

このファイルは、このリポジトリで作業する Claude Code へのガイドです。

## プロジェクト概要

- プロジェクト名: task-board
- 内容: タスク管理ボードアプリケーション
- 機能: タスクの追加・完了切り替え・削除。完了済みはグレー表示。localStorage に保存

## 技術スタック

| 分類 | 使用技術 |
| --- | --- |
| UI ライブラリ | React 19（関数コンポーネント + Hooks） |
| 言語 | JavaScript（JSX）。TypeScript は未使用 |
| ビルドツール | Vite 8（`@vitejs/plugin-react`） |
| Lint | oxlint |
| スタイル | 素の CSS（`src/index.css`）。CSS フレームワークは未使用 |
| データ保存 | ブラウザの localStorage（キー: `task-board.tasks`） |
| ホスティング | GitHub Pages（GitHub Actions で自動デプロイ） |
| 実行環境 | Node.js 24 |

### ディレクトリ構成

```
index.html                    # エントリーの HTML
src/main.jsx                  # React のマウント処理
src/App.jsx                   # 画面とタスク状態の管理、localStorage への保存
src/index.css                 # 全体のスタイル
public/                       # 静的ファイル（favicon など）
.github/workflows/deploy.yml  # GitHub Pages へのデプロイ設定
```

## 開発コマンド

```bash
npm install      # 依存関係のインストール
npm run dev      # 開発サーバー起動（http://localhost:5173）
npm run lint     # Lint
npm run build    # 本番ビルド（dist/ に出力）
npm run preview  # ビルド結果のプレビュー
```

## デプロイ先

https://mamiott.github.io/task-board/

- GitHub Pages で公開している
- `main` へのプッシュで `.github/workflows/deploy.yml` が自動でビルド・デプロイする
- `vite.config.js` の `base: './'` は Pages のサブパスで動かすための設定なので変更しない

## コーディング規約

- 既存コードのスタイル・命名規則に合わせる
- コメントやドキュメントは日本語で記述する（コード上の識別子は英語）
- 1つの変更は1つの目的に絞る

### コンポーネントの命名規約

- **コンポーネント名**: PascalCase（例: `App`、`TaskItem`、`AddTaskForm`）
- **ファイル名**: コンポーネント名と同じ PascalCase + `.jsx`（例: `TaskItem.jsx`）。1ファイルに1コンポーネント
- **定義と export**: `function` 宣言で定義し、ファイル末尾で `export default` する
- **配置**: 新しいコンポーネントは `src/components/` に置く（`App.jsx` と `main.jsx` は `src/` 直下のまま）
- **イベントハンドラ**: 動詞 + 対象の camelCase（例: `addTask`、`toggleTask`、`deleteTask`）。
  props で渡すときは `on` + 動詞 + 対象（例: `onToggleTask`、`onDeleteTask`）
- **state**: 名詞の camelCase と、対応する `set` + PascalCase（例: `tasks` / `setTasks`）
- **真偽値**: 状態を表す短い形容詞・過去分詞（例: `done`）。新規には `is` / `has` を付けてもよい（例: `isEditing`）
- **定数**: モジュールレベルの定数は UPPER_SNAKE_CASE（例: `STORAGE_KEY`）
- **CSS クラス名**: kebab-case（例: `add-form`、`task-list`）。状態は修飾クラスを重ねる（例: `task done`）
- **画面上の文言**: 日本語。アイコンだけのボタンなどには日本語の `aria-label` を付ける

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
