<template>
  <div ref="svgDiv" :id="svgUniqueId" v-html="svgHTML" class="customBelt"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { BeltProps, getBeltUniqueId } from '../../../custom-belt-lib/src/Belt';
import {
  BeltBuilder,
  CustomBeltInit,
  getCustomBeltInit
} from '../../../custom-belt-lib/src/BeltBuilder';

const props = defineProps<{
  beltProps: BeltProps[];
}>();

const svgUniqueId = getBeltUniqueId();
const svgDiv = ref(null);
const svgHTML = ref('');
let myBeltBuilder: BeltBuilder | undefined = undefined;

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
    const customBeltInit: CustomBeltInit = getCustomBeltInit(
      [svgElement],
      null,
      null,
      props.beltProps
    );
    if (myBeltBuilder != undefined) myBeltBuilder.destroy();
    myBeltBuilder = new BeltBuilder(customBeltInit);
  }
};
</script>

<style>
.customBelt:hover {
  cursor: pointer;
}
</style>
