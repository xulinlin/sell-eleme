<template>
  <div class="goods-wrapper">
    <menu-list
      class="menu-list"
      :selectedIndex="curIndex"
      :dataList="goodsData.goods"
      @itemClick="menuListClick"
    ></menu-list>
    <food-list class="right-list" :dataList="goodsData.goods" @groupChanged="foodGroupChanged"></food-list>
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
      goodsData: [],
      curIndex: 0
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
    },
    foodGroupChanged (params) {
      this.curIndex = params
    }
  }
}
</script>

<style lang="less" scoped>
.goods-wrapper {
  position: absolute;
  top: 176px;
  left: 0;
  right: 0;
  width: 100%;
  overflow: hidden;
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
