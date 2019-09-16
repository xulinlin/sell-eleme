<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './views/Home/Home'
export default {
  name: 'App',
  components: {
    'home': Home
  }
}
</script>

<style lang="less" scoped>
.tabs {
  position: relative;
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;

  .tab-item {
    flex: 1;
    text-align: center;

    a {
      display: block;
      font-size: 14px;
      color: rgb(77, 85, 93);
      text-decoration: none;
      &:active {
        font-size: 14px;
        color: rgb(240, 20, 20);
      }
    }
  }
}
</style>
