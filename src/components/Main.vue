<template>
  <div class="mains">
    <!-- 顶部 -->
    <Header />
    <ul class="mains_nav">
      <li :class="['mains_nav_lis',tabIdx==0?'mains_nav_actived':'']" @click="changeTab(0)">
        <span>推荐</span>
      </li>
      <li :class="['mains_nav_lis',tabIdx==1?'mains_nav_actived':'']" @click="changeTab(1)">
        <span>歌手</span>
      </li>
      <li :class="['mains_nav_lis',tabIdx==2?'mains_nav_actived':'']" @click="changeTab(2)">
        <span>排行</span>
      </li>
      <li :class="['mains_nav_lis',tabIdx==3?'mains_nav_actived':'']" @click="changeTab(3)">
        <span>搜索</span>
      </li>
    </ul>
    <!-- 推荐内容组件 -->
    <keep-alive>
      <Recommd v-if="this.tabIdx===0" />
      <Singer v-if="this.tabIdx===1" />
    </keep-alive>

  </div>
</template>

<script>
import Header from "@/common/header";
import Recommd from '@/components/Recommd'
import Singer from '@/components/Singer'
import jsonp from "jsonp";
import axios from "axios";

export default {
  name: "mains",
  data() {
    return {
      tabIdx: 0 //推荐、歌手、排行、搜索，当前选中
    };
  },
  mounted() {
    
  },
  methods: {
    changeTab: function(idx) {
      this.tabIdx = idx;
    }
  },
  computed: {},
  components: {
    Header: Header,
    Recommd:Recommd,
    Singer:Singer
  }
};
</script>
<style scoped>
.mains_nav {
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: 14px;
  background-color: #222;
}
.mains_nav_lis {
  position: relative;
  flex: 1;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
}
.mains_nav_lis span {
  display: inline-block;
  height: 88%;
}
.mains_nav_actived span {
  border-bottom: 2px solid #ffcd32;
}
.mains_nav_actived {
  color: #ffcd32;
}
</style>
