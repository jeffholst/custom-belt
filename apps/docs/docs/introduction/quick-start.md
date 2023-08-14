# Quick Start

<div style="text-align: right;">
<SelectFramework
   :callback="frameworkCallback"
/>
</div>

<div v-if="selectedFramework === '0'">
  <h2>Using
    <a href='https://www.npmjs.com/package/custom-belt-lib' target='_blank'>
      custom-belt-lib
    </a> npm
  </h2>
</div>

<div v-if="selectedFramework === '1'">
   <h2>Using
     <a href='https://www.npmjs.com/package/vue-custom-belt' target='_blank'>
       vue-custom-belt
     </a> npm
   </h2>
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

```sh
npm install -D custom-belt-lib
```

</div>

<div v-if="selectedFramework === '1'">

```sh
npm install -D vue-custom-belt
```

</div>

### Up and running

<div v-if="selectedFramework === '0'">
<br/>

#### Example index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>White Belt</title>
  </head>
  <body>
    <div id="whiteBelt" />
    // this is where the belt will be rendered
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

#### Example main.js and main.ts

::: code-group

```js [JavaScript]
// main.js
import { CustomBelt, getCustomBeltInit, getBeltPropsSolid } from 'custom-belt-lib';

const whiteBelt = getBeltPropsSolid('Solid White Belt', '#FFFFFF');
const myDiv = document.getElementById('whiteBelt');
const customBeltInit = getCustomBeltInit([myDiv], whiteBelt);

new CustomBelt(customBeltInit);
```

```ts [TypeScript]
// main.ts
import {
  BeltProps,
  CustomBeltInit,
  CustomBelt,
  getCustomBeltInit,
  getBeltPropsSolid
} from 'custom-belt-lib';

const whiteBelt: BeltProps[] = getBeltPropsSolid('Solid White Belt', '#FFFFFF');
const myDiv: HTMLElement = document.getElementById('whiteBelt') as HTMLElement;
const customBeltInit: CustomBeltInit = getCustomBeltInit([myDiv], whiteBelt);
new CustomBelt(customBeltInit);
```

:::

</div>

<div v-if="selectedFramework === '1'">
<br/>

::: code-group

```vue [JavaScript]
<template>
  <CustomBelt :belt-props="whiteBelt" />
</template>

<script setup>
import { CustomBelt, getBeltPropsSolid } from 'vue-custom-belt';

const whiteBelt = getBeltPropsSolid('Solid White Belt', '#FFFFFF');
</script>
```

```vue [TypeScript]
<template>
  <CustomBelt :belt-props="whiteBelt" />
</template>

<script setup lang="ts">
import { BeltProps, CustomBelt, getBeltPropsSolid } from 'vue-custom-belt';

const whiteBelt: BeltProps[] = getBeltPropsSolid('Solid White Belt', '#FFFFFF');
</script>
```

:::

</div>

## Output

The above code will produce the image below.

<WhiteBelt style="padding-top: 50px; max-width: 600px;"/>

<script setup> // lang="ts" will break build
import { ref } from 'vue'
import WhiteBelt from '../components/WhiteBelt.vue';
import SelectFramework from '../components/SelectFramework.vue';

const selectedFramework = ref('0');

const frameworkCallback = (newValue) => {
  if (newValue) selectedFramework.value = newValue;
}
</script>
