<template>
  <CustomBelt :belt-props="belts" />
</template>

<script setup lang="ts">
import { CustomBelt, BeltSystemJSON_IBJJF, BeltSystem, StripePosition } from 'vue-custom-belt';

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
