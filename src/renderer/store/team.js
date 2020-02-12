export const state = () => ({
  car: {},
  telemetry: {
    currentTelemetry: [],
    lastlaptel: []
  }
})

export const actions = {
  SOCKET_teamUpdate (context, data) {
    context.commit('UPDATETEAM', data)
  }
}

export const mutations = {
  UPDATETEAM (state, data) {
    state.car = data.data
    if (state.telemetry.currentTelemetry.length > data.telemetry.currentTelemetry.length) {
      state.telemetry.lastlaptel = state.telemetry.currentTelemetry
      console.log(state)
    }
    state.telemetry.currentTelemetry = data.telemetry.currentTelemetry
  }
}

export const getters = {
  getTelemetry: state => id => {
    return state.telemetry.currentTelemetry.map(a => [a.pos, a.val])
  },
  getLastLapTelemetry: state => id => {
    return state.telemetry.lastlaptel.map(a => [a.pos, a.val])
  }
}
