# What is Custom Belt?

Custom Belt ([vue-custom-belt](https://github.com/jeffholst/vue-custom-belt))
is a Vue 3 component libary which can be used to easily add martial belt images
to any Vue.js project. Alternatively the [demo](/demo) can be used to generate
any style belt which can be downloaded and used independanty as an SVG image.

<template style="display: inline;">
  <RandomBelt :show-refresh="true" style="padding-top: 50px; max-width: 600px;">
  Random sample belt
  </RandomBelt>
</template>

<script setup lang="ts">
import RandomBelt from '../components/RandomBelt.vue';
</script>
