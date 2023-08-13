<template>
  <div ref="svgDiv" :id="svgUniqueId" class="customBelt"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { BeltProps, getBeltUniqueId } from '../../../custom-belt-lib/src/Belt';
import {
  CustomBelt,
  CustomBeltInit,
  getCustomBeltInit
} from '../../../custom-belt-lib/src/CustomBelt';

const props = defineProps<{
  beltProps: BeltProps[];
}>();

const svgUniqueId = getBeltUniqueId();
const svgDiv = ref(null);
let myBeltBuilder: CustomBelt | undefined = undefined;

onMounted(() => {
  build();
});

watch(
  () => props.beltProps,
  () => {
    build();
  }
);

const build = () => {
  const svgElement = svgDiv.value as unknown as HTMLElement;
  if (svgElement != null) {
    const customBeltInit: CustomBeltInit = getCustomBeltInit([svgElement], props.beltProps);
    if (myBeltBuilder != undefined) myBeltBuilder.destroy();
    myBeltBuilder = new CustomBelt(customBeltInit);
  }
};
</script>

<style>
.customBelt:hover {
  cursor: pointer;
}
</style>
