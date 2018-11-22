$(function(){
	// 公司简介 P3部分
	$(".btn-list li").on("click",function(){
		$(this).addClass('on').siblings('li').removeClass('on');
		$(".text-list li").eq($(this).index()).addClass('on').siblings('li').removeClass('on');
	})
})