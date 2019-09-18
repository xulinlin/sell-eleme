<template>
  <div class="rating-header-wrapper">
    <div class="left-box">
      <div class="rating-num-text">{{dataInfo.score}}</div>
      <div class="rating-desc1-text">综合商家评分</div>
      <div class="rating-desc1-text">高于周边商家{{dataInfo.rankRate}}%</div>
    </div>
    <div class="right-box">
      <div class="service-box">
        <span class="service-desc-text">商品评分</span>
        <stars class="star-box" :num="dataInfo.foodScore"></stars>
        <span class="service-desc-text service-num-text">{{dataInfo.foodScore}}分</span>
      </div>
      <div class="service-box">
        <span class="service-desc-text">服务态度</span>
        <stars class="star-box" :num="dataInfo.serviceScore"></stars>
        <span class="service-desc-text service-num-text">{{dataInfo.serviceScore}}分</span>
      </div>
      <div class="service-box">
        <span class="service-desc-text">送达时间</span>
        <span class="service-desc-text time-text">{{dataInfo.deliveryTime}}分钟</span>
      </div>
    </div>
  </div>
</template>

<script>
import Stars from '../Stars/Stars'
export default {
  name: 'RatingHeader',
  components: {
    Stars
  },
  props: {
    dataInfo: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="less" scoped>
.rating-header-wrapper {
  background-color: #ffffff;
  width: 100%;
  height: 90px;
  padding: 24px 0;

  .left-box {
    width: 200px;
    height: 100%;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-right: 1px solid rgba(7, 17, 27, 0.1);
    .rating-num-text {
      color: #f90;
      font-size: 24px;
    }
    .rating-desc1-text {
      color: #07111b;
      font-size: 12px;
    }
  }

  .right-box {
    position: relative;
    display: inline-flex;
    height: 100%;
    justify-content: space-between;
    flex-direction: column;
    left: 20px;
    .service-box {
      .star-box {
        width: 80px;
        height: 14px;
      }
      .service-desc-text {
        display: inline-block;
        font-size: 12px;
        color: #07111b;
        line-height: 16px;
      }
      .service-num-text {
        color: #f90;
      }
      .time-text {
        color: #93999f;
      }
    }
  }
}
</style>
