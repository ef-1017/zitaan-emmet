document.addEventListener('DOMContentLoaded', () => {
  // ① スクロールで .is-scrolled を切り替える処理
  const nav = document.querySelector('.aside-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        nav.classList.add('is-scrolled');
      } else {
        nav.classList.remove('is-scrolled');
      }
    });
  }
 
    // ② Emmetコピー処理（伝播を止める）
    document.querySelectorAll('.set-block__title--copy').forEach(copyBtn => {
      copyBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // ← ここでバブリング防止
  
        const codeEl = copyBtn.closest('.set-block__item')?.querySelector('.set-block__title--code');
        const emmetText = codeEl?.dataset.emmet;
        if (!emmetText) return;
  
        navigator.clipboard.writeText(emmetText).then(() => {
          copyBtn.classList.add('is-active');
          setTimeout(() => {
            copyBtn.classList.remove('is-active');
          }, 1000);
        });
      });
    });
  
    // ⑥ .set-block__title クリックで is-active をトグル
    document.querySelectorAll('.set-block__title').forEach(title => {
      title.addEventListener('click', function () {
        const next = this.nextElementSibling;
        const moreBtn = this.querySelector('.set-block__title--more');
  
        if (next) {
          next.classList.toggle('is-active');
        }
  
        if (moreBtn) {
          moreBtn.classList.toggle('is-active');
        }
      });
    });
  

  

  // ④ メールアドレス挿入処理
  const m = ["emmet", "jitaan.com"];
  const mailTarget = document.getElementById("set_mail");
  if (mailTarget) {
    mailTarget.innerHTML = `<a href="mailto:${m[0]}@${m[1]}">${m[0]}@${m[1]}</a>`;
  }

    // ⑤ .title-open クリックで隣の .set 内の要素に is-active 付与
 
  document.querySelectorAll('.title-open').forEach(button => {
    button.addEventListener('click', function () {
      const parent = this.parentElement;
      const siblingSet = parent?.nextElementSibling;

      if (!siblingSet || !siblingSet.classList.contains('set')) return;

      const targets = siblingSet.querySelectorAll('.set-block__description, .set-block__title--more');

      const isActive = this.classList.contains('is-active');

      if (isActive) {
        // 閉じる処理
        targets.forEach(el => el.classList.remove('is-active'));
        this.classList.remove('is-active');
        this.textContent = '全て展開する';
      } else {
        // 開く処理
        targets.forEach(el => el.classList.add('is-active'));
        this.classList.add('is-active');
        this.textContent = '全て閉じる';
      }
    });
  });


    // ⑦ .toggle クリックで 自身と .aside に is-active をトグル
    document.querySelectorAll('.toggle').forEach(toggle => {
      toggle.addEventListener('click', function () {
        this.classList.toggle('is-active');
  
        const aside = document.querySelector('.aside');
        if (aside) {
          aside.classList.toggle('is-active');
        }
      });
    });

      // ⑧ 1060px以下で .aside-nav__item a をクリックしたら toggle/aside の is-active を除去
  document.querySelectorAll('.aside-nav__item a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 1060) {
        const toggle = document.querySelector('.toggle');
        const aside = document.querySelector('.aside');

        if (toggle) toggle.classList.remove('is-active');
        if (aside) aside.classList.remove('is-active');
      }
    });
  });

  
});

