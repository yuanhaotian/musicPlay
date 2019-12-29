<template>
  <div class="recommd">
      <div class="recommd_slide">
        <ul class="recommd_slide_ul">
            <li class="recommd_slide_ul_lis" v-if="slideImg.length>1">
              <img :src="slideImg[(slideImg.length-1)].picUrl" alt="">
            </li>
            <li class="recommd_slide_ul_lis" v-for="(val,idx) in slideImg" :key="idx">
              <img :src="val.picUrl" alt="">
            </li>
            <li class="recommd_slide_ul_lis" v-if="slideImg.length>1">
              <img :src="slideImg[0].picUrl" alt="">
            </li>
          </ul>
      </div>
      <div class="recommd_list">
        <p class="recommd_list_title">热门歌单推荐</p>
        <ul class="recommd_list_ul" v-if="recomList.length">
            <li class="recommd_list_ul_lis" v-for="val in recomList" :key="val.imgurl">
                <img class="recommd_lis_img" :src="val.imgurl" alt="">
                <div class="recommd_lis_right">
                    <p class="recommd_lis_right_name">{{val.creator.name}}</p>
                    <p class="recommd_lis_right_msg">{{val.dissname}}</p>
                </div>
            </li>
        </ul>
        <p class="recommd_list_freash" v-if="isFreash">加载中...</p>
      </div>
  </div>
</template>

<script>
import jsonp from "jsonp";
import axios from "axios";

export default {
  name: "mains",
  data() {
    return {
      tabIdx: 0 ,//推荐、歌手、排行、搜索，当前选中
      slideImg:[],//轮播图图片
      pageNow:1,//当前第几页
      recomList:[],//歌单
      isFreash:false,//是否下拉加载数据请求中
      isMaxPage:false,//是否是最后一页数据
      nowIdx:1,//当前第几张图
    };
  },
  created(){
    //请求轮播图数据
    this.getSlide();
    // 请求歌单数据
    this.getRecomList(1);
  },
  mounted() {
    window.onscroll = this.scrollFn.bind(this);
  },
  methods: {
    scrollFn:function(){
      var mainsDom = document.getElementsByClassName("mains")[0];
      var scrollDom = document.documentElement || document.body;
      var scrollH = scrollDom.scrollTop;
      var isgetList = mainsDom.offsetHeight-scrollDom.clientHeight<=scrollH;
      if(isgetList &&  !this.isMaxPage){
        this.getRecomList(++this.pageNow);
      }
    },
    getSlide:function(){
        var that = this;
        axios({
            method: 'get',
            url: "/slideImg",
        })
        .then(function (res) {
            that.slideImg = res.data;
            console.log("vvv",res.data);
            that.banner();
        })
        .catch(function(err){
            console.log("请求轮播图失败",err);
        })
    },
    banner:function(){
        var that = this;
        var ulDom =$(".recommd_slide_ul");
        var screenWidth = $(document).width();
        var len = that.slideImg.length+2;

        ulDom.css('marginLeft',-screenWidth+'px');
        $(".recommd_slide_ul").on('touchstart',function(e){
            var clientX = e.originalEvent.changedTouches[0].clientX;
            var marginLeft = parseInt(ulDom.css('marginLeft'));
            var nowIdx = that.nowIdx;

            $(this).on('touchmove',function(e2){
                var nowMove = 0;//要移动等距离
                var moveX = e2.originalEvent.changedTouches[0].clientX-clientX;

                if(moveX<0){ // 向左滑动
                    if(Math.abs(moveX)<screenWidth/4){
                        nowMove=marginLeft-0+moveX;
                    }else{
                        ++nowIdx;
                        nowMove=-screenWidth*nowIdx; 
                        that.nowIdx = nowIdx;
                        $(this).off('touchmove'); 
                    }
                } else if(moveX>0){ //向右滑动
                   if(Math.abs(moveX)<screenWidth/4){
                        nowMove=marginLeft-0+moveX;
                    }else{
                        --nowIdx;
                        nowMove=-screenWidth*nowIdx; 
                        that.nowIdx = nowIdx;
                        $(this).off('touchmove'); 
                    }
                }

                $(this).stop().animate({ 
                   marginLeft:nowMove+'px'
                },
                'fast' ,
                function(){
                    if(that.nowIdx==0){
                        $(this).css('marginLeft',-screenWidth*(len-2)+'px'); 
                        that.nowIdx = len-2;
                    }else if(that.nowIdx==len-1){
                        $(this).css('marginLeft',-screenWidth+'px'); 
                        that.nowIdx = 1;
                    }
                    console.log("le",that.nowIdx)
                });
            })

            $(this).on('touchend',function(e3){
                var moveX = e3.originalEvent.changedTouches[0].clientX-clientX;
                var nowMove=0;
                
                if(moveX<screenWidth/4){
                    nowMove=-screenWidth*that.nowIdx;
                    $(this).stop().animate({ 
                        marginLeft:nowMove+'px'
                    }, 
                    'fast',
                    function(){
                        if(that.nowIdx==0){
                            $(this).css('marginLeft',-screenWidth*(len-2)+'px'); 
                            that.nowIdx = len-2;
                        }else if(that.nowIdx==len-1){
                            $(this).css('marginLeft',-screenWidth+'px'); 
                            that.nowIdx = 1;
                        }
                           console.log("le",that.nowIdx )
                    });
                }
            })
        })
    },
    getRecomList:function(page){
        var that = this;
        if(that.isFreash){
            return;
        }
        that.isFreash = true; 
        axios({
            method: 'get',
            url: `/recomList`,
            params:{
                'page':page,
            }
        })
        .then(function (res) {
            if(res.data.length){
                that.pageNow = page;
                that.recomList = [...that.recomList,...res.data];  
            }
            that.isMaxPage = 2<page; //2是数据最大页数，从接口字段获取
            that.isFreash = false;
        })
        .catch(function(err){
            that.isFreash = false;
            console.log("请求歌单数据失败",err);
        })
    }
  },
  destroyed(){
    window.onscroll=null;
  },
  computed: {},
};
</script>
<style scoped>
.recommd{
    background-color:#222;
}
.recommd_slide{
    overflow: hidden;
    height:150px;
    width:100%;
    background-color:pink;
}
.recommd_slide_ul{
    overflow: hidden;
    width:3000%;
    height:100%;
    animation:slideAnimate 5s;
}
/* @keyframes slideAnimate {
    from {transform: translate()}
} */
.recommd_slide_ul_lis{
    float:left;
    width:calc(100% / 30);
    height:100%;
}
.recommd_slide_ul_lis img{
    display: block;
    height:100%;
    width:100%;
}
.recommd_list_title{
    height: 65px;
    line-height: 65px;
    text-align: center;
    font-size: 14px;
    color: #ffcd32;
}
.recommd_list_ul_lis{
    display: flex;
    box-sizing: border-box;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 20px 20px 20px;
}
.recommd_lis_img{
    flex: 0 0 60px;
    width: 60px;
    height:60px;
    margin-right: 20px;
    background-color:grey;
}
.recommd_lis_right{
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex: 1;
    flex: 1;
    line-height: 20px;
    overflow: hidden;
    font-size: 14px;
}
.recommd_lis_right_name{
    margin-bottom: 10px;
    color: #fff;
}
.recommd_lis_right_msg{
    color: rgba(255,255,255,0.3);
}
.recommd_list_freash{
    font-size: 14px;
    line-height: 40px;
    color:#ffcd32;
    text-align:center;
}
</style>
