<template>
  <div class="goods-item">
    <img :src="goods.show.img" alt="">
    <div class="goods-info">
      <p class="title">{{goods.title}}</p>
      <span class="price">¥{{goods.price}}</span>
      <span class="cfav">☆ {{goods.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
  .goods-item {
    width: 47%;
    padding-bottom: 40px;
    position: relative;
  }
  .goods-item img {
    width: 100%;
     border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .cfav {
    position: relative;
  }
</style>