<template>
  <div class="goods-wrapper">
    <menu-list class="menu-list"></menu-list>
    <div class="right-list"></div>
  </div>
</template>

<script>
import menuList from './components/MenuList/MenuList'
export default {
  name: 'goods',
  components: {
    menuList
  }
}
</script>

<style lang="less" scoped>
.goods-wrapper {
  position: absolute;
  background-color: red;
  width: 100%;
  height: 450px;

  .menu-list {
    position: absolute;
    width: 60px;
    bottom: 0;
    top: 0;
    left: 0;
  }

  .right-list {
    position: absolute;
    background-color: aqua;
    bottom: 0;
    top: 0;
    left: 60px;
    right: 0;
  }
}
</style>
