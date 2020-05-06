<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners" />
    <recommends-view :recommends="recommends"></recommends-view>
  </div>
</template>

<script>
import HomeSwiper from './childComps/homeSwiper'
import RecommendsView from './childComps/recommendsView'
import NavBar from '@/components/common/navbar/NavBar'
import {getHomeMultidata} from 'network/home'

export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendsView
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  },
}


</script>

<style>
  .home-nav {
    color: #fff;
    background-color: var(--color-tint);
  }
</style>