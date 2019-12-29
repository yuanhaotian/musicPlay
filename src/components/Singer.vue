<template>
  <div class="singer">
    <div class="singer_wrap" v-for="(val,idx) in singerList" :key="idx">
        <p class="singer_wrap_title" data-idx="idx">{{val[0].singer_firstName.toUpperCase()}}</p>
        <ul class="singer_wrap_uls" v-for="(val2,idx2) in val" :key="idx2">
            <li class="singer_wrap_uls_lis" @click="gotoMsg(val2.singer_id)">
                <img class="singer_uls_lis_img" :src="val2.singer_pic" alt="">
                <span class="singer_uls_lis_name">{{val2.singer_name}}</span>
            </li>
        </ul>
    </div>
    <div class="singer_nav">
        <li 
            :class="['singer_nav_lis',nowIdx==idx ? 'singer_nav_lised' : '']" 
            v-for="(val,idx) in world"
            @click="changeTab(idx)"
            :key="idx"
        >{{val}}</li>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "singer",
  data() {
    return {
        singerList:[], //歌手数据
        world:[],
        nowIdx:0,//当前第几个字母
    };
  },
  created(){
    this.getSinger();
  },
  mounted() {
    this.getScroll();//滚动触发，右侧字母高亮
  },
  methods: {
       handleClick:function(){
            this.show=!this.show
            },
    getSinger(){
        var that = this;
        axios({
            method: 'get',
            url: "/singerList",
        })
        .then(function (res) {
            var result = that.getArrComon(res.data);
            //设置world值
            var worldArr = [];
            result.map((val,idx)=>{
                worldArr.push(val[0].singer_firstName.toLocaleUpperCase());
            })
            that.world = worldArr;
            that.singerList = result;
        })
        .catch(function(err){
            console.log("请求歌手数据失败",err);
        })
    },
    getArrComon(oriArr) { 
        //有顺序的，
        if(!oriArr.length){
            return;
        }
        oriArr.sort((a,b)=>{
            return a.singer_firstName.charCodeAt(0) - b.singer_firstName.charCodeAt(0);
        });
        var actionNew = [];
        var temp = "";
        var actionIdx = -1;
        oriArr.map((val, idx) => {
            if (val.singer_firstName != temp) {
                actionNew.push([]);
                actionIdx++;
                temp = val.singer_firstName;
            }
            actionNew[actionIdx].push(val);
        })
        return actionNew;
    },
    changeTab(idx){
        var titleDom = document.getElementsByClassName("singer_wrap_title");
        var htmlDom = document.documentElement || document.body;

        this.nowIdx = idx;
        if(titleDom[idx].innerHTML===this.world[idx]){
            htmlDom.scrollTop=titleDom[idx].offsetTop;
        }
    },
    getScroll(){
        window.onscroll = function () {
            let htmlDom = document.documentElement || document.body;
            let titleDom = document.getElementsByClassName("singer_wrap_title");
            let commonH = document.getElementsByClassName("headers")[0].offsetHeight+document.getElementsByClassName("mains_nav")[0].offsetHeight;
            let hAll = htmlDom.scrollTop;//总高度
            
            let arr = [];
            let idx=0;
            for(var i=0,len=titleDom.length;i<len;i++){
                var selfH = titleDom[i].offsetTop;
                if(selfH-hAll<=0){
                    arr.push(titleDom[i]);
                }
            }
            var resultDom = arr.reverse()[0];
            if(resultDom){
                this.nowIdx = this.world.indexOf(resultDom.innerHTML);
            }
        }.bind(this);
    },
    gotoMsg(singer_id){
        this.$router.push(
            {
                path:'/SingerMsg',
                query:{singer_id:singer_id}
            }
        );
    }
  },
  destroyed(){
      window.onscroll = null;
  },
  computed: {},
};
</script>
<style scoped>
    .singer_wrap_title{
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: 12px;
        color: rgba(255,255,255,0.5);
        background: #333;
    }
    .singer_wrap_uls_lis{
        display: flex;
        align-items: center;
        padding: 20px 30px 20px 30px;
    }
    .singer_uls_lis_img{
        width: 50px;
        height: 50px;
        background-color:grey;
        border-radius: 50%;
    }
    .singer_uls_lis_name{
        margin-left: 20px;
        color: rgba(255,255,255,0.5);
        font-size: 14px;
    }
    .singer_nav{
        position: fixed;
        z-index: 30;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        padding: 20px 0;
        border-radius: 10px;
        text-align: center;
        background: rgba(0,0,0,0.3);
    }
    .singer_nav_lis{
        padding: 3px;
        line-height: 1;
        color: rgba(255,255,255,0.5);
        font-size: 12px;
    }
    .singer_nav_lised{
        color:#ffcd32;
    }
</style>
