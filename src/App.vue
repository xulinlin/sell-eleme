<template>
  <div class="wrapper">
    <v-header></v-header>
    <div class="tabs">
      <div class="tab-item">
        <router-link to="/">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/Comments">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/Seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header'

export default {
  name: 'App',
  components: {
    'v-header': header
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
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);

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
