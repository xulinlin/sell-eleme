<template>
  <div class="food-list-wrapper">
    <div class="ul-out-wrapper">
      <ul class="ul-out-box">
        <li v-for="(item, index) in dataList" :key="index">
          <h1 class="title-box">{{item.name}}</h1>
          <ul class="ul-inner-box">
            <li v-for="(food, index) in item.foods" :key="index">
              <div class="food-box">
                <div class="left-box">
                  <img class="food-img" :src="food.icon" />
                  <div class="content-box">
                    <div class="food-name-text">{{food.name}}</div>
                    <div class="food-decs-text" v-show="food.description">{{food.description}}</div>
                    <div class="sell-info-box">
                      <span class="sell-info-count-text">月售{{food.sellCount}}份</span>
                      <span class="sell-info-count-text">好评率{{food.rating}}%</span>
                    </div>
                    <div class="price-box">
                      <span class="price-text">￥{{food.price}}</span>
                      <span v-show="food.oldPrice" class="old-price-text">￥{{food.oldPrice}}</span>
                    </div>
                  </div>
                </div>
                <div class="right-box">
                  <div
                    class="reduce-box"
                    :class="foodCount>0 ? 'reduce-box-fade-in' : ''"
                    v-show="foodCount>0"
                    @click.stop.prevent="reduceFood"
                  >
                    <i class="i-icon iconfont2 remove_circle_outline"></i>
                  </div>
                  <div
                    class="food-count"
                    :class="foodCount>0 ? 'food-count-fade-in' : ''"
                    v-show="foodCount>0"
                  >{{foodCount}}</div>
                  <div @click.stop.prevent="addFood">
                    <i class="i-icon iconfont2 add_circle"></i>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'FoodList',
  props: {
    groupIndex: {
      type: Number,
      default: 0
    },
    dataList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      defaultTop: 0,
      curIndex: 0,
      topAry: [],
      isScroll: true,
      curTop: 0,
      foodCount: 0
    }
  },
  watch: {
    groupIndex (newV, oldV) {
      this.scrollToIndex(newV)
    },
    curIndex (newV, oldV) {
      this.$emit('groupChanged', newV)
    }
  },

  created () {
    this.init()
  },

  methods: {
    init () {
      let self = this
      $(function ($) {
        self.getFirstTop()
        self.addListenScorll()
      })
    },
    getFirstTop () {
      let self = this
      self.curTop = $('.ul-out-box').scrollTop()
      $('h1.title-box:first').each(function () {
        self.defaultTop = $(this).offset().top
      })
      $('h1.title-box').each(function () {
        self.topAry.push($(this).position().top)
      })
      // console.log('当前偏移量', self.curTop, '各个偏移量---', self.topAry)
    },

    addListenScorll () {
      let self = this
      let timer = null
      $('.ul-out-box').scroll(function () {
        if (!self.isScroll) {
          return
        }
        clearTimeout(timer)
        timer = setTimeout(function () {
          if (self.isScrollEnd()) {
            if (self.curTop >= self.topAry[self.topAry.length - 1]) {
              self.curIndex = self.topAry.length - 1
              return
            }
            $.each(self.topAry, function (index, item) {
              // console.log('当前top------', self.curTop)
              if (item - 20 > self.curTop) {
                // console.log('记录值---', item, '当前index--', index)
                self.curIndex = index - 1
                return false
              }
            })
          }
        }, 300)
        self.curTop = $(this).scrollTop()
      })
    },

    scrollToIndex (index) {
      let self = this
      if (self.curIndex === index) {
        return
      }
      self.curIndex = index
      self.isScroll = false
      let moveY = self.topAry[index]
      $('.ul-out-box').animate(
        {
          scrollTop: moveY
        },
        300,
        function () {
          console.log('------', self.isScroll)
          self.isScroll = true
        }
      )
    },

    isScrollEnd () {
      let self = this
      let h = $('.ul-out-box').scrollTop()
      return h === self.curTop
    },

    addFood () {
      this.foodCount++
    },

    reduceFood () {
      this.foodCount--
    }
  },
  destroyed () {}
}
</script>

<style lang="less" scoped>
.food-list-wrapper {
  .ul-out-wrapper {
    .ul-out-box {
      position: absolute;
      left: 100px;
      right: 0;
      top: 0;
      bottom: 0;
      overflow: hidden;
      overflow-y: scroll;
      overflow-x: hidden;
      .title-box {
        position: relative;
        top: -1px;
        height: 26px;
        line-height: 26px;
        font-size: 12px;
        background-color: #f3f5f7;
        color: #93999f;
        border-left: 2px solid #d9dde1;
        padding-left: 18px;
      }
      .ul-inner-box {
        position: relative;
        background-color: #ffffff;
        padding: 0 20px;
        list-style: none;
        .food-box {
          width: 100%;
          height: 96px;
          background-color: #ffffff;
          border-bottom: 1px solid #d9dde1;
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          .left-box {
            display: flex;
            .food-img {
              display: inline-block;
              width: 60px;
              height: 60px;
              margin-right: 8px;
            }
            .content-box {
              display: inline-block;
              height: 80px;
              .food-name-text {
                color: #071129;
                font-size: 14px;
                font-size: 700;
              }
              .food-decs-text {
                color: #93999f;
                font-size: 10px;
              }
              .sell-info-box {
                .sell-info-count-text {
                  font-size: 10px;
                  color: #93999f;
                }
              }
              .price-box {
                .price-text {
                  font-size: 14px;
                  color: #f01414;
                }
                .old-price-text {
                  font-size: 14px;
                  text-decoration: line-through;
                  color: rgb(147, 153, 159);
                }
              }
            }
          }
          .right-box {
            display: flex;
            height: 100%;
            align-items: center;
            justify-content: space-between;
            // width: 70px;
            .reduce-box {
              position: relative;
              left: 40px;
              visibility: hidden;
              opacity: 0;
              display: inline-block;
            }

            .reduce-box-fade-in {
              position: relative;
              visibility: visible;
              .reduce-box-fadeIn(0.5s);
            }

            .food-count {
              position: relative;
              opacity: 0;
              font-size: 14px;
              margin: 0 4px;
              left: 20px;
            }

            .food-count-fade-in {
              .food-count-fadeIn(0.5s, 20px, 0px);
            }

            .i-icon {
              font-size: 24px;
              color: rgb(0, 162, 255);
            }
          }
        }
      }
    }
  }
}

.food-count-fadeIn(@time:1s,@from:0px,@to:0px) {
  @keyframes food-count-fadeIn {
    0% {
      left: @from;
      opacity: 0;
    }
    100% {
      left: @to;
      opacity: 1;
    }
  }
  animation-name: food-count-fadeIn;
  animation-duration: @time;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

.reduce-box-fadeIn(@time:1s) {
  @keyframes leftChange {
    0% {
      left: 40px;
      opacity: 0;
      transform: rotate(0);
    }
    100% {
      left: 0;
      opacity: 1;
      transform: rotate(-360deg);
    }
  }
  animation-name: leftChange;
  animation-duration: @time;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
</style>
