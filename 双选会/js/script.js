var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect : 'flip',
    flipEffect: {
        slideShadows : true,
        limitRotation : true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
    },
    //Swiper4.x的动画效果开始
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});
