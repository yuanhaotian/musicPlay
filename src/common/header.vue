<template>
  <div class="headers">
    <span>仿音乐软件</span>
    <div class="txt">右边</div>
    <!-- <img src="" alt=""> -->
  </div>
</template>

<script>
// import yhFn from '../../static/yhFn.js'

export default {
  name: "headers",
  data() {
    return {};
  },
  mounted() {
    // this.addCssYh('.headers',{'color':'pink'}); 
  },
  methods:{
    // addCssYh:yhFn.addCssYh,
  }
};
</script>
<style scoped>
.headers {
  height: 44px;
  padding: 0 10px;
  font-size: 14px;
  background-color: #222;
  line-height: 44px;
  text-align: center;
  color: #fff;
}
.txt {
  float: right;
  font-size: 16px;
  color: #fff;
}
</style>
