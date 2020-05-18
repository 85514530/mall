<template>
  <div class="bottom-bar">
    <div class="serve">
      <div>
        <i class="icon ser"></i>
        <span>客服</span>  
      </div>
      <div>
        <i class="icon shop"></i>
        <span>店铺</span>  
      </div>
      <div>
        <i class="icon"></i>
        <span>收藏</span>  
      </div>
    </div>

    <div class="cart" @click="addCart">加入购物车</div>

    <div class="buy">购买</div>
  </div>
</template>

<script>
export default {
  methods: {
    addCart() {
      this.$emit('addCart')
    }
  },
}
</script>

<style scoped>
 .bottom-bar {
   position: relative;
   bottom: 0;
   left: 0;
   right: 0;
   height: 49px;
   line-height: 49px;
   text-align: center;
   background-color: #333;

   display: flex;
 }
 .serve {
   flex: 0.5;
   background-color: #f5f6fa;
   display: flex;
 }
 .serve>div {
   flex: 1;
   display: inline-block;
   font-size: 12px;
   color: #333;
 }
 .serve .icon {
   display: block;
   margin: 6px auto -15px;
   height: 22px;
   width: 22px;
   /* background-color: #333; */
   background: url("~assets/img/detail/detail_bottom.png")0 0/100%;
 }
 .serve .ser {
   background-position:0 -54px;
 }
 .serve .shop {
   background-position:0 -98px;
 }
 /* .serve .icon:nth-child(1) {
   background-position:0 -152px;
 } */
 .cart {
   flex: 0.3;
   color: #2f3542;
   background-color: #dfe6e9;
 }
 .buy {
   flex: 0.2;
   color: #f1f2f6;
   background-color: #58B19F;
 }
</style>