<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <h4 slot="center">购物车({{cartLength}})</h4>
    </nav-bar>
    <cart-list class="content"/>
    <bot-bar class="botbar" />
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
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    color: #fff;
    background-color: #ff7675;
  }
  .content {
    position: fixed;
    top: 44px;
    right: 0;
    left: 0;
    height: 100vh;
  }
  .botbar {
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    z-index: 99;
  }
</style>