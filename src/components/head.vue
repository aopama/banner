<template>
  <div class="head">
    <router-link to="/">公司首页</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: 'Head',
  props: {
    msg: String
  }
}
</script>
<style scoped lang="less">
</style>
