// PC端首页js
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