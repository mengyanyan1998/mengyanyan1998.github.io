/**
 * Created by lenovo on 17/11/3 003.
 */
Vue.component('sell-li',{
    props:["tit","url1","text","url2","tit2","images","shou","size","sell"],
    template:`
        <li>
            <a href="#" :title="tit"><img class="pic" :src="url1" alt=""></a>
            <a class="text" :title="tit" href=""><img class="bao" :src="url2" :title="tit2">{{tit}}</a>
            <div class="line-2">
                <a href="">评价<em>{{images}}</em></a>
                <a href="">收藏<em>{{shou}}</em></a>
            </div>
            <div class="line-3">
                <a class="size" href="">{{size}}</a>
                <a class="sell" href="">月销<em>{{sell}}</em>笔</a>
            </div>
        </li>
    `
})
var app = new Vue({
    el:"#app",
    data:{
        sels:[
            {tit:"弹力毛妮秋冬加厚抽绳修身小脚裤休闲",url1:"img/1.webp",url2:"img/2.png",tit2:"包邮",images:"0",shou:"260",size:"￥180",sell:"57"},
            {tit:"橱柜转角拉篮厨房拉篮不锈钢小怪物角拉篮",url1:"img/2.webp",url2:"img/2.png",tit2:"包邮",images:"14",shou:"16952",size:"￥1752",sell:"9"},
            {tit:"24姆米真丝重磅长袖衬衫女飘带桑蚕丝上衣",url1:"img/3.webp",url2:"img/2.png",tit2:"包邮",images:"0",shou:"162",size:"￥358",sell:"66"},
            {tit:"便捷宝智能马桶盖即热式抑菌款437",url1:"img/4.webp",url2:"img/2.png",tit2:"包邮",images:"92",shou:"1042",size:"￥2199",sell:"158"},
            {tit:"新款家用大口径抽水马桶超漩式节水防溅水座",url1:"img/5.webp",url2:"img/2.png",tit2:"包邮",images:"0",shou:"162",size:"￥750",sell:"102"},
            {tit:"正装男皮鞋真皮透气韩版套脚鞋男0765",url1:"img/6.webp",url2:"img/2.png",tit2:"包邮",images:"0",shou:"14",size:"￥198",sell:"5"},
            {tit:"新款男士日常休闲皮鞋男低帮牛皮单鞋男鞋子",url1:"img/7.webp",url2:"img/2.png",tit2:"包邮",images:"0",shou:"468",size:"￥109",sell:"82"},
            {tit:"台下盆洗脸盆厨房洗菜盆淘菜花岗岩洗碗池",url1:"img/8.webp",url2:"img/2.png",tit2:"包邮",images:"0",shou:"208",size:"￥799",sell:"38"},
            {tit:"镜柜浴室柜洗漱台挂墙实木卫生间镜子柜",url1:"img/9.webp",url2:"img/2.png",tit2:"包邮",images:"0",shou:"24",size:"￥288",sell:"2"},
            {tit:"2017秋季尖头小皮鞋透气仿绒皮伐木鞋",url1:"img/10.webp",url2:"img/2.png",tit2:"包邮",images:"65",shou:"466",size:"￥135",sell:"309"},






        ]
    }
})