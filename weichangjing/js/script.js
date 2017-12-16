var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
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


//插入音乐JS代码
var mp3 = document.querySelector("#mp3");
var mp3Btn = document.querySelector("#mp3Btn");

mp3.onclick = function(){
    if (mp3.play){
        mp3Btn.animationPlayState='paused'
        mp3.pause()
        console.log("if")
    }
    else{
        mp3.play();
        mp3Btn.animationPlayState='running'
        console.log("else")
    }
}


