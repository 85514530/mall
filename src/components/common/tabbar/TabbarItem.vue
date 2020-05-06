<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    
    <div  :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabbarItem' ,
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: true,
      // path: '/home'
    }
  },
  computed: {
    isActive() {
      // 判断点击路径是否等于当前路径，如果是，放回true执行return
      return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle() {
      //判断当前isActive是否为true，isActive为true代表当前router为选中，给文字赋值
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      // 判断是否重复点击同一path按钮，如果是，return
      if(this.$route.path == this.path) {
        return;
      }
      // 跳转至点击按钮对应path
      this.$router.replace(this.path)
    }
  },
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
  /* line-height: 49px; */
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 1px;
}
.active {
  color: red
}
</style>