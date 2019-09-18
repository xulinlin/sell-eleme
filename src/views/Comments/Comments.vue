<template>
  <div class="comments-wrapper">
    <rating-header class="rating-header"></rating-header>
    <div class="diver-box"></div>
  </div>
</template>

<script>
import RatingHeader from './components/RatingHeader/RatingHeader'
export default {
  name: 'comments',
  components: {
    RatingHeader
  }
}
</script>

<style lang="less" scoped>
.comments-wrapper {
  background-color: #fcfccf;
  width: 100%;
  height: 450px;

  .rating-header {
    height: 80px;
    width: 100%;
  }

  .diver-box {
    height: 20px;
    background-color: #f3f5f7;
    border-top: 4px solid rgba(7, 17, 27, 0.1);
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }
}
</style>
