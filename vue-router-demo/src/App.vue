<template>
  <div>
    <div class="footer_wrap">
      <router-link class="footer_1" to="/find">发现音乐</router-link>
      <router-link class="footer_1" to="/my/yama">我的音乐</router-link>
      <router-link class="footer_1" to="/part?name=yama">朋友</router-link>
      <span class="footer_1" @click="btn('/bian', 'Bian')">编程式导航</span>
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    btn(targetPath, targetName) {
      // 方法一 path跳转
      // this.$router.push({
      //   path: targetPath,
      // })
      // 方法二路由名
      this.$router.push({
        name: targetName,
        // params: {
        //   username: 'yama-params',
        // },
        query: {
          name: 'yama-query',
        },
      })
    },
  },
}
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap .footer_1 {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}
/* 激活时样式 */
.footer_wrap .router-link-active {
  color: white;
  background: black;
}
</style>