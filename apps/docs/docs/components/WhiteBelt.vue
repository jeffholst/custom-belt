<template>
  <CustomBelt :belt-props="whiteBelt" />
</template>

<script setup lang="ts">
import CustomBelt from '../../../../packages/vue-custom-belt/src/components/CustomBelt.vue';
import { getBeltPropsSolid } from '../../../../packages/custom-belt-lib/src/Belt';

const whiteBelt = getBeltPropsSolid('Solid White Belt', '#FFFFFF');
</script>

<style scoped></style>
