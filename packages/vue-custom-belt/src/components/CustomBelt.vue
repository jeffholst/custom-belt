<template>
  <div
    v-if="isValid"
    :id="myBelt != undefined ? myBelt.id : ''"
    v-html="svgHTML"
    :onClick="oneClick"
    class="customBelt"
    :data-version="myBelt != undefined ? myBelt.version : ''"
    :data-belt="myBelt != undefined ? JSON.stringify(myBelt.belt) : ''"
  ></div>
</template>

<script setup lang="ts">
import { computed, ref, watch, onUnmounted } from 'vue';
import { getBeltPropsRandom, BeltProps, BeltCallbackType } from '../../../custom-belt-lib/src/Belt';
import { BeltBuilder } from '../../../custom-belt-lib/src/BeltBuilder';

const index = ref(0);
const props = defineProps<{
  beltProps: BeltProps[];
}>();

const svgHTML = ref('');
const isValid = ref(false);
const myBelt = ref(props.beltProps ? props.beltProps[index.value] : undefined);
const clickDelay: number = 700;
const clickCount = ref(0);
let clickTimer: any = null;
let refreshIntervalId: any = undefined;

watch(
  () => props.beltProps,
  () => {
    updateProps();
  }
);

const transitionNextBelt = () => {
  if (myBelt.value) {
    const originalId: string = myBelt.value.id;
    index.value = index.value === props.beltProps.length - 1 ? 0 : index.value + 1;
    let nextBelt: BeltProps = props.beltProps[index.value];
    if (
      nextBelt.randomSettings.includeBelts !== undefined &&
      nextBelt.randomSettings.includeBelts.length > 0
    ) {
      const randomBelt: BeltProps[] = getBeltPropsRandom(
        nextBelt.randomSettings.hasPatch,
        nextBelt.randomSettings.hasProfessorPatch,
        nextBelt.randomSettings.stripeCount,
        nextBelt.randomSettings.stripePosition,
        nextBelt.transitionCSS,
        nextBelt.randomSettings.includeBelts,
        nextBelt.refreshInterval,
        nextBelt.callback
      );
      nextBelt = randomBelt[0];
    }
    nextBelt.id = originalId; // keep the same element id
    myBelt.value = nextBelt;
    doCallback(null, BeltCallbackType.Refresh);
    refreshIntervalId = setTimeout(transitionNextBelt, myBelt.value.refreshInterval);
  }
};

const callback = (svgString: string) => {
  isValid.value = true;
  svgHTML.value = svgString;
};

const updateProps = () => {
  new BeltBuilder(props.beltProps, callback);

  /*
  if (!props.beltProps) {
    isValid.value = false;
  } else {
    isValid.value = true;
    index.value = 0;
    myBelt.value = props.beltProps[index.value];
    if (
      myBelt.value != undefined &&
      myBelt.value.refreshInterval != undefined &&
      myBelt.value.refreshInterval > 0
    ) {
      if (refreshIntervalId != undefined) {
        clearInterval(refreshIntervalId);
      }
      refreshIntervalId = setTimeout(transitionNextBelt, myBelt.value.refreshInterval);
    }
  }
  */
};

if (typeof window !== 'undefined') {
  updateProps();
}

onUnmounted(() => {
  if (refreshIntervalId != undefined) {
    clearInterval(refreshIntervalId);
  }
});

const oneClick = (event: any) => {
  if (myBelt.value != undefined) {
    clickCount.value++;
    if (clickCount.value === 1) {
      clickTimer = setTimeout(function () {
        doCallback(event, BeltCallbackType.Click);
        clickCount.value = 0;
      }, clickDelay);
    } else {
      clearTimeout(clickTimer);
      downLoadSVG(event);
      doCallback(event, BeltCallbackType.DoubleClick);
      clickCount.value = 0;
    }
  }
};

const doCallback = (event: Event | null, callbackType: BeltCallbackType) => {
  if (myBelt.value != undefined && myBelt.value.callback != null) {
    myBelt.value.callback(event, callbackType, myBelt.value);
  }
};

const downLoadSVG = (event: any) => {
  const svgContent = event.target.closest('svg').outerHTML;
  const blob = new Blob([svgContent], {
    type: 'image/svg+xml'
  });
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = URL.createObjectURL(blob);
  link.download = 'svg-belt';

  document.body.appendChild(link);
  link.click();
  link.remove();
};

const additionalStyles = () => {
  return transition();
};

const transition = () => {
  if (myBelt.value === undefined) {
    return '';
  }
  if (!myBelt.value.transitionCSS) return '';
  else return `${myBelt.value.transitionCSS};`;
};

const borderColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.borderColor}; ${additionalStyles()}`;
});

const s1l1Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s1l1Color}; ${additionalStyles()}`;
});

const s1l2aColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s1l2aColor}; ${additionalStyles()}`;
});

const s1l2bColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s1l2bColor}; ${additionalStyles()}`;
});

const s1l3Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s1l3Color}; ${additionalStyles()}`;
});

const s2l1Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s2l1Color}; ${additionalStyles()}`;
});

const s2l2aColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s2l2aColor}; ${additionalStyles()}`;
});

const s2l2bColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s2l2bColor}; ${additionalStyles()}`;
});

const s2l3Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s2l3Color}; ${additionalStyles()}`;
});

const s3l1Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s3l1Color}; ${additionalStyles()}`;
});

const s3l2aColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s3l2aColor}; ${additionalStyles()}`;
});

const s3l2bColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s3l2bColor}; ${additionalStyles()}`;
});

const s3l3Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s3l3Color}; ${additionalStyles()}`;
});

const s4l1Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s4l1Color}; ${additionalStyles()}`;
});

const s4l2aColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s4l2aColor}; ${additionalStyles()}`;
});

const s4l2bColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s4l2bColor}; ${additionalStyles()}`;
});

const s4l3Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s4l3Color}; ${additionalStyles()}`;
});

const s5l1Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s5l1Color}; ${additionalStyles()}`;
});

const s5l2aColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s5l2aColor}; ${additionalStyles()}`;
});

const s5l2bColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s5l2bColor}; ${additionalStyles()}`;
});

const s5l3Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s5l3Color}; ${additionalStyles()}`;
});

const s6l1Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s6l1Color}; ${additionalStyles()}`;
});

const s6l2aColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s6l2aColor}; ${additionalStyles()}`;
});

const s6l2bColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s6l2bColor}; ${additionalStyles()}`;
});

const s6l3Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s6l3Color}; ${additionalStyles()}`;
});

const s7l1Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s7l1Color}; ${additionalStyles()}`;
});

const s7l2aColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s7l2aColor}; ${additionalStyles()}`;
});

const s7l2bColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s7l2bColor}; ${additionalStyles()}`;
});

const s7l3Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s7l3Color}; ${additionalStyles()}`;
});

const s8l1Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s8l1Color}; ${additionalStyles()}`;
});

const s8l2aColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s8l2aColor}; ${additionalStyles()}`;
});

const s8l2bColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s8l2bColor}; ${additionalStyles()}`;
});

const s8l3Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s8l3Color}; ${additionalStyles()}`;
});

const s9l1Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s9l1Color}; ${additionalStyles()}`;
});

const s9l2aColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s9l2aColor}; ${additionalStyles()}`;
});

const s9l2bColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s9l2bColor}; ${additionalStyles()}`;
});

const s9l3Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s9l3Color}; ${additionalStyles()}`;
});

const s10l1Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s10l1Color}; ${additionalStyles()}`;
});

const s10l2aColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s10l2aColor}; ${additionalStyles()}`;
});

const s10l2bColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s10l2bColor}; ${additionalStyles()}`;
});

const s10l3Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s10l3Color}; ${additionalStyles()}`;
});

const s11l1Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s11l1Color}; ${additionalStyles()}`;
});

const s11l2aColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s11l2aColor}; ${additionalStyles()}`;
});

const s11l2bColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s11l2bColor}; ${additionalStyles()}`;
});

const s11l3Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s11l3Color}; ${additionalStyles()}`;
});

const s12l1Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s12l1Color}; ${additionalStyles()}`;
});

const s12l2aColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s12l2aColor}; ${additionalStyles()}`;
});

const s12l2bColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s12l2bColor}; ${additionalStyles()}`;
});

const s12l3Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s12l3Color}; ${additionalStyles()}`;
});

const s13l1Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s13l1Color}; ${additionalStyles()}`;
});

const s13l2aColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s13l2aColor}; ${additionalStyles()}`;
});

const s13l2bColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s13l2bColor}; ${additionalStyles()}`;
});

const s13l3Color = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.s13l3Color}; ${additionalStyles()}`;
});

const hasPatch = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `visibility: ${myBelt.value.hasPatch ? 'visible' : 'hidden'};`;
});

const hasProfessorPatch = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `visibility: ${myBelt.value.hasProfessorPatch ? 'visible' : 'hidden'};`;
});

const professorPatchColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.professorPatch}; ${additionalStyles()}`;
});

const professorBorderColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.professorBorder}; ${additionalStyles()}`;
});

const patchColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.patchColor}; ${additionalStyles()}`;
});

const patchBorderColor = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${myBelt.value.patchBorder}; ${additionalStyles()}`;
});

const stripeStyle = (stripe: number, fill: string) => {
  if (myBelt.value === undefined) {
    return '';
  }
  return `fill: ${fill}; ${additionalStyles()} visibility: ${
    myBelt.value.stripeCount > 0 && myBelt.value.stripeCount >= stripe ? 'visible' : 'hidden'
  };`;
};

const getStripeIndex = (index: number): number => {
  if (myBelt.value === undefined) {
    return -1;
  }
  if (myBelt.value.stripePosition === 'Left') {
    return index;
  } else {
    return 11 - index;
  }
};

const stripe1 = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return stripeStyle(getStripeIndex(1), myBelt.value.stripeColor1);
});

const stripe2 = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return stripeStyle(getStripeIndex(2), myBelt.value.stripeColor2);
});

const stripe3 = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return stripeStyle(getStripeIndex(3), myBelt.value.stripeColor3);
});

const stripe4 = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return stripeStyle(getStripeIndex(4), myBelt.value.stripeColor4);
});

const stripe5 = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return stripeStyle(getStripeIndex(5), myBelt.value.stripeColor5);
});

const stripe6 = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return stripeStyle(getStripeIndex(6), myBelt.value.stripeColor6);
});

const stripe7 = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return stripeStyle(getStripeIndex(7), myBelt.value.stripeColor7);
});

const stripe8 = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return stripeStyle(getStripeIndex(8), myBelt.value.stripeColor8);
});

const stripe9 = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return stripeStyle(getStripeIndex(9), myBelt.value.stripeColor9);
});

const stripe10 = computed(() => {
  if (myBelt.value === undefined) {
    return '';
  }
  return stripeStyle(getStripeIndex(10), myBelt.value.stripeColor10);
});
</script>

<style>
.customBelt:hover {
  cursor: pointer;
}
</style>
