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
                  <i class="i-icon iconfont2 add_circle"></i>
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
import $ from "jquery";

export default {
  name: "FoodList",
  props: {
    groupIndex: {
      type: Number,
      default: 0
    },
    dataList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      defaultTop: 0,
      curIndex: 0,
      topAry: [],
      isScroll: true,
      curTop: 0
    };
  },
  watch: {
    groupIndex(newV, oldV) {
      this.scrollToIndex(newV);
    },
    curIndex(newV, oldV) {
      this.$emit("groupChanged", newV);
    }
  },

  created() {
    this.init();
  },

  methods: {
    init() {
      let self = this;
      $(function($) {
        self.getFirstTop();
        self.addListenScorll();
      });
    },
    getFirstTop() {
      let self = this;
      self.curTop = $(".ul-out-box").scrollTop();
      $("h1.title-box:first").each(function() {
        self.defaultTop = $(this).offset().top;
      });
      $("h1.title-box").each(function() {
        self.topAry.push($(this).position().top);
      });
      // console.log('当前偏移量', self.curTop, '各个偏移量---', self.topAry)
    },

    addListenScorll() {
      let self = this;
      let timer = null;
      $(".ul-out-box").scroll(function() {
        if (!self.isScroll) {
          return;
        }
        clearTimeout(timer);
        timer = setTimeout(function() {
          if (self.isScrollEnd()) {
            if (self.curTop >= self.topAry[self.topAry.length - 1]) {
              self.curIndex = self.topAry.length - 1;
              return;
            }
            $.each(self.topAry, function(index, item) {
              // console.log('当前top------', self.curTop)
              if (item - 20 > self.curTop) {
                // console.log('记录值---', item, '当前index--', index)
                self.curIndex = index - 1;
                return false;
              }
            });
          }
        }, 300);
        self.curTop = $(this).scrollTop();
      });
    },

    scrollToIndex(index) {
      let self = this;
      if (self.curIndex === index) {
        return;
      }
      self.curIndex = index;
      self.isScroll = false;
      let moveY = self.topAry[index];
      $(".ul-out-box").animate(
        {
          scrollTop: moveY
        },
        300,
        function() {
          console.log("------", self.isScroll);
          self.isScroll = true;
        }
      );
    },

    isScrollEnd() {
      let self = this;
      let h = $(".ul-out-box").scrollTop();
      return h === self.curTop;
    }
  },
  destroyed() {}
};
</script>

<style lang="less" scoped>
.food-list-wrapper {
  .ul-out-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 450px;
    .ul-out-box {
      width: 105%;
      height: 100%;
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
        width: 92%;
        background-color: #ffffff;
        padding: 0 20px;
        list-style: none;
        .food-box {
          width: 100%;
          height: 96px;
          background-color: #ffffff;
          border-bottom: 1px solid #d9dde1;
          display: table;
          padding: 10px 0;
          .left-box {
            display: table-cell;
            vertical-align: top;
            .food-img {
              display: inline-block;
              width: 60px;
              height: 60px;
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
            display: table-cell;
            vertical-align: bottom;
            text-align: left;
            width: 20px;
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
</style>
