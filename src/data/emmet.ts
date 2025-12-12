// Emmet Cheatsheet v3 Data
// Updated: December 2025 - Recommended flags based on modern web development practices

export interface EmmetItem {
  cmd: string;
  output: string;
  desc: string;
  category: string;
  level?: '初級' | '中級' | '上級';
  recommended?: boolean;
  examples?: string[];
  related?: string[];
  keywords?: string; // 検索用キーワード（日本語）
}

export interface EmmetCategory {
  id: string;
  title: string;
  icon: string;
}

export const htmlCategories: EmmetCategory[] = [
  { id: 'html-structure', title: '構造・セマンティクス', icon: '📄' },
  { id: 'html-text', title: 'テキスト・インライン', icon: '📝' },
  { id: 'html-list', title: 'リスト要素', icon: '📋' },
  { id: 'html-form', title: 'フォーム・入力', icon: '📮' },
  { id: 'html-media', title: 'メディア・図', icon: '🖼️' },
  { id: 'html-table', title: 'テーブル要素', icon: '📊' },
  { id: 'html-syntax', title: '複数出力構文', icon: '⚙️' },
  { id: 'html-resource', title: 'リソース読み込み', icon: '📦' },
];

export const cssCategories: EmmetCategory[] = [
  { id: 'css-layout', title: 'レイアウト・配置', icon: '📐' },
  { id: 'css-spacing', title: '余白・サイズ', icon: '↔️' },
  { id: 'css-text', title: 'テキスト・文字', icon: '🔤' },
  { id: 'css-decoration', title: '装飾・背景', icon: '🎨' },
  { id: 'css-flex', title: 'Flex・Grid', icon: '📊' },
  { id: 'css-animation', title: 'アニメーション', icon: '✨' },
];

export const htmlData: EmmetItem[] = [
  // ============ html-structure ============
  // ★ 必須：HTML5テンプレート
  { cmd: '!', output: '<!DOCTYPE html>...', desc: 'HTML5の基本構造（DOCTYPE宣言、head・body要素、viewport設定など）を一括で展開します。言語属性（lang）は初期状態で en になっているため、日本語サイトの場合は ja に変更してください。', category: 'html-structure', level: '初級', recommended: true, examples: ['! → HTML5テンプレート全体'] },
  // ★ 必須：基本コンテナ
  { cmd: 'div', output: '<div></div>', desc: '汎用ブロックコンテナ。レイアウトの区切りやグループ化に使用。クラスやIDと組み合わせて使うことが多い。', category: 'html-structure', level: '初級', recommended: true, examples: ['div.container → <div class="container">', 'div#main → <div id="main">', 'div.card>h2+p → カード構造'] },
  // ★ 必須：クラス・ID指定
  { cmd: '.class', output: '<div class=""></div>', desc: 'ドット(.)の後にクラス名を入力すると、そのクラスが付与されたdiv要素が生成されます。', category: 'html-structure', level: '初級', recommended: true, examples: ['.container → <div class="container">', '.card.active → <div class="card active">'] },
  { cmd: '#id', output: '<div id=""></div>', desc: 'シャープ(#)の後にID名を入力すると、そのIDが付与されたdiv要素が生成されます。', category: 'html-structure', level: '初級', recommended: true, examples: ['#main → <div id="main">'] },
  // ★ セマンティクス：よく使うもの
  { cmd: 'hdr', output: '<header></header>', desc: 'ページ全体やセクションの先頭部分に使われるヘッダー要素です。ロゴやナビゲーションを含むことが多いです。', category: 'html-structure', level: '初級', recommended: true },
  { cmd: 'nav', output: '<nav></nav>', desc: 'サイト内のナビゲーションリンクをまとめる要素です。メインメニューやパンくずリストなどに使用します。', category: 'html-structure', level: '初級', recommended: true },
  { cmd: 'mn', output: '<main></main>', desc: 'ページの主な内容を表す領域で、1ページに1つだけ使用します。サイドバーやヘッダー・フッターを除いた本文部分に使います。', category: 'html-structure', level: '初級', recommended: true },
  { cmd: 'sect', output: '<section></section>', desc: '意味のあるまとまりを持つセクションを定義します。通常、見出し（h1-h6）とセットで使われます。', category: 'html-structure', level: '初級', recommended: true },
  { cmd: 'art', output: '<article></article>', desc: '独立して意味が通じる記事や投稿に使います。ブログ記事、ニュース記事、コメントなどに適しています。', category: 'html-structure', level: '初級', recommended: true },
  { cmd: 'aside', output: '<aside></aside>', desc: '補足情報やサイドバーとして使用します。', category: 'html-structure', level: '初級', recommended: true },
  { cmd: 'ftr', output: '<footer></footer>', desc: 'ページや記事の最後に配置されるフッターエリアを示します。著作権情報やリンクなどを含みます。', category: 'html-structure', level: '初級', recommended: true },
  // ★ 見出し：h1-h3はよく使う
  { cmd: 'h1', output: '<h1></h1>', desc: 'ページの主見出しとして使用します。通常、1ページに1つが推奨されます。', category: 'html-structure', level: '初級', recommended: true },
  { cmd: 'h2', output: '<h2></h2>', desc: 'セクションの見出しとして最もよく使われます。h1の下位の見出しです。', category: 'html-structure', level: '初級', recommended: true },
  { cmd: 'h3', output: '<h3></h3>', desc: 'h2内の小見出しとして使用します。', category: 'html-structure', level: '初級', recommended: true },
  // h4-h6は頻度が低いため recommended なし
  { cmd: 'h4', output: '<h4></h4>', desc: 'h3内の小見出しとして使用します。', category: 'html-structure', level: '初級' },
  { cmd: 'h5', output: '<h5></h5>', desc: 'h4内の小見出しとして使用します。', category: 'html-structure', level: '初級' },
  { cmd: 'h6', output: '<h6></h6>', desc: '最も下位の見出しです。', category: 'html-structure', level: '初級' },
  { cmd: 'address', output: '<address></address>', desc: '著者や運営者の連絡先を記載する要素です。', category: 'html-structure', level: '中級' },
  
  // ============ html-text ============
  { cmd: 'a', output: '<a href=""></a>', desc: 'ハイパーリンクを作成するタグです。外部リンクには target="_blank" と rel="noopener" を併用することが推奨されます。', category: 'html-text', level: '初級', recommended: true, examples: ['a:link → <a href="http://">', 'a:mail → <a href="mailto:">'] },
  { cmd: 'p', output: '<p></p>', desc: '段落要素。文章のまとまりを示す。ブログ記事や説明文などの本文に使用。', category: 'html-text', level: '初級', recommended: true, examples: ['p{Hello} → <p>Hello</p>', 'p*3 → 3つの段落'] },
  { cmd: 'span', output: '<span></span>', desc: '汎用インライン要素で、テキストの一部を装飾したいときに使います。', category: 'html-text', level: '初級', recommended: true },
  { cmd: 'str', output: '<strong></strong>', desc: '重要な語句を強調するインライン要素です。視覚的には太字で表示されます。', category: 'html-text', level: '初級', recommended: true },
  { cmd: 'em', output: '<em></em>', desc: '意味的な強調を表すインライン要素です。視覚的には斜体で表示されます。', category: 'html-text', level: '初級' },
  { cmd: 'br', output: '<br>', desc: 'テキスト内で改行を行うためのタグです。', category: 'html-text', level: '初級', recommended: true },
  { cmd: 'hr', output: '<hr>', desc: '水平線を引きます。セクションの区切りなどに使用します。', category: 'html-text', level: '初級' },
  { cmd: 'blockquote', output: '<blockquote></blockquote>', desc: '引用文を表す要素です。', category: 'html-text', level: '中級' },
  { cmd: 'pre', output: '<pre></pre>', desc: '整形済みテキストを表示します。コードブロックなどに使用します。', category: 'html-text', level: '中級' },
  { cmd: 'code', output: '<code></code>', desc: 'コードを表すインライン要素です。', category: 'html-text', level: '中級' },
  { cmd: 'small', output: '<small></small>', desc: '注釈や細則などの小さなテキストを表します。', category: 'html-text', level: '初級' },
  { cmd: 'time', output: '<time></time>', desc: '日付や時刻を表す要素です。', category: 'html-text', level: '中級' },
  
  // ============ html-list ============
  { cmd: 'ul', output: '<ul></ul>', desc: '順不同リスト（箇条書き）。liと組み合わせて使用。ナビゲーションやメニューにもよく使われる。', category: 'html-list', level: '初級', recommended: true, examples: ['ul>li*3 → 3項目のリスト', 'ul>li.item$*5 → 連番クラス付き', 'nav>ul>li*5>a → ナビ構造'] },
  { cmd: 'ol', output: '<ol></ol>', desc: '番号付きのリストを作成します。', category: 'html-list', level: '初級', recommended: true },
  { cmd: 'li', output: '<li></li>', desc: 'ul や ol 内のリスト項目を定義します。', category: 'html-list', level: '初級', recommended: true },
  { cmd: 'dl', output: '<dl></dl>', desc: '定義リストを作成します。用語と説明のペアに使用します。', category: 'html-list', level: '中級', recommended: true },
  { cmd: 'dt', output: '<dt></dt>', desc: '定義リスト内の用語を定義します。', category: 'html-list', level: '中級', recommended: true },
  { cmd: 'dd', output: '<dd></dd>', desc: '定義リスト内の説明を定義します。', category: 'html-list', level: '中級', recommended: true },
  
  // ============ html-form ============
  { cmd: 'form:post', output: '<form method="post"></form>', desc: 'POST送信のフォームを生成します。フォームデータをサーバーに送信する際に使用します。', category: 'html-form', level: '中級', recommended: true, examples: ['form:get → method="get"'] },
  { cmd: 'input:t', output: '<input type="text">', desc: 'テキスト形式の1行入力フィールドです。', category: 'html-form', level: '初級', recommended: true },
  { cmd: 'input:email', output: '<input type="email">', desc: 'メールアドレス用の入力フィールドです。入力値の形式チェックが自動で行われます。', category: 'html-form', level: '初級', recommended: true },
  { cmd: 'input:password', output: '<input type="password">', desc: 'パスワード入力用フィールドです。入力値が隠されます。', category: 'html-form', level: '初級', recommended: true },
  { cmd: 'input:checkbox', output: '<input type="checkbox">', desc: '複数選択が可能なチェックボックスです。', category: 'html-form', level: '初級', recommended: true },
  { cmd: 'input:radio', output: '<input type="radio">', desc: '複数選択肢から1つを選ばせるラジオボタンです。', category: 'html-form', level: '初級', recommended: true },
  { cmd: 'input:tel', output: '<input type="tel">', desc: '電話番号入力用フィールドです。', category: 'html-form', level: '初級' },
  { cmd: 'input:number', output: '<input type="number">', desc: '数値入力用フィールドです。', category: 'html-form', level: '初級' },
  { cmd: 'input:date', output: '<input type="date">', desc: '日付入力用フィールドです。', category: 'html-form', level: '初級' },
  { cmd: 'input:file', output: '<input type="file">', desc: 'ファイル選択用フィールドです。', category: 'html-form', level: '中級' },
  { cmd: 'input:h', output: '<input type="hidden">', desc: '非表示の隠しフィールドです。', category: 'html-form', level: '中級' },
  { cmd: 'input:submit', output: '<input type="submit">', desc: 'フォーム送信ボタンです。', category: 'html-form', level: '初級' },
  { cmd: 'btn:s', output: '<button type="submit"></button>', desc: '送信ボタンを button 要素で記述します。テキストやHTMLを自由に入れられます。', category: 'html-form', level: '初級', recommended: true },
  { cmd: 'select', output: '<select></select>', desc: 'プルダウン形式のセレクトボックスです。', category: 'html-form', level: '初級', recommended: true },
  { cmd: 'opt', output: '<option value=""></option>', desc: 'select 内の選択肢を定義します。', category: 'html-form', level: '初級' },
  { cmd: 'tarea', output: '<textarea></textarea>', desc: '複数行入力用フィールドです。', category: 'html-form', level: '初級', recommended: true },
  { cmd: 'label', output: '<label for=""></label>', desc: 'フォーム項目の説明ラベルとして使用します。for属性でinputと紐づけます。', category: 'html-form', level: '初級', recommended: true },
  
  // ============ html-media ============
  { cmd: 'img', output: '<img src="" alt="">', desc: '画像表示。alt属性は必須。loading="lazy"で遅延読み込み、width/height指定でCLS対策も。', category: 'html-media', level: '初級', recommended: true, examples: ['img[src=photo.jpg alt=写真]', 'img[loading=lazy]', 'img[width=300 height=200]'] },
  { cmd: 'img:s', output: '<img srcset="">', desc: '画面サイズ・解像度に応じて最適な画像を読み込みます。', category: 'html-media', level: '中級' },
  { cmd: 'pic', output: '<picture></picture>', desc: 'source と img を組み合わせてレスポンシブ画像を実現します。', category: 'html-media', level: '中級' },
  { cmd: 'source', output: '<source>', desc: 'picture や video, audio 内でメディアソースを指定します。', category: 'html-media', level: '中級' },
  { cmd: 'fig', output: '<figure></figure>', desc: '画像＋キャプションをセットでまとめる要素です。figcaption と組み合わせて使います。', category: 'html-media', level: '中級' },
  { cmd: 'figc', output: '<figcaption></figcaption>', desc: 'figure 内でキャプション（説明文）を記述します。', category: 'html-media', level: '中級' },
  { cmd: 'video', output: '<video src=""></video>', desc: '動画を埋め込みます。', category: 'html-media', level: '中級' },
  { cmd: 'audio', output: '<audio src=""></audio>', desc: '音声を埋め込みます。', category: 'html-media', level: '中級' },
  { cmd: 'iframe', output: '<iframe src=""></iframe>', desc: '外部コンテンツを埋め込みます。YouTube動画やGoogleマップなどに使用します。', category: 'html-media', level: '中級' },
  
  // ============ html-table ============
  { cmd: 'table', output: '<table></table>', desc: '表を作成します。', category: 'html-table', level: '初級', recommended: true },
  { cmd: 'tr', output: '<tr></tr>', desc: 'テーブルの行を定義します。', category: 'html-table', level: '初級', recommended: true },
  { cmd: 'th', output: '<th></th>', desc: 'テーブルのヘッダーセルを定義します。', category: 'html-table', level: '初級', recommended: true },
  { cmd: 'td', output: '<td></td>', desc: 'テーブルのデータセルを定義します。', category: 'html-table', level: '初級', recommended: true },
  
  // ============ html-syntax ============
  { cmd: '>', output: '親>子', desc: 'Child（子）演算子。親要素の中に子要素をネスト（入れ子）させます。', category: 'html-syntax', level: '初級', recommended: true, examples: ['nav>ul>li → ネスト構造'] },
  { cmd: '+', output: '兄+弟', desc: 'Sibling（兄弟）演算子。同じ階層に兄弟要素を横並びで展開します。', category: 'html-syntax', level: '初級', recommended: true, examples: ['div+p+p → 同階層に並列'] },
  { cmd: '*', output: '要素*n', desc: 'Multiplication（繰り返し）演算子。指定した数だけ要素を繰り返します。', category: 'html-syntax', level: '初級', recommended: true, examples: ['ul>li*5 → liが5つ生成'] },
  { cmd: '$', output: '連番', desc: '繰り返し構文（*）と組み合わせて、クラス名やIDに自動で連番を付与します。', category: 'html-syntax', level: '中級', recommended: true, examples: ['li.item$*3 → item1, item2, item3'] },
  { cmd: '^', output: '親へ戻る', desc: 'Parent（親へ戻る）演算子。一段上の親要素に戻って新しい要素を展開します。', category: 'html-syntax', level: '中級', examples: ['div>ul>li^p → divの外にpが出る'] },
  { cmd: '()', output: 'グループ化', desc: '複数の要素をひとつのまとまりとして扱います。複雑な構造を作る際に便利です。', category: 'html-syntax', level: '中級', recommended: true, examples: ['div>(header>nav)+footer'] },
  { cmd: '{}', output: 'テキスト挿入', desc: '要素内にテキストを挿入します。', category: 'html-syntax', level: '初級', recommended: true, examples: ['a{クリック} → <a>クリック</a>'] },
  { cmd: '[]', output: '属性追加', desc: '要素に任意の属性を追加します。', category: 'html-syntax', level: '中級', recommended: true, examples: ['a[target=_blank] → target属性追加'] },
  
  // ============ html-resource ============
  { cmd: 'link:css', output: '<link rel="stylesheet" href="">', desc: '外部CSSファイルを読み込みます。', category: 'html-resource', level: '初級', recommended: true },
  { cmd: 'link:favicon', output: '<link rel="icon" href="">', desc: 'ファビコンを指定します。', category: 'html-resource', level: '初級', recommended: true },
  { cmd: 'script:src', output: '<script src=""></script>', desc: '外部JavaScriptファイルを読み込みます。', category: 'html-resource', level: '初級', recommended: true },
  { cmd: 'meta:vp', output: '<meta name="viewport">', desc: 'ビューポートの設定を行います。', category: 'html-resource', level: '中級' },
  // Additional HTML Commands (for complete coverage)
  { cmd: 'html:5', output: '<!DOCTYPE html>...', desc: '!と同じHTML5テンプレートを展開します。', category: 'html-resource', level: '初級' },
  { cmd: 'meta:charset', output: '<meta charset="UTF-8">', desc: '文字コードを指定するメタタグです。', category: 'html-resource', level: '初級' },
  { cmd: 'meta:desc', output: '<meta name="description" content="">', desc: 'ページの説明文を設定するメタタグです。SEOに重要です。', category: 'html-resource', level: '中級' },
  { cmd: 'meta:kw', output: '<meta name="keywords" content="">', desc: 'キーワードを設定するメタタグです。', category: 'html-resource', level: '中級' },
  { cmd: 'base', output: '<base href="">', desc: '相対URLの基準となるURLを指定します。', category: 'html-resource', level: '上級' },
  { cmd: 'style', output: '<style></style>', desc: 'インラインCSSを記述するタグです。', category: 'html-resource', level: '初級' },
  { cmd: 'script', output: '<script></script>', desc: 'インラインJavaScriptを記述するタグです。', category: 'html-resource', level: '初級' },
  { cmd: 'noscript', output: '<noscript></noscript>', desc: 'JavaScriptが無効な環境で表示されるコンテンツを定義します。', category: 'html-resource', level: '中級' },
  
  // ============ Additional Text Elements ============
  { cmd: 'lorem', output: 'Lorem ipsum dolor...', desc: 'ダミーテキスト（Lorem Ipsum）を生成します。lorem10で10語、lorem100で100語。', category: 'html-text', level: '初級', examples: ['lorem10 → 10語のダミーテキスト', 'p>lorem → 段落内にダミーテキスト'] },
  { cmd: 'mark', output: '<mark></mark>', desc: 'ハイライト表示するテキストを示します。検索結果の強調などに使用。', category: 'html-text', level: '中級' },
  { cmd: 'del', output: '<del></del>', desc: '削除されたテキストを示します。取り消し線で表示されます。', category: 'html-text', level: '中級' },
  { cmd: 'ins', output: '<ins></ins>', desc: '追加されたテキストを示します。通常下線で表示されます。', category: 'html-text', level: '中級' },
  { cmd: 'sub', output: '<sub></sub>', desc: '下付き文字を表示します。化学式や数式に使用。', category: 'html-text', level: '中級' },
  { cmd: 'sup', output: '<sup></sup>', desc: '上付き文字を表示します。注釈番号や累乗に使用。', category: 'html-text', level: '中級' },
  { cmd: 'abbr', output: '<abbr title=""></abbr>', desc: '略語を示し、title属性で正式名称を表示します。', category: 'html-text', level: '中級' },
  { cmd: 'q', output: '<q></q>', desc: '短い引用文を示します。通常引用符で囲まれます。', category: 'html-text', level: '中級' },
  { cmd: 'cite', output: '<cite></cite>', desc: '作品のタイトル（書籍、映画など）を示します。', category: 'html-text', level: '中級' },
  { cmd: 'dfn', output: '<dfn></dfn>', desc: '定義される用語を示します。', category: 'html-text', level: '上級' },
  { cmd: 'kbd', output: '<kbd></kbd>', desc: 'キーボード入力を示します。', category: 'html-text', level: '中級' },
  { cmd: 'samp', output: '<samp></samp>', desc: 'プログラムの出力サンプルを示します。', category: 'html-text', level: '上級' },
  { cmd: 'var', output: '<var></var>', desc: '変数を示します。数式やプログラムで使用。', category: 'html-text', level: '上級' },
  { cmd: 'wbr', output: '<wbr>', desc: '改行可能な位置を示します。長い単語の途中での改行に使用。', category: 'html-text', level: '上級' },
  { cmd: 'bdi', output: '<bdi></bdi>', desc: '双方向テキストを分離します。', category: 'html-text', level: '上級' },
  { cmd: 'bdo', output: '<bdo dir=""></bdo>', desc: 'テキストの方向を上書きします。', category: 'html-text', level: '上級' },
  { cmd: 'ruby', output: '<ruby></ruby>', desc: 'ルビ（ふりがな）のコンテナ要素です。', category: 'html-text', level: '中級' },
  { cmd: 'rt', output: '<rt></rt>', desc: 'ルビのテキスト（ふりがな）を定義します。', category: 'html-text', level: '中級' },
  { cmd: 'rp', output: '<rp></rp>', desc: 'ルビ非対応ブラウザ用の括弧を定義します。', category: 'html-text', level: '上級' },
  
  // ============ Additional Form Elements ============
  { cmd: 'input:url', output: '<input type="url">', desc: 'URL入力用フィールドです。', category: 'html-form', level: '中級' },
  { cmd: 'input:search', output: '<input type="search">', desc: '検索入力用フィールドです。', category: 'html-form', level: '中級' },
  { cmd: 'input:range', output: '<input type="range">', desc: 'スライダー形式の範囲入力です。', category: 'html-form', level: '中級' },
  { cmd: 'input:color', output: '<input type="color">', desc: 'カラーピッカーを表示する入力フィールドです。', category: 'html-form', level: '中級' },
  { cmd: 'input:time', output: '<input type="time">', desc: '時刻入力用フィールドです。', category: 'html-form', level: '中級' },
  { cmd: 'input:week', output: '<input type="week">', desc: '週入力用フィールドです。', category: 'html-form', level: '上級' },
  { cmd: 'input:month', output: '<input type="month">', desc: '月入力用フィールドです。', category: 'html-form', level: '上級' },
  { cmd: 'input:datetime-local', output: '<input type="datetime-local">', desc: '日時入力用フィールドです。', category: 'html-form', level: '中級' },
  { cmd: 'optgroup', output: '<optgroup></optgroup>', desc: 'select内の選択肢をグループ化します。', category: 'html-form', level: '中級' },
  { cmd: 'fieldset', output: '<fieldset></fieldset>', desc: 'フォーム要素をグループ化する枠を作成します。', category: 'html-form', level: '中級' },
  { cmd: 'legend', output: '<legend></legend>', desc: 'fieldsetのキャプション（タイトル）を定義します。', category: 'html-form', level: '中級' },
  { cmd: 'datalist', output: '<datalist></datalist>', desc: 'input要素に候補リストを提供します。', category: 'html-form', level: '中級' },
  { cmd: 'output', output: '<output></output>', desc: '計算結果やスクリプトの出力を表示します。', category: 'html-form', level: '上級' },
  { cmd: 'meter', output: '<meter></meter>', desc: '既知の範囲内の測定値を表示します（ゲージ）。', category: 'html-form', level: '上級' },
  { cmd: 'progress', output: '<progress></progress>', desc: 'タスクの進捗状況を表示するプログレスバーです。', category: 'html-form', level: '中級' },
  { cmd: 'btn', output: '<button></button>', desc: '汎用ボタン要素です。', category: 'html-form', level: '初級' },
  { cmd: 'btn:r', output: '<button type="reset"></button>', desc: 'フォームをリセットするボタンです。', category: 'html-form', level: '中級' },
  { cmd: 'btn:d', output: '<button disabled></button>', desc: '無効化されたボタンです。', category: 'html-form', level: '中級' },
  
  // ============ Additional Structure Elements ============
  { cmd: 'details', output: '<details></details>', desc: 'クリックで開閉できる詳細情報ブロックです。', category: 'html-structure', level: '中級' },
  { cmd: 'summary', output: '<summary></summary>', desc: 'details要素の表示ラベル（見出し）です。', category: 'html-structure', level: '中級' },
  { cmd: 'dialog', output: '<dialog></dialog>', desc: 'モーダルダイアログやポップアップを作成します。', category: 'html-structure', level: '中級' },
  { cmd: 'template', output: '<template></template>', desc: '再利用可能なHTMLテンプレートを定義します。JSで使用。', category: 'html-structure', level: '上級' },
  { cmd: 'slot', output: '<slot></slot>', desc: 'Web Componentsでコンテンツを挿入する場所を定義します。', category: 'html-structure', level: '上級' },
  
  // ============ Additional Media Elements ============
  { cmd: 'track', output: '<track>', desc: 'video/audioの字幕やキャプションを指定します。', category: 'html-media', level: '上級' },
  { cmd: 'object', output: '<object data=""></object>', desc: '外部リソース（PDF、Flashなど）を埋め込みます。', category: 'html-media', level: '上級' },
  { cmd: 'embed', output: '<embed src="">', desc: '外部コンテンツを埋め込みます。', category: 'html-media', level: '上級' },
  { cmd: 'canvas', output: '<canvas></canvas>', desc: 'JavaScriptで描画するためのキャンバス領域です。', category: 'html-media', level: '中級' },
  { cmd: 'svg', output: '<svg></svg>', desc: 'SVGグラフィックを埋め込むためのコンテナです。', category: 'html-media', level: '中級' },
  { cmd: 'math', output: '<math></math>', desc: '数式を表示するMathML要素です。', category: 'html-media', level: '上級' },
  { cmd: 'map', output: '<map name=""></map>', desc: 'イメージマップを定義します。', category: 'html-media', level: '上級' },
  { cmd: 'area', output: '<area shape="" coords="" href="">', desc: 'イメージマップ内のクリック可能領域を定義します。', category: 'html-media', level: '上級' },
  
  // ============ Additional Table Elements ============
  { cmd: 'thead', output: '<thead></thead>', desc: 'テーブルのヘッダー行グループです。', category: 'html-table', level: '中級' },
  { cmd: 'tbody', output: '<tbody></tbody>', desc: 'テーブルの本体行グループです。', category: 'html-table', level: '中級' },
  { cmd: 'tfoot', output: '<tfoot></tfoot>', desc: 'テーブルのフッター行グループです。', category: 'html-table', level: '中級' },
  { cmd: 'caption', output: '<caption></caption>', desc: 'テーブルのキャプション（タイトル）です。', category: 'html-table', level: '中級' },
  { cmd: 'colgroup', output: '<colgroup></colgroup>', desc: 'テーブルの列グループを定義します。', category: 'html-table', level: '上級' },
  { cmd: 'col', output: '<col>', desc: 'colgroup内の列を定義します。', category: 'html-table', level: '上級' },
];

export const cssData: EmmetItem[] = [
  // ============ css-spacing ============
  { cmd: 'm', output: 'margin: ;', desc: '要素の外側に余白をつけるプロパティです。上下左右のスペースを調整する際に使われます。数値を続けて入力するとpx単位で展開されます。', category: 'css-spacing', level: '初級', recommended: true, examples: ['m10 → margin: 10px;', 'm10-20 → margin: 10px 20px;', 'm-0-auto → margin: 0 auto;', 'mt10 → margin-top: 10px;', 'mr10 → margin-right: 10px;', 'mb10 → margin-bottom: 10px;', 'ml10 → margin-left: 10px;'], related: ['p', 'w', 'h'], keywords: '余白 外側 マージン スペース 間隔' },
  { cmd: 'p', output: 'padding: ;', desc: '内側の余白を指定するプロパティです。コンテンツとボックスの枠との間隔を調整します。', category: 'css-spacing', level: '初級', recommended: true, examples: ['p10 → padding: 10px;', 'pt10 → padding-top: 10px;', 'pb10 → padding-bottom: 10px;'], related: ['m', 'w', 'h'], keywords: '余白 内側 パディング スペース 間隔' },
  { cmd: 'w', output: 'width: ;', desc: '要素の横幅を指定します。', category: 'css-spacing', level: '初級', recommended: true, examples: ['w100 → width: 100px;', 'w100p → width: 100%;'], related: ['h', 'maw', 'miw'], keywords: '幅 横幅 サイズ 大きさ' },
  { cmd: 'h', output: 'height: ;', desc: '要素の縦の高さを指定します。', category: 'css-spacing', level: '初級', recommended: true, examples: ['h50 → height: 50px;', 'h100p → height: 100%;'], related: ['w', 'mah', 'mih'], keywords: '高さ 縦幅 サイズ 大きさ' },
  { cmd: 'maw', output: 'max-width: ;', desc: '要素の最大横幅を制限するプロパティです。レスポンシブデザインでコンテンツ幅を制御する際によく使われます。', category: 'css-spacing', level: '中級', recommended: true, examples: ['maw800 → max-width: 800px;'] },
  { cmd: 'mah', output: 'max-height: ;', desc: '要素の最大縦幅を制限するプロパティです。', category: 'css-spacing', level: '中級' },
  { cmd: 'miw', output: 'min-width: ;', desc: '要素の最小横幅を指定します。コンテンツが極端に小さくなるのを防ぎます。', category: 'css-spacing', level: '中級' },
  { cmd: 'mih', output: 'min-height: ;', desc: '要素の最小縦幅を指定します。', category: 'css-spacing', level: '中級' },
  { cmd: 'bxz', output: 'box-sizing: border-box;', desc: 'padding や border を含めて要素のサイズを計算します。レイアウト崩れの防止に便利です。', category: 'css-spacing', level: '中級', recommended: true },
  { cmd: 'g', output: 'gap: ;', desc: 'Flex/Gridの要素間スペース。marginより簡潔に間隔調整が可能。', category: 'css-spacing', level: '初級', recommended: true, examples: ['g10 → gap: 10px;', 'g20-10 → gap: 20px 10px;', 'g1rem → gap: 1rem;'] },
  
  // ============ css-layout ============
  { cmd: 'pos', output: 'position: relative;', desc: '要素の位置を、元の配置を基準にして相対的にずらしたいときに使います。', category: 'css-layout', level: '初級', recommended: true },
  { cmd: 'poa', output: 'position: absolute;', desc: '要素を親要素の位置を基準にして、絶対的な座標で配置します。親要素に position: relative; が必要です。', category: 'css-layout', level: '初級', recommended: true },
  { cmd: 'pof', output: 'position: fixed;', desc: '要素の位置をビューポートに対して固定します。スクロールしても常に同じ位置に表示されます。', category: 'css-layout', level: '初級', recommended: true },
  { cmd: 'pos:s', output: 'position: sticky;', desc: 'スクロールに応じて固定される要素を作成します。', category: 'css-layout', level: '中級' },
  { cmd: 't', output: 'top: ;', desc: 'positionプロパティと併用して、要素の上端の位置を指定します。', category: 'css-layout', level: '初級', recommended: true, examples: ['t10 → top: 10px;', 't0 → top: 0;'] },
  { cmd: 'r', output: 'right: ;', desc: 'positionプロパティと併用して、要素の右端の位置を指定します。', category: 'css-layout', level: '初級', recommended: true },
  { cmd: 'b', output: 'bottom: ;', desc: 'positionプロパティと併用して、要素の下端の位置を指定します。', category: 'css-layout', level: '初級', recommended: true },
  { cmd: 'l', output: 'left: ;', desc: 'positionプロパティと併用して、要素の左端の位置を指定します。', category: 'css-layout', level: '初級', recommended: true },
  { cmd: 'z', output: 'z-index: ;', desc: '要素の重なり順を指定するプロパティです。数値が大きいほど前面に表示されます。', category: 'css-layout', level: '中級', recommended: true, examples: ['z10 → z-index: 10;', 'z-1 → z-index: -1;'] },
  { cmd: 'db', output: 'display: block;', desc: '要素をブロックレベルで表示します。幅は親要素いっぱいに広がり、改行されます。', category: 'css-layout', level: '初級', recommended: true },
  { cmd: 'di', output: 'display: inline;', desc: 'インライン要素として表示します。', category: 'css-layout', level: '初級' },
  { cmd: 'dib', output: 'display: inline-block;', desc: 'インライン要素のように並びつつ、幅・高さを指定できます。', category: 'css-layout', level: '初級', recommended: true },
  { cmd: 'dn', output: 'display: none;', desc: '要素を非表示にします。DOM上には存在しますが見えません。', category: 'css-layout', level: '初級', recommended: true, keywords: '非表示 消す 隠す 見えない' },
  { cmd: 'v', output: 'visibility: hidden;', desc: '要素を見えなくしますが、スペースは確保されたままです。', category: 'css-layout', level: '中級' },
  { cmd: 'ov', output: 'overflow: hidden;', desc: 'はみ出した要素を非表示にします。レイアウト崩れ防止やスクロール制御でよく使われます。', category: 'css-layout', level: '中級', recommended: true, examples: ['ova → overflow: auto;', 'ovs → overflow: scroll;'] },
  { cmd: 'ovx', output: 'overflow-x: hidden;', desc: '横方向のはみ出しを非表示にします。', category: 'css-layout', level: '中級' },
  { cmd: 'ovy', output: 'overflow-y: hidden;', desc: '縦方向のはみ出しを非表示にします。', category: 'css-layout', level: '中級' },
  
  // ============ css-text ============
  { cmd: 'fz', output: 'font-size: ;', desc: '文字サイズを指定するプロパティです。', category: 'css-text', level: '初級', recommended: true, examples: ['fz16 → font-size: 16px;', 'fz1.5rem → font-size: 1.5rem;'], keywords: '文字 サイズ 大きさ フォント' },
  { cmd: 'fw', output: 'font-weight: ;', desc: '文字の太さを指定するプロパティです。400が標準、700が太字です。', category: 'css-text', level: '初級', recommended: true, examples: ['fw700 → font-weight: 700;', 'fwb → font-weight: bold;'], keywords: '太字 太さ ボールド 細い' },
  { cmd: 'ff', output: 'font-family: ;', desc: 'フォントの種類を指定します。', category: 'css-text', level: '初級', recommended: true },
  { cmd: 'fs', output: 'font-style: ;', desc: 'フォントのスタイル（斜体など）を指定します。', category: 'css-text', level: '初級' },
  { cmd: 'lh', output: 'line-height: ;', desc: '行間の高さ（行送り）を調整するプロパティです。読みやすさに重要です。', category: 'css-text', level: '初級', recommended: true, examples: ['lh1.5 → line-height: 1.5;', 'lh24 → line-height: 24px;'] },
  { cmd: 'lts', output: 'letter-spacing: ;', desc: '文字と文字の間隔（字間）を調整するプロパティです。', category: 'css-text', level: '中級', recommended: true, examples: ['lts1 → letter-spacing: 1px;'] },
  { cmd: 'ta', output: 'text-align: left;', desc: 'テキストやインライン要素の水平方向の配置を指定します。', category: 'css-text', level: '初級', recommended: true, examples: ['tac → text-align: center;', 'tar → text-align: right;'], keywords: '中央寄せ 左寄せ 右寄せ センタリング 中央揃え 真ん中' },
  { cmd: 'td', output: 'text-decoration: ;', desc: 'テキストの装飾（下線、取り消し線など）を指定します。', category: 'css-text', level: '初級', recommended: true, examples: ['tdn → text-decoration: none;', 'tdu → text-decoration: underline;'] },
  { cmd: 'tt', output: 'text-transform: ;', desc: '大文字・小文字の変換を指定します。', category: 'css-text', level: '中級' },
  { cmd: 'ti', output: 'text-indent: ;', desc: '最初の行の字下げを指定します。', category: 'css-text', level: '中級', recommended: true },
  { cmd: 'c', output: 'color: #000;', desc: 'テキストの文字色を指定します。', category: 'css-text', level: '初級', recommended: true, examples: ['c#fff → color: #fff;', 'c:red → color: red;'], keywords: '文字色 テキスト色 色 カラー' },
  { cmd: 'whs', output: 'white-space: nowrap;', desc: 'テキスト中の空白や改行の扱いを制御します。nowrapで折り返しを防止できます。', category: 'css-text', level: '中級' },
  { cmd: 'wob', output: 'word-break: ;', desc: '単語の途中での改行を制御します。', category: 'css-text', level: '中級' },
  { cmd: 'tov', output: 'text-overflow: ellipsis;', desc: 'テキストがはみ出した場合に「...」で省略します。', category: 'css-text', level: '中級' },
  { cmd: 'va', output: 'vertical-align: ;', desc: 'インライン要素やテーブルセルの垂直方向の位置を指定します。', category: 'css-text', level: '中級' },
  
  // ============ css-decoration ============
  { cmd: 'bg', output: 'background: #000;', desc: '背景色・画像・位置・サイズなど、背景に関する設定をまとめて指定できます。', category: 'css-decoration', level: '初級', recommended: true, examples: ['bgc#f00 → background-color: #f00;', 'bgn → background: none;'] },
  { cmd: 'bgc', output: 'background-color: ;', desc: '背景色を指定します。', category: 'css-decoration', level: '初級', recommended: true, keywords: '背景色 背景 色 カラー' },
  { cmd: 'bgi', output: 'background-image: url();', desc: '背景画像を指定します。', category: 'css-decoration', level: '中級' },
  { cmd: 'bgp', output: 'background-position: ;', desc: '背景画像の位置を指定します。', category: 'css-decoration', level: '中級' },
  { cmd: 'bgsz', output: 'background-size: ;', desc: '背景画像のサイズを指定します。', category: 'css-decoration', level: '中級', recommended: true, examples: ['bgsz:cv → background-size: cover;'] },
  { cmd: 'bgr', output: 'background-repeat: ;', desc: '背景画像の繰り返しを指定します。', category: 'css-decoration', level: '中級' },
  { cmd: 'bd', output: 'border: 1px solid #000;', desc: '要素の枠線を一括で指定するプロパティです。', category: 'css-decoration', level: '初級', recommended: true, examples: ['bdn → border: none;', 'bdt → border-top: ...;'] },
  { cmd: 'bdrs', output: 'border-radius: ;', desc: '要素の角を丸くするプロパティです。カードやボタンのデザインに多用されます。', category: 'css-decoration', level: '初級', recommended: true, examples: ['bdrs10 → border-radius: 10px;', 'bdrs50p → border-radius: 50%;'], keywords: '角丸 丸み 丸角 radius ラウンド' },
  { cmd: 'bxsh', output: 'box-shadow: ;', desc: '要素に影をつけて立体感を演出するプロパティです。', category: 'css-decoration', level: '中級', recommended: true },
  { cmd: 'op', output: 'opacity: ;', desc: '要素全体の透明度を指定します。0が完全に透明、1が完全に不透明です。', category: 'css-decoration', level: '中級', recommended: true, examples: ['op0.5 → opacity: 0.5;'] },
  { cmd: 'ct', output: 'content: "";', desc: '疑似要素（::before, ::after）に内容を挿入します。', category: 'css-decoration', level: '中級', recommended: true },
  
  // ============ css-flex ============
  { cmd: 'df', output: 'display: flex;', desc: 'フレックスボックス。子要素を柔軟に横・縦並び。jc/aiとセットで中央配置も簡単。', category: 'css-flex', level: '初級', recommended: true, related: ['jc', 'ai', 'fxd'], keywords: '横並び 縦並び 並べる レイアウト フレックス', examples: ['df + jcc + aic → 完全中央', 'df + jcsb → 左右端配置', 'df + fxdc → 縦並び'] },
  { cmd: 'dg', output: 'display: grid;', desc: 'グリッドレイアウト。行と列で要素を整列。カード一覧やギャラリーに最適。', category: 'css-flex', level: '初級', recommended: true, examples: ['dg + gtc:repeat(3,1fr) → 3列', 'dg + g20 → 間隔3列'] },
  { cmd: 'dif', output: 'display: inline-flex;', desc: 'インライン要素のように並びつつ、Flexboxのレイアウト制御を行います。', category: 'css-flex', level: '中級' },
  { cmd: 'fxd', output: 'flex-direction: row;', desc: 'Flexboxの主軸方向（横並び・縦並び）を指定します。', category: 'css-flex', level: '初級', recommended: true, examples: ['fxdc → flex-direction: column;', 'fxdrr → flex-direction: row-reverse;'] },
  { cmd: 'fxw', output: 'flex-wrap: nowrap;', desc: 'Flexboxの子要素が収まりきらない場合に折り返すかどうかを制御します。', category: 'css-flex', level: '初級', recommended: true, examples: ['fxww → flex-wrap: wrap;'] },
  { cmd: 'jc', output: 'justify-content: start;', desc: 'Flexbox や Grid で、主軸（通常は横方向）における子要素の配置方法を指定します。', category: 'css-flex', level: '初級', recommended: true, examples: ['jcc → justify-content: center;', 'jcsb → justify-content: space-between;', 'jcsa → justify-content: space-around;'], related: ['ai', 'df'], keywords: '中央寄せ 中央揃え 左右 水平 センタリング 均等配置' },
  { cmd: 'ai', output: 'align-items: start;', desc: 'Flexbox や Grid の子要素を交差軸（縦方向）でどのように揃えるかを指定します。', category: 'css-flex', level: '初級', recommended: true, examples: ['aic → align-items: center;', 'aifs → align-items: flex-start;', 'aife → align-items: flex-end;'], related: ['jc', 'df'], keywords: '上下中央 垂直中央 縦中央 天地中央 センタリング' },
  { cmd: 'ac', output: 'align-content: ;', desc: '複数行のFlexboxでの行の揃え方を指定します。', category: 'css-flex', level: '中級' },
  { cmd: 'as', output: 'align-self: ;', desc: '個別のアイテムの垂直方向の揃え方を指定します。', category: 'css-flex', level: '中級' },
  { cmd: 'plai', output: 'place-items: ;', desc: 'FlexやGridで、縦横両軸の中央揃えを同時に指定できるショートハンドです。', category: 'css-flex', level: '中級', examples: ['plai:c → place-items: center;'] },
  { cmd: 'fx', output: 'flex: ;', desc: '子要素に対して、伸縮性（grow/shrink）や基準サイズ（basis）をまとめて指定します。', category: 'css-flex', level: '中級', examples: ['fx1 → flex: 1;'] },
  { cmd: 'ord', output: 'order: ;', desc: 'Flex/Gridアイテムの表示順を制御します。', category: 'css-flex', level: '中級' },
  { cmd: 'gtc', output: 'grid-template-columns: ;', desc: 'Gridの列幅を指定します。', category: 'css-flex', level: '中級', recommended: true },
  { cmd: 'gtr', output: 'grid-template-rows: ;', desc: 'Gridの行の高さを指定します。', category: 'css-flex', level: '中級' },
  
  // ============ css-animation ============
  { cmd: 'trs', output: 'transition: ;', desc: '状態の変化を滑らかに見せるアニメーション効果を設定します。hoverなどの演出に使います。', category: 'css-animation', level: '中級', recommended: true, examples: ['trs → transition: all 0.3s;'] },
  { cmd: 'trf', output: 'transform: ;', desc: '要素の位置、拡大縮小、回転、傾きなどを2D/3Dで変形できます。', category: 'css-animation', level: '中級', recommended: true, examples: ['trfr → transform: rotate();', 'trft → transform: translate();', 'trfs → transform: scale();'] },
  { cmd: 'anim', output: 'animation: ;', desc: 'CSSアニメーションの名前・時間・タイミングなどをまとめて指定します。', category: 'css-animation', level: '上級' },
  { cmd: 'animn', output: 'animation-name: ;', desc: 'アニメーションの名前を指定します。', category: 'css-animation', level: '上級' },
  { cmd: 'animdur', output: 'animation-duration: ;', desc: 'アニメーションの時間を指定します。', category: 'css-animation', level: '上級' },
  { cmd: 'cup', output: 'cursor: pointer;', desc: 'マウスポインターが指の形に変わるスタイルです。クリック可能な要素に使います。', category: 'css-animation', level: '初級', recommended: true },
  { cmd: 'cud', output: 'cursor: default;', desc: 'デフォルトのカーソルを表示します。', category: 'css-animation', level: '初級' },
  { cmd: 'us', output: 'user-select: none;', desc: 'テキストの選択を無効化します。', category: 'css-animation', level: '中級' },
  { cmd: 'pe', output: 'pointer-events: none;', desc: 'マウス操作を無効化します。', category: 'css-animation', level: '中級', recommended: true },
  
  // ============ Additional CSS Commands (for complete coverage) ============
  // At-rules
  { cmd: '@f', output: '@font-face { font-family:; src:url(); }', desc: 'カスタムフォントを読み込む@font-faceルールです。', category: 'css-text', level: '上級' },
  { cmd: '@i', output: '@import url();', desc: '外部CSSファイルをインポートします。', category: 'css-decoration', level: '中級' },
  { cmd: '@m', output: '@media { }', desc: 'メディアクエリを定義します。レスポンシブデザインに必須。', category: 'css-layout', level: '中級' },
  { cmd: '@kf', output: '@keyframes { }', desc: 'アニメーションのキーフレームを定義します。', category: 'css-animation', level: '上級' },
  
  // Additional Layout
  { cmd: 'd:c', output: 'display: contents;', desc: '要素自体は表示せず、子要素のみを親に直接配置します。', category: 'css-layout', level: '上級' },
  { cmd: 'd:t', output: 'display: table;', desc: 'テーブルとして表示します。', category: 'css-layout', level: '上級' },
  { cmd: 'd:tc', output: 'display: table-cell;', desc: 'テーブルセルとして表示します。', category: 'css-layout', level: '上級' },
  { cmd: 'd:tr', output: 'display: table-row;', desc: 'テーブル行として表示します。', category: 'css-layout', level: '上級' },
  { cmd: 'fl', output: 'float: left;', desc: '要素を左に回り込ませます。', category: 'css-layout', level: '初級' },
  { cmd: 'fr', output: 'float: right;', desc: '要素を右に回り込ませます。', category: 'css-layout', level: '初級' },
  { cmd: 'cl', output: 'clear: both;', desc: '回り込みを解除します。', category: 'css-layout', level: '初級' },
  { cmd: 'clb', output: 'clear: both;', desc: '左右の回り込みを解除します。', category: 'css-layout', level: '初級' },
  { cmd: 'cll', output: 'clear: left;', desc: '左の回り込みを解除します。', category: 'css-layout', level: '中級' },
  { cmd: 'clr', output: 'clear: right;', desc: '右の回り込みを解除します。', category: 'css-layout', level: '中級' },
  { cmd: 'iso', output: 'isolation: isolate;', desc: '新しいスタッキングコンテキストを作成します。', category: 'css-layout', level: '上級' },
  { cmd: 'rsz', output: 'resize: both;', desc: 'ユーザーが要素のサイズを変更できるようにします。', category: 'css-layout', level: '中級' },
  { cmd: 'objf', output: 'object-fit: cover;', desc: '置換要素（img/video）のコンテンツのフィット方法を指定します。', category: 'css-layout', level: '中級', recommended: true },
  { cmd: 'objp', output: 'object-position: ;', desc: '置換要素のコンテンツの位置を指定します。', category: 'css-layout', level: '中級' },
  
  // Additional Text
  { cmd: 'wm', output: 'writing-mode: vertical-rl;', desc: 'テキストの書字方向を指定します。縦書きなどに使用。', category: 'css-text', level: '中級' },
  { cmd: 'tsh', output: 'text-shadow: ;', desc: 'テキストに影をつけます。', category: 'css-text', level: '中級' },
  { cmd: 'ws', output: 'word-spacing: ;', desc: '単語間の間隔を調整します。', category: 'css-text', level: '中級' },
  { cmd: 'ol', output: 'outline: ;', desc: '要素の外枠線を指定します。borderとは異なりレイアウトに影響しません。', category: 'css-text', level: '中級' },
  { cmd: 'oln', output: 'outline: none;', desc: '外枠線を非表示にします。', category: 'css-text', level: '中級' },
  
  // Column Layout
  { cmd: 'colc', output: 'column-count: ;', desc: '複数列レイアウトの列数を指定します。', category: 'css-flex', level: '中級' },
  { cmd: 'colg', output: 'column-gap: ;', desc: '複数列間の間隔を指定します。', category: 'css-flex', level: '中級' },
  { cmd: 'colr', output: 'column-rule: ;', desc: '複数列間の区切り線を指定します。', category: 'css-flex', level: '中級' },
  { cmd: 'colw', output: 'column-width: ;', desc: '複数列レイアウトの列幅を指定します。', category: 'css-flex', level: '中級' },
  { cmd: 'cols', output: 'column-span: all;', desc: '要素を全列にまたがって表示します。', category: 'css-flex', level: '中級' },
  
  // List Styles
  { cmd: 'lis', output: 'list-style: ;', desc: 'リストのマーカースタイルをまとめて指定します。', category: 'css-decoration', level: '中級' },
  { cmd: 'list', output: 'list-style-type: ;', desc: 'リストマーカーの種類を指定します。', category: 'css-decoration', level: '中級' },
  { cmd: 'lisp', output: 'list-style-position: inside;', desc: 'リストマーカーの位置を指定します。', category: 'css-decoration', level: '中級' },
  { cmd: 'lisn', output: 'list-style: none;', desc: 'リストマーカーを非表示にします。', category: 'css-decoration', level: '初級' },
  
  // Filters & Effects
  { cmd: 'fil', output: 'filter: ;', desc: 'ぼかし、明度などの視覚効果フィルターを適用します。', category: 'css-decoration', level: '上級', examples: ['fil:blur(5px)', 'fil:brightness(1.2)'] },
  { cmd: 'bdfl', output: 'backdrop-filter: ;', desc: '要素の背後にフィルター効果を適用します。', category: 'css-decoration', level: '上級', examples: ['bdfl:blur(10px)'] },
  { cmd: 'mxbm', output: 'mix-blend-mode: ;', desc: '要素のブレンドモードを指定します。', category: 'css-decoration', level: '上級' },
  
  // Scroll & Overflow
  { cmd: 'sb', output: 'scroll-behavior: smooth;', desc: 'スクロールを滑らかにアニメーションさせます。', category: 'css-animation', level: '中級' },
  { cmd: 'ovs', output: 'overflow: scroll;', desc: '常にスクロールバーを表示します。', category: 'css-layout', level: '中級' },
  { cmd: 'ovxs', output: 'overflow-x: scroll;', desc: '横方向にスクロールバーを表示します。', category: 'css-layout', level: '中級' },
  { cmd: 'ovys', output: 'overflow-y: scroll;', desc: '縦方向にスクロールバーを表示します。', category: 'css-layout', level: '中級' },
  { cmd: 'ovxa', output: 'overflow-x: auto;', desc: '横方向のオーバーフローを自動制御します。', category: 'css-layout', level: '中級' },
  { cmd: 'ovya', output: 'overflow-y: auto;', desc: '縦方向のオーバーフローを自動制御します。', category: 'css-layout', level: '中級' },
  
  // Visibility & Display
  { cmd: 'vis', output: 'visibility: visible;', desc: '要素を表示します。', category: 'css-layout', level: '中級' },
  { cmd: 'bfv', output: 'backface-visibility: hidden;', desc: '3D変形時の裏面を非表示にします。', category: 'css-animation', level: '上級' },
  { cmd: 'trfo', output: 'transform-origin: ;', desc: '変形の基点を指定します。', category: 'css-animation', level: '中級' },
  { cmd: 'trfs', output: 'transform-style: preserve-3d;', desc: '3D変形の子要素の描画方法を指定します。', category: 'css-animation', level: '上級' },
  { cmd: 'per', output: 'perspective: ;', desc: '3D変形の遠近感を指定します。', category: 'css-animation', level: '上級' },
  
  // Additional Animation
  { cmd: 'animtf', output: 'animation-timing-function: ;', desc: 'アニメーションの速度曲線を指定します。', category: 'css-animation', level: '上級' },
  { cmd: 'animdel', output: 'animation-delay: ;', desc: 'アニメーションの開始遅延を指定します。', category: 'css-animation', level: '上級' },
  { cmd: 'animic', output: 'animation-iteration-count: infinite;', desc: 'アニメーションの繰り返し回数を指定します。', category: 'css-animation', level: '上級' },
  { cmd: 'animdir', output: 'animation-direction: ;', desc: 'アニメーションの再生方向を指定します。', category: 'css-animation', level: '上級' },
  { cmd: 'animfm', output: 'animation-fill-mode: ;', desc: 'アニメーション前後のスタイルを指定します。', category: 'css-animation', level: '上級' },
  { cmd: 'animps', output: 'animation-play-state: paused;', desc: 'アニメーションの再生状態を指定します。', category: 'css-animation', level: '上級' },
  
  // Transition details
  { cmd: 'trsp', output: 'transition-property: all;', desc: 'トランジション対象のプロパティを指定します。', category: 'css-animation', level: '中級' },
  { cmd: 'trsdur', output: 'transition-duration: ;', desc: 'トランジションの時間を指定します。', category: 'css-animation', level: '中級' },
  { cmd: 'trstf', output: 'transition-timing-function: ;', desc: 'トランジションの速度曲線を指定します。', category: 'css-animation', level: '中級' },
  { cmd: 'trsdel', output: 'transition-delay: ;', desc: 'トランジションの開始遅延を指定します。', category: 'css-animation', level: '中級' },
  
  // Additional Decoration
  { cmd: 'bga', output: 'background-attachment: fixed;', desc: '背景画像の固定・スクロール設定を指定します。', category: 'css-decoration', level: '中級' },
  { cmd: 'bgcp', output: 'background-clip: ;', desc: '背景の描画範囲を指定します。', category: 'css-decoration', level: '上級' },
  { cmd: 'bgo', output: 'background-origin: ;', desc: '背景画像の配置基準を指定します。', category: 'css-decoration', level: '上級' },
  { cmd: 'bxshn', output: 'box-shadow: none;', desc: 'ボックスシャドウを無効にします。', category: 'css-decoration', level: '中級' },
  { cmd: 'bdc', output: 'border-color: ;', desc: '枠線の色を指定します。', category: 'css-decoration', level: '初級' },
  { cmd: 'bdw', output: 'border-width: ;', desc: '枠線の幅を指定します。', category: 'css-decoration', level: '初級' },
  { cmd: 'bds', output: 'border-style: ;', desc: '枠線のスタイルを指定します。', category: 'css-decoration', level: '初級' },
  { cmd: 'bdcl', output: 'border-collapse: collapse;', desc: 'テーブルの枠線を結合します。', category: 'css-decoration', level: '中級' },
  { cmd: 'bdsp', output: 'border-spacing: ;', desc: 'テーブルセル間の間隔を指定します。', category: 'css-decoration', level: '中級' },
  
  // Additional Flex/Grid
  { cmd: 'fxg', output: 'flex-grow: ;', desc: 'Flexアイテムの伸び率を指定します。', category: 'css-flex', level: '中級' },
  { cmd: 'fxsh', output: 'flex-shrink: ;', desc: 'Flexアイテムの縮み率を指定します。', category: 'css-flex', level: '中級' },
  { cmd: 'fxb', output: 'flex-basis: ;', desc: 'Flexアイテムの基準サイズを指定します。', category: 'css-flex', level: '中級' },
  { cmd: 'gta', output: 'grid-template-areas: ;', desc: 'Gridのエリア名を定義します。', category: 'css-flex', level: '上級' },
  { cmd: 'ga', output: 'grid-area: ;', desc: '要素を配置するGridエリアを指定します。', category: 'css-flex', level: '上級' },
  { cmd: 'gc', output: 'grid-column: ;', desc: 'Grid内での列の位置を指定します。', category: 'css-flex', level: '中級' },
  { cmd: 'gr', output: 'grid-row: ;', desc: 'Grid内での行の位置を指定します。', category: 'css-flex', level: '中級' },
  { cmd: 'gg', output: 'grid-gap: ;', desc: 'Gridの行間・列間の隙間を指定します。', category: 'css-flex', level: '中級' },
  { cmd: 'pi', output: 'place-items: center;', desc: 'align-itemsとjustify-itemsを一括指定します。', category: 'css-flex', level: '中級' },
  { cmd: 'pc', output: 'place-content: center;', desc: 'align-contentとjustify-contentを一括指定します。', category: 'css-flex', level: '中級' },
  { cmd: 'ps', output: 'place-self: center;', desc: 'align-selfとjustify-selfを一括指定します。', category: 'css-flex', level: '中級' },
  
  // Additional Spacing
  { cmd: 'mt', output: 'margin-top: ;', desc: '上側の外側余白を指定します。', category: 'css-spacing', level: '初級' },
  { cmd: 'mr', output: 'margin-right: ;', desc: '右側の外側余白を指定します。', category: 'css-spacing', level: '初級' },
  { cmd: 'mb', output: 'margin-bottom: ;', desc: '下側の外側余白を指定します。', category: 'css-spacing', level: '初級' },
  { cmd: 'ml', output: 'margin-left: ;', desc: '左側の外側余白を指定します。', category: 'css-spacing', level: '初級' },
  { cmd: 'pt', output: 'padding-top: ;', desc: '上側の内側余白を指定します。', category: 'css-spacing', level: '初級' },
  { cmd: 'pr', output: 'padding-right: ;', desc: '右側の内側余白を指定します。', category: 'css-spacing', level: '初級' },
  { cmd: 'pb', output: 'padding-bottom: ;', desc: '下側の内側余白を指定します。', category: 'css-spacing', level: '初級' },
  { cmd: 'pl', output: 'padding-left: ;', desc: '左側の内側余白を指定します。', category: 'css-spacing', level: '初級' },
];

// Get all data
export const emmetData = {
  html: htmlData,
  css: cssData,
};
