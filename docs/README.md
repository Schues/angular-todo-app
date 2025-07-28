# Todo アプリ

このプロジェクトは、Angular 20のサンプルとして作成されたモダンなTodoアプリケーションです。

## 機能

- ✅ タスクの追加
- ✅ タスクの削除
- ✅ 美しいUI/UX
- ✅ レスポンシブデザイン
- ✅ Enterキーでのタスク追加
- ✅ 空の状態の表示

## 開発サーバーの起動

```bash
npm start
```

アプリケーションは `http://localhost:4200/` で起動します。

## ビルド

```bash
npm run build
```

## テスト

```bash
npm test
```

## 技術スタック

- Angular 20
- TypeScript
- CSS3 (カスタムスタイリング)
- HTML5

## プロジェクト構造

```
src/
├── app/
│   ├── todo/
│   │   ├── todo.ts          # Todoコンポーネント
│   │   ├── todo.html        # Todoテンプレート
│   │   └── todo.css         # Todoスタイル
│   ├── app.ts               # メインアプリコンポーネント
│   ├── app.html             # アプリテンプレート
│   ├── app.css              # アプリスタイル
│   └── app.config.ts        # アプリ設定
├── main.ts                  # アプリケーションエントリーポイント
└── index.html               # メインHTMLファイル
```
