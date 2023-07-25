import { describe, it, expect } from 'vitest';
import { getBeltPropsSolid, BeltProps } from '../../src/Belt';
import { CustomBeltInit, CustomBelt, getCustomBeltInit } from '../../src/CustomBelt';

describe('constructor instantiation', () => {
  it(`has null input returns false`, () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const customBelt = new CustomBelt(null);
    expect(customBelt.isValid()).toBeFalsy();
  });
});

describe('build svgString', () => {
  it(`returns valid whitebelt`, () => {
    const whiteBelt: BeltProps[] = getBeltPropsSolid('Solid White Belt', '#00FF00');
    const customBeltInit: CustomBeltInit = getCustomBeltInit([], null, null, whiteBelt);
    const customBelt = new CustomBelt(customBeltInit);
    expect(customBelt.svgString).toMatchSnapshot();
  });
});

/*
const whiteBelt: BeltProps[] = getBeltPropsSolid('Solid White Belt', '#00FF00');
const myDiv: HTMLElement = document.getElementById('whiteBelt') as HTMLElement;
const customBeltInit: CustomBeltInit = getCustomBeltInit([myDiv], null, null, whiteBelt);
new CustomBelt(customBeltInit);
*/
