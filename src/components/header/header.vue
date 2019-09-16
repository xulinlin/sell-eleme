<template>
  <div class="header-wrapper">
    <div class="content-box">
      <div class="left-box">
        <img src="./img/invoice_2@2x.png" class="left-img" />
        <div class="right-content-box">
          <div class="title-box">
            <span class="brand-icon-box">
              <img class="brand-icon" src="./img/brand@2x.png" />
            </span>
            <span class="name-text">粥品香坊（回龙观）</span>
          </div>
          <div class="descripte-text">蜂鸟专送 / 38分钟送达</div>
          <div class="title-box">
            <span class="discount-icon-box">
              <img class="discount-icon" src="./img/decrease_1@2x.png" />
            </span>
            <span class="discount-text">在线支付满28减5</span>
          </div>
        </div>
      </div>

      <div class="right-count-box">
        <span class="desc-text">5个</span>
        <i class="desc-text">></i>
      </div>
    </div>

    <div class="bottom-box">
      <span class="left-icon"></span>
      <span
        class="center-text"
      >粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</span>
      <span class="detail-text">></span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.header-wrapper {
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
  height: 136px;
  width: 100%;
  //   background-image: url("http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .content-box {
    position: absolute;
    left: 30px;
    right: 30px;
    top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .left-box {
      display: flex;
      flex-direction: row;
      align-items: center;
      max-width: 60%;
      .left-img {
        width: 64px;
        height: 66px;
      }
      .right-content-box {
        height: 66px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 6px;

        .title-box {
          .brand-icon-box {
            position: relative;
            display: inline-block;
            top: 3px;
            .brand-icon {
              width: 30px;
              height: 18px;
            }
          }
          .name-text {
            position: relative;
            margin: 10px;
            font-size: 16px;
          }
          .discount-icon-box {
            position: relative;
            display: inline-block;
            .discount-icon {
              position: relative;
              top: 1px;
              width: 12px;
              height: 12px;
            }
          }
          .discount-text {
            font-size: 12px;
          }
        }

        .descripte-text {
          font-size: 12px;
        }
      }
    }

    .right-count-box {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 60px;
      height: 20px;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      line-height: 20px;
      text-align: center;
      font-size: 10px;
      color: #ffffff;
      .desc-text {
        color: #ffffff;
      }
    }
  }

  .bottom-box {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 26px;
    line-height: 26px;
    background-color: rgba(7, 17, 27, 0.2);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 12px;
    .left-icon {
      display: inline-block;
      position: relative;
      width: 22px;
      height: 12px;
      background-image: url("./img/bulletin@2x.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      vertical-align: top;
      left: 4px;
      top: 4px;
    }
    .center-text {
      margin: 0 8px;
    }
    .detail-text {
      position: absolute;
      right: 0px;
    }
  }
}
</style>
