import { remote } from 'electron'

export const state = () => ({
  car: {}
})

export const actions = {
  SOCKET_updateCars (context, data) {
    context.commit('UPDATECARS', data)
  },
  SOCKET_entryAsk (context, data) {
    const user = remote.getGlobal('user')
    user.id = data
    const sendData = {}
    sendData.username = user.username
    sendData.entryNumber = user.entryNumber
    this._vm.$socket.emit('entry', sendData)
  }
}

export const mutations = {
  UPDATECARS (state, data) {
    state.cars = data

    if (Object.keys(state.telemetry[0].topspeed).length > 100) {
      // eslint-disable-next-line max-len
      // delete might be bad for performance so I need to remove this later, haven't found a way to really delete it though.
      // state.telemetry[0].topspeed[Object.keys(state.telemetry[0].topspeed)[0]] = undefined
      state.telemetry[1].topspeed[Object.keys(state.telemetry[1].topspeed)[0]] = undefined
      state.telemetry[2].topspeed[Object.keys(state.telemetry[2].topspeed)[0]] = undefined
      state.telemetry[0].topspeed.splice(0, 1)
    }

    // Vue.set(state.telemetry[0].topspeed, data[0].car.carPhysics.lastCheck, data[0].speed)
    // Vue.set(state.telemetry[1].topspeed, data[1].car.carPhysics.lastCheck, data[1].speed)
    // Vue.set(state.telemetry[2].topspeed, data[2].car.carPhysics.lastCheck, data[2].speed)
  }
}

export const getters = {
  getAll (state) {
    return Object.values(state.cars)
  },
  getStandings (state) {
    return Object.values(state.cars).sort(
      (a, b) => (a.laps < b.laps) ? 1 : (a.laps === b.laps) ? ((a.lapdistance < b.lapdistance) ? 1 : -1) : -1
    )
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
