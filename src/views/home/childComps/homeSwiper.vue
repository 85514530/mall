<template>
  <swiper>
      <swiper-item v-for="(item, key) in banners" :key="key">
        <a :href="item.link">
          <img :src="item.image" @load="imgLoad" alt="">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper/index'
export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      },
  },
  data() {
    return {
      isLoad: false
    }
  },
  methods: {
    imgLoad() {
      if(!this.isLoad) {
        this.$emit('swiperImgLoad')
        this.isLoad = true
      }
    }
  },
}
</script>

<style>

</style>