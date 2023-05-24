<template>
  <SelectControl
    label="Language"
    :available-options="languages"
    :selected-option="selectedLanguage"
    :callback="languageCallback"
    :show-nav="false"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SelectControl from './SelectControl.vue';

const props = defineProps<{
  selectedValue: string;
  callback: Function;
}>();

const languages = [
  { name: 'JavaScript', value: '0' },
  { name: 'Vue', value: '1' }
];
const selectedLanguage = ref('0');

const languageCallback = (newValue: string) => {
  selectedLanguage.value = newValue;
  props.callback(newValue);
};
</script>

<style scoped></style>
