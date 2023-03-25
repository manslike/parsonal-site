$(document).ready(function() {
    $(".ico").click(function() {
        $(".menu").animate({
            right : '0'
        }, 600);
    });
    $(".closebtn").click(function() {
        $(".menu").animate({
            right : '-360px'
        });
    });
});
navbar.classList('active').toggle();

$(".menu").click(function() {
  $(".navbar").addClass('').toggle();
});