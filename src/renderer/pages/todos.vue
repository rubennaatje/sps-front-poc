<template>
  <div class="container">
    <h3>Index Module</h3>
    <button class="btn btn-default" @click="increment">
      {{ counter }}
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState([
    'counter'
  ]),
  sockets: {
    connect() {
      console.log("connected ya bitch");
    }
  },
  // fetch(context) is called by the server-side
  // and before instantiating the component
  fetch ({ store }) {
    console.log(store);
  },
  methods: {
    increment () {
      console.log(this.$store);
    }
  }
}
</script>
