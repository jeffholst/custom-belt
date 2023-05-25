<template>
  <CustomBelt :belt-props="whiteBelt" />
</template>

<script setup lang="ts">
import CustomBelt from '../../../../packages/vue-custom-belt/src/components/CustomBelt.vue';
import { type BeltProps, getBeltPropsSolid } from '../../../../packages/custom-belt-lib/src/Belt';

const whiteBelt: BeltProps[] = getBeltPropsSolid('Solid White Belt', '#FFFFFF');
</script>

<style scoped></style>
