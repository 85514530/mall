<template>
  <div v-show="isShow" class="toast">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(mes, time=2000) {
      this.message = mes
      this.isShow = true

      setTimeout(() => {
        this.message = ''
        this.isShow = false
      }, time);
    }
  },
}
</script>

<style>
 .toast {
  position: fixed;
  top: 46%;
  left: 50%;
  transform: translate(-50%);

  z-index: 999;

  color: #fff;
  padding: 8px 10px;
  background: rgba(0, 0, 0, .4);
  border-radius: 8px;
 }
</style>