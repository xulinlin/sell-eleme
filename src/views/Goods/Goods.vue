<template>
  <div class="goods-wrapper">
    <menu-list
      class="menu-list"
      :defaultIndex="0"
      :dataList="goodsData.goods"
      @itemClick="menuListClick"
    ></menu-list>
    <food-list class="right-list" :dataList="goodsData.goods"></food-list>
  </div>
</template>

<script>
import menuList from './components/MenuList/MenuList'
import foodList from './components/FoodList/FoodList'
import axios from 'axios'

export default {
  name: 'goods',
  components: {
    menuList,
    foodList
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
  width: 100%;
  height: 450px;
  display: table;
  .menu-list {
    width: 100px;
    height: 100%;
    display: table-cell;
  }

  .right-list {
    display: table-cell;
  }
}
</style>
