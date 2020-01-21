<template>
  <div>
    <l-map ref="map"
           style="min-height: 100vh"
           :zoom="zoom"
           :center="center"
           :options="{zoomControl: false}"
    >
      <!-- <l-draw-toolbar position="topright"/> -->
      <l-tile-layer :url="url" />
    </l-map>
  </div>
</template>
<script>
import { LMap, LTileLayer } from 'vue2-leaflet'

export default {
  components: {
    LMap,
    LTileLayer
  },
  data () {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 10,
      center: [47.31322, -1.319482]
    }
  },
  head () {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://unpkg.com/@geoman-io/leaflet-geoman-free@latest/dist/leaflet-geoman.css' }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      const map = this.$refs.map.mapObject
    })
  }
}
</script>
