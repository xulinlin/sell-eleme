<template>
  <div class="comment-list-wrapper">
    <div class="top-box">
      <div class="classify-box">
        <span
          class="classify-text"
          :class="switchIndex === 0 ? 'classify-text-selected' : 'classify-text-default'"
          @click="switchBtnClick(0)"
        >全部 24</span>
        <span
          class="classify-text"
          :class="switchIndex === 1 ? 'classify-text-selected' : 'classify-text-default'"
          @click="switchBtnClick(1)"
        >推荐 18</span>
        <span
          class="classify-text"
          :class="switchIndex === 2 ? 'classify-bad-text-selected' : 'classify-bad-text-default'"
          @click="switchBtnClick(2)"
        >吐槽 10</span>
      </div>
      <div class="switch-box">
        <div class="switch-text">只看有内容的评价</div>
      </div>
    </div>

    <div class="list-box">
      <ul class="ul-box">
        <li v-for="(item, index) in commentList" :key="index">
          <div class="li-box">
            <div class="user-img-box">
              <img class="user-img" :src="item.avatar" />
            </div>
            <div class="comment-box">
              <div class="user-info-box">
                <div class="user-name-text">{{item.username}}</div>
                <div class="left-time-box">2016-03-05 09:30</div>
              </div>
              <div class="star-num-box">
                <stars class="star-box" :num="item.score"></stars>
                <div class="time-text">30分钟送达</div>
              </div>
              <div class="comment-text">{{item.text}}</div>
              <div class="recommend-box">
                <span
                  class="dish-text"
                  v-for="(dish, index) in item.recommend"
                  :key="index"
                >{{dish}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Stars from '../Stars/Stars'
export default {
  props: {
    dataList: {
      type: Array,
      default () {
        return ['bbb']
      }
    }
  },
  components: {
    Stars
  },
  data () {
    return {
      switchIndex: 0,
      commentList: ['hhh']
    }
  },
  watch: {
    dataList (newV, oldV) {
      this.commentList = this.dataList
    }
  },
  mounted () {
    this.commentList = this.dataList
  },
  methods: {
    switchBtnClick (index) {
      this.switchIndex = index
      if (index === 0) {
        this.commentList = this.dataList
      } else {
        this.commentList = this.filterByRateType(this.dataList, index)
      }
    },
    filterByRateType (ary, type) {
      return ary.filter(item => item.rateType === type)
    }
  }
}
</script>

<style lang="less" scoped>
.comment-list-wrapper {
  width: 100%;
  height: 100%;

  .top-box {
    padding: 0 18px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    .classify-box {
      height: 60px;
      display: flex;
      align-items: center;
      .classify-text {
        display: inline-block;
        background-color: #00a9dc;
        color: #ffffff;
        font-size: 12px;
        width: 70px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        margin-right: 8px;
      }
      .classify-text-default {
        color: #4d555f;
        background-color: rgba(0, 160, 220, 0.2);
      }
      .classify-text-selected {
        color: #ffffff;
        background-color: #00a9dc;
      }
      .classify-bad-text-default {
        color: #4d555f;
        background-color: rgba(77, 85, 93, 0.2);
      }
      .classify-bad-text-selected {
        color: #ffffff;
        background-color: #4d555d;
      }
    }
    .switch-box {
      height: 50px;
      display: flex;
      align-items: center;
      border-top: 1px solid rgba(7, 17, 27, 0.1);
      .switch-text {
        font-size: 12px;
        color: #93999f;
      }
    }
  }
  .list-box {
    overflow: hidden;
    list-style: none;
    padding: 0 28px;
    .ul-box {
      list-style: none;
      .li-box {
        width: 100%;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        padding: 20px 0;
        display: table;
        flex-direction: row;
        .user-img-box {
          display: table-cell;
          width: 30px;
          .user-img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
        }

        .comment-box {
          padding-left: 10px;
          display: table-cell;
          width: auto;
          .user-info-box {
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            .user-name-text {
              color: #07111b;
              font-size: 12px;
              line-height: 14px;
            }
          }

          .star-num-box {
            display: inline-flex;
            align-items: center;
            flex-direction: row;
            .star-box {
              width: 60px;
              height: 10px;
            }
            .time-text {
              margin-left: 10px;
              color: #93999f;
              font-size: 10px;
            }
          }

          .comment-text {
            color: #07111b;
            font-size: 12px;
            line-height: 18px;
          }

          .recommend-box {
            margin-top: 8px;
            .dish-text {
              display: inline-block;
              color: #93999f;
              border: 1px solid #93999f;
              font-size: 10px;
              padding: 3px;
              margin-right: 10px;
              margin-bottom: 3px;
            }
          }
        }

        .left-time-box {
          width: 110px;
          display: table-cell;
          color: #93999f;
          font-size: 12px;
          text-align: right;
        }
      }
    }
  }
}
</style>
