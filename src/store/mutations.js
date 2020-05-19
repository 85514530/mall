import {
  ADDCART, 
  ADDCOUNT
} from './mutation-type'

export default {
  [ADDCOUNT](state, payload) {
    payload[0].count += payload[1]
  },
  [ADDCART](state, payload) {
    state.cartList.push(payload)
  },

}
