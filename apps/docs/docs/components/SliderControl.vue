<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
  label: string;
  min: number;
  max: number;
  value: number;
  callback: Function;
}>();

const sliderValue = ref(props.value as number);
const sliderUpdated = () => {
  props.callback(sliderValue.value);
};

const labelDetails = computed(() => {
  let secValue = '';
  const seconds = sliderValue.value;
  if (seconds == 1) secValue = 'sec.';
  else secValue = 'secs.';

  return `${props.label} (${seconds} ${secValue})`;
});
</script>

<template>
  <div style="padding-top: 4px">
    <label>
      {{ labelDetails }}
      <input type="range" @change="sliderUpdated" :min="min" :max="max" v-model="sliderValue" />
    </label>
  </div>
</template>

<style scoped>
label {
  color: gray;
}

.dark label {
  color: #ffffff;
}

select {
  /*Reset*/
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 0;
  outline: 0;
  font: inherit;
  /*Personalize*/
  height: 2em;
  padding: 0 4em 0 1em;
  background: url(/caret-black.svg) no-repeat right 0.8em center/1.4em,
    linear-gradient(to left, rgba(0, 0, 0, 0.3) 3em, rgba(0, 0, 0, 0.2) 3em);
  color: black;
  border-radius: 0.25em;
  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  /*<option> colors*/
  /*Remove focus outline*/
  /*Remove IE arrow*/
}

.dark select {
  background: url(/caret-white.svg) no-repeat right 0.8em center/1.4em,
    linear-gradient(to left, rgba(0, 0, 0, 0.3) 3em, rgba(0, 0, 0, 0.2) 3em);
  color: white;
}

select option {
  color: inherit;
  background-color: #320a28;
}

select:focus {
  outline: none;
}

select::-ms-expand {
  display: none;
}
</style>
