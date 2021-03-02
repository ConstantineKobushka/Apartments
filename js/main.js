$(function () {
  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list-active");
    $(this).toggleClass("menu__btn-active");
  });
});
