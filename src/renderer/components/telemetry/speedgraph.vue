<template>
    <LineChart :data="lineChartData" :options="linechartOptions" />
</template>

<script>
import LineChart from '~/components/charts/line-chart'

export default {
  components: {
    LineChart,
  },
  data () {
    return {
     lineChartData: {
        labels: ["0%", "0%", "1%", "2%", "3%", "4%", "5%","0%", "0%", "1%", "2%", "3%", "4%", "5%","0%", "0%", "1%", "2%", "3%", "4%", "5%","0%", "0%", "1%", "2%", "3%", "4%", "5%",],
        datasets: [
          {
            label: "speed",
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "rgba(255,0,0,1)",
            borderWidth: 1,
            data: [200, 230, 240, 230, 150,100,50,0,10,20,30,40,45,50,199]
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
