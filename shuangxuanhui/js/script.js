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

var mp3=document.querySelector("#mp3");

//音乐按钮
var mp3Btn=document.querySelector("#mp3Btn")
//暂停音乐
//mp3Btn.style.animationPlayState='paused';
//旋转音乐按钮
//mp3Btn.style.animationPlayState='running'
mp3Btn.onclick=function(){
    if(mp3.paused){
        mp3Btn.style.animationPlayState='running';
        mp3.play();
    }else{
        mp3Btn.style.animationPlayState='paused';
        mp3.pause();
    }
}