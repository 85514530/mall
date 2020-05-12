<template>
  <div class="cartItem">
    <div class="left">
      <cart-check :is-checked="product.checked" @click.native="checkClick" />
    </div>
    <div class="center">
      <img :src="product.image" alt="">
    </div>
    <div class="right">
      <div class="right-top">{{product.title}}</div>
      <div class="right-center">{{product.desc}}</div>
      <div class="right-bottom">
        <span class="bottom price">¥{{product.price}}</span>
        <span class="bottom count">x{{product.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CartCheck from '@/components/content/checkButton/CheckBtn'
export default {
  components: {
    CartCheck
  },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked
    }
  },
}
</script>

<style scoped>
  .cartItem {
    height: 100px;
    background-color: #fff;
    padding: 10px 10px 10px 3px;
    margin-bottom: 5px;
    display: flex;
  }
  .left {
    width: 25px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center
  }
  .center {
    float: left;
  }
  .center img{
    height: 80px;
    width: 60px;
    border: 1px solid #fff;
    border-radius: 6px;
  }
  .right {
    position: relative;
    width: 68%;
    height: 80px;

  }
  .right-top,.right-center {
    margin-bottom: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .right-center {
    font-size: 12px;
  }
  .bottom {
    position: absolute;
    bottom: 0;
  }
  .right-bottom .price {
    font-weight: 700;
    color: var(--color-high-text);
  }
  .right-bottom .count {
    right: 0;
  }
</style>