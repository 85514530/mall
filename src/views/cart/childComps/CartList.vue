<template>
  <div class="cart">
    <scroll class="scroll" ref="scroll">
      <cart-list-item 
        v-for="(item,index) in cartList" 
        :key="index"
        :product="item">

      </cart-list-item>
    </scroll>
  </div>
</template>

<script>

import CartListItem from './CartListItem'

import { mapGetters } from 'vuex'
import Scroll from '@/components/common/scroll/Bscroll'

export default {
  name: 'CartGoods',
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.scroll.refresh()
  },
}
</script>

<style scoped>
  .scroll {
    overflow: hidden;
    height: calc(100vh - 93px - 40px);
  }
</style>