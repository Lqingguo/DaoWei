/**
 * Created by liqingguo on 2019/1/8.
 */
$(function(){
  //轮播图
  $(".slideBox").slide({mainCell:".bd ul",autoPlay:true});
  //第一页数据
  $.getJSON('./mock/index.json',function(json){
    $(json).each(function(index,obj){
        $('.ulleft').append(`<li>${obj.serviceIndex}</li>`)
        let types  = index

      $('.ulleft>li').mouseover(function(){
        $('.ulright>ul').eq($(this).index()).show().siblings().hide();
        $('.ulright').show();
      })
      $('.leftlist').mouseleave(function(){
        $('.ulright').hide();
      })
      $('.ulright').append(`<ul></ul>`)
        $($(this.serviceType)).each(function(index,item){
          $('.ulright>ul').eq(types).append(`<li>${item}</li>`)
        })



      //box1
      $('.content').append(`<div class="box1">
        <div class="boxTop">
          <div class="title">
            <div class="title1">${obj.serviceIndex}</div>
            <div class="title2">
            </div>
          </div>
          <div class="rows">
           
              
            
          </div>
        </div>
        <div class="boxbottom">
            <a href="/fuwushang?serviceId=7d6b793021f140e3a3408a41bbb6002e">邻家洁</a>
        
                 <a href="/fuwushang?serviceId=c8e42f7716124bd2ad23c95445002d88">云家政</a>
        
                 <a href="/fuwushang?serviceId=4084e884bfa1408981a3167289683214">管家帮</a>
        
                 <a href="/fuwushang?serviceId=e6eefe6d5a474f018f4702c9135c6764">e城e家家政</a>
        
                 <a href="/fuwushang?serviceId=5a4c37f62c1748cf8f4b7e1ad98c74fc">鸿到家</a>
        
                 <a href="/fuwushang?serviceId=76ae79321a3344c4afd5e92ef168be48">宝宝天天乐</a>
        
                 <a href="/fuwushang?serviceId=98effd036ebb43e2b8835c10cb363592">天下无虫</a>
        
                 <a href="/fuwushang?serviceId=ccdb7748235a4a1aaf7dab09dfdf8bca">和瑞万家</a>
        
                 <a href="/fuwushang?serviceId=cf634124049f480f84c7a5ce7a419e46">水动力除螨</a>
        
                 <a href="/fuwushang?serviceId=f1cafac36ee14dadbafe53227900f932">韩管家</a>
        
                 <a href="/fuwushang?serviceId=1396167d25694952a788f7182ec06d7c">超级阿姨</a>
        
                 <a href="/fuwushang?serviceId=b5e924af8f974ff1a87cea3de99c7ea9">小羽佳家政</a>
        
                 <a href="/fuwushang?serviceId=465077b3400140ccb725b2e342ab7959">绿色家缘</a>
        
                 <a href="/fuwushang?serviceId=002027e904e8499b8acf6d1ebef65085">宜家保洁</a>
        
                 <a href="/fuwushang?serviceId=1d1e7bdcd0084b9f97620e1d7d094488">虫控直通车</a>
        
                 <a href="/fuwushang?serviceId=b6148037439f4fe58b1b4ad450b3353d">实佳家政</a>
        
                 <a href="/fuwushang?serviceId=f24bcfa821464f88ab9b74c901a3af24">水净化除螨</a>
        
                 <a href="/fuwushang?serviceId=46fe97b17a9d4334b00ebf94e56bcffc">合万家</a>
        
                 <a href="/fuwushang?serviceId=694669ed6474413c9217bbc422645427">宜诺康</a>
        
                 <a href="/fuwushang?serviceId=0179366e1bc54b5a86bfc17fd96eadb2">美家洁</a>
        
                 <a href="/fuwushang?serviceId=0344cd3a83894a6f88253832643e4ef4">奥美林保洁</a>
        
                 <a href="/fuwushang?serviceId=1b329971787c4ac3880d78030b7f9f72">爱家保洁</a>
        
                 <a href="/fuwushang?serviceId=2c808b45f08949809b91622a452c66a2">致心居家</a>
        
                 <a href="/fuwushang?serviceId=3838bd2e3b0f4b9a97028016b1ac3a13">海易达虫控</a>
        
                 <a href="/fuwushang?serviceId=4da3fd8aa4574944a769079b17503445">宜佳洁</a>
        
                 <a href="/fuwushang?serviceId=a5e0ac0eea8a40fcaab1d8012552caf7">睿技家政</a>
        
                 <a href="/fuwushang?serviceId=ac1a83b820904dc4bd423df78c7c58b9">东方神盾</a>
        
                 <a href="/fuwushang?serviceId=acbc5da5835d4429ab2d61a53fd27f3b">洁奈尔</a>
        
                 <a href="/fuwushang?serviceId=c7f9cc2b40b14a4f9c3fb7c3040635d3">鑫达鸿信保洁</a>
        
                 <a href="/fuwushang?serviceId=cc94377d08f645368942e0e66af311e6">铃铛猫</a>
        
                 <a href="/fuwushang?serviceId=d3ac1a43102742e99793dc276c77fd5d">顺安馨佳家政</a>
        
                 <a href="/fuwushang?serviceId=d896a415be02413fbfde740906526e7c">百街邦</a>
        
                 <a href="/fuwushang?serviceId=e1d5481068bf4f6aa2edc6c1062699d3">合家家政</a>
        
                 <a href="/fuwushang?serviceId=e1f34222fbe844bc896ccbe3f2c16788">家e净</a>
        
                 <a href="/fuwushang?serviceId=e5829d5973cd4027adf9b54279189f7b">吉祥到家</a>
        
                 <a href="/fuwushang?serviceId=f2386c7582f94f4692e3c583dba3a40b">心怡家政</a>
        </div>
      </div>`)

      $(obj.serviceType).each(function(index,i){
        $('.title2').eq(types).append(`<a>${i}</a>`)
      })
      $(obj.shopList).each(function(index,s){
        $('.rows').eq(types).append(` <a href="" class="row"><div>
                <img src="${s.imgUrl}" alt="">
                <div class="rowtitle">${s.serviceName}</div>
                <p>${s.description}</p>
                <div class="money">
                  <span class="span1">${s.price}元</span>/小时
                  <span class="span2">查看详情</span>
                </div>
              </div></a>`)
      })
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