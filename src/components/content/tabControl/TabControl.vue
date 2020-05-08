<template>
  <div class="tabControl">
    <div class="tabControl-item"  
    v-for="(item, index) in titles" :key="index"
    :class="{active: index === currentIndex}"
    @click="itemClick(index)" >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      /* 调用父组件方法 */
      this.$emit('tabclick', index)
    }
  },
}
</script>

<style>
  .tabControl {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .tabControl-item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    padding: 2px;
    border-bottom: 2px solid var(--color-tint);
  }
</style>