$(function(){
  $.getJSON('./mock/service.json',function(data){
    $(data).each(function(index,item){

      $('.left>ul').append(`<li>
        <img src="${item.imgUrl}" alt="">
        <p class="ptop">
        <img src="http://www.daoway.com/pcimages/home1@2x.png" alt="">
        <b>${item.title}</b>
        </p>
        <p class="bottomp">已接${item.orderCount}单<i>好评${item.positiveRate}</i></p>
        </li>`)
    })
  })
  //头部动画逻辑
  $(window).scroll(function(){
    if($(window).scrollTop()>= $('.content').offset().top){
      $('.header').addClass('active')
    }
    if($(window).scrollTop()< $('.content').offset().top){
      $('.header').removeClass('active')
    }
  })
})