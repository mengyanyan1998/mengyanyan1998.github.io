$(function(){
	var i=0
			function run(){
				i++
				if(i==3){
					i=0
					$("#banner #img").stop().animate({"marginLeft":0},500)
					$("#banner ul li").eq(i).addClass("dv1").siblings("li").removeClass("dv1")
				}else{
					$("#banner #img").stop().animate({"marginLeft":-1920*i},500)
					$("#banner ul li").eq(i).addClass("dv1").siblings("li").removeClass("dv1")
				}
			}
			var timer=setInterval(run,2000)
			$("#banner ul li").mouseenter(function(){
				clearInterval(timer)
				var n=$(this).index()
				$("#banner #img").stop().animate({"marginLeft":-1920*n},500)
				$("#banner ul li").eq(n).addClass("dv1").siblings("li").removeClass("dv1")
			})
			$("#banner ul li").mouseleave(function(){
				timer=setInterval(run,2500)
			})
			
			$("#mainbar li").hover(function(){
			$(this).find("span").stop().animate({'marginTop':"-159px"},500)
		},function(){
			$(this).find("span").stop().animate({'marginTop':"0px"},500)
		})
			$(".main-left .top h2").click(function(){
				$(".new1").show().siblings().not(".top").hide()
				$(this).addClass("no").siblings().removeClass("no")

			})
			$(".main-left .top p:eq(0)").click(function(){
				$(".new2").show().siblings().not(".top").hide()
				$(this).addClass("no").siblings().removeClass("no")

			})
			$(".main-left .top p:eq(1)").click(function(){
				$(".new3").show().siblings().not(".top").hide()
				$(this).addClass("no").siblings().removeClass("no")

			})
			$(".main-left .top p:eq(2)").click(function(){
				$(".new4").show().siblings().not(".top").hide()
				$(this).addClass("no").siblings().removeClass("no")

			})
			
			
		})
