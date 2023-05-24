# Examples

<div style="text-align: right;">
<LanguageSelect
   :selected-value="selectedLanguage"
   :callback="languageCallback"
/>
</div>

<div v-if="selectedLanguage === '0'">

## JavaScript

</div>
<div v-if="selectedLanguage === '1'">

## Vue

</div>

<script setup lang="ts">
import { ref } from 'vue'
import LanguageSelect from '../components/LanguageSelect.vue';

const selectedLanguage = ref('0');

const languageCallback = (newValue) => {
  selectedLanguage.value = newValue;
}
</script>
