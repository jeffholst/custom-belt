# Examples

<div style="text-align: right;">
<FrameworkSelect
   :callback="frameworkCallback"
/>
</div>

<div v-if="selectedFramework === '0'">

## JavaScript

Coming soon.

</div>
<div v-if="selectedFramework === '1'">

## Vue

Coming soon.

</div>

<script setup lang="ts">
import { ref } from 'vue'
import FrameworkSelect from '../components/FrameworkSelect.vue';

const selectedFramework = ref('0');

const frameworkCallback = (newValue) => {
  selectedFramework.value = newValue;
}
</script>
