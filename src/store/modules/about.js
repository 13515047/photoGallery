import Api from '../../api/Api'

export default {
  namespaced: true,
  actions: {
    about ({commit}, params) {
      return Api.about()
        .then((data) => {
          return data
        })
    }
  }
}
