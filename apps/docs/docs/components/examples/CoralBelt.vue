<template>
  <CustomBelt :belt-props="coralBelt" />
</template>

<script setup lang="ts">
import CustomBelt from '../../../../../packages/vue-custom-belt/src/components/CustomBelt.vue';
import {
  type BeltProps,
  getBeltPropsCoral
} from '../../../../../packages/custom-belt-lib/src/Belt';

const coralBelt: BeltProps[] = getBeltPropsCoral('Coral Belt', '#000000', '#FF0000');
</script>

<style scoped></style>
