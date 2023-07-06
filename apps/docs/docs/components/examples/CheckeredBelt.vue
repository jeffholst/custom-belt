<template>
  <CustomBelt :belt-props="checkeredBelt" />
</template>

<script setup lang="ts">
import CustomBelt from '../../../../../packages/vue-custom-belt/src/components/CustomBelt.vue';
import {
  type BeltProps,
  getBeltPropsCheckered
} from '../../../../../packages/custom-belt-lib/src/Belt';

const checkeredBelt: BeltProps[] = getBeltPropsCheckered('Checkered Belt', '#000000', '#FFFFFF');
</script>

<style scoped></style>
