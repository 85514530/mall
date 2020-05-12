<template>
  <div class="bot-Bar">
    <div class="content">
      <check-btn :is-checked="isChecked" @click.native="allClick" class="btn"/>
      <span>全选</span>
    </div>

    <div class="price">
      合计：<span>{{totalPrice}}</span>
    </div>

    <div class="calculate">立即结算({{countPrice}})</div>
  </div>
</template>

<script>
import CheckBtn from '@/components/content/checkButton/CheckBtn'

import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      // isChecked: false
    }
  },
  components: {
    CheckBtn
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return this.$store.state.cartList.filter(item => 
      item.checked).reduce((preValue, item) => 
      preValue + item.price * item.count,0).toFixed(2)
    },
    countPrice() {
      return this.cartList.filter(item => item.checked).length
    },
    isChecked() {
      // return !(this.cartList.filter(item => !item.checked).length)
      if(this.cartList.length === 0) return false
      return !this.cartList.find(item => !item.checked)
    },
  },
  methods: {
    allClick() {
      if(this.isChecked) {
        this.cartList.forEach(item => {
          item.checked = false
        });
      }else {
        this.cartList.forEach(item => {
          item.checked = true
        });
      }
    }
  },
}
</script>

<style scoped>
  .bot-Bar {
    background-color: #f1f2f6;
    display: flex;
    align-items: center;
    font-size: 15px;
  }
  .content {
    display: flex;
    height: 40px;
    flex: 0.4;
    align-items: center;
    margin-left: 8px;
  }
  .btn {
    line-height: 16px;
    margin-right: 3px;
  }
  .price {
    flex: 0.6;
    margin-left: 20px;
  }
  .price span {
    color: var(--color-high-text);
  }
  .calculate {
    width: 80px;
    height: 40px;
    color: #fff;
    line-height: 40px;
    text-align: center;
    background-color: #d35400;
    font-size: 13px;
  }
</style>