export const state = () => ({
  cars: [],
  telemetry: [
    { topspeed: [] },
    { topspeed: [] },
    { topspeed: [] }
  ]
})

export const actions = {
  SOCKET_newMessage (context, data) {
    context.commit('NEWMESSAGE', data)
  }
}

export const mutations = {
  NEWMESSAGE (state, data) {
    state.cars = data
    if (Object.keys(state.telemetry[0].topspeed).length > 100) {
      // delete might be bad for performance so I need to remove this later
      delete state.telemetry[0].topspeed[Object.keys(state.telemetry[0].topspeed)[0]]
      delete state.telemetry[1].topspeed[Object.keys(state.telemetry[1].topspeed)[0]]
      delete state.telemetry[2].topspeed[Object.keys(state.telemetry[2].topspeed)[0]]
    }
    state.telemetry[0].topspeed[data[0].car.carPhysics.lastCheck] = data[0].speed
    state.telemetry[1].topspeed[data[1].car.carPhysics.lastCheck] = data[1].speed
    state.telemetry[2].topspeed[data[2].car.carPhysics.lastCheck] = data[2].speed
  }
}

export const getters = {
  getAll (state) {
    return Object.values(state.cars)
  },
  getTopSpeed: state => id => {
    if (state.telemetry[id] != null) {
      return Object.values(state.telemetry[id].topspeed)
    }
    return []
  },
  getTopSpeedkeys: state => id => {
    if (state.telemetry[id] != null) {
      return Object.keys(state.telemetry[id].topspeed)
    }
    return []
  },
  getTelemetry: state => id => {
    return state.telemetry
  }
}
