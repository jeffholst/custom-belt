# Quick Start

Begin by installating the appropriate npm package to your existing project.

## Installation

::: code-group

```sh [Vue]
npm install -D vue-custom-belt
```

```html [JavaScript]
Coming soon. 
```

:::

## Up and running

::: code-group

```vue [Vue]
<template>
  <CustomBelt :belt-props="whiteBelt" />
</template>

<script setup lang="ts">
import { CustomBelt, getBeltPropsSolid } from 'vue-custom-belt';

const whiteBelt = getBeltPropsSolid('Solid White Belt', '#FFFFFF');
</script>

<style scoped></style>
```

```html [JavaScript]
Coming soon.
```

:::

## Output

The above code should produce the image below.

<template style="display: inline;">
  <WhiteBelt style="padding-top: 50px; max-width: 600px;"/>
</template>

<script setup lang="ts">
import WhiteBelt from '../components/WhiteBelt.vue';
</script>
