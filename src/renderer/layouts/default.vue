<template>
  <div>
    <link rel="stylesheet" href="https://unpkg.com/terminal.css@0.7.1/dist/terminal.min.css">
    <app-header />
    <nuxt />
  </div>
</template>

<script>
import appHeader from '@/components/header'
export default {
  components: { appHeader }
}
</script>

<style>
body {
  margin: 0 !important;
}
.container, .container-fluid {
    margin: 0 auto;
    padding: 0 calc(var(--global-space) * 2);
}
.container {
    max-width: var(--page-width);
}

:root {
    --global-font-size: 15px !important;
    --global-line-height: 1.4em !important;
    --global-space: 10px !important;
    --font-stack: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif !important;
    --mono-font-stack: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif !important;
    --background-color: #222225;
    --background-color: #151517 !important;
    --page-width: 60em !important;
    --font-color: #e8e9ed !important;
    --invert-font-color: #222225 !important;
    --secondary-color: #a3abba !important;
    --tertiary-color: #a3abba !important;
    --primary-color: #62c4ff !important;
    --error-color: #ff3c74 !important;
    --progress-bar-background: #3f3f44 !important;
    --progress-bar-fill: #62c4ff !important;
    --code-bg-color: #3f3f44 !important;
    --input-style: solid !important;
    --display-h1-decoration: none !important;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
