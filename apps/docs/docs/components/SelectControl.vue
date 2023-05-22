<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  label: string;
  availableOptions: any;
  selectedOption: number | string;
  callback: Function;
  showNav: boolean | undefined;
}>();

const selection = ref(props.selectedOption);
const showNav = props.showNav === undefined ? false : props.showNav;

const computedName = (option: any) => {
  if (option.name !== undefined) return option.name;
  return option;
};

const computedValue = (option: any) => {
  if (option.value !== undefined) return option.value;
  else if (option.name !== undefined) return option.name;
  return option;
};

const findIndex = () => {
  return props.availableOptions.findIndex((opt: any) => opt.name === selection.value);
};

const clickLeft = () => {
  let newIndex;
  const index = findIndex();

  if (index === 0) newIndex = props.availableOptions.length - 1;
  else newIndex = index - 1;
  selection.value = props.availableOptions[newIndex].name;
  props.callback(selection.value);
};

const clickRight = () => {
  let newIndex;
  const index = findIndex();

  if (index === props.availableOptions.length - 1) newIndex = 0;
  else newIndex = index + 1;
  selection.value = props.availableOptions[newIndex].name;
  props.callback(selection.value);
};
</script>

<template>
  <button v-if="showNav" @click="clickLeft">
    <svg class="svgIcon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="M15.5 17C15.5 17.4045 15.2564 17.7691 14.8827 17.9239C14.509 18.0787 14.0789 17.9931 13.7929 17.7071L8.79289 12.7071C8.40237 12.3166 8.40237 11.6834 8.79289 11.2929L13.7929 6.29289C14.0789 6.00689 14.509 5.92134 14.8827 6.07612C15.2564 6.2309 15.5 6.59554 15.5 7V17Z"
        ></path>
      </g>
    </svg>
  </button>
  <label>
    {{ props.label }}
    <select v-model="selection" style="margin-left: 10px" @change="callback(selection)">
      <option
        v-for="option in availableOptions"
        :value="computedValue(option)"
        :key="computedValue(option)"
      >
        {{ computedName(option) }}
      </option>
    </select>
  </label>
  <button v-if="showNav" @click="clickRight">
    <svg class="svgIcon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="M8.5 17C8.5 17.4045 8.74364 17.7691 9.11732 17.9239C9.49099 18.0787 9.92111 17.9931 10.2071 17.7071L15.2071 12.7071C15.5976 12.3166 15.5976 11.6834 15.2071 11.2929L10.2071 6.29289C9.92111 6.00689 9.49099 5.92134 9.11732 6.07612C8.74364 6.2309 8.5 6.59554 8.5 7V17Z"
        ></path>
      </g>
    </svg>
  </button>
</template>

<style scoped>
.svgIcon {
  height: 40px;
  width: 40px;
  display: inline-block;
  vertical-align: middle;
  fill: black;
}

.dark .svgIcon {
  fill: white;
}

.svgIcon:hover {
  cursor: pointer;
  fill: gray;
}

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
