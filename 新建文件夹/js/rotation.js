window.onload = function() {
    screenLocation();
    pointer();
    timeSet();
    start();
    dropDown();
    var items = document.getElementsByClassName("item");
    var goPrebtn = document.getElementById("goPre");
    var goNextbtn = document.getElementById("goNext");
    goNextbtn.addEventListener("click",goNext);
    goPrebtn.addEventListener("click",goPre);
    // console.log(imgs); 
}
var index = 0;
var time = 0;

// 侧边栏下拉菜单
function dropDown(){
    $(".leftDropdown").mouseenter(function(){
        $(".leftDropdownContent").css("display","block");
    })
    $(".leftDropdown").mouseleave(function(){
        $(".leftDropdownContent").css("display","none");
    })
    $(".leftDropdownContent").mouseenter(function(){
        $(this).css("display","block");
        $(".leftNav").css({
            "border-top-right-radius":0,
            "border-bottom-right-radius":0
        })
    })
    $(".leftDropdownContent").mouseleave(function(){
        $(this).css("display","none");
        $(".leftNav").css({
            "border-radius": "10px"
        })
    })

    // var leftDropdownContent = document.getElementById("leftDropdownContent");
    // var leftdorpDown = document.getElementById("leftDropdown");
    // console.log();
    // leftdorpDown.addEventListener("mouseenter",function(){
    //     leftDropdownContent.style.display = "block";
    // })
    // leftdorpDown.addEventListener("mouseleave",function(){
    //     leftDropdownContent.style.display = "none";
    // })
}


//将所有的图片、点的class属性默认为imgindex，使其不具有堆叠最高属性 
function clear(){
    var points = document.getElementsByClassName("point");
    var imgs = document.getElementsByClassName("imgindex");
    for(var i=0;i<imgs.length;i++){
        imgs[i].className = "imgindex";
    }
    for(var i=0;i<points.length;i++){
        points[i].className = "point";
    }
}

// 将对应的图片、原点显示为激活
function goindex(){
    var points = document.getElementsByClassName("point");
    var imgs = document.getElementsByClassName("imgindex");
    clear();
    console.log(index); 
    imgs[index].className = "imgindex active";
    points[index].className = "point active";
}

//下一张图片
function goNext(){ 
    if(index<8){
        index++;
    }else{
        index = 0;
    }
    goindex();
    time = -10;
}

// 前一张图片
function goPre(){
    if(index>0){
        index--;
    }else{
        index = 8;
    }
    goindex();
    time = -10;
}

//点击导航点跳到相应的图片
function pointer(){
    var points = document.getElementsByClassName("point");
    for(var i = 0;i < points.length ; i++){
        points[i].addEventListener("mouseover",function(){
            var pointindex = this.getAttribute("data-index");
            console.log(pointindex);
            index = pointindex;
            goindex();
            time = -10;
        })
    }
}

//定时器 设置自动跳转的时间
function timeSet(){
    setInterval(function(){
        time++;
        if(time == 10){
            goNext();
            time = 0;
        }
    },500)
}


