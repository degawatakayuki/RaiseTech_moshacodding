/* ハンバーガーメニュー */
$(function(){
    /* $("#nav__link").css("display","none"); */
    $("#menu-trigger").on("click", function() {
        $("#nav__link").slideToggle(200);
        $(this).toggleClass("close");
        $("#course__entry").css("display","none");
    });
}); 
/* ナビゲーションメニュー */
 $(function() {
    $('.submenu-list').hide();

     $(".navlink__submenu").hover(function() {  
        var i = $(".navlink__submenu").index(this);
        $('.submenu-list').eq(i).show(300);
    }, function() {    
        var i = $(".navlink__submenu").index(this);
        $('.submenu-list').eq(i).hide();
    }); 
}); 
