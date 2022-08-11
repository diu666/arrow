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

// $('.solution-wrap li').each((index, item) => {
//     $(item).click(function () {
//         console.log(index, item, this)
//         $(this)
//             .css("border-bottom", "0.06rem solid #0084D5")
//             .siblings()
//             .css("border-bottom", "unset");
//     })
// });

$(".solution-wrap li").click(function () {
    $(this)
        .css("border-bottom", "0.06rem solid #0084D5")
        .siblings()
        .css("border-bottom", "unset");
    let title = $(this).find("span").text();
    let css = null;
    switch (title) {
        case "AIOT":
            css = ".aiot";
            break;
        case "工业控制":
            css = ".plc";
            break;
        case "汽车电子":
            css = ".car-elc";
            break;
        case "新能源":
            css = ".new-energy";
            break;
    }
    $(css).show().siblings().hide();
});



/**
 * 技术咨询
 * 行业速递与技术热点点击事件
 */

 $('.technology-consult .select span').each((index, item) => {
    $(item).click(function () {
        $(this).addClass('select-active').siblings().removeClass('select-active')
        if (index == 0) {
            $('.technology-consult .express').show();
            $('.technology-consult .hotspot').hide()
        } else {
            $('.technology-consult .express').hide();
            $('.technology-consult .hotspot').show()
        }
    })
})
