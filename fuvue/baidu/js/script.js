Vue.component('header-li',{
	props:["text"],
	template:`
		<li><a href="">{{text}}</a></li>
	`
})

Vue.component('header-log',{
	props:["imgsrc","baidu"],
	template:`
		<div>
			<div class="log"><img :src="imgsrc" alt="" /></div>
			<input type="text">
			<div class="btn">{{baidu}}</div>
		</div>
	`
})

Vue.component('small-li',{
	props:["imgsrc","tit"],
	template:`
		<li>
			<img :src="imgsrc" alt="" />
			<p><a href="">{{tit}}</a></p>
		</li>
	`
})

Vue.component('main-li',{
	props:["tit","imgsrc","url","data","all","open","allshow"],
	template:`
	 	<li>
			<h2>{{tit}}</h2>
			<img :src="imgsrc" alt="" />
			<div class="btm">
				<span>{{url}}</span>
				<span>{{data}}</span>
				<span><a v-if="allshow" href="">{{all}}</a></span>
				<span>{{open}}</span>
			</div>
		</li>
	`
})

var app1 = new Vue({
	el:"#app1",
	data:{
		tits:[
			{text:"推荐"},
			{text:"视频"},
			{text:"热点"},
			{text:"时尚"},
			{text:"娱乐"},
			{text:"+"}
		]
	}
})


var app2 = new Vue({
	el:"#app2"
})

var app3 = new Vue({
	el:"#app3",
	data:{
		slis:[
			{imgsrc:"img/1_03.gif",tit:"关注"},
			{imgsrc:"img/2_03.gif",tit:"新闻"},
			{imgsrc:"img/3_03.gif",tit:"小说"},
			{imgsrc:"img/4_03.gif",tit:"视频"},
			{imgsrc:"img/5_03.gif",tit:"糯米"},
			{imgsrc:"img/6_03.gif",tit:"地图"}
		]
	}
})

var app4 = new Vue({
	el:"#app4",
	data:{
		lists:[
			{tit:"习近平用这5句话介绍中国“新时代”",url:"央广网",data:"11-19",all:"置顶",allshow:true},
			{tit:"农村大集鲫鱼、鲤鱼铺满地，鱼的来源让人太生气，最好别吃",imgsrc:"img/yu_03.gif",url:"河北乡土",data:"11-19",all:"图集",allshow:true,open:"打开手机百度"},
			{tit:"女人情到深处时，才会这样称呼你，你可曾被如此称呼过",url:"宇宙用户精选",data:"11-16",all:"图集",allshow:false,open:"打开手机百度"},
			{tit:"超神学院：曾经的雄兵连终于集合了，真是不容易啊",imgsrc:"img/xue_03.gif",url:"透明的车玻璃",data:"11-18",all:"图集",allshow:false,open:"打开手机百度"},
			{tit:"烤鱼店生意红火：秘方：用漏斗过滤剩菜后的口水油",url:"南方都市报 ",data:"07:27",all:"热点",allshow:true},
			{tit:"刘鑫称他也不记得当时有没有反锁门 ，现在是百口莫辩解释不清楚了",imgsrc:"img/lao_03.gif",url:"娱七杂八话天下",data:"11-19",all:"图集",allshow:true,open:"打开手机百度"},
			{tit:"结婚70周年，英国女王庆祝白金婚，王室发布合影",url:"新浪娱乐",data:"11-19",all:"图集",allshow:false},
			{tit:"女兵在阅兵是想上厕所怎么办，原来还有这操作",url:"军人魂",data:"11-18",all:"图集",allshow:false},
			{tit:"专家发现，女人有没有生过孩子，看下面就知道，非常与众不同",url:"只要你愿意等",data:"11-19",all:"图集",allshow:false},
			{tit:"日本女星shinuozaki沙滩游玩，太漂亮了 ",imgsrc:"img/nv_03.gif",url:"精选影片",data:"11-17",all:"图集",allshow:true,open:"打开手机百度"},
			{tit:"农村孤寡老人没钱装暖气，施工人员牵走他家羊炖了，还拆掉壁挂炉",url:"闻舞世界",data:"11-19",all:"图集",allhsow:false,open:"打开手机百度"},
			{tit:"马末都：我为什么不配带温婉，说出来你别觉得恶心 ",imgsrc:"img/ci_03.gif",url:"百家人和文",data:"11-17",all:"图集",allshow:false,open:"打开手机百度"},
			{tit:"红色越野正开走，警察突然瞄见副驾门，把手上有拷",url:"网易新闻",data:"11-19",all:"热点",allshow:false},
			{tit:"泰版《命中注定我爱你》最终帕屋面临死亡，妮子应该不会难受吧 ",imgsrc:"img/shuai_03.gif",url:"军旅中的生涯",data:"11-18",all:"图集",allshow:true,open:"打开手机百度"},
			{tit:"中国造出地表最强两栖战车，多项性能居世界第一 ",url:"新华网",data:"11-19",all:"图集",allshow:true},
			{tit:"徐州下雪了。今夜华北地区有雨夹雪 ",url:"东方头条",data:"11-19",all:"图集",allshow:false},
			{tit:"成都十岁男孩在家上学：做德语主播，写万字英文小说 ",imgsrc:"img/nv_03.gif",url:"精选影片",data:"11-17",all:"图集",allshow:false,open:"打开手机百度"},
			{tit:"潘玮柏访谈现场被逼问感情生活，他是这样回答，吴昕知道吗 ",imgsrc:"img/last_03.gif",url:"楚嗅网综合",data:"11-19",all:"图集",allshow:false,open:"打开手机百度"},
			{tit:"观众席有人挂出“藏毒”蓄意挑衅 中国球员在德退场抗议 ",url:"网易新闻",data:"00:30",all:"图集",allshow:false}
		]
	}
}) 
