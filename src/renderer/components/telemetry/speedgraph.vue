<template>
  <div>
    <LineChart :data="lineChartData" :options="linechartOptions" />
    <button class="btn" @click="fillData()">Randomize</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import LineChart from '~/components/charts/line-chart'

export default {
  components: {
    LineChart
  },
  mounted () {
    const ctx = document.getElementById('line-chart').getContext('2d')
    ctx.imageSmoothingEnabled = false
    ctx.webkitImageSmoothingEnabled = false
    ctx.mozImageSmoothingEnabled = false
    ctx.msImageSmoothingEnabled = false
    ctx.oImageSmoothingEnabled = false
  },
  computed: {
    ...mapGetters({
      getTelemetryy: 'team/getTelemetryKeys',
      getTelemetryLastLap: 'team/getTelemetryLastLap'
    }),
    lineChartData () {
      const telemetry = this.getTelemetryy
      const lastlap = this.getTelemetryLastLap
      const data = {
        labels: lastlap.keys,
        datasets: [
          {
            label: 'current lap',
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'rgba(255,0,0,1)',
            borderWidth: 5,
            data: telemetry.values
          },
          {
            label: 'last lap',
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'rgba(0,255,0,1)',
            borderWidth: 5,
            data: lastlap.values
          }
        ]
      }

      console.log(telemetry);
      try {
        const ctx = document.getElementById('line-chart').getContext('2d')
        ctx.imageSmoothingEnabled = false
        ctx.webkitImageSmoothingEnabled = false
        ctx.mozImageSmoothingEnabled = false
        ctx.msImageSmoothingEnabled = false
        ctx.oImageSmoothingEnabled = false
      } catch {
        console.log('err')
      }
      return data
    }
  },
  watch: {
    getTelemetryy (newcount, oldcount) {
      console.log('chahaha')
    }
  },
  data () {
    return {
      linechartOptions: {
        maintainAspectRatio: false,
        elements: {
          line: { tension: 0.15 },
          point: { radius: 0 }
        },
        animation: {
          duration: 0 // general animation time
        },
        hover: {
          animationDuration: 0 // duration of animations when hovering an item
        },
        responsiveAnimationDuration: 0,
        scales: {
          xAxes: [{
            gridLines: {
              display: true
            }
          }],
          yAxes: [{
            gridLines: {
              display: false
            }
          }]
        },
        devicePixelRatio: 0.2
      }
    }
  }

}
</script>
<style>
  canvas#line-chart {
    image-rendering: pixelated;
  }
</style>