<template>
  <div>
    <spreadsheet ref="spreadsheet" :options="options" :data="data" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      spreadsheet: null,
      // If other options needed
      options: {
        view: {
          height: () => document.documentElement.clientHeight - 100,
          width: () => document.documentElement.clientWidth
        }
      },
      // Initial data for spreadsheet
      data: {
        'test': '19'
      }
    }
  },
  mounted () {
    this.spreadsheet = this.$refs.spreadsheet.spreadsheet
  },
  methods: {
    onChange (data) {

    }
  }

}
</script>
