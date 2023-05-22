<script setup lang="ts">
import { ref } from 'vue';

import { BeltType } from '../../../../packages/custom-belt-lib/src/Belt';

const props = defineProps<{
  callback: Function;
}>();

const checkedRandomBelts = ref([] as string[]);

for (const beltType in BeltType) {
  checkedRandomBelts.value.push(beltType as BeltType);
}

const checkboxChanged = () => {
  props.callback(checkedRandomBelts.value);
};
</script>

<template>
  <div v-for="beltType in BeltType" :key="beltType">
    <label>
      {{ beltType }}
      <input
        type="checkbox"
        :id="beltType"
        @change="checkboxChanged"
        :value="beltType"
        v-model="checkedRandomBelts"
      />
    </label>
  </div>
</template>

<style scoped></style>
