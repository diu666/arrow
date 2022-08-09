// PC端首页js

/**
 * 轮播
 */
var mySwiper = new Swiper(".main-carousel .swiper", {
    loop: true, // 循环模式选项
    pagination: {
        el: ".swiper-pagination",
        bulletClass: "carousel-cutsom-bullet",
        bulletActiveClass: "carousel-custom-bullet-active",
    },
});

var mySwiper = new Swiper(".live .swiper", {
    loop: true, // 循环模式选项
    pagination: {
        el: ".swiper-pagination",
        bulletClass: "carousel-cutsom-bullet",
        bulletActiveClass: "carousel-custom-bullet-active",
    },
});

/**
 * 解决方案点击事件
 */
$(".solution li").click(function() {
    $(this)
        .css("border-bottom", "4px solid #0084D5")
        .siblings()
        .css("border-bottom", "unset");
    let title = $(this).find("span").text();
    let css = null;
    console.log(title);
    switch (title) {
        case "AIOT解决方案":
            css = ".aiot";
            break;
        case "工业控制解决方案":
            css = ".plc";
            break;
        case "汽车电子解决方案":
            css = ".car-elc";
            break;
        case "新能源解决方案":
            css = ".new-energy";
            break;
    }
    $(css).show().siblings().hide();
});

/**
 * 弹窗部分
 */
$("#open").click(function(event) {
    event.stopPropagation();
    $("#popup").show();
});

$("#close").click(function() {
    $("#popup").hide();
});

//点击空白处隐藏弹出层，下面为滑动消失效果和淡出消失效果。
$(document).click(function(event) {
    var _con = $("#modal"); // 设置目标区域
    if (!_con.is(event.target) && _con.has(event.target).length === 0) {
        $("#popup").hide();
    }
});