<template>
  <div>
      <spreadsheet :options="options" :data="data" ref="spreadsheet"/>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      spreadsheet: null,
      // If other options needed
      options: {
        view: {
            height: () => document.documentElement.clientHeight - 100,
            width: () => document.documentElement.clientWidth,
        },
      },
      // Initial data for spreadsheet
      data: {
      }
    }
  },
  mounted() {
    this.spreadsheet = this.$refs.spreadsheet.spreadsheet
  },
  methods: {
    onChange: function(data) {
 
    }
  }
 
}
</script> 