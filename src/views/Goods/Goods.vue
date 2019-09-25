<template>
  <div class="goods-wrapper">
    <menu-list
      class="menu-list"
      :selectedIndex="curIndex"
      :dataList="goodsData.goods"
      @itemClick="menuListClick"
    ></menu-list>
    <food-list
      class="right-list"
      :groupIndex="curIndex"
      :dataList="goodList"
      @groupChanged="foodGroupChanged"
    ></food-list>
  </div>
</template>

<script>
import menuList from './components/MenuList/MenuList'
import foodList from './components/FoodList/FoodList'
import axios from 'axios'
import $ from 'jquery'
import Vue from 'vue'
export default {
  name: 'goods',
  components: {
    menuList,
    foodList
  },
  data () {
    return {
      goodsData: [],
      curIndex: 0,
      goodList: []
    }
  },
  created () {
    let self = this
    axios.get('/static/data.json').then(res => {
      self.goodsData = res.data
      self.resetData(res.data.goods)
    })
  },
  methods: {
    resetData (goods) {
      let ary = goods
      $.each(ary, function (index, foods) {
        $.each(foods.foods, function (index, food) {
          Vue.set(food, 'count', 0)
        })
      })
      this.goodList = ary
      console.log('hhhh', this.goodList)
    },
    menuListClick (params) {
      console.log('外部接收到点击------', params)
      this.curIndex = params
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
  background-color: antiquewhite;
  .menu-list {
    width: 100px;
    height: 100%;
    max-height: 450px;
    display: table-cell;
  }

  .right-list {
    display: table-cell;
  }
}
</style>
