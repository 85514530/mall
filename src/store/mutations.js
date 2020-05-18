import {
  ADDCART, 
  ADDCOUNT
} from './mutation-type'

export default {
  [ADDCOUNT](state, payload) {
    payload.count += payload.addsum
  },
  [ADDCART](state, payload) {
    state.cartList.push(payload)
  },
  upChecked(state, payload, ischecked) {
    payload.checked = ischecked
  }

}
