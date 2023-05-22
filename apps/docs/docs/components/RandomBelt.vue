<template>
  <slot></slot><span v-if="showRefresh">(<a @click="refresh">refresh</a>)</span>
  <CustomBelt :belt-props="randomBelt" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

import CustomBelt from '../../../../packages/vue-custom-belt/src/components/CustomBelt.vue';
import { BeltType, getBeltPropsRandom } from '../../../../packages/custom-belt-lib/src/Belt';

defineProps({ showRefresh: Boolean });

const randomBelt = ref(
  getBeltPropsRandom(undefined, undefined, undefined, undefined, undefined, [
    BeltType.Solid,
    BeltType.Striped,
    BeltType.Coral,
    BeltType.Split,
    BeltType.Checkered,
    BeltType.Crazy
  ])
);

const refresh = () => {
  randomBelt.value = getBeltPropsRandom(undefined, undefined, undefined, undefined, undefined, [
    BeltType.Solid,
    BeltType.Striped,
    BeltType.Coral,
    BeltType.Split,
    BeltType.Checkered,
    BeltType.Crazy
  ]);
};
</script>

<style scoped>
a:hover {
  cursor: pointer;
}
</style>
