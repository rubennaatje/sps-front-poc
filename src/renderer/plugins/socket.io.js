import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'

export default ({ store }) => {
  console.log(12345)
  Vue.use(new VueSocketIO({
    debug: false,
    connection: 'http://localhost:4001/',
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
    }
  })
  )
}
