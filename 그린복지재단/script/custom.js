/* menu */
$(".nav > ul > li").mouseenter(function(){
   $(this).find(".submenu").stop().slideDown(300); 
});
$(".nav > ul > li").mouseleave(function(){
   $(this).find(".submenu").stop().slideUp(300); 
});

/* slide */
var currentIndex = 0;

setInterval(function() {
    if(currentIndex < 2) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    var slidePosition = currentIndex * (-1200)+"px";
    $(".slideImg").animate({left: slidePosition},400);
},3000);

/* popup */
$(".notice").click(function() {
    $(".popup").css("display","block");
});
$(".close").click(function() {
    $(".popup").css("display","none");
});