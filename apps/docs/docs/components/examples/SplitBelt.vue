<template>
  <CustomBelt :belt-props="splitBelt" />
</template>

<script setup lang="ts">
import CustomBelt from '../../../../../packages/vue-custom-belt/src/components/CustomBelt.vue';
import {
  type BeltProps,
  getBeltPropsSplit
} from '../../../../../packages/custom-belt-lib/src/Belt';

const splitBelt: BeltProps[] = getBeltPropsSplit('Split Belt', '#FF5F15', '#FFFFFF');
</script>

<style scoped></style>
