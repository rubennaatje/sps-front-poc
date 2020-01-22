<template>
  <div id="chart">
    <apexchart type="line" height="350" :options="chartOptions" :series="stuff"></apexchart>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data: function() {
    return {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 700
            }
          },
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 1,
          colors: ["#00FF00","#FF0000"]
        },
        title: {
          text: "Speed!",
          align: "left"
        },
        grid: {
          row: {
            colors: ["#000", "000"], // takes an array which will be repeated on columns
            opacity: 1
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          lines: {
            show: false
          },
          type: 'numeric'
        },
        yaxis: {
          lines: {
            show: false
          }
        }
      }
    };
  },
  computed: {
        ...mapGetters({
            getTelemetry: 'team/getTelemetry',
            getLastLapTelemetry: 'team/getLastLapTelemetry'
        }),
      stuff() {
          return [
                  {
                    name: "Desktops",
                    data: this.getTelemetry()
                  },
                  {
                      data: this.getLastLapTelemetry()
                  }
                ];
    },
  },
  mounted() {
      console.log(this.getTelemetry());
      this.series = [{
          data: this.getTelemetry()
      }];
  }
};
</script>
