<template>
  <main class="grid-container">
    <div class="tyres">
      <fieldset>
        <legend>throttle</legend>
        <LineChart :data="lineChartData" :options="linechartOptions" />
      </fieldset>
    </div>
    <div class="log">
      <fieldset>
        <legend>Systemlog</legend>
        <p>
          car connection lost
        </p>
        <p>
          car connection found
        </p>
        <p>
          Lap completed
        </p>
        <p>
          car connection lost
        </p>
        <p>
          car connection lost
        </p>
        <p>
          car connection lost
        </p>
        <p>
          car connection lost
        </p>
        <p>
          car connection lost
        </p>
      </fieldset>
    </div>
    <div class="fuel">
      <fieldset>
        <legend>fuel</legend>
        <DoughnutChart :data="barChartData" :options="{ maintainAspectRatio: false }" />
      </fieldset>
    </div>
    <div class="speed">
      <fieldset>
        <legend>braking</legend>
        <SpeedGraph />
      </fieldset>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import DoughnutChart from '~/components/charts/doughnut-chart'
import LineChart from '~/components/charts/line-chart'
import BarChart from '~/components/charts/bar-chart'
import SpeedGraph from '~/components/telemetry/speedgraph'
export default {
  components: {
    BarChart,
    DoughnutChart,
    LineChart,
    SpeedGraph
  },
  data () {
    return {
      barChartData: {
        labels: ['fuel'],
        datasets: [
          {
            label: 'Fuel left',
            backgroundColor: 'rgba(255,0,0,1)',
            borderWidth: 0,
            data: [65]
          }
        ]
      },
      lineChartData: {
        labels: ['0%', '0%', '1%', '2%', '3%', '4%', '5%'],
        datasets: [
          {
            label: 'speed',
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'rgba(255,0,0,1)',
            borderWidth: 1,
            data: [200, 230, 240, 230, 10]
          }
        ]
      },
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
              display: false
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

<style>
.grid-container {
  display: grid;
  grid-template-columns: 0.5fr 1fr 1.1fr 0.9fr 1.7fr;
  grid-template-rows: 1fr 0.6fr;
  grid-template-areas: "tyres tyres tyres fuel log" "speed speed speed speed speed";
}

.speed { grid-area: speed; height: 50% }

.log { grid-area: log; height: 50%;}

.fuel { grid-area: fuel; height: 50% }

.tyres { grid-area: tyres;  height: 50%}
</style>
