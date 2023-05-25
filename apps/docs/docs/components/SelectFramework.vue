<template>
  <SelectControl
    label="Pick a Framework"
    :available-options="frameworks"
    :selected-option="selectedFramework"
    :callback="frameworkCallback"
    :show-nav="false"
  />
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue';
import SelectControl from './SelectControl.vue';

const props = defineProps<{
  callback: Function;
}>();

const frameworks = [
  { name: 'None', value: '0' },
  { name: 'Vue', value: '1' }
];

const currentInstance: any = getCurrentInstance();
console.log(
  `selectedFramework: ${currentInstance.appContext.config.globalProperties.selectedFramework}`
);
const selectedFramework = ref(currentInstance.appContext.config.globalProperties.selectedFramework);

const frameworkCallback = (newValue: string) => {
  if (currentInstance) {
    currentInstance.appContext.config.globalProperties.selectedFramework = newValue;
  }
  selectedFramework.value = newValue;
  props.callback(newValue);
};
</script>

<style scoped></style>
