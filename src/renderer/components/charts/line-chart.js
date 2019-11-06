import { Line, mixins } from 'vue-chartjs'
const { reactiveData } = mixins

export default {
  extends: Line,
  mixins: [reactiveData],
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  },
  watch: {
    data () {
      this.renderChart(this.data, this.options);
    }
  }
}
