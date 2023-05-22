<template>
  <CustomBelt :belt-props="belts" />
</template>

<script setup lang="ts">
import CustomBelt from '../../../../packages/vue-custom-belt/src/components/CustomBelt.vue';
import BeltSystemJSON_IBJJF from '../../../../packages/custom-belt-lib/src/belt-systems/IBJJF.json';
import { BeltSystem } from '../../../../packages/custom-belt-lib/src/BeltSystem';
import { StripePosition } from '../../../../packages/custom-belt-lib/src/Belt';

const ibjjfSystem: BeltSystem = new BeltSystem(BeltSystemJSON_IBJJF);
const belts = ibjjfSystem.getBeltPropsByNames(
  ['White', 'Blue', 'Purple', 'Brown', 'Black'],
  0,
  StripePosition.Right,
  'transition: all 3.0s ease-in-out;',
  2000
);
</script>

<style scoped></style>
