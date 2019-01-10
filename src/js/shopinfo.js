/**
 * Created by liqingguo on 2019/1/9.
 */
$(function(){
  //头部动画逻辑
  $(window).scroll(function(){
    if($(window).scrollTop()>= $('.content').offset().top){
      $('.header').addClass('active')
    }
    if($(window).scrollTop()< $('.content').offset().top){
      $('.header').removeClass('active')
    }
  })
  //商家信息

      $.getJSON('./mock/comment.json',function(data){
        $(data).each(function(index,item){
          $('.navx').append(` <div class="commen">
      <ul class="userlist">
        <li>
          <img src="${item.iconUrl}" alt="">
          <span class="usertitle">
            ${item.nick}}
          </span>
          <div class="middle">
            <span class="span1">
              <img src="http://www.daoway.com/pcimages/red_star@2x.png" alt="">
              <img src="http://www.daoway.com/pcimages/red_star@2x.png" alt="">
              <img src="http://www.daoway.com/pcimages/red_star@2x.png" alt="">
              <img src="http://www.daoway.com/pcimages/red_star@2x.png" alt="">
              <img src="http://www.daoway.com/pcimages/red_star@2x.png" alt="">
            </span>
          </div>
          <div class="content1">${item.comment}</div>
        </li>
      </ul>

    </div>`)
        })
      })
  })
