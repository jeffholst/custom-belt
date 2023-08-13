<script setup lang="ts">
import CustomBelt from '../CustomBelt.vue';
import { BeltProps, BeltType, getBeltPropsRandom } from '../../../../custom-belt-lib/src/Belt';

let randomCrazy: BeltProps[] = getBeltPropsRandom(
  true,
  false,
  0,
  undefined,
  'transition: all 3.0s ease-in-out;',
  [BeltType.Crazy],
  4000
);

let randomCheckered: BeltProps[] = getBeltPropsRandom(
  true,
  false,
  0,
  undefined,
  'transition: all 3.0s ease-in-out;',
  [BeltType.Checkered],
  4000
);

let randomSolid: BeltProps[] = getBeltPropsRandom(
  true,
  false,
  0,
  undefined,
  'transition: all 3.0s ease-in-out;',
  [BeltType.Solid],
  4000
);

let randomStriped: BeltProps[] = getBeltPropsRandom(
  true,
  false,
  0,
  undefined,
  'transition: all 3.0s ease-in-out;',
  [BeltType.Striped],
  4000
);

let randomCoral: BeltProps[] = getBeltPropsRandom(
  true,
  false,
  0,
  undefined,
  'transition: all 3.0s ease-in-out;',
  [BeltType.Coral],
  4000
);

let randomSplit: BeltProps[] = getBeltPropsRandom(
  true,
  false,
  0,
  undefined,
  'transition: all 3.0s ease-in-out;',
  [BeltType.Split],
  4000
);
</script>

<template>
  <h1 class="text-2xl font-bold text-slate-800 dark:text-white py-10">Random Belts</h1>
  <div class="columns-3">
    <div>
      <h2 class="text-lg font-bold text-slate-800 dark:text-white py-5">Solid</h2>
      <CustomBelt :belt-props="randomSolid" />
    </div>
    <div>
      <h2 class="text-lg font-bold text-slate-800 dark:text-white py-5">Split</h2>
      <CustomBelt :belt-props="randomSplit" />
    </div>
    <div>
      <h2 class="text-lg font-bold text-slate-800 dark:text-white py-5">Striped</h2>
      <CustomBelt :belt-props="randomStriped" />
    </div>
    <div>
      <h2 class="text-lg font-bold text-slate-800 dark:text-white py-5">Checkered</h2>
      <CustomBelt :belt-props="randomCheckered" />
    </div>
    <div>
      <h2 class="text-lg font-bold text-slate-800 dark:text-white py-5">Coral</h2>
      <CustomBelt :belt-props="randomCoral" />
    </div>
    <div>
      <h2 class="text-lg font-bold text-slate-800 dark:text-white py-5">Crazy</h2>
      <CustomBelt :belt-props="randomCrazy" />
    </div>
  </div>
</template>

<style scoped></style>
