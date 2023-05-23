# What is Custom Belt?

**Custom Belt** is a JavaScript library and application to easily create any
style martial arts belt in [SVG](https://en.wikipedia.org/wiki/SVG) format.
Visit the [demo](/demo) to generate any style belt which can be downloaded
and used independantly as an SVG image.

Alternativley, see [Quick Start](/introduction/quick-start) for instructions how to
programmatically add the library to your own projects.

<template style="display: inline;">
  <RandomBelt :show-refresh="true" style="padding-top: 50px; max-width: 600px;">
  Random sample belt
  </RandomBelt>
</template>

<script setup lang="ts">
import RandomBelt from '../components/RandomBelt.vue';
</script>
