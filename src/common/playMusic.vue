<template>
  <div class="playMusic" v-show="this.$store.state.playList.length">
    <transition name="transMini">
      <div class="playMusic_miniPlay" v-show="this.$store.state.playList.length && !this.$store.state.fullScreen" @click="changeFull()"> 
        <img class="playMusic_miniPlay_pic" :src="this.musicNow?this.musicNow.imgUrl:''" alt="">
        <div class="playMusic_miniPlay_msg">
          <p class="song">{{this.musicNow?this.musicNow.title:''}}</p>
          <p class="singer">{{this.singer?this.singer.name:''}}</p>
        </div>
        <!-- 暂停 播放图标 -->
        <img class="playMusic_miniPlay_play" v-if="!playing" src="@/static/image/play.png" alt=""  @click="play">
        <img class="playMusic_miniPlay_play" v-if="playing" src="@/static/image/stopImg.png" alt=""  @click="play">
        <img class="playMusic_miniPlay_list" src="@/static/image/songList.png" alt="">
      </div>
    </transition>
    <transition name="transFull">
      <div class="playMusic_normalPlay" v-show="this.$store.state.playList.length && this.$store.state.fullScreen">
        <img class="playMusic_normalPlay_bg" :src="this.musicNow ? this.musicNow.imgUrl : '' " />
        <div class="content">
          <transition name="transFullTop" >
            <div class="playMusic_normalPlay_title" v-show="this.$store.state.playList.length && this.$store.state.fullScreen">
              <div class="top">
                <img class="playMusic_normalPlay_title_icon" src="@/static/image/arrow_bot.png" @click="changeMin()" alt="">
                <p class="playMusic_normalPlay_title_txt">{{this.musicNow?this.musicNow.title:''}}</p>
              </div>
              <p class="playMusic_normalPlay_title_singer">{{this.singer?this.singer.name:''}}</p>
            </div>
          </transition>
          <div  class="playMusic_normalPlay_main">
            <div class="playMusic_normalPlay_main_pic_wrap">
               <div class="playMusic_normalPlay_main_pic" ref="playMusic_normalPlay_main_pic" :style="{background:'url('+(this.musicNow ? this.musicNow.imgUrl : '')+') center center / cover no-repeat '}"></div>
            </div>
            <p class="playMusic_normalPlay_main_song">{{this.musicNow?this.musicNow.title:''}}</p>
          </div>
          <transition name="transFullWrap" >
            <div class="playMusic_normalPlay_wrap"  v-show="this.$store.state.playList.length && this.$store.state.fullScreen">
              <!-- 上面小点 -->
              <div class="playMusic_normalPlay_wrap_dot">
                <span class="dot doted"></span>
                <span class="dot"></span>
              </div>
              <!-- 进度条 -->
              <div class="playMusic_normalPlay_wrap_bar">
                <span class="nowTime">{{this.nowTime}}</span>
                <div class="barWrap" ref="barWrap">
                  <div class="bar" :style="{width:this.percent+'%'}"></div>
                  <div class="circle"  @touchstart="barStart"></div>
                </div>
                <span class="totalTime">{{this.totalTime}}</span>
              </div>
              <!-- 图标控制 -->
              <div class="playMusic_normalPlay_wrap_cotrl">
                <div class="iconTrol">
                  <img src="@/static/image/sequen.png" alt="" v-show="this.mode==0" @click="this.changeMode">
                  <img src="@/static/image/singlePlay.png" alt="" v-show="this.mode==1" @click="this.changeMode">
                  <img src="@/static/image/random.png" alt="" v-show="this.mode==2" @click="this.changeMode">
                </div>
                <div class="iconTrol">
                  <img  src="@/static/image/back.png" alt="" @click="preSong">
                </div>
                <div class="iconTrol">
                  <!-- 暂停 播放图标 -->
                  <img class="playIcon" v-if="!playing" src="@/static/image/play.png" alt=""  @click="play">
                  <img class="playIcon" v-if="playing" src="@/static/image/stopImg.png" alt=""  @click="play">
                </div>
                <div class="iconTrol">
                  <img  src="@/static/image/arrow_right.png" alt="" @click="nextSong">
                </div>
                <div class="iconTrol">
                  <img src="@/static/image/heart.png" alt="">
                  <!-- <img src="@/static/image/hearted.png" alt=""> -->
                  <!-- 其他两种 -->
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
    <audio ref="audio" :src="musicNow ? musicNow.musicUrl : '' " @timeupdate="timeupdata"></audio>
  </div>
</template>
<script>
import {mapState, mapMutations} from "vuex";

export default {
  name: "playMusic",
  data() {
    return {
      nowTime:'0.0',//当前播放时长
      totalTime:'0.0',//歌曲总时长
      percent:0,//歌曲播放进度条，百分比
      oriNowTime:0, //歌曲进度原数据
      oriTotalTime:0,
    };
  },
  mounted() {
   
  },
  methods:{
    ...mapMutations({
      setCurrentIndx:'SET_CURRENTINDEX',
      setMode:'SET_MODE',
    }),
    changeFull(){
      this.$store.commit('SET_FULLSCREEN',true);
    },
    changeMin(){
      this.$store.commit('SET_FULLSCREEN',false);
    },
    play(e){
      e.stopPropagation ? e.stopPropagation() : e.cancelBubble();
      var onOff = !this.playing;
      this.$store.commit('SET_PLAYING',onOff);
    },
    preSong(){
      var index = this.currentIndex-1;
      if(index===-1){
        index = this.playList.length-1;
      }
      this.setCurrentIndx(index);
    },
    nextSong(){
      var mode = this.mode;
      var index = 0;

      if(mode==0){ //顺序
        index = this.currentIndex+1;
        if(index=== this.playList.length){
          index = 0;
        }
      }else if(mode==1){ //单曲循环
        index = this.currentIndex;
      }else if(mode==2){ //随机
        var len = this.playList.length;
        index = (Math.random()*len) | 0;
      }
      this.setCurrentIndx(index);
    },
    changeMode(){
      var mode = this.mode+1;
      if(mode===3){
        mode=0;
      }
      this.setMode(mode);
    },
    timeupdata(e){
      var oriTime = e.target.currentTime;
      var totalTime = e.target.duration;
      
      var txt= (oriTime/60 |0) +":"+ (oriTime%60|0);
      var totalTxt= (totalTime/60 |0) +":"+ (totalTime%60|0);

      this.nowTime = txt;
      this.totalTime = totalTxt;
      this.oriNowTime=oriTime;
      this.oriTotalTime = totalTime;
    },
    barStart(e){
      //当前进度条长度+拖动长度
      var that = this;
      var barWrap = $(".barWrap");
      var bar = $(".bar");

      var allWidth = barWrap.width(); //进度条总长
      var nowWidth = bar.width(); //当前进度条长
      var temp = e.changedTouches[0].clientX;

      $(".circle").on('touchmove',function(e){
        var changeClientX = e.originalEvent.changedTouches[0].clientX-temp;
        var percent = (changeClientX+nowWidth)*100/allWidth;

        that.percent = percent;
        that.$refs.audio.currentTime = percent*that.oriTotalTime/100;
      })
    }
  },
  computed:{
    ...mapState({
      musicNow:state=>state.playList[state.currentIndex],
      singer:state=>state.singer,
      playing:state=>state.playing,
      currentIndex:state=>state.currentIndex,
      playList:state=>state.playList,
      mode:state=>state.mode,
    }),
  },
  watch: {
    playing:function(){
      this.$nextTick(()=>{
        if(this.playing){
          this.$refs.audio.play();
          $(".playMusic_normalPlay_main_pic").css('animation-play-state','running');
        }else{
          this.$refs.audio.pause();
          $(".playMusic_normalPlay_main_pic").css('animation-play-state','paused');
        }
      })
    },
    currentIndex:function(){
      if(this.playing){
        this.$nextTick(()=>{
          this.$refs.audio.play();
          $(".playMusic_normalPlay_main_pic").css('animation-play-state','running');
        })
      }else{
          this.$refs.audio.pause();
          $(".playMusic_normalPlay_main_pic").css('animation-play-state','paused');
      }
    },
    nowTime:function(){
      var percent = this.oriNowTime*100/this.oriTotalTime;
      this.percent = percent ;
      //下一首歌
      if(this.oriTime==this.oriTotalTime){
        this.nextSong();
      }
    }
  },
};
</script>
<style scoped>
  .playMusic_miniPlay{
    position:fixed;
    bottom:0;
    padding:0 15px;
    width:calc(100% - 30px);
    display: flex;
    align-items: center;
    z-index: 100;
    height: 60px;
    background: #333;
  }
  .playMusic_miniPlay_pic{
    width: 40px;
    height: 40px;
    border-radius:50%;
    margin-right:10px;
  }
  .playMusic_miniPlay_msg{
    flex:1;
  }
  .playMusic_miniPlay_msg .song{
    margin-bottom: 2px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 14px;
    color: #fff;
  }
  .playMusic_miniPlay_msg .singer{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 12px;
    color: rgba(255,255,255,0.3);
  }
  .playMusic_miniPlay_play{
    width:32px;
    height:32px;
    margin:0 10px;
  }
  .playMusic_miniPlay_list{
    width:30px;
    height:30px;
    margin-left:10px;
  }
  /* 全屏幕 */
  .playMusic_normalPlay{
    position:fixed;
    display: flex;
    flex-direction: column;
    width:100%;
    height:100%;
    z-indeX:100;
    top:0;
    background-color:#333;
  }
  .playMusic_normalPlay .content{
    position:absolute;
    width:100%;
    height:100%;
    z-index:10;
  }
  .playMusic_normalPlay_bg{
    position:absolute;
    z-index:0;
    width:100%;
    height:100%;
    filter:blur(100px);
    transform: scale(1.2);
  }
  .playMusic_normalPlay_title{
    margin-bottom: 25px;
    padding:0 15px;
  }
  .playMusic_normalPlay_title .top{
    display:flex;
    align-items:center;
  }
  .playMusic_normalPlay_title_icon{
    position:absolute;
    display:inline-block;
    width:25px;
    height:25px;
    margin-right:10px;
  }
  .playMusic_normalPlay_title_txt{
    flex:1;
    line-height: 40px;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 18px;
    color: #fff;
    padding:0 35px;
  }
  .playMusic_normalPlay_title_singer{
    line-height: 20px;
    text-align: center;
    font-size: 14px;
    color: #fff;
  }
  .playMusic_normalPlay_main{
    flex:1;
  }
  .playMusic_normalPlay_main_pic_wrap{
    overflow: hidden;
    border:10px solid rgba(255,255,255,0.1);
    border-radius:50%;
    margin:0 auto;
    width:290px;
    height:290px;
  }
  .playMusic_normalPlay_main_pic{
    width:100%;
    height:100%;
    transition: 0.5s;
    animation:songPic 20s linear infinite;
       /* $(".playMusic_normalPlay_main_pic").css('animation','songPic 20s linear infinite'); */
  }
  @keyframes songPic{
    0%{
      transform: rotate(0);
    }
    50%{
      transform:rotate(180deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
  .playMusic_normalPlay_main_song{
    height: 20px;
    width:80%;
    margin:40px auto 0;
    text-align:center;
    line-height: 20px;
    font-size: 14px;
    color: rgba(255,255,255,0.5);
  }
  .playMusic_normalPlay_main_dot{
    text-align: center;
  }
  .playMusic_normalPlay_wrap{
    position:absolute;
    bottom:0;
    width:100%;
  }
  .playMusic_normalPlay_wrap_dot{
    text-align:center;
  }
  .playMusic_normalPlay_wrap_dot .dot{
    display: inline-block;
    vertical-align: middle;
    margin: 0 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,0.5);
  }
  .playMusic_normalPlay_wrap_dot .doted{
    width: 20px;
    border-radius: 5px;
    background: rgba(255,255,255,0.8);
  }
  .playMusic_normalPlay_wrap_bar{
    display: flex;
    align-items: center;
    width:calc(100% - 25px);
    margin: 0px auto;
    padding: 10px 0;
  }
  .playMusic_normalPlay_wrap_bar .nowTime{
    color: #fff;
    font-size: 12px;
    line-height: 30px;
    width:40px;
    text-align: right;
  }
  .playMusic_normalPlay_wrap_bar .barWrap{
    flex:1;
    display:flex;
    position: relative;
    align-items: center;
    /* top: 13px; */
    height: 4px;
    margin:0 8px;
    background: rgba(0,0,0,0.3);
  }
  .playMusic_normalPlay_wrap_bar .totalTime{
    color: #fff;
    font-size: 12px;
    /* -ms-flex: 0 0 30px;
    flex: 0 0 30px; */
    line-height: 30px;
    /* width: 30px; */
     width:40px;
  }
  .playMusic_normalPlay_wrap_bar .bar{
    width:0;
    background-color:#ffcd32;
    height: 4px;
  }
  .playMusic_normalPlay_wrap_bar .circle{
    width: 12px;
    height: 12px;
    border: 3px solid #fff;
    border-radius: 50%;
    background: #ffcd32;
  } 
  .playMusic_normalPlay_wrap_cotrl{
    display:flex;
    align-items: center;
    padding:0 15px 50px;
  }
  .playMusic_normalPlay_wrap_cotrl .iconTrol{
    flex:1;
  }
  .playMusic_normalPlay_wrap_cotrl .iconTrol img{
    display:block;
    width:30px;
    height:30px;
    margin:0 auto;
  }
  .playMusic_normalPlay_wrap_cotrl .iconTrol  .playIcon{
    width:45px;
    height:45px;
  }
  /* 动画 */
  .transMini-enter-active, .transMini-leave-active {
    transition: opacity .6s;
  }
  .transMini-enter,.transMini-leave-to{
    opacity:0;
  }
  .transMini-leave,.transMini-enter-to{
    opacity:1;
  }
  .transFull-enter-active, .transFull-leave-active {
    transition: all .3s;
  }
  .transFull-enter,.transFull-leave-to{
    transform:translate(-100%, 100%);
    opacity: 0;
  }
  .transFull-leave,.transFull-enter-to{
    transform:translate(0, 0);
    opacity: 1;
  }
  .transFullTop-enter-active, .transFullTop-leave-active {
    transition: transform .2s cubic-bezier(0,1.6,0,1) .3s;/*过渡的属性，过渡的时间，过渡的行为(速度)，过渡延迟时间。*/
  }
  .transFullTop-enter,.transFullTop-leave-to{
    transform:translate(0, -100%);
  }
  .transFullWrap-enter-active, .transFullWrap-leave-active {
    transition: transform .2s cubic-bezier(0,1.6,0,1) .3s;/*过渡的属性，过渡的时间，过渡的行为(速度)，过渡延迟时间。*/
  }
  .transFullWrap-enter,.transFullWrap-leave-to{
    transform:translate(0, 100%);
  }
</style>
