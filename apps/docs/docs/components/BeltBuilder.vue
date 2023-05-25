<template>
  <CustomBelt :belt-props="belt" />
  <div style="text-align: center">
    <input v-if="colorCount > 0" class="colorSwatch" type="color" v-model="color1" />
    <input v-if="colorCount > 1" class="colorSwatch" type="color" v-model="color2" />
    <input v-if="colorCount > 2" class="colorSwatch" type="color" v-model="color3" />
  </div>
  <div class="controls">
    <div class="control">
      <SelectControl
        label="Type"
        :available-options="beltGroups"
        :selected-option="selectedBeltGroup"
        :callback="beltGroupChanged"
        :show-nav="false"
      />
    </div>
    <div v-if="selectedBeltGroup === 0" class="controlWithIcon">
      <SelectControl
        label="Belt"
        :available-options="ibjjfSystem.belts"
        :selected-option="selectedIBJJFBelt"
        :callback="pickBeltIBJJF"
        :show-nav="true"
      />
    </div>
    <div v-else-if="selectedBeltGroup === 1" class="control">
      <SelectControl
        label="Belt"
        :available-options="BeltTypeStandard"
        :selected-option="selectedCustomBelt"
        :callback="pickBeltCustom"
        :show-nav="false"
      />
    </div>
    <div class="control">
      <SelectControl
        label="Stripes"
        :available-options="stripesAvailable"
        :selected-option="selectedStripeCount"
        :callback="updateStripeCount"
        :show-nav="false"
      />
    </div>
    <div v-if="selectedBeltGroup === 2" class="control">
      <SliderControl
        label="Refresh"
        :min="1"
        :max="10"
        :value="transitionDelay / 1000"
        :callback="updateTransitionSpeed"
      />
    </div>
  </div>
  <div v-if="selectedBeltGroup === 2" class="checkboxes">
    <CheckedBeltsGroup :callback="updateCheckedRandomBelts" />
  </div>
  <CopyToClipboard :allowCopyToClipboard="allowCopyToClipboard" :callback="copyURLToClipboard" />
  <div style="text-align: center">Double click belt to download</div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';

import CustomBelt from '../../../../packages/vue-custom-belt/src/components/CustomBelt.vue';
import BeltSystemJSON_IBJJF from '../../../../packages/custom-belt-lib/src/belt-systems/IBJJF.json';
import { BeltSystem } from '../../../../packages/custom-belt-lib/src/BeltSystem';
import {
  StripePosition,
  getBeltProps,
  getBeltPropsRandom,
  getBeltColorCount,
  type Belt,
  BeltType,
  BeltTypeStandard
} from '../../../../packages/custom-belt-lib/src/Belt';

import CopyToClipboard from './CopyToClipboard.vue';
import SelectControl from './SelectControl.vue';
import CheckedBeltsGroup from './CheckedBeltsGroup.vue';
import SliderControl from './SliderControl.vue';

const ibjjfSystem = new BeltSystem(JSON.stringify(BeltSystemJSON_IBJJF));

const beltGroups = [
  { name: 'IBJJF', value: 0 },
  { name: 'Custom', value: 1 },
  { name: 'Random', value: 2 }
];

const checkedRandomBelts = ref([] as Array<BeltType>);
let transitionDelay = 3000;
for (const beltType in BeltType) {
  checkedRandomBelts.value.push(beltType as BeltType);
}

const belt = ref();
const color1 = ref('#FF0000');
const color2 = ref('#FFFFFF');
const color3 = ref('#0000FF');
const colorCount = ref(0);
const selectedCustomBelt = ref('Striped' as BeltType);
const selectedIBJJFBelt = ref('White');
const selectedBeltGroup = ref(0);
const selectedStripeCount = ref(0);
const stripesAvailable = ref();

const updateBeltCustom = () => {
  belt.value = getBeltProps(
    'Belt Name',
    selectedCustomBelt.value,
    color1.value,
    color2.value,
    color3.value,
    0,
    '#000000',
    true,
    '#000000',
    '#000000',
    false,
    '',
    '',
    '#FFFFFF',
    selectedStripeCount.value,
    'Right',
    0,
    10,
    'My Title',
    'My Description',
    '',
    0
  );
};
watch(color1, () => {
  updateBeltCustom();
});

watch(color2, () => {
  updateBeltCustom();
});

watch(color3, () => {
  updateBeltCustom();
});

const pickBeltIBJJF = (newBeltName: string) => {
  selectedIBJJFBelt.value = newBeltName;
  setStripeSelect();
  const newBelt = ibjjfSystem.getBeltPropsByName(
    selectedIBJJFBelt.value,
    selectedStripeCount.value
  );
  belt.value = newBelt;
  colorCount.value = 0;
};

const pickBeltCustom = (newBeltType: BeltType) => {
  const count: number | undefined = getBeltColorCount(newBeltType);
  if (count) {
    colorCount.value = count;
  }
  selectedCustomBelt.value = newBeltType;
  updateBeltCustom();
};

const updateStripeCount = (newValue: number) => {
  selectedStripeCount.value = newValue;
  beltGroupChanged(selectedBeltGroup.value);
};

const beltGroupChanged = (groupValue: number) => {
  selectedBeltGroup.value = groupValue;
  setStripeSelect();
  if (groupValue === 0) {
    // IBJJF Belts
    pickBeltIBJJF(selectedIBJJFBelt.value);
  } else if (groupValue === 1) {
    // Custom Belts
    pickBeltCustom(selectedCustomBelt.value);
    updateBeltCustom();
  } else if (groupValue === 2) {
    // Random Belts
    colorCount.value = 0;
    belt.value = getBeltPropsRandom(
      true,
      false,
      selectedStripeCount.value,
      StripePosition.Right,
      'transition: all 1.0s ease-in-out;',
      checkedRandomBelts.value,
      transitionDelay
    );
  }
};

const setStripeSelect = () => {
  let myBelt: Belt | undefined = undefined;
  let ary: Number[] = [];
  switch (selectedBeltGroup.value) {
    case 0: // IBJJF
      myBelt = ibjjfSystem.getBeltByName(selectedIBJJFBelt.value);
      if (myBelt !== undefined) {
        for (let i = myBelt.minStripes; i <= myBelt.maxStripes; i++) {
          ary.push(i);
        }
        stripesAvailable.value = ary;
      }
      break;
    case 1: // Custom
    case 2: // Random
      stripesAvailable.value = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      break;
  }
  if (selectedStripeCount.value > stripesAvailable.value[stripesAvailable.value.length - 1]) {
    selectedStripeCount.value = stripesAvailable.value[0];
  } else if (selectedStripeCount.value < stripesAvailable.value[0]) {
    selectedStripeCount.value = stripesAvailable.value[0];
  }
};

const allowCopyToClipboard = computed(() => {
  if (selectedBeltGroup.value === 0) {
    return true;
  } else if (selectedBeltGroup.value === 1 && selectedCustomBelt.value !== 'Crazy') {
    return true;
  }
  return false;
});

const copyURLToClipboard = () => {
  if (typeof window !== 'undefined') {
    let url = window.location.origin + window.location.pathname;
    let parm = '';
    if (selectedBeltGroup.value === 0) {
      const belt = ibjjfSystem.getBeltByName(selectedIBJJFBelt.value);
      if (belt) {
        parm = `0|${belt.id}|${selectedStripeCount.value}`;
      }
    } else if (selectedBeltGroup.value === 1) {
      parm = `1|${selectedCustomBelt.value}|${selectedStripeCount.value}|${color1.value}|${color2.value}|${color3.value}`;
    }
    url = `${url}?belt=${encodeURIComponent(parm)}`;
    copyToClipboard(url);
  }
};

const copyToClipboard = async (text: string) => {
  if (navigator) {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Text copied to clipboard:', text);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }
};

const updateCheckedRandomBelts = (checkedItems: Array<BeltType>) => {
  checkedRandomBelts.value = checkedItems;
  beltGroupChanged(selectedBeltGroup.value);
};

const updateTransitionSpeed = (newSpeed: number) => {
  transitionDelay = newSpeed * 1000;
  beltGroupChanged(selectedBeltGroup.value);
};

if (typeof window !== 'undefined') {
  const params: any = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop: string) => searchParams.get(prop)
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let value = params.belt; // "some_value"

  if (value) {
    const parms = value.split('|');
    if (parms && parms.length === 3 && parms[0] === '0') {
      selectedBeltGroup.value = 0;
      const belt = ibjjfSystem.getBeltById(Number(parms[1]));
      if (belt !== undefined) {
        selectedIBJJFBelt.value = belt.name;
        selectedStripeCount.value = parseInt(parms[2]);
        pickBeltIBJJF(selectedIBJJFBelt.value);
      }
    } else if (parms && parms.length === 6 && parms[0] === '1') {
      selectedBeltGroup.value = 1;
      selectedCustomBelt.value = parms[1] as BeltType;
      selectedStripeCount.value = parseInt(parms[2]);
      color1.value = parms[3];
      color2.value = parms[4];
      color3.value = parms[5];
      setStripeSelect();
      pickBeltCustom(selectedCustomBelt.value);
    }
  } else {
    pickBeltIBJJF(selectedIBJJFBelt.value);
  }
}
</script>

<style scoped>
.controlWithIcon {
  min-width: 350px;
  background-color: #f6f6f7;
  color: white;
  padding: 13px;
  height: 4rem;
  border-radius: 0.5rem;
}

.dark .controlWithIcon {
  background-color: #434245;
}

.control {
  background-color: #f6f6f7;
  color: white;
  padding: 1rem;
  height: 4rem;
  border-radius: 0.5rem;
}

.dark .control {
  background-color: #434245;
}

.controls {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  padding-top: 20px;
  text-align: center;
}

.checkboxes {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  padding-top: 20px;
  text-align: center;
}

@media all and (min-width: 300px) {
  .checkboxes {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 600px) {
  /*Screen larger than 600px? 2 column*/
  .controls {
    grid-template-columns: repeat(2, 1fr);
  }
  .checkboxes {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 900px) {
  /*Screen larger than 900px? 3 columns*/
  .controls {
    grid-template-columns: repeat(3, 1fr);
  }
  .checkboxes {
    grid-template-columns: repeat(6, 1fr);
  }
}

.colorSwatch {
  width: 75px;
  height: 75px;
  cursor: pointer;
}
</style>
