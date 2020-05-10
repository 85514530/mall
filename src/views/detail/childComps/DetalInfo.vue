<template>
  <div v-if="Object.keys(goods).length !== 0" class="detail-item">
    <div class="detail-title">{{goods.title}}</div>
    <div class="detail-price">
      <span>{{goods.newPrice}}</span>
      <span>{{goods.oldPrice}}</span>
      <span v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="detail-columns">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="row"></div>
    <div class="detail-services">
      <span v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
        </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailInfo',
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
  .detail-item {
    height: 200px;
    font-size: 10px;
    padding: 10px 8px;
  }
  .detail-title {
    font-size: 16px;
    color: var(--color-tint);
  }
  .detail-price {
    padding: 10px 0;
  }
  .detail-price span:nth-child(1){
    font-size: 20px;
    font-weight: 700;
    color: var(--color-high-text)
  }
  .detail-price span:nth-child(2){
    color: rgb(189, 177, 177);
    text-decoration: line-through;
    margin: 0 5px;
  }
  .detail-price span:nth-child(3){
    display: inline-block;
    text-align: center;
    vertical-align: top;
    line-height: 15px;
    color: #fff;
    padding: 2px 5px;
    border-radius: 20px;
    background-color: var(--color-high-text);
  }
  .detail-columns {
    display: flex;
    justify-content: space-between;
    padding: 10px 0 3px 0;
  }
  .detail-columns span {
    color: rgb(189, 177, 177);
  }

  .row {
    height: 1px;
    box-shadow: 2px 2px 2px rgba(100, 100, 100, .3);
  }

  .detail-services {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 22px;
  }
  .detail-services img {
    width: 11px;
    vertical-align: top;
  }
</style>