<template>
  <div class="menu-list-wrapper">
    <div class="out-box">
      <ul class="ul-box">
        <li v-for="(item, index) in dataList" :key="index" @click="itemClick(index)">
          <div class="li-box" :class="curIndex === index ? 'li-box-selected' : ''">
            <div class="li-text-box" :class="curIndex === index ? 'li-box-text-selected' : ''">
              <img v-show="item.type>0" class="li-icon" :class="iconMap[item.type]" />
              {{item.name}}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'MenuList',
  props: {
    dataList: {
      type: Array,
      default () {
        return [
          '酸甜爽口',
          '酸甜爽口',
          '酸甜爽口',
          '酸甜爽口',
          '酸甜爽口',
          '酸甜爽口',
          '酸甜爽口',
          '酸甜爽口',
          '酸甜爽口',
          '酸甜爽口',
          '酸甜爽口',
          '酸甜爽口'
        ]
      }
    },
    selectedIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      curIndex: 0,
      iconMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
      listHeight: 0
    }
  },
  watch: {
    selectedIndex (newV, oldV) {
      this.curIndex = newV
    },
    curIndex (newV, oldV) {
      this.changeScrollTop()
    }
  },
  created () {
    this.curIndex = this.selectedIndex
  },
  methods: {
    itemClick (index) {
      this.curIndex = index
      this.$emit('itemClick', index)
    },

    changeScrollTop () {
      let moveY = (this.curIndex - 3) * 60
      let timer = null
      clearTimeout(timer)
      timer = setTimeout(function () {
        $('.ul-box').animate(
          {
            scrollTop: moveY
          },
          300
        )
      }, 200)
    }
  }
}
</script>

<style lang="less" scoped>
.menu-list-wrapper {
  width: 100%;
  .out-box {
    overflow: hidden;
    .ul-box {
      width: 115%;
      height: 450px;
      list-style: none;
      background-color: #f3f5f7;
      overflow-y: scroll;
      overflow-x: hidden;
      .li-box-selected {
        background-color: #ffffff;
      }
      .li-box {
        width: 100%;
        height: 60px;
        padding: 0 8px;
        .li-text-box {
          line-height: 14px;
          font-size: 12px;
          height: 59px;
          width: 75px;
          display: table-cell;
          vertical-align: middle;
          text-align: center;
          color: #2e2d2d;
          font-weight: 200px;
          border-bottom: 1px solid rgba(7, 17, 27, 0.1);
          .li-icon {
            width: 14px;
            height: 14px;
            background-size: 100% 100%;
          }
          .decrease {
            background-image: url("./images/decrease_4@2x.png");
          }
          .discount {
            background-image: url("./images/discount_3@2x.png");
          }
          .special {
            background-image: url("./images/special_4@2x.png");
          }
          .invoice {
            background-image: url("./images/invoice_4@2x.png");
          }
          .guarantee {
            background-image: url("./images/guarantee_4@2x.png");
          }
        }
        .li-box-text-selected {
          position: relative;
          top: -1px;
          border-bottom-width: 0;
          background-color: #ffffff;
        }
      }
    }
  }
}
</style>
