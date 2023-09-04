<script setup lang="ts">
import { ref } from 'vue';
import CustomBelt from '../CustomBelt.vue';
import {
  BeltProps,
  StripePosition,
  getBeltAttributes,
  getBeltPropsStriped,
  combineBeltProps,
  BeltCallbackType
} from '../../../../custom-belt-lib/src/Belt';

const beltAttributes = getBeltAttributes('flagBeltsId');
beltAttributes.id = 'flagBeltsId'; // hard code id for testing

const flagBeltsCallback = (callbackType: BeltCallbackType, bp: BeltProps) => {
  if (callbackType === BeltCallbackType.Refresh) {
    flagBeltName.value = `${bp.belt.name as string}`;
  }
};

const usaBelt: BeltProps[] = getBeltPropsStriped(
  'USA Belt',
  '#BF0A30',
  '#FFFFFF',
  '#002868',
  1,
  'Black',
  true,
  'White',
  'Black',
  false,
  '',
  '',
  '',
  0,
  StripePosition.Right,
  0,
  4,
  'transition: all 2.0s ease;',
  3000,
  flagBeltsCallback
);

const flagBeltName = ref(usaBelt[0].belt.name);

const MexicoBelt = getBeltPropsStriped(
  'Mexico Belt',
  '#006847',
  '#FFFFFF',
  '#ce1127',
  2,
  'Black',
  true,
  'White',
  'Black',
  false,
  '',
  '',
  '',
  0,
  StripePosition.Right,
  0,
  4,
  'transition: all 2.0s ease;',
  3000,
  flagBeltsCallback
);

const flagBelts = combineBeltProps([usaBelt, MexicoBelt]);
</script>

<template>
  <h1 class="text-2xl font-bold text-slate-800 dark:text-white pb-10">
    Flag Belts ({{ flagBeltName }})
  </h1>
  <CustomBelt :belt-props="flagBelts" :belt-Attributes="beltAttributes" />
</template>

<style scoped></style>
