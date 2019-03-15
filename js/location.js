/**
 * Created by Thinkpad on 2019/1/12.
 */
function getScrollbarWidth() {
    var oP = document.createElement('p'), styles = {
        width: '100px',
        height: '100px',
        overflowY: 'scroll',
    }, i, scrollbarWidth;

    for (i in styles){
        oP.style[i] = styles[i];
    }
    document.body.appendChild(oP);
    scrollbarWidth = oP.offsetWidth - oP.clientWidth;
    oP.remove();

    return scrollbarWidth;
}
function screenLocation(){
    var scrollwidth = getScrollbarWidth();
    var htLocation = document.getElementById("container");
    // var screenWidth =  window.screen.availWidth;
    var screenWidth = window.screen.width - scrollwidth;
    htLocation.style.cssText = "width:" + screenWidth + "px";
    console.log(scrollwidth);
}
