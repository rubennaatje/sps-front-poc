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
  computed: {
    lineChartData () {
      const telemetry = this.getTelemetryy(1)

      const data = {
        labels: Object.keys(telemetry[0].topspeed),
        datasets: [
          {
            label: 'car1',
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'rgba(255,0,0,1)',
            borderWidth: 1,
            data: Object.values(telemetry[0].topspeed)
          },
          {
            label: 'car2',
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'rgba(0,255,0,1)',
            borderWidth: 1,
            data: Object.values(telemetry[1].topspeed)
          },
          {
            label: 'car2',
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'rgba(0,0,255,1)',
            borderWidth: 1,
            data: Object.values(telemetry[2].topspeed)
          }
        ]
      }
      return data
    },
    ...mapGetters({
      getTopspeedbyID: 'cars/getTopSpeed',
      getTelemetryy: 'cars/getTelemetry',
      getTopSpeedkeys: 'cars/getTopSpeedkeys'
    })
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
          line: { tension: 0 },
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
        }
      }
    }
  }

}
</script>
