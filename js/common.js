$(window).scroll(function(){
	if($(window).scrollTop()>=$(".team").offset().top-20&&$(window).scrollTop()<$(".service").offset().top-50){
		$(".navList a:nth-child(1)").css({"border-bottom":"2px solid #fff"});
		$(".navList a:nth-child(1)").siblings().css({"border-bottom":"2px solid #1ABC9C"});
	}else if($(window).scrollTop()>=$(".service").offset().top-20&&$(window).scrollTop()<$(".case").offset().top-50){
		$(".navList a:nth-child(2)").css({"border-bottom":"2px solid #fff"});
		$(".navList a:nth-child(2)").siblings().css({"border-bottom":"2px solid #1ABC9C"});
	}else if($(window).scrollTop()>=$(".case").offset().top-20&&$(window).scrollTop()<$(".company").offset().top-50){
		$(".navList a:nth-child(3)").css({"border-bottom":"2px solid #fff"});
		$(".navList a:nth-child(3)").siblings().css({"border-bottom":"2px solid #1ABC9C"});
	}else if($(window).scrollTop()>=$(".company").offset().top-20&&$(window).scrollTop()<$(".contact").offset().top-50){
		$(".navList a:nth-child(4)").css({"border-bottom":"2px solid #fff"});
		$(".navList a:nth-child(4)").siblings().css({"border-bottom":"2px solid #1ABC9C"});
	}else if($(window).scrollTop()>=$(".contact").offset().top-50){
		$(".navList a:nth-child(5)").css({"border-bottom":"2px solid #fff"});
		$(".navList a:nth-child(5)").siblings().css({"border-bottom":"2px solid #1ABC9C"});
	}else if($(window).scrollTop()<$(".team").offset().top-20){
		$(".navList a").css({"border-bottom":"2px solid #1ABC9C"});
	}
//	var scrollTop = $(window).scrollTop();
//	console.log($(".team").offset().top);
});
$(window).load(function(){
	$('.str3-2').liMarquee();
	$('.str4').liMarquee();
});