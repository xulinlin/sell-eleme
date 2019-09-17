<template>
  <div class="goods-wrapper">
    <menu-list
      class="menu-list"
      :defaultIndex="0"
      :dataList="goodsData.goods"
      @itemClick="menuListClick"
    ></menu-list>
    <div class="right-list"></div>
  </div>
</template>

<script>
import menuList from './components/MenuList/MenuList'
import axios from 'axios'
export default {
  name: 'goods',
  components: {
    menuList
  },
  data () {
    return {
      goodsData: []
    }
  },
  created () {
    let self = this
    axios.get('/static/data.json').then((res) => {
      self.goodsData = res.data
    })
  },
  methods: {
    menuListClick (params) {
      console.log('外部接收到点击------', params)
    }
  }
}
</script>

<style lang="less" scoped>
.goods-wrapper {
  position: absolute;
  background-color: red;
  width: 100%;
  height: 450px;
  display: table;
  .menu-list {
    width: 80px;
    height: 100%;
    display: table-cell;
  }

  .right-list {
    display: table-cell;
    background-color: aqua;
  }
}
</style>
