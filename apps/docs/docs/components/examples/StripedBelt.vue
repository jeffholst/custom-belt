<template>
  <CustomBelt :belt-props="stripedBelt" />
</template>

<script setup lang="ts">
import CustomBelt from '../../../../../packages/vue-custom-belt/src/components/CustomBelt.vue';
import {
  type BeltProps,
  getBeltPropsStriped
} from '../../../../../packages/custom-belt-lib/src/Belt';

const stripedBelt: BeltProps[] = getBeltPropsStriped(
  'Striped Belt',
  '#BF0A30',
  '#FFFFFF',
  '#002868'
);
</script>

<style scoped></style>
