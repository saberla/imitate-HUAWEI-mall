function noticescroll(){
    $(".announcement").animate({
        marginTop:"-40px",
        //  opacity:0
    },1000,function(){
        $(this).css({marginTop:"0"}).find(":first").appendTo(this)
    })
    // $(".announcement").css({marginTop:"0"}).find(":first").appendTo(this);
}
function start(){
    setInterval(noticescroll,2000);
}