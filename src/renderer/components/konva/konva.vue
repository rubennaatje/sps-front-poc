<template>
  <div>
    <div class="header" />

    <v-stage ref="stage" :config="canvas">
      <v-layer ref="layer">
        <v-rect v-for="(obstacle, i) in obstacles" :key="i" :ref="'obstacle' + i" :config="obstacle" />
        <!-- <v-line v-for="line in lines" :key="line.name" :config="line"/> -->
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
export default {
  data () {
    return {
      canvas: {
        width: 1000,
        height: 500
      },
      obstacles: [
        { x: 50, y: 60, width: 100, height: 20, fill: 'blue' },
        { x: 200, y: 300, width: 50, height: 30, fill: 'black' },
        { x: 900, y: 300, width: 20, height: 100, fill: 'black' },
        { x: 500, y: 200, width: 30, height: 90, fill: 'black' },
        { x: 100, y: 350, width: 30, height: 30, fill: 'black' },
        { x: 800, y: 30, width: 40, height: 90, fill: 'black' },
        { x: 500, y: 400, width: 50, height: 90, fill: 'black' },
        { x: 500, y: 40, width: 50, height: 20, fill: 'black' },
        { x: 200, y: 150, width: 50, height: 70, fill: 'black' },
        { x: 700, y: 250, width: 100, height: 100, fill: 'black' },
        { x: 250, y: 450, width: 150, height: 30, fill: 'black' }
      ]
    }
  }
}

</script>
