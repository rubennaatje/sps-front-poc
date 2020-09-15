<template>
  <div>
    <spreadsheet ref="spreadsheet" :options="options" :data="data" />
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
          width: () => document.documentElement.clientWidth
        }
        //     style: {
        // bgcolor: '#ffffff',
        // align: 'left',
        // valign: 'middle',
        // textwrap: false,
        // strike: false,
        // underline: false,
        // color: '#0a0a0a',
        // font: {
        //   name: 'Helvetica',
        //   size: 10,
        //   bold: false,
        //   italic: false,
        // },
      },
      // Initial data for spreadsheet
      data: {
        test: "19"
      }
    };
  },
  mounted() {
    this.spreadsheet = this.$refs.spreadsheet.spreadsheet;
  },
  methods: {
    onChange(data) {}
  }
};
</script>
