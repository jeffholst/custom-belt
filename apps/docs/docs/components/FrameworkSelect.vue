<template>
  <SelectControl
    label="Framework"
    :available-options="frameworks"
    :selected-option="selectedFramework"
    :callback="frameworkCallback"
    :show-nav="false"
  />
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, onBeforeMount } from 'vue';
import SelectControl from './SelectControl.vue';

const props = defineProps<{
  callback: Function;
}>();

const frameworks = [
  { name: 'None', value: '0' },
  { name: 'Vue', value: '1' }
];

let currentInstance: any;

const selectedFramework = ref('0');

onBeforeMount(() => {
  currentInstance = getCurrentInstance();
  if (currentInstance) {
    frameworkCallback(currentInstance.appContext.config.globalProperties.selectedLanguage);
  }
});

const frameworkCallback = (newValue: string) => {
  if (currentInstance) {
    currentInstance.appContext.config.globalProperties.selectedLanguage = newValue;
  }
  selectedFramework.value = newValue;
  props.callback(newValue);
};
</script>

<style scoped></style>
