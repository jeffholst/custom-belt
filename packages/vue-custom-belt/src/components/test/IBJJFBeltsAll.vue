<script setup lang="ts">
import CustomBelt from '../CustomBelt.vue';
import { BeltSystem } from '../../../../custom-belt-lib/src/BeltSystem';
import { getBeltAttributes } from '../../../../custom-belt-lib/src/Belt';
import BeltSystemJSON_IBJJF from '../../../../custom-belt-lib/src/belt-systems/IBJJF.json';

const beltAttributes = getBeltAttributes('ibjjfBeltsId');
beltAttributes.id = 'ibjjfBeltsId'; // hard code id for testing
beltAttributes.testing = true;
const ibjjfSystem: BeltSystem = new BeltSystem(JSON.stringify(BeltSystemJSON_IBJJF));
</script>

<template>
  <h1 class="pt-6 text-2xl font-bold text-slate-800 dark:text-white pb-10">
    {{ ibjjfSystem.title }} Belts
  </h1>
  <div class="grid grid-cols-2 gap-4">
    <div v-for="(belt, index) in ibjjfSystem.belts" :key="index">
      <h2 class="text-lg font-bold text-slate-800 dark:text-white py-5">
        {{ belt.name }}
      </h2>
      <CustomBelt
        :belt-props="ibjjfSystem.getBeltPropsByName(belt.name)"
        :belt-attributes="beltAttributes"
      />
    </div>
  </div>
</template>

<style scoped></style>
