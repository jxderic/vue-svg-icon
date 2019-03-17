<template>
  <div class="home">
    <div class="icon-container">
      <svg-icon :icon-class="item" className="svg-mar" v-for="(item, index) in iconArr" :key="index" @click="changeNav(index)"/>
    </div>
    <div class="content" v-if="content">{{content}}</div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      iconArr: ['sousuo', 'qiye2', 'pingjia', 'sousuo'],
      content: ''
    }
  },
  methods: {
    changeNav (index) {
      this.content = `nav${index}`
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  .svg-mar {
    margin-right: 20px;
    cursor: pointer;
  }
}
</style>
