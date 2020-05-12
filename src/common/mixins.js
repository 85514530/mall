import {debounce} from '@/common/utils'

export const itemLinstenerMixin = {
  data() {
    return {
      itemListenr: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    // 监听goodsitem图片加载完成
    this.itemListenr = () => {
      refresh()
    }
    this.$bus.$on('goodsImgLoad', this.itemListenr)
  },
  // methods: {
  //   backClick() {
  //     this.$refs.scroll.scrollTo(0, 0)
  //     // this.$refs.scroll.scroll.scrollTo(0, 0)
  //   }
  // },
}

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 1000)
    },
    listenerBackTop(position) {
      this.isShowBackTop = -position.y > 1000 
    }
  },
}