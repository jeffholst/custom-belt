# Quick Start

<div style="text-align: right;">
<SelectFramework
   :callback="frameworkCallback"
/>
</div>

<div v-if="selectedFramework === '0'">
<h2>Using
<a href='' target='_blank'>vanilla-custom-belt</a> npm</h2>
</div>

<div v-if="selectedFramework === '1'">
<h2>Using
<a href='https://www.npmjs.com/package/vue-custom-belt' target='_blank'>vue-custom-belt</a> npm</h2>
</div>

## Try it Online

<div v-if="selectedFramework === '0'">
Coming soon.
</div>

<div v-if="selectedFramework === '1'">
You can try <strong>vue-custom-belt</strong> directly in your browser on
<a href='https://stackblitz.com/edit/custom-belt-demo?file=src%2FApp.vue' target='_blank'>
StackBlitz
</a>.
</div>

## Installation

<div v-if="selectedFramework === '0'">

```html
Coming soon..
```

</div>

<div v-if="selectedFramework === '1'">

```sh
npm install -D vue-custom-belt
```

</div>

### Up and running

<div v-if="selectedFramework === '0'">

```html
Coming soon..
```

</div>

<span v-if="selectedFramework === '1'">

::: code-group

```vue [TypeScript]
<template>
  <CustomBelt :belt-props="whiteBelt" />
</template>

<script setup lang="ts">
import { type BeltProps, CustomBelt, getBeltPropsSolid } from 'vue-custom-belt';

const whiteBelt: BeltProps[] = getBeltPropsSolid('Solid White Belt', '#FFFFFF');
</script>
```

```vue [JavaScript]
<template>
  <CustomBelt :belt-props="whiteBelt" />
</template>

<script setup>
import { CustomBelt, getBeltPropsSolid } from 'vue-custom-belt';

const whiteBelt = getBeltPropsSolid('Solid White Belt', '#FFFFFF');
</script>
```

:::

</span>

## Output

The above code will produce the image below.

<WhiteBelt style="padding-top: 50px; max-width: 600px;"/>

<script setup lang="ts">
import { ref } from 'vue'
import WhiteBelt from '../components/WhiteBelt.vue';
import SelectFramework from '../components/SelectFramework.vue';

const selectedFramework = ref('0');

const frameworkCallback = (newValue) => {
  if (newValue) selectedFramework.value = newValue;
}
</script>
