import {
  ADDCART, 
  ADDCOUNT
} from './mutation-type'

export default {
  addCart(context, payload) {
    // let oldProduct
    // for(let item of state.cartList)
    // if(item.id === payload.id) {
    //   oldProduct = item
    // }
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => item.id === payload.id)
      if(oldProduct) {
        context.commit(ADDCOUNT, oldProduct)
        resolve("数量+1")
      }else {
        payload.count = 1
        payload.checked = true
        context.commit(ADDCART, payload)
        resolve('添加成功')
      }
    })
    
  },

}