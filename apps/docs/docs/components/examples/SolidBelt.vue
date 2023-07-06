<template>
  <CustomBelt :belt-props="solidBelt" />
</template>

<script setup lang="ts">
import CustomBelt from '../../../../../packages/vue-custom-belt/src/components/CustomBelt.vue';
import {
  type BeltProps,
  getBeltPropsSolid
} from '../../../../../packages/custom-belt-lib/src/Belt';

const solidBelt: BeltProps[] = getBeltPropsSolid('Solid Belt', '#FF69B4');
</script>

<style scoped></style>
