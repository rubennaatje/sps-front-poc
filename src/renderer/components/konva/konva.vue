<template>
  <div>
    <div class="header" />

    <v-stage ref="stage" :config="canvas">
      <v-layer ref="layer">
        <v-path :config="pathConfig" ref="trackmap"/>
      </v-layer>
      <v-layer>
        <v-circle v-for="(obstacle, i) in objects3" :key="i" :config="obstacle" :ref="'obstacle' + i"/>
      </v-layer>
    </v-stage>
      <button class="btn" @click="test()">Randomize</button>
       <li v-for="todo in objects3">
        <span>{{ todo}}</span>
      </li>
  </div>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex'

export default {
  data () {
    return {
      canvas: {
        width: 1000,
        height: 1000,
        scale: {
          x: 1,
          y: 1
        }
      },
      pathConfig: {
        data:
          'M56.2711 5.20879C53.5525 0.443239 56.0215 -1.04062 59.2662 0.709214C62.511 2.45905 102.946 28.2067 108.437 31.9563C113.928 35.706 117.822 39.7886 121.166 43.7052C126.574 50.0376 146.875 74.5354 151.118 79.4519C153.175 81.8347 155.332 84.1295 158.981 85.2304C159.637 85.4284 160.345 85.5634 161.102 85.7014C163.848 86.2013 169.708 87.9371 173.582 94.4505C177.991 101.867 178.49 104.95 177.742 114.032C177.309 119.287 177.886 124.351 179.738 127.031C184.231 133.53 193.641 147.056 200.039 155.944C207.777 166.693 215.015 181.692 218.01 191.691C221.005 201.69 254.701 320.179 256.448 327.179C258.195 334.178 259.992 335.802 251.581 340.802C247.587 343.177 244.122 346.517 245.591 353.051C246.714 358.051 254.207 376.548 246.339 382.049C244.5 383.335 203.529 411.103 195.921 416.045C191.303 419.045 184.969 416.832 182.443 412.421C179.917 408.011 179.344 402.087 186.062 398.297C191.303 395.34 194.299 393.672 208.775 385.007C212.308 382.892 214.241 378.119 211.603 372.174C209.274 366.925 204.926 353.736 202.785 347.677C197.793 333.553 193.561 304.657 190.18 286.182C188.807 278.683 183.691 271.184 173.208 270.184C170.899 269.964 163.224 269.434 156.609 269.684C150.15 269.929 138.2 273.937 132.149 289.932C127.656 301.806 118.421 325.554 110.933 345.427C105.105 360.893 91.2146 356.676 89.093 355.051C84.2029 351.306 71.6902 342.177 61.5126 356.551C56.6455 363.425 46.5368 380.174 40.6713 389.298C34.1249 399.482 26.6939 392.548 6.35176 377.299C-2.2783 370.83 -0.0289366 357.926 1.23502 353.051C7.05862 330.587 17.8332 317.43 28.8154 307.93C39.7977 298.431 55.2727 287.182 73.7428 280.683C92.213 274.183 97.796 268.693 102.946 259.185C117.297 232.687 124.286 221.063 122.789 208.065C121.291 195.066 105.941 169.193 102.696 157.944C100.317 149.695 98.4739 128.739 98.0546 111.199C97.9807 108.116 97.4565 104.858 103.445 105.7C112.93 107.032 110.312 99.3681 108.936 97.3673C101.947 87.2012 98.9232 82.2717 93.2114 72.2026C86.9715 61.2036 58.2679 8.70847 56.2711 5.20879Z',
        //fill: '',
        stroke: 'white',
        strokeWidth:4,
        scale: {
          x: 1,
          y: 1
        },
        offsetX: -350,
        offsetY: -50
      },
      trackValues: {
        length: null,
        percentageLength: null,
      }
    }
  },
  computed: {
    objects3(){
      let objects = [];

      for(var i = 0; i < this.allSprints.length; i++){
        const car = this.allSprints[i]
        const point = this.getPathPoint(car.percentage)
        let color = 'green';
        switch(car.category){
          case 'LMP1': color = 'red'; break;
          case 'LMP2': color = 'blue'; break;
          case 'LMGTEPro': color = 'green'; break;
          case 'LMGTEAm': color = 'orange'; break;
        }
        objects.push({ x: point.x, y: point.y, radius: 4, fill: color, offsetX: -350, offsetY: -50})
      }

      return objects;
    },
    ...mapGetters({
      allSprints: 'cars/getAll'
    })
  },
  mounted () {
    this.trackValues.length = this.$refs.trackmap._konvaNode.pathLength;
    this.trackValues.percentageLength = this.trackValues.length / 100;
    this.$refs.trackmap._konvaNode.cache();
  },
  methods: {
    test() {
       var circle = new Konva.Circle({
        x: 100,
        y: 100,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
      });

      const layer = this.$refs.layer._konvaNode;

      layer.add(circle);

    },
    getPathPoint(percentage){
      if(this.$refs.trackmap)
        return this.$refs.trackmap._konvaNode.getPointAtLength(this.trackValues.percentageLength * percentage);
      else
        return {x: 0, y: 0 }
    }
  }
}

</script>
