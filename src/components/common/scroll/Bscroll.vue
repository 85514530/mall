<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Bscroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default:false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    if(this.probeType ===2 || this.probeType ===3) {
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })
    }

    if(this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
      // console.log("上拉加载更多")
        this.$emit('upLoadMore')
      })
    }

  },
  methods: {
    scrollTo(x, y, time=500) {
      // console.log(this.scroll.scrollTo(0, 0, 500))
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  },
}
</script>

<style>

</style>