// var deviceWidth = document.documentElement.clientWidth;

// if (deviceWidth > 750) deviceWidth = 750;

// document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";

// window.onresize = function() {
//     var deviceWidth = document.documentElement.clientWidth;

//     if (deviceWidth > 750) deviceWidth = 750;

//     document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
// };
(function(doc, win) {
    const dpr = Math.min(win.devicePixelRatio, 3),
        scale = 1 / dpr,
        resizeEvent =
        "orientationchange" in window ? "orientationchange" : "resize";

    var recalCulate = function() {
        var docEle = document.documentElement,
            w = docEle.clientWidth,
            num = (w > 750 ? 750 : w) / 750; // **750设计稿的尺寸
        docEle.style.fontSize = (num * 100).toFixed(1) + "px";
    };
    recalCulate();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvent, recalCulate, false);
})(document, window);