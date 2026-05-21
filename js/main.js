// jsを記述する際はここに記載していく

// ハンバーガーをクリックしたらアクティブ
$(".hamburger").on("click", function () {
  $(".header_nav").toggleClass("active");
});

// ナビゲーションのリンクをクリックしたらアクティブを外す
$(".header_nav a").on("click", function () {
  $(".header_nav").removeClass("active");
});

$(window).on("resize", function () {
  $(".header_nav").removeClass("active");
});
