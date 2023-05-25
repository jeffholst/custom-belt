<template>
  <SelectControl
    label="Framework"
    :available-options="languages"
    :selected-option="selectedLanguage"
    :callback="languageCallback"
    :show-nav="false"
  />
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, onBeforeMount } from 'vue';
import SelectControl from './SelectControl.vue';

const props = defineProps<{
  callback: Function;
}>();

const languages = [
  { name: 'None', value: '0' },
  { name: 'Vue', value: '1' }
];

let currentInstance: any;

const selectedLanguage = ref('0');

onBeforeMount(() => {
  currentInstance = getCurrentInstance();
  if (currentInstance) {
    languageCallback(currentInstance.appContext.config.globalProperties.selectedLanguage);
  }
});

const languageCallback = (newValue: string) => {
  if (currentInstance) {
    currentInstance.appContext.config.globalProperties.selectedLanguage = newValue;
  }
  selectedLanguage.value = newValue;
  props.callback(newValue);
};
</script>

<style scoped></style>
