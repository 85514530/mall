<template>
  <div id="home">
    <!-- 顶部 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control 
        @tabclick="tabclick" 
        ref="tabControl1"
        class="tabControl"
        v-show="isTabFiexd"
        :titles="['流行', '新款', '精选']"/>
    <scroll class="content" ref='scroll' 
      :probe-type="3" 
      :pull-up-load='true'
      @scroll="contenScroll"
      @upLoadMore="upLoadMore"> 
      <!-- 滚动展示 -->
      <home-swiper @swiperImgLoad="swiperImgLoad" class="home-swiper" :banners="banners" />
      <recommends-view :recommends="recommends"/>
      <feature-view/>
      <!-- 商品类型 -->
      <tab-control 
        @tabclick="tabclick" 
        ref="tabControl2"
        :titles="['流行', '新款', '精选']"/>
      <!-- 商品 -->
      <goods :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendsView from './childComps/RecommendsView.vue'
import FeatureView from './childComps/FeatureView'

import NavBar from '@/components/common/navbar/NavBar'
import TabControl from '@/components/content/tabControl/TabControl'
import Goods from '@/components/content/goods/Goods'
import Scroll from '@/components/common/scroll/Bscroll'
import BackTop from '@/components/content/backTop/BackTop'

import {debounce} from '@/common/utils'

import { getHomeMultidata, getHomeGoods} from 'network/home'

import BScroll from 'better-scroll'

export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendsView,
    FeatureView,
    TabControl,
    Goods,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {  // 用于保存商品，三种类型
        'pop': {'page': 0, 'list': []},
        'new': {'page': 0, 'list': []},
        'sell': {'page': 0, 'list': []}
      },
      currentType: 'pop', //保存当前类型，默认pop
      isShowBackTop: false,  //控制backTop是否显示
      tabOffsetTop: 0,
      isTabFiexd: false,
      saveY: 0
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y

  },
  created() {
    // 创建时加载首页所需数据
    this.getHomeMultidata()
    // 加载首页商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  destroyed() {
    console.log('home销毁')
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    // 监听goodsitem图片加载完成
    this.$bus.$on('goodsImgLoad', () => {
      refresh()
    })
    
    

  },
  methods: {
    /**
     * 事件监听相关方法
     */
    // 判断当前类型，this.currentType给赋值
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    // 点击返回顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
      // this.$refs.scroll.scroll.scrollTo(0, 0)
    },
    // 监听回到顶部按钮是否显示
    contenScroll(position) {
      // 判断，当位置y在1000的时候，设置v-show为显示
      this.isShowBackTop = (-position.y) > 1000
      this.isTabFiexd = (-position.y) > this.tabOffsetTop
    },
    // 上拉加载更多
    upLoadMore() {
      this.getHomeGoods(this.currentType)
    },
    // 固定tabControll
    swiperImgLoad() {
      // 获取tabControl的offsetTop
      // 所有的组件都有一个属性$el;这个是获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },



    /**
     * 网络请求相关的方法
     */
    // 获取轮播图数据
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    // 获取goods三类数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        // 数据加载完时，刷新一下滚动显示
        // this.$refs.scroll.scroll.refresh()
        this.$refs.scroll.finishPullUp()
      })
    },
    

  },
}


</script>

<style scoped>
  #home {
    position: relative;
    height: 100vh;
  }
  .home-nav {
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0; */
    color: #fff;
    /* z-index: 9; */
    background-color: var(--color-tint);
  }

  .tabControl {
    position: relative;
    z-index: 9;
  }

  /* .tabFiexd {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
  } */
  .content {
    /* height: 300px; */
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  
  /*.content {
    height: calc(100vh - 93px);
    overflow: hidden;
    margin-top: 44px;
  } */
</style>