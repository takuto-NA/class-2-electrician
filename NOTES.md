# Notes

## 学習者の背景（2026-07-01 時点）

- DIY動機：オフグリッド、蓄電池、ソーラーなど30V以上の電気を自分で扱いたい
- 電気の事前知識レベル：未確認（次回セッションで確認）
- 技能練習環境：未確認

## 学習スタイル（2026-07-01 追加）

- **略語・アルファベット名は由来から覚えたい**（ケーブル名 IV / VVF / CV 等）
- 暗記リストより「もともと何の略か」「語源は何か」をセットで教えると定着しやすい
- 新しい略称が出るたびに分解表（letter → 意味）を添える

## 指導上の方針

- 試験対策と DIY 実務の接点を常に明示する（抽象論だけにしない）
- 法令・保安は「なぜ自分のDIYに関係するか」から入る
- ソーラー・蓄電池は第2種の出題範囲と DIY 現場の両方で繰り返し登場させる
- 略語は `reference/cable-abbreviations.html` を正とし、レッスンでも同じ分解ルールを使う
- 新しいレッスンを作るたびに `reference/exam-map.html` の該当科目の進捗バーを更新する
- 各レッスン冒頭に `.position-badge`（科目・配点・科目内チェックリスト）を必ず入れ、末尾に「終わっていないこと」を明記する
- **会話劇（ゆっくり解説）形式を好む**：説明パートは「ボルト先生（解説役）」と「アンペアくん（聞き手）」の対話形式にする（`assets/scene-story.css` の `.dialogue` 系クラス）。位置づけバッジ・進捗チェックリスト・末尾のまとめは会話にせず地の文のままでよい
- **暗記向けUI**：答えはホバー/タップで表示（`assets/reveal-answer.css`）。印刷時は答えをすべて表示
- **読み物として楽しめる説明**を好む：現場でどこに使うか、歴史、うんちく、断面イメージ（`assets/scene-story.css`）
- **マクロな地図を欲しがる**：合格ライン／全体範囲／現在地／安心ライン／最重要暗記の5点セットで納得したい（2026-07-02）
  → `reference/exam-map.html` が正。レッスンが増えるたびに進捗バーを更新すること

## 教材構成（2026-07-02 全課程完成・レッスン6〜17拡充済み）

- **レッスン1〜17** + **模試9001**：学科7科目＋技能。全レッスンが会話劇・position-badge・scene-card・trivia-box・reveal暗記・クイズ2〜3問で統一された密度
- **参照資料**：`exam-map.html`（地図）、`symbol-decoder.html`（図記号）、`cable-abbreviations.html`（ケーブル）、`numbers-to-memorize.html`（数値）、`formulas-and-calculations.html`（計算公式）、`candidate-problems.html`（技能13問）、`glossary.html`、`thirty-volt-line.html`
- **推奨学習順**：exam-map のレッスン一覧に準拠。定着フェーズは**暗記表4種反復**→模試10問→過去問50問→技能13問2周
- **共通CSSコンポーネント**：`.formula-box`・`.symbol-box`は`assets/scene-story.css`に集約済み（レッスン側で再定義しない）

## 暗記表の設計ルール（2026-07-02 追加）

- **暗記表4種セット**が学科の核：①`numbers-to-memorize.html` ②`symbol-decoder.html` ③`cable-abbreviations.html` ④`formulas-and-calculations.html`。レッスンを拡充したら、試験数値・公式・記号は必ずいずれかに追記する
- **過去問ギャップ修正**（2026-07-03）：公式PDF監査で×だった17問を4表＋レッスン6/7へ追記。写真問題は実物画像の代わりに**テキスト特徴描写ドリル**（`lessons/0006`, `0007`）。カバレッジ再評価は `reference/past-exam-coverage-audit.html`
- `numbers-to-memorize.html` は数値・ルール・施工・法令のハブ。計算の「やり方」は `formulas-and-calculations.html` に分離
- 各 `<h2>` の直下に `<p class="see-lesson">わからなければ → <a href="...">レッスンXで解説</a></p>` を必ず入れる（`assets/reveal-answer.css` の `.see-lesson`）。4表すべてこのパターンで統一
- 数値だけ暗記して「なぜその数値か」を忘れた時に、無理なく該当レッスンに戻れる導線を常に確保する

## コミュニティ

- 特に opt-out の申告なし
