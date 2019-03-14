/**
 * Created by Thinkpad on 2019/1/12.
 */
function screenLocation(){
    var htLocation = document.getElementById("container");
    var screenWidth =  window.screen.width - 17;
    htLocation.style.cssText = "width:" + screenWidth + "px";
    console.log(screenWidth);
}
