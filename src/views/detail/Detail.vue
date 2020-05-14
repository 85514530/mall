<template>
  <div id="detail">
    <detail-bar ref="nav" class="topBar" @titleClick="titleClick"/>
    <scroll ref="scroll" class="content" 
      :probeType="3"
      @scroll="contentScroll">
      <detail-swiper :top-imgs="topImgs" />
      <detail-info :goods="goods"/>
      <div class="split"></div>
      <shop-info :shop="shops"/>
      <detail-goods-info @imgLoad="imgLoad" :detail-goods="detailGoods" />
      <detail-paramInfo :param-info="paramsInfo" ref="param"/>
      <discuss-user :comment-info="discuss" ref="discuss" />
      <div class="split"></div>
      <goods-item :goods="recommend" ref="recommend" />
    </scroll>
    <detail-bottom-bar @addCart="addCart" />
    <back-top v-show="isShowBackTop" @click.native="backTop" />
    <toast :message="message" :isShow="show" />
  </div>
</template>

<script>
import DetailBar from './childComps/DetailBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailInfo from './childComps/DetalInfo'
import ShopInfo from './childComps/ShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DiscussUser from './childComps/Discuss'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from '@/components/common/scroll/Bscroll'
import GoodsItem from '@/components/content/goods/Goods'
import BackTop from '@/components/content/backTop/BackTop'

import Toast from '@/components/common/toast/Toast'

import {itemLinstenerMixin, backTopMixin} from '@/common/mixins'
import {debounce} from '@/common/utils'

import {getDetal, Goods ,Shop, GoodsParam} from '@/network/detail'
import {getHomeGoods} from '@/network/home'
export default {
  name: 'Detail',
  components: {
    DetailBar,
    DetailSwiper,
    DetailInfo,
    ShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DiscussUser,
    GoodsItem,
    BackTop,
    DetailBottomBar,
    Toast
  },
  data() {
    return {
      id: null,
      topImgs: [],
      goods: {},
      shops: {},
      detailGoods: {},
      paramsInfo: {},
      discuss: {},
      recommend: [],
      isShowBackTop: false,
      titleOffsetTop: [],
      titleIndex: 0,
      getTitleY: null,
      message: '',
      show: false
    }
  },
  mixins: [itemLinstenerMixin, backTopMixin],
  created() {
    this.id = this.$route.params.id
    getDetal(this.id).then(res => {
      const data = res.result
      // console.log(data)
      // 获取顶部的轮播图片
      this.topImgs = data.itemInfo.topImages
      // 获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 获取店铺信息
      this.shops = new Shop(data.shopInfo)
      // 获取商品详情
      this.detailGoods = data.detailInfo
      // 获取参数
      this.paramsInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      // 获取用户评论
      if(undefined != data.rate.list) {
        this.discuss = data.rate.list[0]
      }

      // 获取每个标题对应所在position位置
      this.getTitleY = debounce(() => {
        const height = 44
        this.titleOffsetTop = []
        this.titleOffsetTop.push(0)
        this.titleOffsetTop.push(this.$refs.param.$el.offsetTop-height)
        this.titleOffsetTop.push(this.$refs.discuss.$el.offsetTop-height)
        this.titleOffsetTop.push(this.$refs.recommend.$el.offsetTop-height)
        this.titleOffsetTop.push(Number.MAX_VALUE)

      }, 200)
    })
    // 推荐数据
    getHomeGoods('pop', 1).then(res => {
      this.recommend = res.data.list
    })
  },
  deactivated() {
    // 离开当前router时关闭监听图片load
    this.$bus.$off('goodsImgLoad', this.itemListenr)
  },
  methods: {
    // 图片加载刷新页面
    imgLoad() {
      this.$refs.scroll.refresh()
      // 判断是否为空，不为空执行。以免报错
      if(this.getTitleY) 
        this.getTitleY()
    },
    // 监听页面滚动时的位置
    contentScroll(position) {
      const positionY = -position.y
      // 判断是否显示backTop按钮
      // this.isShowBackTop = positionY > 1000 
      this.listenerBackTop(position)
      // 联动标题
      let length = this.titleOffsetTop.length;
      for(let i = 0; i < length-1; i++) {
        if(this.titleIndex !== i && positionY >= this.titleOffsetTop[i] 
        && positionY < this.titleOffsetTop[i+1]) {
          this.titleIndex = i
          this.$refs.nav.crrentIndex = this.titleIndex
        }
      }
    },
    // // 返回顶部 通过mixin管理
    // backTop() {
    //   this.$refs.scroll.scrollTo(0, 0, 2000)
    // },
    // 点击标题时界面移动到对应位置
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.titleOffsetTop[index], 2000)
    },
    addCart() {
      const product = {}
      product.image = this.topImgs[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.id = this.id

      this.$store.dispatch('addCart', product).then(res => {
        this.$toast.show(res, 2000)
      })
    }
  },
  
}
</script>

<style scoped>
  .topBar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  #detail {
    position: relative;
    z-index: 99;
    background-color: #fff;
  }
  .content {
    height: calc(100vh - 93px);
  }
  .split {
    height: 8px;
    margin-bottom: 5px;
    background: rgba(100, 100, 100, .1)
  }
</style>