<template>
  <div>
    <nav-bar class="navbar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <category-menu/>
    <div class="conter" ref="aaa">
      
    </div>
  </div>
</template>

<script>

import BScroll from 'better-scroll'

import CategoryMenu from './childComps/CategoryMenu'

import NavBar from '@/components/common/navbar/NavBar'

export default {
  components: {
    NavBar,
    CategoryMenu
  },
  data() {
    return {
      bscroll: null
    }
  },
  // 组件创建完后调用
  mounted() {
    this.bscroll = new BScroll(document.querySelector('.conter'), {
      probeType: 2,
      pullUpLoad: true
    })

    this.bscroll.on('scroll', (position) => {
      console.log(position)
    })
    this.bscroll.on('pullingUp', () => {
      console.log('上拉加载更多')
    })
  },
  methods: {
    itemClick() {
      console.log('---')
    }
  },
}
</script>

<style>
  .navbar {
    color: #fff;
    background-color: #ff7675;
  }
  .conter {
    height: 100px;
    background-color: #333;
    overflow-y: scroll;
  }
</style>