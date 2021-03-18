// Auto-close menu on button click, not needed on other links, as they refer to different pages
$(".navbar-nav li button").on("click", function () {
    $(".navbar-collapse").collapse("hide");
});