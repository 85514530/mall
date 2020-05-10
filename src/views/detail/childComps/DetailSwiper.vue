<template>
  <swiper class="swiperItem">
    <swiper-item v-for="(item,index) in topImgs" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper/index'
export default {
  name: 'DetailSwiper',
  props: {
    topImgs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
}
</script>

<style scoped>
 .swiperItem {
   height: 300px;
   overflow: hidden;
 }
</style>