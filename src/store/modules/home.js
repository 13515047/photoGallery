import Api from '@/api/Api'
import CONSTANT from './constant'

export default {
  namespaced: true,
  state: {
    page: 1,
    detailPage: 0,
    currentIndex: 1,
    frontActive: false,
    backActive: true,
    listPagesMobile: [2, 3],
    listPages: [2, 3, 4, 5, 6, 7, 8, 9]
  },
  mutations: {
    [CONSTANT.SET_PAGE_LENGTH] (state, page) {
      state.page = page
    },
    [CONSTANT.NEXT_PAGE] (state) {
      state.currentIndex++
    },
    [CONSTANT.PREVIOUS_PAGE] (state) {
      state.currentIndex--
    },
    [CONSTANT.SET_PAGE] (state, page) {
      state.currentIndex = page
    },
    [CONSTANT.SET_FRONT_ACTIVE] (state) {
      state.frontActive = !state.frontActive
    },
    [CONSTANT.SET_BACK_ACTIVE] (state) {
      state.backActive = !state.backActive
    },
    [CONSTANT.ADD_STOP_PAGE] (state) {
      state.listPages.shift()
      state.listPages.push(state.listPages[state.listPages.length - 1] + 1)
    },
    [CONSTANT.ADD_START_PAGE] (state) {
      state.listPages.pop()
      state.listPages.unshift(state.listPages[0] - 1)
    },
    [CONSTANT.ADD_STOP_PAGE_MOBILE] (state) {
      state.listPagesMobile.shift()
      state.listPagesMobile.push(state.listPagesMobile[state.listPagesMobile.length - 1] + 1)
    },
    [CONSTANT.ADD_START_PAGE_MOBILE] (state) {
      state.listPagesMobile.pop()
      state.listPagesMobile.unshift(state.listPagesMobile[0] - 1)
    },
    [CONSTANT.SET_DETAIL_PAGE] (state, value) {
      state.detailPage = value
    }
  },
  actions: {
    photoGrid ({commit}) {
      return Api.home.photoGrid()
        .then((data) => {
          let page = Math.ceil(data.data.length / 16)
          commit(CONSTANT.SET_PAGE_LENGTH, page)
          return data
        })
    },
    title ({commit}) {
      return Api.home.hero.title()
        .then((data) => {
          return data
        })
    },
    image ({commit}) {
      return Api.home.hero.image()
        .then((data) => {
          return data
        })
    },
    carousel ({commit}) {
      return Api.home.hero.carousel()
    },
    detailPhoto ({commit}, id) {
      return Api.home.hero.detailPhoto(id)
    },
    next ({commit}) {
      commit(CONSTANT.NEXT_PAGE)
    },
    previous ({commit}) {
      commit(CONSTANT.PREVIOUS_PAGE)
    },
    setPage ({commit}, page) {
      commit(CONSTANT.SET_PAGE, page)
    },
    setFront ({commit}) {
      commit(CONSTANT.SET_FRONT_ACTIVE)
    },
    setBack ({commit}) {
      commit(CONSTANT.SET_BACK_ACTIVE)
    },
    addStartPage ({commit}) {
      commit(CONSTANT.ADD_START_PAGE)
    },
    addStopPage ({commit}) {
      commit(CONSTANT.ADD_STOP_PAGE)
    },
    addStartPageMobile ({commit}) {
      commit(CONSTANT.ADD_START_PAGE_MOBILE)
    },
    addStopPageMobile ({commit}) {
      commit(CONSTANT.ADD_STOP_PAGE_MOBILE)
    },
    setDetailPage ({commit}, id) {
      commit(CONSTANT.SET_DETAIL_PAGE, id)
    },
    setDetailBack ({commit}) {
      commit(CONSTANT.SET_DETAIL_PAGE, 0)
    }
  },
  getters: {
    getLengthPage: state => state.page,
    getCurrentIndex: state => state.currentIndex,
    isFrontActive: state => state.frontActive,
    isBackActive: state => state.backActive,
    getListPages: state => state.listPages,
    getListPagesMobile: state => state.listPagesMobile,
    getDetailPage: state => state.detailPage
  }
}
