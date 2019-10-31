<template>
  <fieldset>
    <legend>test</legend>
This is infact a test page, to try and see wether or not this works well
    I have tried alternatives for the fieldset but it honestly works best
  
  </fieldset>
</template>

<script>
import axios from "axios";
import moment from "moment";
import LineChart from "~/components/charts/line-chart";
export default {
  components: {
    LineChart
  },
  data() {
    return {
      
    };
  }
};
</script>
<style scoped>
.bar-chart {
  position: fixed;
  left: 10%;
  top: 10%;
  width: 80%;
  height: 80%;
}
</style>

