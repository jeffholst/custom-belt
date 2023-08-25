<script setup lang="ts">
import { ref } from 'vue';
import CustomBelt from '../CustomBelt.vue';
import { BeltSystem } from '../../../../custom-belt-lib/src/BeltSystem';
import { BeltProps, BeltCallbackType } from '../../../../custom-belt-lib/src/Belt';
import BeltSystemJSON_IBJJF from '../../../../custom-belt-lib/src/belt-systems/IBJJF.json';

const ibjjfSystem: BeltSystem = new BeltSystem(JSON.stringify(BeltSystemJSON_IBJJF));

const IBBJFBeltsCallback = (callbackType: BeltCallbackType, beltProps: BeltProps) => {
  if (callbackType === BeltCallbackType.Refresh) {
    ibjjBeltName.value = beltProps.belt.name;
  }
};

const allIBJJBelts: BeltProps[] = ibjjfSystem.getBeltPropsAll(
  'transition: all 3.0s ease-in-out;',
  4000,
  IBBJFBeltsCallback
);

const ibjjBeltName = ref(allIBJJBelts[0].belt.name);
</script>

<template>
  <h1 class="text-2xl font-bold text-slate-800 dark:text-white pb-10">
    {{ ibjjfSystem.title }} Belts Rotating ({{ ibjjBeltName }})
  </h1>
  <CustomBelt :belt-props="allIBJJBelts" element-id="allIBJJBelts" />
</template>

<style scoped></style>
