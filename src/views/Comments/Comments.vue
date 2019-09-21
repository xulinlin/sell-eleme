<template>
  <div class="comments-wrapper">
    <rating-header class="rating-header-box" :dataInfo="dataList.seller"></rating-header>
    <div class="diver-box"></div>
    <comment-list class="comment-list-box" :dataList="dataList.ratings"></comment-list>
  </div>
</template>

<script>
import RatingHeader from './components/RatingHeader/RatingHeader'
import CommentList from './components/CommentList/CommentList'
import axios from 'axios'

export default {
  name: 'comments',
  components: {
    RatingHeader,
    CommentList
  },
  data () {
    return {
      dataList: []
    }
  },
  created () {
    let self = this
    axios.get('/static/data.json').then(res => {
      self.dataList = res.data
    })
  }
}
</script>

<style lang="less" scoped>
.comments-wrapper {
  position: absolute;
  top: 180px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  overflow-y: scroll;

  .rating-header-box {
    height: 80px;
    width: 100%;
  }

  .diver-box {
    height: 20px;
    background-color: #f3f5f7;
    border-top: 4px solid rgba(7, 17, 27, 0.1);
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }

  .comment-list-box {
    display: block;
    height: 350px;
    width: 100%;
  }
}
</style>
