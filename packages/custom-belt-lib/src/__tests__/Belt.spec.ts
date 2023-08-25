import { describe, it, expect } from 'vitest';
import * as belt from '../Belt';

const colors: belt.BeltColor[] = [
  {
    name: 'White',
    hex: '#FFFFFF'
  },
  {
    name: 'Black',
    hex: '#000000'
  },
  {
    name: 'Gray',
    hex: '#999999'
  }
];

const belts: belt.Belt[] = [
  {
    system: 'none',
    id: 1,
    name: 'White',
    sortOrder: 10,
    type: belt.BeltType.Solid,
    color1: 'wHiTe',
    color2: 'Black',
    color3: 'Gray',
    borderColor: 'DarkBorder',
    hasPatch: true,
    patchColor: 'Black',
    patchBorderColor: 'DarkBorder',
    hasProfessorPatch: false,
    professorPatchColor: '',
    professorBorderColor: '',
    stripeColor: 'White',
    stripeCount: 0,
    stripePosition: belt.StripePosition.Right,
    minStripes: 0,
    maxStripes: 4
  }
];

/**
 * Default values tests
 */
describe('Default Values', () => {
  /**
   * Test DefaultBeltColor has expected value
   */
  it(`DefaultBeltColor is valid`, () => {
    expect(belt.DefaultBeltColor).toBe('#FF0000');
  });

  /**
   * Test DefaultBeltBorderColor has expected value
   */
  it(`DefaultBeltBorderColor is valid`, () => {
    expect(belt.DefaultBeltBorderColor).toBe('#434244');
  });

  /**
   * Test MaximumStripeCount has expected value
   */
  it(`MaximumStripeCount is valid`, () => {
    expect(belt.MaximumStripeCount).toBe(10);
  });

  /**
   * Test MinimumStripeCount has expected value
   */
  it(`MinimumStripeCount is valid`, () => {
    expect(belt.MinimumStripeCount).toBe(0);
  });

  /**
   * Test StripePositionDefault has expected value
   */
  it(`StripePositionDefault is valid`, () => {
    expect(belt.StripePositionDefault).toBe(belt.StripePosition.Right);
  });
});

/**
 * BeltCallbackType tests
 */
describe('BeltCallbackType', () => {
  let rval = '';
  for (const ss in belt.BeltCallbackType) {
    rval += ss;

    /**
     * Test that BeltCallbackType only contains expected values
     */
    it(`is iterable`, () => {
      expect(rval).toBe('RefreshClickDoubleClick');
    });
  }
});

/**
 * StripeStart tests
 */
describe('StripeStart', () => {
  let rval = '';
  for (const ss in belt.StripePosition) {
    rval += ss;

    /**
     * Test that stripePosition only contains expected values
     */
    it(`is iterable`, () => {
      expect(rval).toBe('LeftRight');
    });
  }
});

/**
 * BeltType tests
 */
describe('BeltType', () => {
  let rval = '';
  for (const bt in belt.BeltType) {
    rval += bt;
  }

  /**
   * Test that BeltType only contains expected values
   */
  it(`has correct values`, () => {
    expect(rval).toBe('SolidStripedCoralSplitCheckeredCrazy');
  });
});

/**
 * BeltTypeStandard tests
 */
describe('BeltTypeStandard', () => {
  let rval = '';
  for (const bt in belt.BeltTypeStandard) {
    rval += bt;
  }

  /**
   * Test that BeltTypeStandard only contains expected values
   */
  it(`has correct values`, () => {
    expect(rval).toBe('SolidStripedCoralSplitCheckered');
  });

  /**
   * Test that beltTypeStandard does not contain Crazy
   */
  it(`does not contain Crazy`, () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(belt.BeltTypeStandard.Crazy).toBe(undefined);
  });

  /**
   * BeltType.Solid matches BeltTypeStandard.Solid
   */
  it(`matches BeltType`, () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(belt.BeltType.Solid === belt.BeltTypeStandard.Solid).toBeTruthy();
  });
});

/**
 * Test isValidHexCode for various values
 */
describe('isValidHexCode', () => {
  const hexCodes: string[] = ['#1AFFa1', '#F00', '123456', '#123abce', '#afafah'];
  const results: boolean[] = [true, true, false, false, false];

  hexCodes.forEach((hexCode, index) => {
    it(`isValidHexCode ${hexCode} (${results[index]})`, () => {
      expect(belt.isValidHexCode(hexCode)).toBe(results[index]);
    });
  });
});

/**
 * Test that mapBeltColor returns expected values
 */
describe('mapBeltColor', () => {
  it('should return valid hexcode', () => {
    expect(belt.mapBeltColor('#FFFFFF', colors)).toBe('#FFFFFF');
  });

  it('should return mapped value for White', () => {
    expect(belt.mapBeltColor('White', colors)).toBe('#FFFFFF');
  });

  it('should return mapped value for mixed case wHiTe', () => {
    expect(belt.mapBeltColor('wHiTe', colors)).toBe('#FFFFFF');
  });

  it('should return mapped value for Gray', () => {
    expect(belt.mapBeltColor('Gray', colors)).toBe('#999999');
  });

  it('should return passed color', () => {
    expect(belt.mapBeltColor('Red', colors)).toBe('Red');
  });
});

/**
 * Test that mapBeltColors maps colors correctly
 */
describe('mapBeltColors', () => {
  belt.mapBeltColors(belts, colors);
  it('should return mapped color for White', () => {
    expect(belts[0].color1).toBe('#FFFFFF');
  });

  it('should return mapped color for Black', () => {
    expect(belts[0].color2).toBe('#000000');
  });

  it('should return mapped color for Gray', () => {
    expect(belts[0].color3).toBe('#999999');
  });
});

/**
 * Test that getBeltProps returns expected values
 */
describe('getBeltProps', () => {
  const beltProps: belt.BeltProps[] = belt.getBeltProps(
    'belt',
    belt.BeltType.Solid,
    '#FFFFFF',
    '#000000',
    '#00FF00'
  );
  it('should match snap', () => {
    expect(beltProps[0]).toMatchSnapshot();
  });
});

/**
 * Test that getBeltPropsFromBelt returns expected values
 */
describe('getBeltPropsFromBelt', () => {
  const myBelt: belt.Belt = belt.getBelt();
  it('should match snap', () => {
    const beltProps: belt.BeltProps = belt.getBeltPropsFromBelt(
      myBelt,
      0,
      belt.StripePosition.Left,
      '',
      0,
      undefined
    );
    expect(beltProps).toMatchSnapshot();
  });
});

/**
 * Test that getBeltPropsCheckered returns expected values
 */
describe('getBeltPropsCheckered', () => {
  const checkeredBelt: belt.BeltProps[] = belt.getBeltPropsCheckered(
    'checkered',
    '#FFFFFF',
    '#000000'
  ); // arbitrary values
  it('should match snap', () => {
    expect(checkeredBelt).toMatchSnapshot();
  });
});

/**
 * Test that getBeltPropsCoral returns expected values
 */
describe('getBeltPropsCoral', () => {
  const coralBelt: belt.BeltProps[] = belt.getBeltPropsCoral('coral', '#FFFFFF', '#000000'); // arbitrary values
  it('should match snap', () => {
    expect(coralBelt).toMatchSnapshot();
  });
});

/**
 * Test that getBeltPropsSolid returns expected values
 */
describe('getBeltPropsSolid', () => {
  const solidBelt: belt.BeltProps[] = belt.getBeltPropsSolid('solid', '#FFFFFF'); // arbitrary values
  it('should match snap', () => {
    expect(solidBelt).toMatchSnapshot();
  });
});

/**
 * Test that getBeltPropsSplit returns expected values
 */
describe('getBeltPropsSplit', () => {
  const splitBelt: belt.BeltProps[] = belt.getBeltPropsSplit('solid', '#FFFFFF', '#000000'); // arbitrary values
  it('should match snap', () => {
    expect(splitBelt).toMatchSnapshot();
  });
});

/**
 * Test that getBeltPropsStriped returns expected values
 */
describe('getBeltPropsStriped', () => {
  const stripedBelt: belt.BeltProps[] = belt.getBeltPropsStriped(
    'solid',
    '#FFFFFF',
    '#000000',
    '#00FF00'
  ); // arbitrary values
  it('should match snap', () => {
    expect(stripedBelt).toMatchSnapshot();
  });
});

describe('validateBelt_StripeCount', () => {
  it(`minStripe < ${belt.MinimumStripeCount} should return ${belt.MinimumStripeCount}`, () => {
    const b = belt.getBelt(
      0,
      '',
      belt.BeltType.Solid,
      0,
      '',
      '',
      '',
      '',
      false,
      '',
      '',
      false,
      '',
      '',
      '',
      0,
      belt.StripePosition.Right,
      belt.MinimumStripeCount - 1, // here is invalid stripe value
      10
    );
    expect(b.minStripes).toBe(belt.MinimumStripeCount);
  });

  it(`minStripe > ${belt.MaximumStripeCount} should return ${belt.MinimumStripeCount}`, () => {
    const b = belt.getBelt(
      0,
      '',
      belt.BeltType.Solid,
      0,
      '',
      '',
      '',
      '',
      false,
      '',
      '',
      false,
      '',
      '',
      '',
      0,
      belt.StripePosition.Right,
      belt.MaximumStripeCount + 1, // here is invalid stripe value
      10
    );
    expect(b.minStripes).toBe(belt.MinimumStripeCount);
  });

  it(`maxStripe > ${belt.MaximumStripeCount} should return ${belt.MaximumStripeCount}`, () => {
    const b = belt.getBelt(
      0,
      '',
      belt.BeltType.Solid,
      0,
      '',
      '',
      '',
      '',
      false,
      '',
      '',
      false,
      '',
      '',
      '',
      0,
      belt.StripePosition.Right,
      0,
      belt.MaximumStripeCount + 1 // here is invalid stripe value
    );
    expect(b.maxStripes).toBe(belt.MaximumStripeCount);
  });

  it(`maxStripe < ${belt.MinimumStripeCount} should return ${belt.MaximumStripeCount}`, () => {
    const b = belt.getBelt(
      0,
      '',
      belt.BeltType.Solid,
      0,
      '',
      '',
      '',
      '',
      false,
      '',
      '',
      false,
      '',
      '',
      '',
      0,
      belt.StripePosition.Right,
      0,
      belt.MinimumStripeCount - 1 // here is invalid stripe value
    );
    expect(b.maxStripes).toBe(belt.MaximumStripeCount);
  });

  it('minStripe is not > maxStripe check', () => {
    const b = belt.getBelt(
      0,
      '',
      belt.BeltType.Solid,
      0,
      '',
      '',
      '',
      '',
      false,
      '',
      '',
      false,
      '',
      '',
      '',
      0,
      belt.StripePosition.Right,
      5, // here is invalid minStripevalue
      4 // here is invalid maxStripes value
    );
    expect(b.minStripes).toBe(belt.MinimumStripeCount);
    expect(b.maxStripes).toBe(4);
  });

  it('must have color1', () => {
    const b = belt.getBelt(
      0,
      '',
      belt.BeltType.Solid, // requires 1 color
      0,
      '', //required color1 missing
      '',
      '',
      '',
      false,
      '',
      '',
      false,
      '',
      '',
      '',
      0,
      belt.StripePosition.Right,
      0,
      1
    );
    expect(b.color1).toBe(belt.DefaultBeltColor);
  });

  it('must have color1 and color2', () => {
    const b = belt.getBelt(
      0,
      '',
      belt.BeltType.Coral, // requires 2 colors
      0,
      '', // required color1 missing
      '', // required color2 missing
      '',
      '',
      false,
      '',
      '',
      false,
      '',
      '',
      '',
      0,
      belt.StripePosition.Right,
      0,
      1
    );
    expect(b.color1).toBe(belt.DefaultBeltColor);
    expect(b.color2).toBe(belt.DefaultBeltColor);
  });

  it('must have color1, color2 and color3', () => {
    const b = belt.getBelt(
      0,
      '',
      belt.BeltType.Striped, // requires 3 colors
      0,
      '', // required color1 missing
      '', // required color2 missing
      '', // required color3 missing
      '',
      false,
      '',
      '',
      false,
      '',
      '',
      '',
      0,
      belt.StripePosition.Right,
      0,
      1
    );
    expect(b.color1).toBe(belt.DefaultBeltColor);
    expect(b.color2).toBe(belt.DefaultBeltColor);
    expect(b.color3).toBe(belt.DefaultBeltColor);
  });
});

/*
 * Test that getBeltColorCount returns expected values
 */
describe('getBeltColorCount', () => {
  it('Solid should be one', () => {
    const solid = belt.getBeltColorCount(belt.BeltType.Solid);
    expect(solid).toBe(1);
  });

  it('Coral should be two', () => {
    const coral = belt.getBeltColorCount(belt.BeltType.Coral);
    expect(coral).toBe(2);
  });

  it('Split should be two', () => {
    const split = belt.getBeltColorCount(belt.BeltType.Split);
    expect(split).toBe(2);
  });

  it('Checkered should be two', () => {
    const checkered = belt.getBeltColorCount(belt.BeltType.Checkered);
    expect(checkered).toBe(2);
  });

  it('Striped should be three', () => {
    const striped = belt.getBeltColorCount(belt.BeltType.Striped);
    expect(striped).toBe(3);
  });

  it('Crazy should be three', () => {
    const crazy = belt.getBeltColorCount(belt.BeltType.Crazy);
    expect(crazy).toBe(3);
  });

  it('Invalid should be zero', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const invalid = belt.getBeltColorCount('invalid');
    expect(invalid).toBe(0);
  });
});
