<template>
  <div class="stars-wrapper">
    <div v-for="(item,index) in starAry" :key="index">
      <img class="star-img" :src="getStar(item)" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stars',
  props: {
    num: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      starAry: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    getStar (val) {
      if (val <= this.num) {
        return require('./images/star24_on@2x.png')
      } else {
        return require('./images/star24_off@2x.png')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.stars-wrapper {
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  .star-img {
    width: 16px;
    height: 16px;
  }
}
</style>
