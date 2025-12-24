# Supabase設定

## プロジェクト情報

- **プロジェクトID**: eehtgckbjymaxmybmcdz
- **プロジェクトURL**: https://eehtgckbjymaxmybmcdz.supabase.co
- **リージョン**: ap-northeast-1 (東京)

## 環境変数の設定

プロジェクトルートに `.env.local` ファイルを作成し、以下の環境変数を設定してください：

```env
NEXT_PUBLIC_SUPABASE_URL=https://eehtgckbjymaxmybmcdz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlaHRnY2tianltYXhteWJtY2R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1MzY0MDQsImV4cCI6MjA4MjExMjQwNH0.1XIWKsZNVNFxnfFJm59l16HoH7iLMROQPzaqdzmCLbY
```

または、新しいpublishableキーを使用する場合：

```env
NEXT_PUBLIC_SUPABASE_URL=https://eehtgckbjymaxmybmcdz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_34T_ExZ1Bl8F9NbIma1T4g_jG2ZP0OP
```

## データベーススキーマ

以下のテーブルが作成されています：

- `products` - 製品情報
- `articles` - 記事情報
- `tags` - タグ情報
- `article_tags` - 記事とタグの中間テーブル
- `cases` - 事例情報
- `faqs` - FAQ情報

すべてのテーブルでパブリック読み取りが許可されています。

