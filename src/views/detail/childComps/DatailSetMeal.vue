<template>
  <div class="setmeal">
    <div class="setmeal-title">
      <p class="price">{{Price}}</p>
      <p class="stock">库存6000件</p>
      <p>请选择&nbsp;尺码&nbsp;颜色</p>
    </div>
    
    <div class="line"></div>

    <div class="styles">
      <p>{{goodsDetail.styleKey}}</p>
      <span v-for="(item,index) in styleKey" 
      :key="index"
      @click="styleClick(item.styleId, item.name, index)"
      :class="{styActive: styActive == index}" 
      class="meal">
      {{item.name}}
      </span>
      <!-- <span class="meal">米色外套</span>
      <span class="meal">米色外套</span>
      <span class="meal">米色外套</span> -->
    </div>

    <div class="line"></div>

    <div class="size">
      <p>{{goodsDetail.sizeKey}}</p>
      <span v-for="(item, index) in sizeKey"
      :key="index"
      @click="sizeClick(item.sizeId, item.name, index)"
      :class="{sizeActive: sizeActive == index}" 
      class="meal">{{item.name}}</span>
    </div>

    <div class="line"></div>

    <div class="count">
      <span>购买数量</span>
      <div class="calc">
        <p @click="inc" class="sum">+</p>
        <p class="sum">{{count}}</p>
        <p @click="dec" class="sum">-</p>
      </div>
    </div>
    
    <button @click="defineClick()" class="define">确认</button>

    <div @click="closeClick" class="close">X</div>
  </div>
</template>

<script>
export default {
  props: {
    goodsDetail: {
      type: Object,
      default() {
        return {}
      }
    },
    id: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      styActive: -1,
      sizeActive: -1,
      count: 1,
      stylist: [],
      sizeId: 0,
      styleId: 0,
      sizeName: '',
      styleName: '',
      image: '',
      goodsPrice: 0
    }
  },
  computed: {
    styleKey() {
      if(this.stylist) {
        this.listData
      }
      return this.stylist[0]
      
    },
    sizeKey() {
      if(!this.stylist) {
        this.listData
      }
      return this.stylist[1]
    },
    // 计算价格
    Price() {
      if(!this.sizeId || !this.styleId) {
        return this.goodsDetail.defaultPrice
      }else {
        for(let item of this.goodsDetail.skus) {
          if(item.sizeId == this.sizeId && item.styleId == this.styleId){
            this.image = item.img
            this.goodsPrice = (item.nowprice/100).toFixed(2)
            return item.currency + (item.nowprice/100).toFixed(2)
          }
        }
      }
    },
    listData() {
      if(this.goodsDetail.props) {
        for(let item of this.goodsDetail.props)
          this.stylist.push(item.list)
      }
    }
  },
  methods: {
    inc() {
      this.count++
    },
    dec() {
      if(this.count > 1){
        this.count--
      }else {
        this.$toast.show('数量至少为 1 ')
      }
    },
    styleClick(id, name, index) {
      this.styleId = id
      this.styleName = name
      this.styActive = index
    },
    sizeClick(id, name, index) {
      this.sizeId = id
      this.sizeName = name
      this.sizeActive = index
    },
    defineClick() {
      if(!this.sizeName) {
        this.$toast.show('请选择' + this.goodsDetail.sizeKey)
        return
      }
      if(!this.styleName) {
        this.$toast.show('请选择' + this.goodsDetail.styleKey)
        return
      }
      const product = {}
      product.image = this.image
      product.title = this.goodsDetail.title
      product.desc = this.desc
      product.price = this.goodsPrice
      product.id = this.id
      product.count = this.count

      this.$store.dispatch('addCart', product).then(res => {
        this.$toast.show(res, 2000)
      })

      const setmeal = document.querySelector('.setmeal')
      setmeal.style.transform = 'translateY(100%)';
    },
    closeClick() {
      const setmeal = document.querySelector('.setmeal')
      setmeal.style.transform = 'translateY(100%)';
    }
  },
}
</script>

<style scoped>
  .setmeal {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 99;
    background-color: #fff;
    width: calc(100vw);
    padding: 20px 15px;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 10px;

    border: 1px solid #333;
    width: 20px;
    text-align: center;
    line-height: 20px;
    height: 20px;
    border-radius: 15px;
  }
  .line {
    height: 2px;
    background: rgba(100, 100, 100, .2);
    margin: 12px 0;
  }
  .setmeal-title {
    font-size: 15px;
    text-align: center;
  }
  .setmeal-title .price {
    font-size: 20px;
    color: var(--color-high-text)
  }
  .setmeal-title .stock {
    font-size: 12px;
    margin: 6px 0 6px;
  }
  .styles {
    margin-right: -5px;
  }
  .styles p, .size p{
    margin: 6px 0;
  }
  .meal {
    display: inline-block;
    font-size: 12px;
    background-color: #ecf0f1;
    border-radius: 5px;
    margin:0 5px 5px 0;
  }
  .styles .meal {
    padding: 8px 6px;
  }
  .size .meal{
    padding: 8px 16px;
  }
  .count {
    display: flex;
    justify-content: space-between
  }
  .count .sum {
    display: inline-block;
    height: 30px;
    width: 30px;
    text-align: center;
    line-height: 30px;
    margin-left: 1px;
    background-color: #ecf0f1;
  }
  .define {
    width: 100%;
    height: 35px;
    font-size: 13px;
    margin-top: 30px;
    background-color: #ff6348;
    border-radius: 35px
    ;
  }

  .styActive, .sizeActive {
    border: 1px solid var(--color-high-text)
  }
</style>