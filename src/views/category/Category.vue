<template>
  <div class="category">
    <nav-bar class="navbar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <category-menu :category-list="categoryList" @menuClick="menuClick"/>
      <category-list :category-data="categoryData"/>
    </div>
  </div>
</template>

<script>


import CategoryMenu from './childComps/CategoryMenu'
import CategoryList from './childComps/CategoryList'

import {getCategory, getSubcategory} from '@/network/category'

import NavBar from '@/components/common/navbar/NavBar'

export default {
  components: {
    NavBar,
    CategoryMenu,
    CategoryList
  },
  data() {
    return {
      categoryList: [],
      categoryData: []
    }
  },
  created() {
    this._getCategory()
  },
  methods: {
    _getCategory() {
      getCategory().then((res) => {
        this.categoryList = res.data.category.list
        for(var i = 0; i < this.categoryList,length; i++) {
          this.categoryData[i] = {
            // subcategories
            // categoryDetail: {
            //     'pop': [],
            //     'new': [],
            //     'sell': []
            // }
          }
        }
        this._getSubcategory(0)
      })
    },
    _getSubcategory(index) {
      // console.log(this.categoryList)
      const maitKey = this.categoryList[index].maitKey
      getSubcategory(maitKey).then((res) => {
        this.categoryData = []
        for(let item of res.data.list)
          this.categoryData.push(item)
      })
      // console.log(this.categoryData)
    },
    menuClick(index) {
      this._getSubcategory(index)
    },
  },

  // 组件创建完后调用
  // mounted() {
  //   this.bscroll = new BScroll(document.querySelector('.conter'), {
  //     probeType: 2,
  //     pullUpLoad: true
  //   })

  //   this.bscroll.on('scroll', (position) => {
  //     console.log(position)
  //   })
  //   this.bscroll.on('pullingUp', () => {
  //     console.log('上拉加载更多')
  //   })
  // },
  // methods: {
  //   itemClick() {
  //     console.log('---')
  //   }
  // },
}
</script>

<style scoped>
  .category {
    height: 100vh
  }
  .navbar {
    color: #fff;
    background-color: #ff7675;
  }
  .conter {
    height: 100px;
    background-color: #333;
    overflow-y: scroll;
  }
  .content {
    display: flex;
  }
</style>