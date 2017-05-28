import * as types from '../types'

export const state = {
  items: []
}

export const getters = {
  [types.CART_ITEMS](state) {
    return state.items
  },
  [types.CART_COUNT](state) {
    return state.items.reduce((count, item) => {
      return count + item.quantity
    }, 0)
  }
}

export const mutations = {
  [types.CART_CHANGE](state, payload) {
    state.items = payload
  }
}

const findIndexByProduct = (items, product) => {
  return items.findIndex(item => {
    return item.product && item.product.id === product.id
  })
}

export const actions = {
  [types.CART_INCLUDE]({ getters, commit }, payload) {
    const items = getters[types.CART_ITEMS]
    const index = findIndexByProduct(items, product)

    if (index >= 0) {
      items[index].quantity++
    } else {
      items.push({
        product: payload,
        quantity: 1
      })
    }

    commit(types.CART_CHANGE, items)
  },
  [types.CART_EXCLUDE]({ getters, commit }, payload) {
    const items = getters[types.CART_ITEMS]
    const index = findIndexByProduct(items, payload)

    commit(types.CART_CHANGE, items.filter((item, i) => i !== index))
  },
  [types.CART_CHANGE_QUANTITY]({ getters, commit }, payload) {
    const items = getters[types.CART_CHANGE]
    const index = findIndexByProduct(items, payload)

    items[index].quantity = payload.quantity

    commit(types.CART_CHANGE, items)
  }
}