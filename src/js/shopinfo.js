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
      $('.navx').append(`
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
    `)
    })

    tabPage({
      pageNav: '#pageNav',
      pagePrev: '#prev',
      pageNext: '#next',
      curNum: 10, /*每页显示的条数*/
      activeClass: 'active', /*高亮显示的class*/
      ini: 0/*初始化显示的页面*/
    })
    function tabPage(tabPage){
      var pageNav = $(tabPage.pageNav);
      /*获取分页*/
      var pagePrev = $(tabPage.pagePrev);
      /*上一页*/
      var pageNext = $(tabPage.pageNext);
      /*下一页*/
      var iNum = 0
      //初始下标
      var curNum = tabPage.curNum
      //每页显示的个数
      var len = Math.ceil(data.length / curNum);
      console.log(len)
      //生成页码
      for(var i = 0;i<len;i++){
        $('#pageNav').append(`<a href="javascript:;">${i+1}</a>`)
      }
      pageNav.find("a:first").addClass(tabPage.activeClass);
      //标签页的点击事件
      pageNav.find('a').each( function(){
        $(this).click(function(){
          $(this).addClass('active').siblings().removeClass('active')
          //让当前索引等于点击的索引
          iNum = $(this).index();
          console.log(iNum)
          $('.navx>.userlist').hide();
          for (var i = ($(this).html() - 1) * curNum; i < ($(this).html()) * curNum; i++) {
            $('.navx>.userlist').eq(i).show()
          }

        })
      })
      //让其余的li标签隐藏   ++++++++===============
      $('.navx>.userlist').hide();
      /************首页的显示*********/
      for (var i = 0; i < curNum; i++) {
        $('.navx>.userlist').eq(i).show()
      }
      //点击下一页
      pageNext.click(function(){
        //所有的隐藏
        $('.navx>.userlist').hide()
        if(iNum === len-1){
          alert('这已经是最后的一页了')

          //显示最后一页内容
          for(var i=(len-1)*curNum;i<len*curNum;i++){
            $('.navx>.userlist').eq(i).show()
          }
          return false
        }else {
          pageNav.find("a").removeClass(tabPage.activeClass);
          iNum++;
          pageNav.find("a").eq(iNum).addClass(tabPage.activeClass);

          for(var i=iNum*curNum;i<(iNum+1)*curNum;i++){
            $('.navx>.userlist').eq(i).show()
          }

        }
        //
      })
      //点击上一页
      pagePrev.click(function(){
        console.log(111)
        $('.navx>.userlist').hide()
        if(iNum === 0){
          alert('这已经是前边的一页了')
          //显示第一页内容
          for(var i=0;i<curNum;i++){
            $('.navx>.userlist').eq(i).show()
          }
          return false
        }else {
          pageNav.find("a").removeClass(tabPage.activeClass);
          iNum--;
          pageNav.find("a").eq(iNum).addClass(tabPage.activeClass);
        }
        for(var i = iNum*curNum;i<(iNum+1)*curNum;i++){
          $('.navx>.userlist').eq(i).show()
        }
      })
    }
  })


})