<template>
  <div class="toast">
    <div v-show="isShow">{{message}}</div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style>
 .toast {
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%);
   color: #fff;
   padding: 5px 10px;
   background: rgba(0, 0, 0, .4);
   border-radius: 8px;
 }
</style>