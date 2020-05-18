<template>
  <div class="category-list">
    <bscroll ref="categoryScroll" class="category-scroll">
      <ul class="category-data">
        <li class="category-item" v-for="(item, index) in categoryData" :key="index">
          <img @load="imgLoad" :src="item.image" alt="">
          <p>{{item.title}}</p>
        </li>
      </ul>
    </bscroll>
  </div>
</template>

<script>
import Bscroll from '@/components/common/scroll/Bscroll'
export default {
  props: {
    categoryData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Bscroll
  },
  methods: {
    imgLoad() {

      let refresh = this.debounce(this.$refs.categoryScroll.refresh, 1000)
      refresh()

    },
    debounce(fun, delay=300) {
      let timer = null
      return function(...args) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
          fun.apply(this, args)
        }, delay);
      }
    }
  },
}
</script>

<style>
  .category-list {
    flex: .7;
    height: 100vh;
  }
  .category-scroll {
    overflow: hidden;
    height: calc(100vh - 93px);
  }
  .category-data {
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
    padding: 15px 0 0 15px;
  }
  .category-data li {
    list-style-type: none
  }
  .category-item {
    width: 47%;
    padding-bottom: 40px;
    font-size: 13px;
    text-align: center;
    position: relative;
  }
  .category-item img {
    width: 80%;
  }
  .category-item p {
    margin-top: 10px;
  }
</style>