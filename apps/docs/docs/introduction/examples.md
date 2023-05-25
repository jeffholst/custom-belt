# Examples

<div style="text-align: right;">
<SelectFramework
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
import SelectFramework from '../components/SelectFramework.vue';

const selectedFramework = ref('0');

const frameworkCallback = (newValue) => {
  if (newValue) selectedFramework.value = newValue;
}
</script>
