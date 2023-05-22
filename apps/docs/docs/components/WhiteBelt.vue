<template>
  <CustomBelt :belt-props="whiteBelt" />
</template>

<script setup lang="ts">
import { CustomBelt, getBeltPropsSolid } from 'vue-custom-belt';

const whiteBelt = getBeltPropsSolid('Solid White Belt', '#FFFFFF');
</script>

<style scoped></style>
