<template>
  <div class="seller-wrapper">
    <div class="top-box">
      <div class="seller-box">
        <div class="left-box">
          <div class="seller-name-text">粥品香坊（回龙观）</div>
          <div class="seller-detail-box">
            <stars class="star-box" :num="3"></stars>
            <div class="rate-num-text">(24)</div>
            <div class="rate-num-text">月售90单</div>
          </div>
        </div>

        <div class="right-box">
          <div>
            <i class="icon-heart iconfont2 favorite"></i>
          </div>
          <div class="favorate-text">收藏</div>
        </div>
      </div>
      <div class="seller-info-box">
        <div class="info-box">
          <div class="info-num-box">配送价</div>
          <div class="info-num-box">
            <span class="num-text">33</span>
            <span>元</span>
          </div>
        </div>
        <div class="info-box info-border-box">
          <div class="info-num-box">配送价</div>
          <div class="info-num-box">
            <span class="num-text">33</span>
            <span>元</span>
          </div>
        </div>
        <div class="info-box">
          <div class="info-num-box">配送价</div>
          <div class="info-num-box">
            <span class="num-text">33</span>
            <span>元</span>
          </div>
        </div>
      </div>
    </div>
    <div class="global-divider-box"></div>

    <div class="activity-box">
      <div class="activity-top-box">
        <div class="activity-title-text">公告与活动</div>
        <div class="activity-content-text">{{seller.bulletin}}</div>
      </div>
      <div>
        <ul class="supports-box">
          <li v-for="(item, index) in seller.supports" :key="index">
            <div class="support-box">
              <img class="support-img" :src="getIconMap(item.type)" />
              <span class="support-text">{{item.description}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="global-divider-box"></div>

    <div class="seller-site-box">
      <h class="seller-site-text">商家实景</h>
      <div class="seller-imgs-box">
        <img class="seller-img" v-for="(pic,index) in seller.pics" :src="pic" :key="index" />
      </div>
    </div>
    <div class="global-divider-box"></div>

    <div class="seller-info-box">
      <h1 class="seller-info-title-text">商家信息</h1>
      <div class="infos-box">
        <div class="info-box" v-for="(info,index) in seller.infos" :key="index">{{info}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Stars from '../Comments/components/Stars/Stars'
import axios from 'axios'

export default {
  name: 'seller',
  components: {
    Stars
  },
  data () {
    return {
      seller: {}
    }
  },
  created () {
    axios.get('static/data.json').then((res) => {
      this.seller = res.data.seller
    })
  },
  methods: {
    getIconMap (type) {
      switch (type) {
        case 0:
          return require('../Goods/components/MenuList/images/decrease_4@2x.png')

        case 1:
          return require('../Goods/components/MenuList/images/discount_3@2x.png')

        case 2:
          return require('../Goods/components/MenuList/images/guarantee_4@2x.png')

        case 3:
          return require('../Goods/components/MenuList/images/invoice_4@2x.png')

        case 4:
          return require('../Goods/components/MenuList/images/special_4@2x.png')

        default:
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../../style/global.less");
.seller-wrapper {
  position: absolute;
  top: 180px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  overflow-y: scroll;

  .top-box {
    padding: 0 24px;
    .seller-box {
      padding: 18px 0;
      border-bottom: @global-border-devider;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .left-box {
        .seller-name-text {
          color: #07111b;
          font-size: 14px;
        }
        .seller-detail-box {
          margin-top: 6px;
          display: flex;
          flex-direction: row;
          .star-box {
            width: 80px;
            height: 14px;
          }
          .rate-num-text {
            margin: 0 4px;
            font-size: 10px;
            color: #4d555d;
            line-height: 16px;
          }
        }
      }
      .right-box {
        .icon-heart {
          color: #cccccc;
          font-size: 26px;
        }
        .favorate-text {
          font-size: 10px;
          color: #4d555d;
        }
      }
    }
    .seller-info-box {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      padding: 10px 0;
      .info-border-box {
        border-left: @global-border-devider;
        border-right: @global-border-devider;
      }
      .info-box {
        flex: 1;
        font-size: 10px;
        color: #93999f;
        justify-content: center;
        .info-num-box {
          display: flex;
          align-items: baseline;
          justify-content: center;
          .num-text {
            font-size: 22px;
            color: #4d555d;
          }
        }
      }
    }
  }

  .activity-box {
    padding: 0 24px;
    .activity-top-box {
      padding: 10px 0;
      .activity-title-text {
        font-size: 14px;
        color: #07111b;
        line-height: 18px;
      }
      .activity-content-text {
        margin-left: 8px;
        font-size: 12px;
        color: #f01414;
        line-height: 20px;
        font-weight: 200;
      }
    }
    .supports-box {
      list-style: none;
      .support-box {
        padding: 10px 0;
        border-top: @global-border-devider;
        display: flex;
        align-items: center;
        flex-direction: row;
        .support-img {
          width: 16px;
          height: auto;
          margin: 0 8px;
        }
        .support-text {
          font-size: 12px;
          font-weight: 200;
          color: #07111b;
        }
      }
    }
  }

  .seller-site-box {
    padding: 18px 24px;

    .seller-site-text {
      font-size: 14px;
    }
    .seller-imgs-box {
      margin-top: 8px;
      .seller-img {
        margin-right: 10px;
        width: 120px;
        height: 90px;
      }
    }
  }

  .seller-info-box {
    padding: 18px 24px;
    .infos-box {
      margin-top: 10px;
      .info-box {
        border-top: @global-border-devider;
        padding: 10px 8px;
        color: #07111b;
        font-weight: 200;
        font-size: 12px;
      }
    }
  }
}
</style>
