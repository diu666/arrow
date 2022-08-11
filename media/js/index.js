// PC端首页

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

$(".solution li").each((index, item) => {
    $(item).click(function() {
        $(this)
            .css("border-bottom", "4px solid #0084D5")
            .siblings()
            .css("border-bottom", "unset");
        let content = $(this).parent().parent().next().children();
        $(content[index]).show().css("display", "flex").siblings().hide();
    });
});

/**
 * 技术咨询
 * 行业速递与技术热点点击事件
 */

$(".technology-consult .select span").each((index, item) => {
    $(item).click(function() {
        $(this).addClass("select-active").siblings().removeClass("select-active");
        if (index == 0) {
            $(".technology-consult .express").show();
            $(".technology-consult .hotspot").hide();
        } else {
            $(".technology-consult .express").hide();
            $(".technology-consult .hotspot").show();
        }
    });
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

//点击空白处隐藏弹出层
$(document).click(function(event) {
    var _con = $("#modal"); // 设置目标区域
    if (!_con.is(event.target) && _con.has(event.target).length === 0) {
        $("#popup").hide();
    }
});