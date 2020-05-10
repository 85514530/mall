<template>
  <div id="detail">
    <detail-bar class="topBar"/>
    <scroll ref="scroll" class="content">
      <detail-swiper :top-imgs="topImgs" />
      <detail-info :goods="goods"/>
      <shop-info :shop="shops"/>
      <!-- F:\开发\VScode\project\LearnVuejs\mall\src\assets\img\home -->
      <detail-goods-info @imgLoad="imgLoad" :detail-goods="detailGoods" />
      <detail-paramInfo :param-info="paramsInfo" />
      <discuss-user :comment-info="discuss" />
    </scroll>
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

import Scroll from '@/components/common/scroll/Bscroll'

import {getDetal, Goods ,Shop, GoodsParam} from '@/network/detail'
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
    DiscussUser
  },
  data() {
    return {
      id: null,
      topImgs: [],
      goods: {},
      shops: {},
      detailGoods: {},
      paramsInfo: {},
      discuss: {}
    }
  },
  created() {
    this.id = this.$route.params.id
    getDetal(this.id).then(res => {
      console.log(res)
      const data = res.result
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
      this.discuss = data.rate.list[0]
    })
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh()
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
    height: 100vh;
    z-index: 99;
    background-color: #fff;
  }
  .content {
    height: calc(100% - 44px);
  }
</style>