$(function(){
  // ページの準備ができたら、この中の処理を実行する

  $('a[href^="#"]').click(function(){
    // hrefが「#」で始まるリンク（aタグ）がクリックされたら実行する

    let href = $(this).attr("href");
    // クリックされたリンクの href属性の値（例："#menu"）を取り出して、hrefという変数に入れる

    let target = $(href == "#" || href == "" ? 'html' : href);
    // hrefが「#」または空っぽなら「ページ全体(html)」を対象にする
    // それ以外なら、hrefの値（例："#menu"）が指す要素を対象にする
    // 対象を target という変数に入れる

    let position = target.offset().top;
    // targetの要素が、ページの一番上から何pxの位置にあるかを計算して
    // position という変数に入れる

    $("html, body").animate({scrollTop: position}, 600, "swing");
    // ページ全体のスクロール位置を、position の場所まで
    // 600ミリ秒（0.6秒）かけて、なめらかな速度変化(swing)でアニメーションさせる

    return false;
    // リンクをクリックした時のブラウザ本来の「一瞬でジャンプする動き」を止める
  });
})