<template>
  <div class="menu">
    <bscroll class="scroll">
      <ul class="menu-title">
        <li :class="{active:crruentAction == index}" 
            class="menu-list" @click="menuClick(index)" 
            v-for="(item, index) in categoryList" 
            :key="index">
          {{item.title}}
        </li>
      </ul>
    </bscroll>
  </div>
</template>

<script>
import Bscroll from '@/components/common/scroll/Bscroll'
export default {
  props: {
    categoryList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      crruentAction: 0
    }
  },
  components: {
    Bscroll
  },
  methods: {
    menuClick(index) {
      this.crruentAction = index
      this.$emit('menuClick', index)
    },
  },
}
</script>

<style scoped>
  .menu {
    flex: .3;
    height: 100vh;
  }
  .scroll {
    overflow: hidden;
    height: calc(100% - 93px);
  }
  .menu-title {
    text-align: center;
    color: #fff;
    background-color: #6D214F;
  }
  .menu-list {
    width: 100%;
    line-height: 40px;
    font-size: 13px;
    height: 40px;
  }
  .active {
    color: #333;
    background-color: #fff;
  }
</style>