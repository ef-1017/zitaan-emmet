# Photock リニューアル - デザインガイドライン (Ver 2.2)

**コンセプト:** "Cinematic Zen Glass" (没入感、機能美、日本の空気感)
**ベース技術:** Next.js (App Router) + Tailwind CSS + Lucide React

---

## 1. タイポグラフィ (Typography)

**「可読性」と「雑誌のようなインパクト」の両立。**

### 1-1. フォントファミリー
* **Logo / Brand:** **`Outfit`** (Google Fonts)
    * Weights: `700`(Bold), `800`(ExtraBold)
    * Usage: ロゴ ("Photock")、ブランド名。※Ver.2.2でウェイトを少し落とし洗練。
* **English / Numbers:** **`Oswald`** (Google Fonts)
    * Weights: `500`(Medium), `700`(Bold)
    * Usage: 統計数値、英語見出し (CATEGORY, UPDATE等)、日付、容量表記。
* **Japanese / Body:** **`Noto Sans JP`** (Google Fonts)
    * Weights: `400`(Regular), `500`(Medium), `700`(Bold), `900`(Black)
    * Usage: 本文、ナビゲーション、日本語見出し。

### 1-2. フォントサイズ規定 (New!)
* **Base Size:** `14px` (`text-sm`)
    * *本文やリストの基本サイズ。*
* **Minimum Size:** **`13px`**
    * *注釈や補足情報であっても、これより小さくしない（可読性維持）。*
    * *例外: デザイン上の装飾的なラベル（バッジ内など）のみ `10px`~`11px` 可。*

### 1-3. 文字装飾
* **Text Shadow:** 白文字の視認性を確保するため必須。
    * `text-shadow-sm`: `text-shadow: 0 1px 3px rgba(0,0,0,0.5);`
    * `text-shadow-lg`: `text-shadow: 0 4px 10px rgba(0,0,0,0.8);`

---

## 2. カラーパレット & テクスチャ

### 2-1. 背景・ベース
* **Main Background:** `#1a1a1a` (Dark Gray)
* **Image Overlay:** `bg-gradient-to-b from-black/70 via-black/40 to-black/80`
    * 写真の上には必ず濃いグラデーションオーバーレイを敷く。

### 2-2. アクセントカラー
* **Brand Yellow:** `text-yellow-400` / `bg-yellow-500`
    * 用途: "UPDATE" バッジ、特集アイコン、強調したい数字。
* **Format Colors (DLボタン用):**
    * **JPG:** `text-blue-400` / `border-blue-500`
    * **WebP:** `text-emerald-400` / `border-emerald-500`
    * **Original:** `text-gray-200` (他と同列のモノトーン扱い)

---

## 3. グラスモーフィズム (Glassmorphism)

### 3-1. Light Glass (検索バー・入力エリア)
* **白く、高い視認性。**
* Background: `rgba(255, 255, 255, 0.92)`
* Blur: `backdrop-blur-xl` (12px)
* Border: `border-white/80`
* Shadow: `shadow-2xl`

### 3-2. Dark Glass (フッター・ヘッダー・DLパネル)
* **黒く、背景に馴染む。**
* Background: `rgba(0, 0, 0, 0.8)` 〜 `#000000`
* Blur: `backdrop-blur-md`
* Border: `border-white/10` 〜 `border-white/20`

---

## 4. UIコンポーネント (Components)

### 4-1. ダウンロードパネル (New!)
* **Style:** 濃い黒背景 (`bg-black`) + 白枠線 (`border-white/20`)。
* **Layout:** 「サイズ名 + 解像度」と「形式ボタン(JPG/WebP)」を横並びにするリスト形式。
* **Original:** 特別な黄色ボタンにはせず、他のサイズと同列のデザインルールで統一する。

### 4-2. カード (Discovery / Category)
* **Image Card Style:**
    * 画像背景＋グラデーション `from-black/90` ＋ テキスト配置。
    * **Hover Action:**
        * 枠線発光: `hover:border-blue-400`
        * 画像拡大: `scale-110`
        * 透過度変化: `opacity-60` -> `opacity-80`

### 4-3. ボタン (Buttons)
* **Primary:** `bg-gray-900 hover:bg-black text-white rounded-lg`
* **Tags:** `bg-white/10 hover:bg-white text-white hover:text-black`

---

## 5. レイアウト・スペーシング

* **基本コンテナ:** `max-w-[1600px]` (一覧) / `max-w-7xl` (詳細)
* **詳細ページカラム間隔:** `gap-6` (約24px)
    * *写真と情報の結びつきを強めるため、以前より狭く設定。*
* **レスポンシブ:**
    * PC: `grid-cols-4` or `grid-cols-3`
    * Mobile: `grid-cols-1` or `grid-cols-2`

---

## 6. 実装用設定 (Tailwind Config)

```javascript
// tailwind.config.ts
theme: {
  extend: {
    fontFamily: {
      sans: ['var(--font-noto-sans-jp)', 'sans-serif'],
      num: ['var(--font-oswald)', 'sans-serif'], // 数字・英語用
      logo: ['var(--font-outfit)', 'sans-serif'], // ロゴ用
    },
    fontSize: {
      // 最小文字サイズの底上げ
      xs: ['0.8125rem', { lineHeight: '1.5' }], // 13px
      sm: ['0.875rem', { lineHeight: '1.5715' }], // 14px
    },
    animation: {
      'ken-burns': 'kenBurns 20s ease-out infinite alternate',
    }
  }
}