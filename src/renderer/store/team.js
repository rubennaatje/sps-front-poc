export const state = () => ({
  car: {}
})

export const actions = {
  SOCKET_teamUpdate (context, data) {
    context.commit('UPDATETEAM', data)
  }
}

export const mutations = {
  UPDATETEAM (state, data) {
    state.car = data.data
    console.log(data)
  }
}

export const getters = {

}
