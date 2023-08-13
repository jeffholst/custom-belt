<script setup lang="ts">
import FlagBelts from './FlagBelts.vue';
import IBJJFBeltsAll from './IBJJFBeltsAll.vue';
import IBJJFBeltsRotating from './IBJJFBeltsRotating.vue';
import RandomBelts from './RandomBelts.vue';
</script>

<template>
  <section class="bg-white dark:bg-slate-800">
    <main class="mx-40 pt-20">
      <FlagBelts />
      <IBJJFBeltsRotating />
      <IBJJFBeltsAll />
      <RandomBelts />
    </main>
  </section>
</template>

<style scoped></style>
