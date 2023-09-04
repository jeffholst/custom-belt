import { describe, it, expect, test } from 'vitest';
import { getBeltAttributes, getBeltPropsSolid, BeltProps } from '../../src/Belt';
import { CustomBeltInit, CustomBelt, getCustomBeltInit } from '../../src/CustomBelt';
import { setup, createPage } from 'vite-test-utils';

describe('constructor instantiation', () => {
  it(`has null input returns false`, () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const customBelt = new CustomBelt(null);
    expect(customBelt.isValid()).toBeFalsy();
  });
});

describe('build svgString with no BeltAttributes', () => {
  it(`returns valid whitebelt`, () => {
    const whiteBelt: BeltProps[] = getBeltPropsSolid('Solid White Belt', '#00FF00');
    const customBeltInit: CustomBeltInit = getCustomBeltInit([], whiteBelt);
    const beltAttributes = getBeltAttributes();
    beltAttributes.id = ''; // blank out id for unit test
    const customBelt = new CustomBelt(customBeltInit, beltAttributes);
    expect(customBelt.svgString).toMatchSnapshot();
  });
});

describe('build svgString with width 100% BeltAttribute', () => {
  it(`returns valid whitebelt`, () => {
    const whiteBelt: BeltProps[] = getBeltPropsSolid('Solid White Belt', '#00FF00');
    const customBeltInit: CustomBeltInit = getCustomBeltInit([], whiteBelt);
    const beltAttributes = getBeltAttributes('100%');
    beltAttributes.id = ''; // blank out id for unit test
    const customBelt = new CustomBelt(customBeltInit, beltAttributes);
    expect(customBelt.svgString).toMatchSnapshot();
  });
});

describe('build svgString with width 100px BeltAttribute', () => {
  it(`returns valid whitebelt`, () => {
    const whiteBelt: BeltProps[] = getBeltPropsSolid('Solid White Belt', '#00FF00');
    const customBeltInit: CustomBeltInit = getCustomBeltInit([], whiteBelt);
    const beltAttributes = getBeltAttributes('100px');
    beltAttributes.id = ''; // blank out id for unit test
    const customBelt = new CustomBelt(customBeltInit, beltAttributes);
    expect(customBelt.svgString).toMatchSnapshot();
  });
});

describe('build svgString with width and style BeltAttribute', () => {
  it(`returns valid whitebelt`, () => {
    const whiteBelt: BeltProps[] = getBeltPropsSolid('Solid White Belt', '#00FF00');
    const customBeltInit: CustomBeltInit = getCustomBeltInit([], whiteBelt);
    const beltAttributes = getBeltAttributes('100%', 'background-color: #000000;');
    beltAttributes.id = ''; // blank out id for unit test
    const customBelt = new CustomBelt(customBeltInit, beltAttributes);
    expect(customBelt.svgString).toMatchSnapshot();
  });
});

await setup({
  browser: true
});

test('render the index page', async () => {
  // create a page instance of `playwright` via `createPage` helper API.
  const page = await createPage('/');
  const html = await page.innerHTML('body');

  //expect(html).toContain('White Belt');
  expect(html).toMatchSnapshot();
});

/*
const whiteBelt: BeltProps[] = getBeltPropsSolid('Solid White Belt', '#00FF00');
const myDiv: HTMLElement = document.getElementById('whiteBelt') as HTMLElement;
const customBeltInit: CustomBeltInit = getCustomBeltInit([myDiv], null, null, whiteBelt);
new CustomBelt(customBeltInit);
*/
