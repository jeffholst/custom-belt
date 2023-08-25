import {
  BeltProps,
  BeltCallbackType,
  combineBeltProps,
  getBeltPropsStriped,
  StripePosition
} from './Belt';

import { CustomBeltInit, CustomBelt, getCustomBeltInit } from './CustomBelt';

const flagBeltsCallback = (callbackType: BeltCallbackType, bp: BeltProps) => {
  if (callbackType === BeltCallbackType.Refresh) {
    const flagBeltName: HTMLInputElement = document.getElementById(
      'flagBeltName'
    ) as HTMLInputElement;
    flagBeltName.innerHTML = `${bp.belt.name as string}`;
  }
};

const usaBelt: BeltProps[] = getBeltPropsStriped(
  'USA Belt',
  '#BF0A30',
  '#FFFFFF',
  '#002868',
  1,
  'Black',
  true,
  'White',
  'Black',
  false,
  '',
  '',
  '',
  0,
  StripePosition.Right,
  0,
  4,
  'transition: all 2.0s ease;',
  3000,
  flagBeltsCallback
);

flagBeltsCallback(BeltCallbackType.Refresh, usaBelt[0]);

const MexicoBelt = getBeltPropsStriped(
  'Mexico Belt',
  '#006847',
  '#FFFFFF',
  '#ce1127',
  2,
  'Black',
  true,
  'White',
  'Black',
  false,
  '',
  '',
  '',
  0,
  StripePosition.Right,
  0,
  4,
  'transition: all 2.0s ease;',
  3000,
  flagBeltsCallback
);

const flagBelts = combineBeltProps([usaBelt, MexicoBelt]);
const flagBeltsInit: CustomBeltInit = getCustomBeltInit(['flagBelts'], flagBelts);
new CustomBelt(flagBeltsInit, 'flagBelts');
/*
const whiteBelt: BeltProps[] = getBeltPropsSolid('Solid White Belt', '#FFFFFF');
const blackBelt: BeltProps[] = getBeltPropsSolid('Solid Black Belt', '#000000');
const purpleBelt: BeltProps[] = getBeltPropsSolid('Solid Purple Belt', '#BF40BF');
const myDiv: HTMLElement = document.getElementById('whiteBelt') as HTMLElement;
const customBeltInit1: CustomBeltInit = getCustomBeltInit([myDiv], [], [], whiteBelt);
const customBeltInit2: CustomBeltInit = getCustomBeltInit([], [], ['blackBelt'], blackBelt);
const customBeltInit3: CustomBeltInit = getCustomBeltInit([], ['purpleBelt'], [], purpleBelt);
new CustomBelt(customBeltInit1);
new CustomBelt(customBeltInit2);
new CustomBelt(customBeltInit3);
*/
