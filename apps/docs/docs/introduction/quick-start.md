# Quick Start

<div style="text-align: right;">
<SelectFramework
   :callback="frameworkCallback"
/>
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

## Up and running

<div v-if="selectedFramework === '0'">

```html
Coming soon..
```

</div>
<div v-if="selectedFramework === '1'">

::: code-group

```vue [TypeScript]
// sample .vue file
<template>
  <CustomBelt :belt-props="whiteBelt" />
</template>

<script setup lang="ts">
import { type BeltProps, CustomBelt, getBeltPropsSolid } from 'vue-custom-belt';

const whiteBelt: BeltProps[] = getBeltPropsSolid('Solid White Belt', '#FFFFFF');
</script>
```

```vue [JavaScript]
// sample .vue file
<template>
  <CustomBelt :belt-props="whiteBelt" />
</template>

<script setup>
import { CustomBelt, getBeltPropsSolid } from 'vue-custom-belt';

const whiteBelt = getBeltPropsSolid('Solid White Belt', '#FFFFFF');
</script>
```

:::

</div>

## Output

The above code will produce the image below.

<WhiteBelt style="padding-top: 50px; max-width: 600px;"/>

<script setup lang="ts">
import { ref } from 'vue'
import WhiteBelt from '../components/WhiteBelt.vue';
import SelectFramework from '../components/SelectFramework.vue';

const selectedFramework = ref('0');

const frameworkCallback = (newValue) => {
  selectedFramework.value = newValue;
}
</script>
