<template>
  <div class="home-wrapper">
    <v-header></v-header>
  </div>
</template>

<script>
import header from './components/header/header'

export default {
  name: 'Home',
  components: {
    'v-header': header
  }
}
</script>

<style lang="less" scoped>
.home-wrapper {
  background-color: #ffffff;
  width: 100%;
  height: 620px;
}
</style>
