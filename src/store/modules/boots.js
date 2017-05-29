import * as types from '../types'

export const state = {
  boots: []
}

export const getters = {
  [types.BOOTS](state) {
    return state.boots
  },
  [types.BOOTS_BEST_SELLERS](state) {
    return state.boots.map(boot => boot.shelf === 'best-sellers')
  },
  [types.BOOTS_RELEASES](state) {
    return state.boots.map(boot => boot.shelf === 'releases')
  }
}

export const mutations = {
  [types.BOOTS_CHANGE](state, payload) {
    state.boots = payload
  }
}

export const actions = {
  async [types.BOOTS_LOAD]({ commit, dispatch }) {
    const url = 'http://www.raphaelfabeni.com.br/rv/data.json'

    try {
      const response = await fetch(url)
      const shelfs = await response.json()

      const mapShelfBoots = shelf => boot => ({
        shelf,
        name: boot.title,
        image: boot.image,
        highTop: boot['high-top'],
        category: boot.category === 'society' ? 'indor soccer' : 'soccer',
        installments: boot.installments
      })

      const getBoots = shelfs => {
        const boots = Object.keys(shelfs).reduce((boots, shelf) => {
          return boots.concat(shelfs[shelf].map(mapShelfBoots(shelf)))
        }, [])

        return boots
      }

      commit(types.BOOTS_CHANGE, getBoots(shelfs))
    } catch (error) {
      return new Error('Erro ao carregar as chuteiras.')
    }
  }
}
