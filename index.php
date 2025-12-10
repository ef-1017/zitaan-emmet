<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="format-detection" content="telephone=no" />

  <link rel="stylesheet" media="all" href="assets/css/reset.min.css" />
  <link rel="stylesheet" media="all" href="assets/css/layout.min.css" />
  <link rel="canonical" href="https://emmet.zitaan.com" />

  <script src="assets/js/script.min.js"></script>

  <link rel="icon" href="assets/img/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="assets/img/home.png" />

  <title>Emmetチートシート | 時短サポートサイト「ジターン」</title>

  <meta name="description"
    content="よく使うEmmetコマンドを厳選して掲載。HTML・CSSのコーディングを効率化する、実践向けEmmetチートシートです。制作現場で役立つショートカットをまとめています。">

  <meta name="robots" content="index,follow,max-image-preview:large" />

  <meta property="og:locale" content="ja_JP" />
  <meta property="og:site_name" content="時短サポートサイト「ジターン」" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Emmetチートシート | 時短サポートサイト「ジターン」" />
  <meta property="og:description"
    content="よく使うEmmetコマンドを厳選して掲載。HTML・CSSのコーディングを効率化する、実践向けEmmetチートシートです。制作現場で役立つショートカットをまとめています。" />
  <meta property="og:url" content="https://emmet.zitaan.com" />
  <meta property="og:image" content="https://emmet.zitaan.com/OGP.jpg" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Emmetチートシート | 時短サポートサイト「ジターン」" />

  <meta name="twitter:description"
    content="よく使うEmmetコマンドを厳選して掲載。HTML・CSSのコーディングを効率化する、実践向けEmmetチートシートです。制作現場で役立つショートカットをまとめています。" />
  <meta name="twitter:image" content="https://emmet.zitaan.com/OGP.jpg" />

  <script type='application/ld+json'>
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Emmetチートシート | 時短サポートサイト「ジターン」",
    "url": "https://emmet.zitaan.com",
    "description": "よく使うEmmetコマンドを厳選して掲載。HTML・CSSのコーディングを効率化する、実践向けEmmetチートシートです。制作現場で役立つショートカットをまとめています。",
    "image": "https://emmet.zitaan.com/OGP.jpg",
    "author": {
      "@type": "Organization",
      "name": "時短サポートサイト「ジターン」"
    },
    "publisher": {
      "@type": "Organization",
      "name": "時短サポートサイト「ジターン」",
      "logo": {
        "@type": "ImageObject",
        "url": "https://emmet.zitaan.com/home.png"
      }
    }
  }
  </script>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-S3DLD2CEQM"></script>
  <script>
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'G-S3DLD2CEQM');
  </script>
</head>

<body class="body" id="top">
  <div class="container">


    <header class="header">
      <figure class="header-logo">
        <img src="assets/img/img_logo.svg" alt="Zitaan">
        <figcaption>時短サポートサイト「ジターン」</figcaption>
      </figure>
      <h1 class="header-title">よく使う Emmet チートシート</h1>
      <p class="header-lead">Emmetのコマンドは数多く存在しますが、<br>2025年4月現在、制作現場でよく使われるものに絞ってご紹介しています。</p>
    </header>

    <nav class="toggle">
      <div class="toggle__wrap">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>

    <main class="main" id="page-html">


      <h2 class="title">HTML<span class="title-open">全て展開する</span></h2>


      <?php
function render_emmet_template_items($items) {
  foreach ($items as $item): ?>
      <dl class="set-block__item">
        <dt class="set-block__title">
          <span class="set-block__title--code set-block__emmet" data-emmet="<?= htmlspecialchars($item['emmet']) ?>">
            <?= htmlspecialchars($item['emmet']) ?>
          </span>
          <span class="set-block__title--detail"><?= htmlspecialchars($item['title']) ?></span>
          <button class="set-block__title--copy" title="クリップボードにコピーする">クリップボードにコピーする</button>
          <button class="set-block__title--more" title="詳細を見る">詳細を見る</button>
        </dt>
        <dd class="set-block__description">
          <?php if($item['detail']): ?>
          <div class="set-block__detail"><?= htmlspecialchars($item['detail']) ?></div>
          <?php endif; ?>
          <?php if($item['code']): ?>
          <div class="set-block__code">
            <?= nl2br(str_replace(["  ", "\t"], ["&nbsp;&nbsp;", "&nbsp;&nbsp;&nbsp;&nbsp;"], htmlspecialchars($item['code']))) ?>
          </div>

          <?php endif; ?>
        </dd>

      </dl>
      <?php endforeach;
}
?>

      <div class="set">
        <ul class="set-nav">
          <li class="set-nav__item"><a href="#html-01">HTMLひな形</a></li>
          <li class="set-nav__item"><a href="#html-02">ドキュメント構造要素＆見出し</a></li>
          <li class="set-nav__item"><a href="#html-03">テキスト＆インライン要素</a></li>
          <li class="set-nav__item"><a href="#html-04">リスト要素</a></li>
          <li class="set-nav__item"><a href="#html-05">メディア＆図</a></li>
          <li class="set-nav__item"><a href="#html-06">フォーム＆入力要素</a></li>
          <li class="set-nav__item"><a href="#html-07">テーブル要素</a></li>
          <li class="set-nav__item"><a href="#html-08">ユーティリティ＆リソース</a></li>
          <li class="set-nav__item"><a href="#html-09">複数出力構文</a></li>
        </ul>
        <div class="set-group" id="html-01">
          <h3 class="set-title">HTMLひな形</h3>
          <p class="set-text">`!` を入力すると、HTML5の基本構造（DOCTYPE宣言、head・body要素、viewport設定など）が展開されます。<br>
            なお、言語属性（lang）は Emmet の仕様上、初期状態では en（英語）に設定されています。日本語サイトの場合は ja に手動で書き換えてください。
          </p>

          <div class="set-block">
            <?php
      $templates = [
        [
          'emmet' => '!',
          'title' => 'HTMLひな形',
          'detail' => '',
          'code' => '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

</body>
</html>',
        ],
      ];
      render_emmet_template_items($templates);
      ?>
          </div>
        </div>


        <div class="set-group" id="html-02">
          <h3 class="set-title">ドキュメント構造要素＆見出し</h3>


          <div class="set-block">
            <?php
      $templates = [
        [
          'emmet' => 'hdr',
          'title' => '<header></header>',
          'detail' => 'ページ全体やセクションの先頭部分に使われるヘッダー要素です。',
          'code' => '',
        ],
        [
          'emmet' => 'nav',
          'title' => '<nav></nav>',
          'detail' => 'サイト内のナビゲーションリンクをまとめる要素です。',
          'code' => '',
        ],
        [
          'emmet' => 'mn',
          'title' => '<main></main>',
          'detail' => 'ページの主な内容を表す領域で、1ページに1つだけ使用します。',
          'code' => '',
        ],
        [
          'emmet' => 'sect',
          'title' => '<section></section>',
          'detail' => '意味のあるまとまりを持つセクションを定義します。見出しとセットで使われることが多いです。',
          'code' => '',
        ],
        [
          'emmet' => 'art',
          'title' => '<article></article>',
          'detail' => '独立して意味が通じる記事や投稿に使います。',
          'code' => '',
        ],
        [
          'emmet' => 'aside',
          'title' => '<aside></aside>',
          'detail' => '補足情報やサイドバーとして使用します。',
          'code' => '',
        ],
        [
          'emmet' => 'address',
          'title' => '<address></address>',
          'detail' => '著者や運営者の連絡先を記載する要素です。',
          'code' => '',
        ],
        [
          'emmet' => 'ftr',
          'title' => '<footer></footer>',
          'detail' => 'ページや記事の最後に配置されるフッターエリアを示します。',
          'code' => '',
        ],
        [
          'emmet' => 'h1',
          'title' => '<h1></h1>',
          'detail' => 'ページの主見出しとして使用します。',
          'code' => '',
        ],
        [
          'emmet' => 'h2',
          'title' => '<h2></h2>',
          'detail' => 'セクションの見出しとして最もよく使われます。',
          'code' => '',
        ],
        [
          'emmet' => 'h3',
          'title' => '<h3></h3>',
          'detail' => '<h2>内の小見出しとして使用します。',
          'code' => '',
        ],
        
      ];
      render_emmet_template_items($templates);
      ?>
          </div>
        </div>


        <div class="set-group" id="html-03">
          <h3 class="set-title">テキスト＆インライン要素</h3>


          <div class="set-block">
            <?php
      $templates = [
        [
          'emmet' => 'a',
          'title' => '<a href=""></a>',
          'detail' => 'リンクを作成するタグです。外部リンクには `target="_blank"` と `rel="noopener"` を推奨します。',
          'code' => '',
        ],
        [
          'emmet' => 'br',
          'title' => '<br>',
          'detail' => 'テキスト内で改行を行うためのタグです。',
          'code' => '',
        ],
        [
          'emmet' => 'span',
          'title' => '<span></span>',
          'detail' => '汎用インライン要素で、一部を装飾したいときに使います。',
          'code' => '',
        ],
        [
          'emmet' => 'str',
          'title' => '<strong></strong>',
          'detail' => '重要な語句を強調するインライン要素です。',
          'code' => '',
        ],
        [
          'emmet' => 'em',
          'title' => '<em></em>',
          'detail' => '意味的な強調を表すインライン要素です。',
          'code' => '',
        ],
        [
          'emmet' => 'det',
          'title' => '<details></details>',
          'detail' => 'クリックで開閉できる情報ブロックを作成します。',
          'code' => '使用例：
        <details>
          <summary>よくある質問</summary>
          <p>ここに回答が入ります。</p>
        </details>',
        ],
        [
          'emmet' => 'summary',
          'title' => '<summary></summary>',
          'detail' => '<details>の見出しとして機能します。',
          'code' => '',
        ],
      ];
      render_emmet_template_items($templates);
      ?>
          </div>
        </div>

        <div class="set-group" id="html-04">
          <h3 class="set-title">リスト要素</h3>


          <div class="set-block">
            <?php
      $templates = [
        [
          'emmet' => 'ul',
          'title' => '<ul></ul>',
          'detail' => '順不同のリスト（箇条書き）を作成します。',
          'code' => '',
        ],
        [
          'emmet' => 'ol',
          'title' => '<ol></ol>',
          'detail' => '番号付きのリストを作成します。',
          'code' => '',
        ],
        [
          'emmet' => 'li',
          'title' => '<li></li>',
          'detail' => '<ul>や<ol>内のリスト項目を定義します。',
          'code' => '',
        ],
      ];
      render_emmet_template_items($templates);
      ?>
          </div>
        </div>

        <div class="set-group" id="html-05">
          <h3 class="set-title">メディア＆図</h3>


          <div class="set-block">
            <?php
      $templates = [
        [
          'emmet' => 'img',
          'title' => '<img src="" alt="">',
          'detail' => '画像を表示します。`loading="lazy"`を使うと高速化可能です。',
          'code' => '',
        ],
        [
          'emmet' => 'img:s',
          'title' => '<img src="" alt="" srcset="">',
          'detail' => '画面サイズ・解像度に応じて最適な画像を読み込みます。',
          'code' => '<img src="img@1x.jpg" alt="説明" srcset="img@2x.jpg 2x, img@1x.jpg 1x">',
        ],
        [
          'emmet' => 'source:media',
          'title' => '<source media="(min-width: )" srcset="">',
          'detail' => '<picture>内で条件に応じた画像を指定します。',
          'code' => '<source media="(min-width: 1024px)" srcset="large.jpg">',
        ],
        [
          'emmet' => 'pic',
          'title' => '<picture></picture>',
          'detail' => '<source>と<img>を組み合わせてレスポンシブ画像を実現します。',
          'code' => '<picture>…</picture>',
        ],
        [
          'emmet' => 'fig',
          'title' => '<figure></figure>',
          'detail' => '画像＋キャプションをセットでまとめる要素です。',
          'code' => '<figure>…<figcaption>説明</figcaption></figure>',
        ],
        [
          'emmet' => 'figc',
          'title' => '<figcaption></figcaption>',
          'detail' => '<figure>内でキャプションを記述します。',
          'code' => '',
        ],
      ];
      render_emmet_template_items($templates);
      ?>
          </div>
        </div>

        <div class="set-group" id="html-06">
          <h3 class="set-title">フォーム＆入力要素</h3>


          <div class="set-block">
            <?php
      $templates = [
        [
          'emmet' => 'form:post',
          'title' => '<form action="" method="post"></form>',
          'detail' => 'POST送信のフォームを生成します。GETは`form:get`。',
          'code' => '',
        ],
        [
          'emmet' => 'input:t',
          'title' => '<input type="text" name="" id="">',
          'detail' => 'テキスト形式の1行入力フィールドです。',
          'code' => '',
        ],
        [
          'emmet' => 'input:email',
          'title' => '<input type="email" name="" id="">',
          'detail' => 'メールアドレス用の入力フィールドです。',
          'code' => '',
        ],
        [
          'emmet' => 'input:checkbox',
          'title' => '<input type="checkbox" name="" id="">',
          'detail' => '複数選択が可能なチェックボックスです。',
          'code' => '',
        ],
        [
          'emmet' => 'input:radio',
          'title' => '<input type="radio" name="" id="">',
          'detail' => '複数選択肢から1つを選ばせるラジオボタンです。',
          'code' => '',
        ],
        [
          'emmet' => 'input:tel',
          'title' => '<input type="tel" name="" id="">',
          'detail' => '電話番号入力用フィールドです。',
          'code' => '',
        ],
        [
          'emmet' => 'input:h',
          'title' => '<input type="hidden" name="">',
          'detail' => '非表示フィールドです。',
          'code' => '',
        ],
        [
          'emmet' => 'input:submit',
          'title' => '<input type="submit" value="">',
          'detail' => 'フォーム送信ボタンです。',
          'code' => '',
        ],
        [
          'emmet' => 'select',
          'title' => '<select name="" id=""></select>',
          'detail' => 'プルダウン形式のセレクトボックスです。',
          'code' => '',
        ],
        [
          'emmet' => 'tarea',
          'title' => '<textarea name="" id=""></textarea>',
          'detail' => '複数行入力用フィールドです。',
          'code' => '',
        ],
        [
          'emmet' => 'opt',
          'title' => '<option value=""></option>',
          'detail' => '<select>内の各選択肢を定義します。',
          'code' => '',
        ],
        [
          'emmet' => 'label',
          'title' => '<label for=""></label>',
          'detail' => 'フォーム項目の説明ラベルとして使用します。',
          'code' => '',
        ],
        [
          'emmet' => 'btn:s',
          'title' => '<button type="submit"></button>',
          'detail' => '送信ボタンを<button>で記述します。テキストやHTMLを自由に入れられます。',
          'code' => '',
        ],
      ];
      render_emmet_template_items($templates);
      ?>
          </div>
        </div>

        <div class="set-group" id="html-07">
          <h3 class="set-title">テーブル要素</h3>


          <div class="set-block">
            <?php
      $templates = [
        [
          'emmet' => 'table',
          'title' => '<table></table>',
          'detail' => '行と列でデータを表形式に表示します。',
          'code' => '',
        ],
        [
          'emmet' => 'tr',
          'title' => '<tr></tr>',
          'detail' => 'テーブルの1行を定義します。',
          'code' => '',
        ],
        [
          'emmet' => 'th',
          'title' => '<th></th>',
          'detail' => 'ヘッダーセルを定義します。太字・中央揃えがデフォルト。',
          'code' => '',
        ],
        [
          'emmet' => 'td',
          'title' => '<td></td>',
          'detail' => 'データセルを定義します。',
          'code' => '',
        ],
      ];
      render_emmet_template_items($templates);
      ?>
          </div>
        </div>

        <div class="set-group" id="html-08">
          <h3 class="set-title">ユーティリティ＆リソース</h3>


          <div class="set-block">
            <?php
      $templates = [
        [
          'emmet' => '.',
          'title' => '<div class=""></div>',
          'detail' => '.の後にクラス名を入力すると divタグにクラスを追加します。',
          'code' => '補足：
        p.class → <p class="class"></p>',
        ],
        [
          'emmet' => 'link:css',
          'title' => '<link rel="stylesheet" href="style.css">',
          'detail' => '外部CSSファイルを読み込みます。',
          'code' => '',
        ],
        [
          'emmet' => 'link:favicon',
          'title' => '<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">',
          'detail' => 'ブラウザタブに表示されるファビコンを指定します。',
          'code' => '',
        ],
        [
          'emmet' => 'link:touch',
          'title' => '<link rel="apple-touch-icon" href="favicon.png">',
          'detail' => 'スマホのホーム画面アイコンを指定します。',
          'code' => '',
        ],
        [
          'emmet' => 'script:src',
          'title' => '<script src=""></script>',
          'detail' => '外部JavaScriptファイルを読み込みます。',
          'code' => '',
        ],
      ];
      render_emmet_template_items($templates);
      ?>
          </div>
        </div>


        <div class="set-group" id="html-09">
          <h3 class="set-title">複数出力構文</h3>
          <p class="set-text">覚えておくと作業が早くなります。反復や構造の入力がぐっと楽になります。
          </p>

          <div class="set-block">
            <?php
      $templates = [
        [
          'emmet' => 'ri:a',
          'title' => 'レスポンシブ画像（アートディレクション）',
          'detail' => '<picture> タグを使って、画面サイズに応じて構図の異なる画像を出し分ける構文。「Responsive Image: Art Direction」の略。',
          'code' => '
<picture>
<source media="(min-width: )" srcset="">
  <img src="" alt="">
</picture>
      
使用例：
<picture>
  <source media="(min-width: 1024px)" srcset="wide.jpg">
  <img src="narrow.jpg" alt="風景の写真">
</picture>',
        ],
        [
          'emmet' => '>',
          'title' => 'ネスト構造',
          'detail' => '>（Child）は、親要素の中に子要素をネスト（入れ子）させる構文。階層構造のHTMLを効率的に展開できます。',
          'code' => '構文例：nav>ul>li
      
出力：
<nav>
  <ul>
    <li></li>
  </ul>
</nav>',
        ],
        [
          'emmet' => '+',
          'title' => '兄弟構造',
          'detail' => '+（Sibling）は、同じ階層に兄弟要素を横並びで展開する構文。複数の要素を連続で並べたいときに使います。',
          'code' => '構文例：div + p + p
      
出力：
<div></div>
<p></p>
<p></p>',
        ],
        [
          'emmet' => '*',
          'title' => '繰り返し構文',
          'detail' => '*（Multiplication）は、指定した数だけ要素を繰り返して展開する構文。リストや表などの生成に便利。',
          'code' => '構文例：ul>li*3
      
出力：
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>',
        ],
        [
          'emmet' => '^',
          'title' => '親要素へ戻る構文',
          'detail' => '^（Parent）は、一段上の親要素に戻って新しい要素を展開する構文。ネストの途中で分岐を入れたいときに使います。',
          'code' => '構文例：div>ul>li^p
      
出力：
<div>
  <ul>
    <li></li>
  </ul>
</div>
<p></p>',
        ],
        [
          'emmet' => '()',
          'title' => 'グループ化構文',
          'detail' => '()（Grouping）は、複数の要素をひとつのまとまりとして扱う構文。複雑な構造をまとめて展開したいときに便利。',
          'code' => '構文例：div>(header>ul>li*2)+footer>p
      
出力：
<div>
  <header>
    <ul>
      <li></li>
      <li></li>
    </ul>
  </header>
  <footer>
    <p></p>
  </footer>
</div>',
        ],
        [
          'emmet' => '$',
          'title' => '連番構文',
          'detail' => '$ を使うと、繰り返し構文（*）と組み合わせて、クラス名やIDに自動で連番を付与できます。',
          'code' => '構文例：ul>li.item$*3
      
出力：
<ul>
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
</ul>',
        ],
      ];
      
      render_emmet_template_items($templates);
      ?>
          </div>
        </div>

      </div>

      <h2 class="title" id="page-css">CSS<span class="title-open">全て展開する</span></h2>

      <div class="set">
        <ul class="set-nav">
          <li class="set-nav__item"><a href="#css-01">レイアウト・配置</a></li>
          <li class="set-nav__item"><a href="#css-02">余白・サイズ</a></li>
          <li class="set-nav__item"><a href="#css-03">テキスト装飾・文字</a></li>
          <li class="set-nav__item"><a href="#css-04">装飾・背景・境界</a></li>
          <li class="set-nav__item"><a href="#css-05">Flex・Gridレイアウト補助</a></li>
          <li class="set-nav__item"><a href="#css-06">ユーザー操作・状態制御</a></li>
          <li class="set-nav__item"><a href="#css-07">アニメーション・変形</a></li>
        </ul>
        <div class="set-group" id="css-01">
          <h3 class="set-title">レイアウト・配置</h3>
          <p class="set-text"></p>

          <div class="set-block">
            <?php
$templates = [
  [
    'emmet' => 'pos',
    'title' => 'position: relative;',
    'detail' => '要素の位置を、元の配置を基準にして相対的にずらしたいときに使います。親要素を基準としたレイアウト調整によく利用されます。',
    'code' => '',
  ],
  [
    'emmet' => 'poa',
    'title' => 'position: absolute;',
    'detail' => '要素を親要素の位置を基準にして、絶対的な座標で配置します。スクロールや他の要素の影響を受けにくい配置にしたい場合に使われます。',
    'code' => '',
  ],
  [
    'emmet' => 'pof',
    'title' => 'position: fixed;',
    'detail' => '要素の位置をビューポートに対して固定します。スクロールしても常に同じ位置に表示されるため、ヘッダーや戻るボタンなどに適しています。',
    'code' => '',
  ],
  [
    'emmet' => 't',
    'title' => 'top: ;',
    'detail' => 'positionプロパティと併用して、要素の上端の位置を指定します。',
    'code' => '補足：例）t10 と入力すると → top: 10px; に展開されます。',
  ],
  [
    'emmet' => 'r',
    'title' => 'right: ;',
    'detail' => 'positionプロパティと併用して、要素の右端の位置を指定します。',
    'code' => '補足：例）r5 と入力すると → right: 5px; に展開されます。',
  ],
  [
    'emmet' => 'b',
    'title' => 'bottom: ;',
    'detail' => 'positionプロパティと併用して、要素の下端の位置を指定します。',
    'code' => '補足：例）b0 と入力すると → bottom: 0; に展開されます。',
  ],
  [
    'emmet' => 'l',
    'title' => 'left: ;',
    'detail' => 'positionプロパティと併用して、要素の左端の位置を指定します。',
    'code' => '補足：例）l20 と入力すると → left: 20px; に展開されます。',
  ],
  [
    'emmet' => 'z',
    'title' => 'z-index: ;',
    'detail' => '要素の重なり順を指定するプロパティです。数値が大きいほど前面に表示されます。positionプロパティと併用されることが一般的です。',
    'code' => '補足：例）z10 と入力すると → z-index: 10; に展開されます。',
  ],
  [
    'emmet' => 'db',
    'title' => 'display: block;',
    'detail' => '要素をブロックレベルで表示します。幅は親要素いっぱいに広がり、改行されるのが特徴です。',
    'code' => '',
  ],
    [
      'emmet' => 'df',
      'title' => 'display: flex;',
      'detail' => '要素をフレックスボックスで表示し、子要素を柔軟に並べます。',
      'code' => '',
    ],
    [
      'emmet' => 'dg',
      'title' => 'display: grid;',
      'detail' => 'グリッドレイアウトを有効にします。要素を行と列で整列できます。',
      'code' => '',
    ],
    [
      'emmet' => 'dn',
      'title' => 'display: none;',
      'detail' => '要素を非表示にします（DOM上には存在しますが見えません）。',
      'code' => '',
    ],
    [
      'emmet' => 'di',
      'title' => 'display: inline;',
      'detail' => 'インライン要素として表示します。幅や高さは基本的に指定できません。',
      'code' => '',
    ],
    [
      'emmet' => 'dib',
      'title' => 'display: inline-block;',
      'detail' => 'インライン要素のように並びつつ、幅・高さを指定できるブロック要素として表示します。',
      'code' => '',
    ],
    [
      'emmet' => 'dif',
      'title' => 'display: inline-flex;',
      'detail' => 'インライン要素のように並びつつ、flexboxのレイアウト制御を行います。',
      'code' => '',
    ],
    [
      'emmet' => 'v',
      'title' => 'visibility: hidden;',
      'detail' => '非表示状態を解除して表示に戻します。通常はデフォルトの状態です。',
      'code' => '',
    ],
    [
      'emmet' => 'ov',
      'title' => 'overflow: hidden;',
      'detail' => 'はみ出した要素を非表示にします。レイアウト崩れ防止やスクロール制御でよく使われます。',
      'code' => '',
    ],
    [
      'emmet' => 'ovx',
      'title' => 'overflow-x: hidden;',
      'detail' => '横方向のスクロールを無効化します。スマホでの横はみ出し防止などに使用されます。',
      'code' => '',
    ],
    [
      'emmet' => 'plai',
      'title' => 'place-items: ;',
      'detail' => 'FlexやGridで、縦横両軸の中央揃えを同時に指定できるショートハンドです。中央配置によく使われます。',
      'code' => '補足：
place-items: center;（縦横とも中央揃え）',
    ],
    [
      'emmet' => 'ar',
      'title' => 'aspect-ratio: ;',
      'detail' => '要素の横幅と高さの比率（アスペクト比）を固定します。画像や動画、ボックスの比率制御に便利です。',
      'code' => '例：
aspect-ratio: 1;        （正方形）
aspect-ratio: 16 / 9;   （横16：縦9）',
    ],
    [
      'emmet' => 'iso',
      'title' => 'isolation: ;',
      'detail' => 'ブレンドモード（mix-blend-mode など）の影響を遮断し、要素をスタッキングコンテキストとして分離します。',
      'code' => '補足：
isolation: isolate;（混色の影響を遮断）',
    ],
    [
      'emmet' => 'gtr',
      'title' => 'grid-template-rows: repeat();',
      'detail' => 'Gridコンテナの行のサイズを定義します。レイアウトの高さの構成を調整できます。',
      'code' => '例：
grid-template-rows: auto 1fr;',
    ],
    [
      'emmet' => 'gtc',
      'title' => 'grid-template-columns:  repeat();',
      'detail' => 'Gridコンテナの列幅を指定します。レイアウトの横方向の比率を制御できます。',
      'code' => '例：
grid-template-columns: 1fr 2fr;',
    ],
    [
      'emmet' => 'tbl',
      'title' => 'table-layout: fixed;',
      'detail' => 'HTMLの <table> 要素における列幅のレイアウト方式を指定します。表示の安定性や描画速度の改善に役立ちます。',
      'code' => '補足：tbl に略記を加えることで指定が変わります。
例：
tbl    → table-layout: fixed;   （すべての列幅を均等に固定）
tbla  → table-layout: auto;    （セル内容に応じて自動調整）',
    ],  
    [
      'emmet' => 'ord',
      'title' => 'order: ;',
      'detail' => 'Flexbox や Grid において、子要素の表示順を制御するプロパティです。HTMLの並び順に関係なく順番を変更できます。',
      'code' => '補足：
ord:0   → order: 0;',
    ],
];
render_emmet_template_items($templates);
?>
          </div>
        </div>


        <div class="set-group" id="css-02">
          <h3 class="set-title">余白・サイズ</h3>
          <p class="set-text"></p>

          <div class="set-block">
            <?php
$templates = [
  [
    'emmet' => 'm',
    'title' => 'margin: ;',
    'detail' => '要素の外側に余白をつけるプロパティです。上下左右のスペースを調整する際に使われます。',
    'code' => '補足：m に数値や方向（t, r, b, l）を続けて入力することで、対応する余白（px単位）や方向を展開できます。
- を入力すると連続でpxを入力できます。
例：
m10  → margin: 10px;
m10-10-10-10  → margin: 10px 10px 10px 10px;
m-0-auto → margin: 0 auto;
mt10 → margin-top: 10px;
mr10 → margin-right: 10px;
mb10 → margin-bottom: 10px;
ml10 → margin-left: 10px;',
],
  
[
  'emmet' => 'p',
  'title' => 'padding: ;',
  'detail' => '内側の余白を指定するプロパティです。コンテンツとボックスの枠との間隔を調整する際に使用されます。',
  'code' => '補足：p に数値や方向（t, r, b, l）を続けて入力することで、対応する内側余白（px単位）を展開できます。
- を入力すると連続でpxを入力できます。
例：
p10  → padding: 10px;
p10-10-10-10  → padding: 10px 10px 10px 10px;
pt10 → padding-top: 10px;
pr10 → padding-right: 10px;
pb10 → padding-bottom: 10px;
pl10 → padding-left: 10px;',
],
[
  'emmet' => 'w',
  'title' => 'width: ;',
  'detail' => '要素の横幅を指定します。',
  'code' => '補足：w に数値をつけると px 単位で展開されます。
例：
w10 → width: 10px;',
],
[
  'emmet' => 'h',
  'title' => 'height: ;',
  'detail' => '要素の縦の高さを指定します。',
  'code' => '補足：h に数値をつけると px 単位で展開されます。
例：
h10 → height: 10px;',
],
[
  'emmet' => 'maw',
  'title' => 'max-width: ;',
  'detail' => '要素の最大横幅を制限するプロパティです。レスポンシブデザインでよく使われます。',
  'code' => '補足：maw に数値をつけると px 単位で展開されます。
例：
maw800 → max-width: 800px;',
],
[
  'emmet' => 'mah',
  'title' => 'max-height: ;',
  'detail' => '要素の最大縦幅を制限するプロパティです。画像や枠の高さ制限などに使用されます。',
  'code' => '補足：mah に数値をつけると px 単位で展開されます。
例：
mah400 → max-height: 400px;',
],
[
  'emmet' => 'miw',
  'title' => 'min-width: ;',
  'detail' => '要素の最小横幅を指定します。コンテンツが極端に小さくなるのを防ぐ際に使用されます。',
  'code' => '補足：miw に数値をつけると px 単位で展開されます。
例：
miw300 → min-width: 300px;',
],
[
  'emmet' => 'mih',
  'title' => 'min-height: ;',
  'detail' => '要素の最小縦幅を指定します。高さ不足によるレイアウト崩れを防ぐ際に使用されます。',
  'code' => '補足：mih に数値をつけると px 単位で展開されます。
例：
mih200 → min-height: 200px;',
],
[
  'emmet' => 'bxz',
  'title' => 'box-sizing: border-box;',
  'detail' => 'padding や border を含めて、要素のサイズを制御できるようにします。レイアウト崩れの防止に便利です。',
  'code' => '',
],
[
  'emmet' => 'g',
  'title' => 'gap: ;',
  'detail' => 'FlexやGridレイアウトにおける要素間のスペース（間隔）を指定します。',
  'code' => '補足：g に数値をつけることで px 単位で展開されます。
例：
g10 → gap: 10px;',
],
];
render_emmet_template_items($templates);
?>
          </div>
        </div>


        <div class="set-group" id="css-03">
          <h3 class="set-title">テキスト装飾・文字</h3>
          <p class="set-text"></p>

          <div class="set-block">
            <?php
$templates = [
  
  [
    'emmet' => 'fw',
    'title' => 'font-weight: ;',
    'detail' => '文字の太さを指定するプロパティです。通常は 400（標準）、700（太字）がよく使われます。',
    'code' => '補足：fw に数値をつけるとそのまま展開されます。
例：
fw700 → font-weight: 700;',
  ],
  [
    'emmet' => 'fz',
    'title' => 'font-size: ;',
    'detail' => '文字サイズを指定するプロパティです。px 単位で数値を入力して展開します。',
    'code' => '補足：fz に数値をつけると px 単位で展開されます。
例：
fz18 → font-size: 18px;',
  ],
  [
    'emmet' => 'lh',
    'title' => 'line-height: ;',
    'detail' => '行間の高さ（行送り）を調整するプロパティです。読みやすさやデザイン上の整列に重要です。',
    'code' => '補足：lh に数値をつけると、そのまま数値として展開されます。
例：
lh1.5 → line-height: 1.5;',
  ],
  [
    'emmet' => 'lts',
    'title' => 'letter-spacing: ;',
    'detail' => '文字と文字の間隔（字間）を調整するプロパティです。読みやすさやデザイン性の向上に役立ちます。',
    'code' => '補足：lts に数値をつけると px 単位で展開されます。
例：
lts1 → letter-spacing: 1px;',
  ],
  [
    'emmet' => 'ta',
    'title' => 'text-align: left;',
    'detail' => 'テキストやインライン要素の水平方向の配置を指定するプロパティです。',
    'code' => '補足：ta に略記をつけることで方向を指定できます。
例：
tar → text-align: right;
tac → text-align: center;',
  ],
  [
    'emmet' => 'ti',
    'title' => 'text-indent: ;',
    'detail' => '段落の最初の行の字下げ（インデント）を設定します。読み物の文章や段組レイアウトで使用されます。',
    'code' => '補足：ti に数値をつけると px 単位で展開されます。
例：
ti20    → text-indent: 20px;
ti-9999 → text-indent: -9999px;',
  ],

  [
    'emmet' => 'tt',
    'title' => 'text-transform: uppercase;',
    'detail' => 'テキストの大文字・小文字変換を指定するプロパティです。見出しや装飾目的での表記統一に使用されます。',
    'code' => '補足：tt に略記をつけることで変換スタイルを指定できます。
例：
tt → text-transform: uppercase;（すべて大文字）
ttl → text-transform: lowercase;（すべて小文字）
ttc → text-transform: capitalize;（各単語の先頭文字のみ大文字）',
  ],
  [
    'emmet' => 'tdu',
    'title' => 'text-decoration: underline;',
    'detail' => 'テキストに下線を引くプロパティです。リンク風の表現や強調に使われます。',
    'code' => '',
  ],
  [
    'emmet' => 'va',
    'title' => 'vertical-align: top;',
    'detail' => 'インライン要素やテーブルセルの垂直方向の位置揃えに使用します。',
    'code' => '補足：va に略記をつけることで具体的な位置指定ができます。
例：
vam → vertical-align: middle;
vab → vertical-align: bottom;',
  ],
  [
    'emmet' => 'tsh',
    'title' => 'text-shadow: ;',
    'detail' => 'テキストに影をつけて、視認性や立体感を高める装飾効果を与えます。',
    'code' => '',
  ],
  [
    'emmet' => 'whs',
    'title' => 'white-space: nowrap;',
    'detail' => 'テキスト中の空白や改行の扱いを制御するプロパティです。折り返しや整形制御に使用されます。',
    'code' => '補足：whs に略記を加えることで異なる値を展開できます。
例：
whs     → white-space: nowrap;（1行に強制表示）
whsp    → white-space: pre;（改行・空白をそのまま反映）
whspw   → white-space: pre-wrap;（折り返しあり＋空白反映）',
  ],
  [
    'emmet' => 'wob',
    'title' => 'word-break: normal;',
    'detail' => '単語の途中で改行するかどうかを指定するプロパティです。長い文字列でのレイアウト崩れを防止します。',
    'code' => '補足：wob の略記で改行の方法を指定できます。
例：
wob     → word-break: normal;（単語単位でのみ改行）
wobba   → word-break: break-all;（途中でも強制改行）',
  ],
  [
    'emmet' => 'c',
    'title' => 'color: #000;',
    'detail' => 'テキストの文字色を指定します。カラーコードやキーワードで指定可能です。',
    'code' => '補足：c に値を続けることで即展開されます。
例：
c#fff   → color: #fff;（白）
c:red   → color: red;（キーワード指定）',
  ],
  
  [
    'emmet' => 'tov',
    'title' => 'text-overflow: ellipsis;',
    'detail' => 'テキストが要素の幅を超えた場合の表示方法を制御します。「...」で省略するケースなどに使用されます。',
    'code' => '補足：
tov → text-overflow: ellipsis;  超過部分を「...」で省略
tovc → text-overflow: clip;      はみ出た部分をカット（デフォルト）',
  ],
];
render_emmet_template_items($templates);
?>
          </div>
        </div>



        <div class="set-group" id="css-04">
          <h3 class="set-title">装飾・背景・境界</h3>
          <p class="set-text"></p>

          <div class="set-block">
            <?php
$templates = [
 
  [
    'emmet' => 'bg',
    'title' => 'background: #000;',
    'detail' => '背景色・画像・位置・サイズなど、背景に関する設定をまとめて指定できるプロパティです。',
    'code' => '補足：背景に関する各種プロパティを個別に指定する略記もあります。
例：
bgn   → background: none;               背景のリセット
bgc   → background-color: #fff;         背景色の指定
bgi   → background-image: url();        背景画像の指定
bgr   → background-repeat: no-repeat;   画像の繰り返し制御
bgp   → background-position: 0 0;       表示位置の指定
bgsc  → background-size: cover;         要素を覆うように拡大
bgsz  → background-size: contain;       全体を収めるように縮小
bga   → background-attachment: fixed;   背景の固定表示',
  ],
  
  [
    'emmet' => 'bd',
    'title' => 'border: 1px solid #000;',
    'detail' => '要素の枠線を一括で指定するプロパティです。線の太さ・種類・色をまとめて設定できます。',
    'code' => '補足：以下の略記で各方向ごとに指定可能です。
例：
bd    → border: 1px solid #000;
bdn   → border: none;                  枠線を非表示
bdt   → border-top: 1px solid #000;    上側だけ枠線
bdb   → border-bottom: 1px solid #000; 下側だけ枠線
bdl   → border-left: 1px solid #000;   左側だけ枠線
bdr   → border-right: 1px solid #000;  右側だけ枠線',
  ],

  [
    'emmet' => 'bdi',
    'title' => 'border-image: url();',
    'detail' => '画像を要素の枠線として使用するプロパティです。装飾的なデザインに使われます。',
    'code' => '補足：bdi を使うと以下のように展開されます。
例：
bdi → border-image: url();',
  ],
  [
    'emmet' => 'bdrs',
    'title' => 'border-radius: ;',
    'detail' => '要素の角を丸くするプロパティです。カードやボタンなどのデザインによく使われます。',
    'code' => '補足：bdrs に数値を加えることで半径を指定できます。
  例：
  bdrs10 → border-radius: 10px;',
  ],
  [
    'emmet' => 'bxsh',
    'title' => 'box-shadow: ;',
    'detail' => '要素に影をつけて立体感や浮き上がりを演出するプロパティです。UIのアクセントとして多用されます。',
    'code' => '',
  ],

  [
    'emmet' => 'mbm',
    'title' => 'mix-blend-mode: ;',
    'detail' => '要素の背景と、その背後にある要素の重なり方（ブレンド方法）を指定します。画像や装飾の演出に使用されます。',
    'code' => '補足：重ねた際の表示のされ方（合成方法）を制御できます。
  例：
  mbm:multiply → mix-blend-mode: multiply;（乗算で重ねる）
  mbm:screen  → mix-blend-mode: screen;（明るい重なり方）',
  ],
  [
    'emmet' => 'ct',
    'title' => 'content: "";',
    'detail' => '疑似要素（::before や ::after）に挿入するテキストや装飾内容を指定します。通常のHTML要素には効果がありません。',
    'code' => '',
  ],
];
render_emmet_template_items($templates);
?>
          </div>
        </div>





        <div class="set-group" id="css-05">
          <h3 class="set-title">Flex・Gridレイアウト補助</h3>
          <p class="set-text"></p>

          <div class="set-block">
            <?php
$templates = [
  
  [
    'emmet' => 'fx',
    'title' => 'flex: ;',
    'detail' => '子要素に対して、伸縮性（grow / shrink）や基準サイズ（basis）をまとめて指定します。Flexbox の基本プロパティです。',
    'code' => '補足：
fx1        → flex: 1;
fx0        → flex: 0;',
  ],
  [
    'emmet' => 'fxd',
    'title' => 'flex-direction: row;',
    'detail' => 'Flexbox の主軸方向（横並び・縦並び）を指定します。アイテムの並ぶ向きを決定します。',
    'code' => '補足：
fxd   → flex-direction: row;
fxdrr  → flex-direction: row-reverse;
fxdc   → flex-direction: column;
fxdcr  → flex-direction: column-reverse;',
  ],
  [
    'emmet' => 'fxw',
    'title' => 'flex-wrap: nowrap;',
    'detail' => 'Flexbox の子要素が収まりきらない場合に折り返すかどうかを制御します。',
    'code' => '補足：
fxw    → flex-wrap: nowrap;
fxww  → flex-wrap: wrap;',
  ],
  
  [
    'emmet' => 'ai',
    'title' => 'align-items: start;',
    'detail' => 'Flexbox や Grid の子要素を交差軸（縦方向）でどのように揃えるかを指定します。1行内の要素の縦方向配置に使用します。',
    'code' => '補足：ai に略記を加えることで異なる配置が展開されます。
例：
aic   → align-items: center;
aifs  → align-items: flex-start;
aife  → align-items: flex-end;
aib   → align-items: baseline;',
  ],
  [
    'emmet' => 'as',
    'title' => 'align-self: start;',
    'detail' => 'Flexbox や Grid において、個別の要素の縦方向（交差軸）の揃え方を指定します。親の align-items を上書きできます。',
    'code' => '補足：略記でさまざまな配置指定が可能です。
例：
asa   → align-self: auto;
ass   → align-self: start;
asc   → align-self: center;
asfs  → align-self: flex-start;
asfe  → align-self: flex-end;
asb   → align-self: baseline;',
  ],
  [
    'emmet' => 'jc',
    'title' => 'justify-content: start;',
    'detail' => 'Flexbox や Grid で、主軸（通常は横方向）における子要素の配置方法を指定します。',
    'code' => '補足：
jc     → justify-content: start;
jcc    → justify-content: center;
jcfe   → justify-content: flex-end;
jcsb   → justify-content: space-between;',
  ],
  [
    'emmet' => 'ac',
    'title' => 'align-content: start;',
    'detail' => '複数行にまたがる Flexbox や Grid コンテナ内の行の揃え方を指定します。複数行の縦方向の整列に使用します。',
    'code' => '補足：ac に略記を加えることで異なる配置が展開されます。
例：
acc    → align-content: center;
acfs   → align-content: flex-start;
acfe   → align-content: flex-end;
ac:sb  → align-content: space-between;',
  ],
];
render_emmet_template_items($templates);
?>
          </div>
        </div>







        <div class="set-group" id="css-06">
          <h3 class="set-title">ユーザー操作・状態制御</h3>
          <p class="set-text"></p>

          <div class="set-block">
            <?php
$templates = [
  
  [
    'emmet' => 'op',
    'title' => 'opacity: ;',
    'detail' => '要素全体の透明度を指定するプロパティです。数値は 0（完全に透明）から 1（完全に不透明）の範囲で指定します。',
    'code' => '補足：op のあとに数値をつけると透明度を直接指定できます。
例：
op0.5 → opacity: 0.5;（半透明）
op0   → opacity: 0;（完全に透明）',
  ],
  [
    'emmet' => 'cup',
    'title' => 'cursor: pointer;',
    'detail' => 'リンクやボタンなど、クリック可能な要素でマウスポインターが指の形に変わるスタイルです。',
    'code' => '',
  ],
  [
    'emmet' => 'poe',
    'title' => 'pointer-events: ;',
    'detail' => 'ユーザーのマウス操作を無効化します。ボタンやリンクを一時的に操作不可にする場面で使います。',
    'code' => '
例:
pointer-events: none;',
  ],
  [
    'emmet' => 'us',
    'title' => 'user-select: none;',
    'detail' => 'テキストの選択可否を制御するプロパティです。UIパーツなどで選択不可にしたい場合に使います。',
    'code' => '補足：
user-select: none;    選択不可（ボタンなど）
user-select: auto;    通常通り選択可
user-select: text;    テキストのみ選択可
user-select: all;     全体を一括選択',
  ],
  [
    'emmet' => 'sb',
    'title' => 'scroll-behavior: ;',
    'detail' => 'アンカーリンクなどのスクロール挙動を滑らかにするかどうかを制御します。',
    'code' => '補足：
scroll-behavior: smooth;（スムーズスクロール）
scroll-behavior: auto;（即時スクロール／初期値）',
  ],
  [
    'emmet' => 'ap',
    'title' => 'appearance: none;',
    'detail' => 'ブラウザが自動的に適用する標準の見た目（ボタン・フォーム等）を制御するプロパティです。独自デザインに切り替えたいときに使用します。',
    'code' => '補足：
appearance: none; → 標準スタイルを無効化
※ -webkit-appearance: none; のようなベンダープレフィックスが必要な場合もあります',
  ],
  [
    'emmet' => '!',
    'title' => '!important',
    'detail' => 'CSSプロパティの優先度を強制的に上げるために使用します。他のルールを上書きしたい場合の「最後の手段」として使われます。',
    'code' => '補足：
・すべての CSS プロパティの末尾に付けて使用します。
・外部CSSのスタイルを強制的に上書きする際によく使われます。',
  ],
];
render_emmet_template_items($templates);
?>
          </div>
        </div>



        <div class="set-group" id="css-07">
          <h3 class="set-title">アニメーション・変形</h3>
          <p class="set-text"></p>

          <div class="set-block">
            <?php
$templates = [
  
  [
    'emmet' => 'anim',
    'title' => 'animation: ;',
    'detail' => 'CSSアニメーションの名前・時間・タイミング・繰り返し回数などをまとめて指定するプロパティです。',
    'code' => '補足：animation に関するプロパティは以下のように個別指定も可能です。
例：
anim-name → animation-name: ;
anim-dur  → animation-duration: ;
anim-tf   → animation-timing-function: ;
  
複数をまとめて指定する場合：
animation: fadeIn 0.3s ease-in-out;',
  ],
  [
    'emmet' => 'trs',
    'title' => 'transition: ;',
    'detail' => '状態の変化を滑らかに見せるアニメーション効果を設定します。hover 時の演出などに用います。',
    'code' => '例：
transition: all 0.3s ease;',
  ],
  [
    'emmet' => 'trf',
    'title' => 'transform: ;',
    'detail' => '要素の位置、拡大縮小、回転、傾きなどを2D/3Dで変形できるプロパティです。動きのあるUIに多用されます。',
    'code' => '補足：
trfr   → transform: rotate();
trft  → transform: translate(x, y);',
  ],
 

];
render_emmet_template_items($templates);
?>
          </div>
        </div>


      </div>

      <footer class="footer" id="term">
        <h3 class="set-title">サイトポリシー</h3>
        <dl class="footer-policy">
          <dt class="footer-policy__label">免責事項</dt>
          <dd class="footer-policy__detail">
            <ul class="footer-policy__list">
              <li class="footer-policy__item">
                当サイト「emmet.zitaan.com」に掲載している内容は、正確性・完全性を保証するものではありません。<br>
                利用者が当サイトの情報を用いて行う一切の行為に関して、当方は一切の責任を負いません。
              </li>
              <li class="footer-policy__item">
                Emmetの仕様変更やバージョン差異により、展開結果が異なる場合がございますのでご留意ください。
              </li>
            </ul>
          </dd>
          <dt class="footer-policy__label">Emmetについて</dt>
          <dd class="footer-policy__detail">
            <ul class="footer-policy__list">
              <li class="footer-policy__item">
                本サイトは Emmet（旧 Zen Coding）の紹介・チートシートを目的とした非公式ファンサイトです。<br>
                Emmet は <a href="https://emmet.io/" target="_blank" rel="noopener">emmet.io</a>
                にて公開されているオープンソースツールであり、開発者 Sergey Chikuyonok 氏によりライセンス提供されています。
              </li>
              <li class="footer-policy__item">
                Emmet の仕様や使用に関する著作権・商標権はそれぞれの開発元に帰属します。
              </li>
            </ul>
          </dd>
          <dt class="footer-policy__label">お問い合わせ</dt>
          <dd class="footer-policy__detail">
            <ul class="footer-policy__list">
              <li class="footer-policy__item">
                ご質問・ご意見などありましたら、下記メールアドレスよりご連絡ください。（技術的なご質問にはお答えできません）<br>Mail: <span id="set_mail"></span>
              </li>
            </ul>
          </dd>
          <dt class="footer-policy__label">利用規約</dt>
          <dd class="footer-policy__detail">
            <ul class="footer-policy__list">
              <li class="footer-policy__item">
                Emmetのコマンド確認は Visual Studio Code（VSCode）にて行っております。
              </li>
              <li class="footer-policy__item">
                本サイトの掲載内容は予告なく変更・削除される場合があります。
              </li>
              <li class="footer-policy__item">
                当サイトに掲載されているHTML・CSSコードは自己責任にてご利用ください。
              </li>
              <li class="footer-policy__item">
                当サイトの文章・画像・コードを無断転載・再配布することを禁止します。
              </li>
            </ul>
          </dd>
        </dl>

        <address class="footer-copy">&copy; 2025 zitaan.com All rights reserved.</address>
      </footer>
    </main>

    <aside class="aside">
      <nav class="aside-nav">
        <ul class="aside-nav__list">
          <li class="aside-nav__item"><a href="#page-html">HTML</a></li>
          <li class="aside-nav__item"><a href="#page-css">CSS</a></li>
          <li class="aside-nav__item"><a href="#term">サイトポリシー</a></li>
          <li class="aside-nav__item aside-nav__item--pagetop"><a href="#top">ページの先頭へ</a></li>
        </ul>
        <p class="aside-text">Emmetは非常に便利なツールですが、コマンドが多くて覚えきれないと感じる方も少なくありません。<br>
          このサイトでは、実務でよく使うものに絞ってご紹介しています。（選定基準は中の人の独断と偏見です）<br>
          効率的なコーディングの一助となれば幸いです。ぜひご活用ください。</p>
      </nav>

    </aside>

    <div class="aside-pagetop"><a href="#top">ページの先頭へ</a></div>

  </div>

</body>

</html>