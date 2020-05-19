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
        const pro = [oldProduct, payload.count]
        context.commit(ADDCOUNT, pro)
        resolve("数量+" + payload.count)
      }else {
        payload.checked = true
        context.commit(ADDCART, payload)
        resolve('添加成功')
      }
    })
    
  },

}