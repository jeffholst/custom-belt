# Quick Start

<div style="text-align: right;">
<LanguageSelect
   :selected-value="selectedLanguage"
   :callback="languageCallback"
/>
</div>

## Installation

<div v-if="selectedLanguage === '0'">

```html
Coming soon..
```

</div>
<div v-if="selectedLanguage === '1'">

```sh
npm install -D vue-custom-belt
```

</div>

## Up and running

<div v-if="selectedLanguage === '0'">

```html
Coming soon..
```

</div>
<div v-if="selectedLanguage === '1'">

```vue
<template>
  <CustomBelt :belt-props="whiteBelt" />
</template>

<script setup lang="ts">
import { CustomBelt, getBeltPropsSolid } from 'vue-custom-belt';

const whiteBelt = getBeltPropsSolid('Solid White Belt', '#FFFFFF');
</script>

<style scoped></style>
```

</div>

## Output

The above code should produce the image below.

<WhiteBelt style="padding-top: 50px; max-width: 600px;"/>

<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
import WhiteBelt from '../components/WhiteBelt.vue';
import LanguageSelect from '../components/LanguageSelect.vue';

const selectedLanguage = ref('0');
const myData = useData();

const languageCallback = (newValue) => {
  selectedLanguage.value = newValue;
}
</script>
