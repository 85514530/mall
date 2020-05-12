<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <h4 slot="center">购物车({{cartLength}})</h4>
    </nav-bar>
    <cart-list/>
    <bot-bar/>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import BotBar from './childComps/CartBotBar'

import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    BotBar
  },
  computed: {
    ...mapGetters([
      'cartLength',
      'cartList',
    ])
  }
}
</script>

<style scoped>
  #cart {
    height: 100vh;
    background-color: #ecf0f1;
  }
  .nav-bar {
    background-color: #FEA47F;
  }
</style>