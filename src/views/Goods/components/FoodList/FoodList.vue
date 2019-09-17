<template>
  <div class="food-list-wrapper">
    <div class="ul-out-wrapper">
      <ul class="ul-out-box">
        <li v-for="(item, index) in dataList" :key="index">
          <div class="title-box">{{item.name}}</div>
          <ul class="ul-inner-box">
            <li v-for="(food, index) in item.foods" :key="index">
              <div class="food-box"></div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FoodList',
  props: {
    dataList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
.food-list-wrapper {
  background-color: #fcfccf;
  height: 450px;
  overflow: hidden;
  .ul-out-wrapper {
    position: relative;
    width: 100%;
    // height: 450px;

    overflow: hidden;
    .ul-out-box {
      width: 110%;
      height: 100%;
      background-color: blueviolet;
      overflow: hidden;
      overflow-y: scroll;
      overflow-x: hidden;
      .title-box {
        height: 26px;
        line-height: 26px;
        font-size: 12px;
        background-color: #f3f5f7;
        color: #93999f;
        border-left: 2px solid #d9dde1;
        padding-left: 18px;
      }
      .ul-inner-box {
        background-color: #d9dde1;
        .food-box {
          height: 96px;
          background-color: #fcfccf;
        }
      }
    }
  }
}
</style>
