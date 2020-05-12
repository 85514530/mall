<template>
  <div class="check" :class="{checkAction: isChecked}">
    <img src="~/assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false
    },
  },
}
</script>

<style scoped>
  .check {
    width: 18px;
    height: 18px;
    border: 1px solid #95a5a6;
    border-radius: 50%;
  }
  .check img {
    width: 13px;
    vertical-align: middle;
  }
  .checkAction {
    border: 1px solid #95a5a6;
    background-color: #2ecc71;
  }
</style>