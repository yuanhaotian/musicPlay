<template>
  <div class="ListView">
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
</template>

<script>
import axios from 'axios'

export default {
  name: "ListView",
  data() {
    return {
        pageNow:1,//当前第几页
        recomList:[],//请求到到数据
        isFreash:false,//是否下拉加载数据请求中
        isMaxPage:false,//是否是最后一页数据
    };
  },
  props:['childUrl'],
  created(){
    // 请求数据
    this.getRecomList(1);
  },
  mounted() {
      console.log(222,this.childUrl)
  },
  methods:{
    getRecomList:function(page){
        var that = this;
        if(that.isFreash){
            return;
        }
        that.isFreash = true; 
        axios({
            method: 'get',
            url: that.childUrl,
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
  }
};
</script>
<style scoped>
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
