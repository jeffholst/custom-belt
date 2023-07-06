<template>
  <CustomBelt :belt-props="crazyBelt" />
</template>

<script setup lang="ts">
import CustomBelt from '../../../../../packages/vue-custom-belt/src/components/CustomBelt.vue';
import {
  type BeltProps,
  getBeltPropsCrazy
} from '../../../../../packages/custom-belt-lib/src/Belt';

const crazyBelt: BeltProps[] = getBeltPropsCrazy();
</script>

<style scoped></style>
