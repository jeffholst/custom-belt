import { getBeltPropsSolid, BeltProps } from './Belt';

import { CustomBeltInit, CustomBelt, getCustomBeltInit } from './CustomBelt';

const whiteBelt: BeltProps[] = getBeltPropsSolid('Solid White Belt', '#00FF00');
const myDiv: HTMLElement = document.getElementById('whiteBelt') as HTMLElement;
const customBeltInit: CustomBeltInit = getCustomBeltInit([myDiv], null, null, whiteBelt);
new CustomBelt(customBeltInit);
