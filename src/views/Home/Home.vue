<template>
  <div class="home-wrapper">
    <v-header></v-header>
    <div class="tabs">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/comments">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header'

export default {
  name: 'Home',
  components: {
    'v-header': header
  }
}
</script>

<style lang="less" scoped>
.home-wrapper {
  background-color: #ffffff;
  width: 100%;
  height: 620px;

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
}
</style>
