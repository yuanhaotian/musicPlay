<template>
    <div class="SingerMsg">
      <div class="singerMsg_pic_title" >
          <img class="singerMsg_pic_title_icon" src="@/static/image/back.png" @click="goback()" alt="">
          <span class="singerMsg_pic_title_name">{{singerMsg.name}}</span>
      </div>
      <div class="singerMsg_pic" >
        <div class="singerMsg_pic_img" :style="`background:url(${singerMsg.headerImg}) no-repeat center center/cover;`"></div>
        <div class="singerMsg_pic_play">
          <img class="singerMsg_pic_play_icon" src="@/static/image/play.png" alt="">
          <span class="singerMsg_pic_play_txt">随机播放全部</span>
        </div>
      </div>
      <div class="singerMsg_content">
        <!-- <listView :childUrl="childUrl"></listView> -->
        <ul class="singerMsg_content_uls">
          <li class="singerMsg_content_lis" v-for="(val,idx) in singerMsg.songList" :key="idx" @click="playMusic(idx)">
            <p class="singerMsg_content_lis_title">{{val.title}}</p>
            <p class="singerMsg_content_lis_collect">{{val.collect}}</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import axios from "axios";
import listView from '@/common/ListView'

export default {
  name: "SingerMsg",
  data() {
    return {
      singerMsg:{},
    };
  },
  created(){
    this.getSinger(this.$route.query.singer_id);
  },
  mounted() {
    this.getScroll();
  },
  updated(){
    this.ImgBig();//ul向下滚动的时候，放大图片
  },
  methods: {
      getScroll(){
          window.onscroll = function () {
              let htmlDom = document.documentElement || document.body;
              let titleDom = document.getElementsByClassName("singerMsg_pic_title")[0];
              let ulDom = document.getElementsByClassName("singerMsg_content")[0];

              if(ulDom.offsetTop-htmlDom.scrollTop<=titleDom.offsetHeight){
                titleDom.style.backgroundColor="#222";
              }else{
                titleDom.style.backgroundColor="";
              }
          }.bind(this);
      },
      playMusic(idx){
        //显示，歌曲列表，歌曲顺序
        var obj = Object.assign({},this.singerMsg);
        delete obj.songList;

        this.$store.commit('SET_SINGER',obj); //歌手信息
        this.$store.commit('SET_PLAYING',true);//开始播放
        this.$store.commit('SET_PLAYLIST',this.singerMsg.songList); //播放列表
        this.$store.commit('SET_SEQUENCELIST',this.singerMsg.songList);//顺序播放列表
        this.$store.commit('SET_MODE',0);//播放模式
        this.$store.commit('SET_CURRENTINDEX',idx);//播放第几个
      },
     getSinger(singerId){
        var that = this;
        axios({
            method: 'get',
            url: `/singerMsg?singerId=${singerId}`,
        })
        .then(function (res) {
          that.singerMsg = res.data;
        })
        .catch(function(err){
            console.log("请求歌手详情数据失败",err);
        })
    },
    ImgBig(){
      var $wrap = $(".singerMsg_content").first();
      var $imgDiv = $(".singerMsg_pic_img").first();
      var $liH = document.getElementsByClassName("singerMsg_content_lis")[0].offsetHeight;

      $wrap.on('touchstart',function(e) {
        var clientY=e.originalEvent.changedTouches[0].clientY;
        var scaleNum = 1;
      
        $(this).on('touchmove',function(e){
          var changeY = e.originalEvent.changedTouches[0].clientY-clientY;
          if(changeY>0 && changeY<=$liH*5){
            scaleNum+=0.004;
            // scaleTop = scaleNum*changeY;
          }else{
            scaleNum=1;
            changeY=0;
          }
          console.log(changeY)
          $imgDiv.css('transform',`scale(${scaleNum})`);
        })
      })
      $wrap.on('touchend',function(){
        $imgDiv.css('transform','scale(1)')
        $wrap.css('marginTop',"0px")
      })
    },
    goback(){
      window.history.go(-1);
    }
  },
  destroyed(){
    window.onscroll = null;
  },
  computed: {},
};
</script>
<style scoped>
  #app,.SingerMsg{
    width:100%;
    height:100%;
  }
  .SingerMsg{
    position: relative;
  }
  .singerMsg_pic{
    position: relative;
    width:100%;
    height:280px;
  }
  .singerMsg_pic_img{
    height:280px;
  }
  .singerMsg_pic_title{
    position: fixed;
    z-index: 30;
    display: flex;
    justify-content: center;
    align-items: center;
    width:calc(100% - 32px);
    padding:0 16px;
  }
  .singerMsg_pic_singer{
    display:block;
    width:100%;
    height:100%;
  }
  .singerMsg_pic_title_icon{
    display:block;
    width: 20px;
    height: 24px;
  }
  .singerMsg_pic_title_name{
    flex:1;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    color: #fff;
  }
  .singerMsg_pic_play{
    position: absolute;
    bottom: 20px;
    z-index: 10;
    left: 50%;
    display:flex;
    justify-content: center;
    align-items: center;
    width: 135px;
    margin-left: -67px;
    border: 1px solid #ffcd32;
    color: #ffcd32;
    border-radius: 100px;
    line-height:25px;
    background-color:#03070b;
  }
  .singerMsg_pic_play_icon{
    display:block;
    width:18px;
    height:18px;
    margin-right:8px;
  }
  .singerMsg_content{
    overflow: scroll;
    width:100%;
    background-color:#222;
  }
  .singerMsg_content_uls{
    padding:20px 30px 70px;
  }
  .singerMsg_content_lis{
    padding:10px 0;
  }
  .singerMsg_content_lis_title{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #fff;
  }
  .singerMsg_content_lis_collect{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-top: 4px;
    color: rgba(255,255,255,0.3);
  }
</style>
