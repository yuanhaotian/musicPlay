<template>
  <div id="app">
    <router-view/>
    <!--播放器 -->
    <playMusic />
  </div>
</template>

<script>
import playMusic from "@/common/playMusic"

export default {
  name: 'App',
  components:{
    playMusic:playMusic
  }
}
</script>

<style>
#app {
 height:100%; 
}
</style>
