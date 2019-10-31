<template>
  <fieldset>
    <legend>Telemetry</legend>
      <main class="grid">
       <div>
        <fieldset>
            <legend>speed</legend>
             <BarChart :data="barChartData" :options="{ maintainAspectRatio: false }" />
        </fieldset>
       </div>
       <div class="throttle">
        <fieldset>
            <legend>throttle</legend>
               <LineChart :data="lineChartData" :options="linechartOptions" />
        </fieldset>
       </div>
       <div>
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
        </fieldset>
       </div>
              <div>
        <fieldset>
            <legend>fuel</legend>
            <DoughnutChart :data="barChartData" :options="{ maintainAspectRatio: false }" />
        </fieldset>
       </div>
       <div>
        <fieldset>
            <legend>throttle</legend>
        </fieldset>
       </div>
       <div>
        <fieldset>
            <legend>braking</legend>
            <SpeedGraph/>
        </fieldset>
       </div>
    </main>
  </fieldset>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import DoughnutChart from '~/components/charts/doughnut-chart'
import LineChart from '~/components/charts/line-chart'
import BarChart from '~/components/charts/bar-chart'
import SpeedGraph from '~/components/telemetry/speedgraph';
export default {
  components: {
    BarChart,
    DoughnutChart,
    LineChart,
    SpeedGraph
  },
 data(){
    return {
      barChartData: {
        labels: ["fuel"],
        datasets: [
          {
            label: 'Fuel left',
            backgroundColor: "rgba(255,0,0,1)",
            borderWidth: 0,
            data: [65],
          }
        ]
      },
       lineChartData: {
        labels: ["0%", "0%", "1%", "2%", "3%", "4%", "5%"],
        datasets: [
          {
            label: "speed",
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "rgba(255,0,0,1)",
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
                    display:false
                }
            }],
            yAxes: [{
                gridLines: {
                    display:false
                }   
            }]
        }
      }
    }
  }
}
</script>

<style>
.throttle {
  grid-area: throttleArea;
}
.systemlog {
  max-height: 400px;
}
.grid { 
  display: grid;
   grid-template-areas:
    'div div throttleArea'
    'div div div';
  grid-gap: 10px;
  align-items: stretch;
}

</style>