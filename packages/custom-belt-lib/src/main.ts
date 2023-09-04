import {
  BeltProps,
  BeltCallbackType,
  combineBeltProps,
  getBeltAttributes,
  getBeltPropsSolid,
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

const whiteBelt: BeltProps[] = getBeltPropsSolid('Solid White Belt', '#FFFFFF');
const myDiv1: HTMLElement = document.getElementById('whiteBelt1') as HTMLElement;
const myDiv2: HTMLElement = document.getElementById('whiteBelt2') as HTMLElement;
const customBeltInit: CustomBeltInit = getCustomBeltInit([myDiv1, myDiv2], whiteBelt);
const ba1 = getBeltAttributes();
// update id for unit test
ba1.id = 'whiteBelt';
new CustomBelt(customBeltInit, ba1);

const flagBelts = combineBeltProps([usaBelt, MexicoBelt]);
const ba2 = getBeltAttributes('flagBeltsId');
// update id for unit test
ba2.id = 'flagBelts';
const flagBeltsInit: CustomBeltInit = getCustomBeltInit(['flagBelts1', 'flagBelts2'], flagBelts);
new CustomBelt(flagBeltsInit, ba2);
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
