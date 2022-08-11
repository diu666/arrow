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

$(".solution-wrap li").each((index, item) => {
    $(item).click(function() {
        $(this)
            .css("border-bottom", "0.06rem solid #0084D5")
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