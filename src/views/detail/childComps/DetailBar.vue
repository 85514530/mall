<template>
  <div>
    <nav-bar>
      <div slot="left" @click="backClick" class="back">
        <img src="~/assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div @click="itemClick(index)" :class="{active: index === crrentIndex}" class="titleItem" v-for="(item,index) in titles" :key="index">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>

import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: 'DetailBar',
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      crrentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    backClick() {
      this.$router.back()
    },
    itemClick(index) {
      this.crrentIndex = index
      this.$emit('titleClick', index)
    }
  },
}
</script>

<style>
  .title {
    display: flex;
    font-size: 13px;
  }
  .titleItem {
    flex: 1;
  }
  .active {
    color: var(--color-high-text)
  }
  .back img {
    vertical-align: middle;
    width: 16px;
  }
</style>