<template>
  <div class="container">
    <chart />
    <chartT />
    <p>A modern and minimal CSS framework for terminal lovers.</p>

    <h2 id="project-goals">Project Goals</h2>
    <p>
      A unique game
      <strong>(multiplayer race manager!)</strong>.
      The game is written purely in javascript/typescript, with a node js (typescript) backend and a nuxt(vue but cooler) electron js frontend
      <strong>pure css</strong> to be accessible for everybody and easy to contribute.
    </p>
    <h2 id="markdown-terminal-css">We ❤️ Endurance racing</h2>
    <p>
      there were some alternatives for this project that existed. Unfortunately all of them weren't close enough to a race engineer for me.
      So while i tried to keep the game aspect big I also tried to move much closer to a realistic experience.

      (and also multiplayer!)

      <br>
      In this game you need to manage your race team and drivers, think of the strategy.
    </p>
  </div>
</template>

<script>
import chart from '~/components/charts/speedapex.vue'
import chartT from '~/components/telemetry/speedgraph.vue'
export default {
  components: {
    chart,
    chartT
  }
}
</script>
