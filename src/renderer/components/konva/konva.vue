<template>
  <div>
    <div class="header" />

    <v-stage ref="stage" :config="canvas">
      <v-layer ref="layer">
       <v-shape :config="shapeConfig"/>

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
      configCircle: {
        x: 100,
        y: 100,
        radius: 70,
        fill: "red",
        stroke: "black",
        strokeWidth: 4
      },
       shapeConfig: {
        sceneFunc: function(context, shape) {
          context.beginPath();
          context.moveTo(20, 50);
          context.lineTo(220, 80);
          context.quadraticCurveTo(150, 100, 260, 170);
          context.closePath();

          // special Konva.js method
          context.strokeShape(shape);
        },
        //fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4
      }
 
    }
  },
  computed : {
   
  }
}

</script>
