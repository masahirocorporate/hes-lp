-- タグの作成
INSERT INTO tags (name, slug) VALUES
('補助金', 'subsidy'),
('設置方法', 'installation'),
('メンテナンス', 'maintenance'),
('停電対策', 'power-outage'),
('太陽光発電', 'solar-power'),
('節約', 'savings'),
('環境', 'environment'),
('FIT', 'fit')
ON CONFLICT (slug) DO NOTHING;

-- 製品の作成
INSERT INTO products (slug, title, description, image, specs, price_range) VALUES
('anker-solix-xj-5', 'Anker SOLIX XJ 5kWh', 'コンパクトサイズで設置しやすい5kWhモデル。マンションや狭いスペースにも対応。', 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800', 
'{"容量": "5kWh", "出力": "3kW", "サイズ": "幅60cm×奥行30cm×高さ120cm", "重量": "約80kg", "保証": "10年間"}'::jsonb,
'補助金適用後 80〜120万円'),
('anker-solix-xj-10', 'Anker SOLIX XJ 10kWh', '標準的な10kWhモデル。一般的な家庭の1日分の電気を賄えます。', 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800',
'{"容量": "10kWh", "出力": "5kW", "サイズ": "幅60cm×奥行30cm×高さ120cm", "重量": "約120kg", "保証": "10年間"}'::jsonb,
'補助金適用後 120〜180万円'),
('anker-solix-xj-15', 'Anker SOLIX XJ 15kWh', '大容量15kWhモデル。大家族や電気使用量の多いご家庭に最適。', 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800',
'{"容量": "15kWh", "出力": "7kW", "サイズ": "幅60cm×奥行30cm×高さ120cm", "重量": "約150kg", "保証": "10年間"}'::jsonb,
'補助金適用後 180〜250万円')
ON CONFLICT (slug) DO NOTHING;

-- 記事の作成
INSERT INTO articles (slug, title, content, excerpt, image, published_at) VALUES
('subsidy-guide-2025', '2025年 蓄電池補助金完全ガイド', 
'<h2>2025年の補助金制度について</h2><p>2025年、蓄電池への補助金制度が大幅に拡充されました。国からの補助金に加えて、都道府県や市区町村からの補助金も重ねて受けることができます。</p><h3>補助金額</h3><ul><li>国からの補助金：最大60万円</li><li>都道府県からの補助金：最大30万円</li><li>市区町村からの補助金：最大30万円</li></ul><p>合計で最大120万円の補助金を受けることが可能です。</p>',
'2025年の蓄電池補助金制度について、申請方法から受給までの流れを詳しく解説します。',
'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
NOW() - INTERVAL '5 days'),
('solar-battery-installation', '太陽光発電と蓄電池の設置方法',
'<h2>設置の流れ</h2><p>太陽光発電と蓄電池の設置は、以下のような流れで進みます。</p><ol><li>現地調査（無料）</li><li>お見積り提出</li><li>補助金申請</li><li>設置工事（1日）</li><li>動作確認</li></ol><p>設置工事自体は1日で完了しますが、補助金申請を含めると2〜4週間程度かかります。</p>',
'太陽光発電と蓄電池をセットで導入する際の設置方法と注意点を解説します。',
'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800',
NOW() - INTERVAL '10 days'),
('battery-maintenance', '蓄電池のメンテナンス方法',
'<h2>日常的なメンテナンス</h2><p>蓄電池は基本的にメンテナンスフリーですが、以下の点に注意することで長持ちさせることができます。</p><ul><li>定期的な動作確認</li><li>周辺の清掃</li><li>通気口の確認</li></ul><p>10年間の製品保証がついているため、故障時も安心です。</p>',
'蓄電池を長持ちさせるためのメンテナンス方法をご紹介します。',
'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
NOW() - INTERVAL '15 days'),
('power-outage-preparation', '停電対策としての蓄電池',
'<h2>停電時の備え</h2><p>近年、自然災害による停電が増加しています。蓄電池があれば、停電時でも電気を使い続けることができます。</p><h3>停電時の動作</h3><p>停電を検知すると、自動的に蓄電池からの給電に切り替わります。切り替え時間は数秒以内で、家電への影響はほとんどありません。</p><p>10kWhモデルであれば、一般的な家庭で1日程度の電気を賄えます。</p>',
'停電対策として蓄電池を導入するメリットと選び方を解説します。',
'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
NOW() - INTERVAL '20 days'),
('fit-battery-combination', 'FIT終了後の太陽光発電と蓄電池',
'<h2>FIT終了後の選択肢</h2><p>10年間のFIT（固定価格買取制度）が終了すると、売電価格が大幅に下がります。この場合、蓄電池を導入して自家消費に切り替えるのがおすすめです。</p><h3>自家消費のメリット</h3><ul><li>電気代の削減</li><li>災害時の備え</li><li>環境への貢献</li></ul>',
'FIT終了後に蓄電池を導入するメリットと注意点を解説します。',
'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800',
NOW() - INTERVAL '25 days'),
('electricity-bill-savings', '電気代を年間15万円削減する方法',
'<h2>電気代削減の実例</h2><p>太陽光発電と蓄電池をセットで導入することで、電気代を大幅に削減できます。</p><h3>削減例</h3><p>月々の電気代が1.5万円だった家庭が、導入後は5,000円に削減。年間で12万円の削減となり、ローンを払っても黒字になります。</p>',
'太陽光発電と蓄電池で電気代を削減する具体的な方法をご紹介します。',
'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
NOW() - INTERVAL '30 days'),
('environmental-impact', '蓄電池が環境に与える影響',
'<h2>環境への貢献</h2><p>蓄電池を導入することで、再生可能エネルギーの利用率が向上し、CO2削減に貢献できます。</p><h3>環境効果</h3><p>太陽光発電と蓄電池を組み合わせることで、家庭のCO2排出量を大幅に削減できます。10kWhモデルで年間約2トンのCO2削減効果があります。</p>',
'蓄電池が環境に与える良い影響について解説します。',
'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
NOW() - INTERVAL '35 days')
ON CONFLICT (slug) DO NOTHING;

-- 記事とタグの関連付け
INSERT INTO article_tags (article_id, tag_id)
SELECT a.id, t.id
FROM articles a, tags t
WHERE (a.slug = 'subsidy-guide-2025' AND t.slug = 'subsidy')
   OR (a.slug = 'subsidy-guide-2025' AND t.slug = 'savings')
   OR (a.slug = 'solar-battery-installation' AND t.slug = 'installation')
   OR (a.slug = 'solar-battery-installation' AND t.slug = 'solar-power')
   OR (a.slug = 'battery-maintenance' AND t.slug = 'maintenance')
   OR (a.slug = 'power-outage-preparation' AND t.slug = 'power-outage')
   OR (a.slug = 'power-outage-preparation' AND t.slug = 'environment')
   OR (a.slug = 'fit-battery-combination' AND t.slug = 'fit')
   OR (a.slug = 'fit-battery-combination' AND t.slug = 'solar-power')
   OR (a.slug = 'electricity-bill-savings' AND t.slug = 'savings')
   OR (a.slug = 'electricity-bill-savings' AND t.slug = 'solar-power')
   OR (a.slug = 'environmental-impact' AND t.slug = 'environment')
ON CONFLICT DO NOTHING;

-- 事例の作成
INSERT INTO cases (slug, title, content, image, customer_info, results) VALUES
('tokyo-family-case', '東京都 40代ご夫婦の事例',
'<h2>導入のきっかけ</h2><p>電気代の高騰に悩んでいたご夫婦が、太陽光発電と蓄電池をセットで導入されました。</p><h3>導入内容</h3><ul><li>太陽光発電：5kW</li><li>蓄電池：10kWh</li><li>補助金：90万円</li></ul><h3>導入後の変化</h3><p>電気代が月1.5万円から5,000円に削減。年間で12万円の削減を実現しました。</p>',
'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
'{"年齢": "40代", "家族構成": "夫婦2人", "住居": "一戸建て", "地域": "東京都"}'::jsonb,
'{"電気代削減": "年間12万円", "回収期間": "8年", "満足度": "非常に満足"}'::jsonb),
('kanagawa-solar-case', '神奈川県 50代ご家族の事例',
'<h2>FIT終了後の対応</h2><p>10年前に太陽光発電を導入し、FIT終了を迎えたご家族が蓄電池を追加導入されました。</p><h3>導入内容</h3><ul><li>既存太陽光：6kW</li><li>蓄電池：10kWh</li><li>補助金：60万円</li></ul><h3>導入後の変化</h3><p>FIT終了後は売電収入が激減していましたが、蓄電池導入により自家消費で電気代がほぼゼロになりました。</p>',
'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
'{"年齢": "50代", "家族構成": "4人家族", "住居": "一戸建て", "地域": "神奈川県"}'::jsonb,
'{"電気代削減": "年間15万円", "回収期間": "6年", "満足度": "満足"}'::jsonb),
('chiba-power-outage-case', '千葉県 30代ご家族の事例',
'<h2>停電対策として導入</h2><p>過去に停電を経験し、災害対策として蓄電池を導入されたご家族です。</p><h3>導入内容</h3><ul><li>太陽光発電：4kW</li><li>蓄電池：10kWh</li><li>補助金：80万円</li></ul><h3>実際の効果</h3><p>台風による停電時、近隣は停電していましたが、ご自宅は蓄電池のおかげで普通に生活できました。冷蔵庫もエアコンも動き、本当に入れてよかったとおっしゃっています。</p>',
'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
'{"年齢": "30代", "家族構成": "3人家族", "住居": "一戸建て", "地域": "千葉県"}'::jsonb,
'{"停電対応": "48時間以上", "電気代削減": "年間10万円", "満足度": "非常に満足"}'::jsonb),
('saitama-elderly-case', '埼玉県 60代ご夫婦の事例',
'<h2>FIT終了後の損失を回復</h2><p>FIT終了から2年間、損をしていたご夫婦が蓄電池を導入されました。</p><h3>導入内容</h3><ul><li>既存太陽光：5kW</li><li>蓄電池：10kWh</li><li>補助金：70万円</li></ul><h3>導入後の変化</h3><p>蓄電池を導入して初めて、太陽光発電の本当の価値がわかりました。もっと早く入れればよかったとおっしゃっています。</p>',
'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
'{"年齢": "60代", "家族構成": "夫婦2人", "住居": "一戸建て", "地域": "埼玉県"}'::jsonb,
'{"損失回復": "年間8万円", "回収期間": "7年", "満足度": "満足"}'::jsonb)
ON CONFLICT (slug) DO NOTHING;

-- FAQの作成
INSERT INTO faqs (question, answer, category, display_order) VALUES
('設置にはどれくらいの期間がかかりますか？', '現地調査から設置完了まで、通常2〜4週間程度です。設置工事自体は1日で完了します。補助金申請を含める場合は、さらに1〜2週間程度かかることがあります。', '設置', 1),
('設置スペースはどれくらい必要ですか？', 'Anker SOLIX XJシリーズは幅約60cm×奥行約30cm×高さ約120cm。エアコンの室外機程度のスペースがあれば設置可能です。屋内・屋外どちらにも対応しています。', '設置', 2),
('蓄電池の寿命はどれくらいですか？', 'Anker SOLIX XJシリーズはリン酸鉄リチウムイオン電池を採用。15年以上の長寿命で、6,000回以上の充放電サイクルに対応しています。10年間の製品保証付き。', '製品', 3),
('停電時、自動で切り替わりますか？', 'はい。停電を検知すると、自動的に蓄電池からの給電に切り替わります。手動での操作は不要です。切り替え時間は数秒以内で、家電への影響はほとんどありません。', '機能', 4),
('太陽光パネルも一緒に設置できますか？', 'はい。太陽光パネルと蓄電池のセット導入に対応しています。セット導入の場合、より多くの補助金が適用される場合があります。無料診断でお見積りをご確認ください。', '設置', 5),
('初期費用はどれくらいかかりますか？', '太陽光＋蓄電池のセットで、補助金適用前で200〜300万円程度。補助金（最大120万円）を活用すれば、実質負担を大幅に軽減できます。月々のローン払いも可能です。', '費用', 6),
('今ある太陽光パネルと連携できますか？', 'ほとんどのメーカーの太陽光パネル・パワコンと連携可能です。現地調査で詳細を確認し、最適な連携方法をご提案します。', '設置', 7),
('FIT終了後、蓄電池だけでも補助金は出ますか？', 'はい。蓄電池単体でもDR補助金（国）や都道府県・市区町村の補助金が適用されます。無料診断で、お住まいの地域で使える補助金をお調べします。', '補助金', 8)
ON CONFLICT DO NOTHING;

