//import { version } from "../package.json"
const version = '0.0.0';

/****************************************************/
// ENUMS
/****************************************************/

/**
 * Callback types for belt interactions
 * @enum
 */
export enum BeltCallbackType {
  Refresh = 'Refresh',
  Click = 'Click',
  DoubleClick = 'DoubleClick'
}

/**
 * Available belt types
 * @enum
 */
export enum BeltType {
  Solid = 'Solid',
  Striped = 'Striped',
  Coral = 'Coral',
  Split = 'Split',
  Checkered = 'Checkered',
  Crazy = 'Crazy'
}

/**
 * Belt types excluding Crazy
 * @enum
 */
export enum BeltTypeStandard {
  Solid = 'Solid',
  Striped = 'Striped',
  Coral = 'Coral',
  Split = 'Split',
  Checkered = 'Checkered'
}

/**
 * Log types
 * @enum
 */
enum LogType {
  Info = 'Info',
  Warning = 'Warning',
  Error = 'Error'
}

/**
 * Where to start stripe placement on patch (Left or Right)
 * @enum
 */
export enum StripePosition {
  Left = 'Left',
  Right = 'Right'
}

/****************************************************/
// INTERFACES
/****************************************************/

/**
 * Belt object definition
 * @interface
 */
export interface Belt {
  system: string;
  id: number;
  name: string;
  sortOrder: number;
  type: BeltType;
  color1: string;
  color2: string;
  color3: string;
  borderColor: string;
  hasPatch: boolean;
  patchColor: string;
  patchBorderColor: string;
  hasProfessorPatch: boolean;
  professorPatchColor: string;
  professorBorderColor: string;
  stripeColor: string;
  stripeCount: number;
  stripePosition: StripePosition;
  minStripes: number;
  maxStripes: number;
}

/**
 * Used to assign/lookup friendly names to hex colors
 *
 * ```js
 * const beltColors: BeltColor = { name: "White", hex: "#FFFFFF"};
 * ```
 * @interface
 */
export interface BeltColor {
  /**
   * hex code beginning with # then 3 or 6 valid hex characters (ex. "#FFFFFF")
   */
  hex: string;
  /**
   * friendly lookup name for hex color (ex. "White")
   */
  name: string;
}

/**
 * Property object passed to <CustomBelt /> component
 * @interface
 */
export interface BeltProps {
  version: string;
  id: string;
  belt: Belt;
  borderColor: string;
  hasPatch: boolean;
  patchColor: string;
  patchBorder: string;
  professorPatch: string;
  professorBorder: string;
  hasProfessorPatch: boolean;
  stripeCount: number;
  stripePosition: StripePosition;
  stripeColor1: string;
  stripeColor2: string;
  stripeColor3: string;
  stripeColor4: string;
  stripeColor5: string;
  stripeColor6: string;
  stripeColor7: string;
  stripeColor8: string;
  stripeColor9: string;
  stripeColor10: string;
  s1l1Color: string;
  s1l2aColor: string;
  s1l2bColor: string;
  s1l3Color: string;
  s2l1Color: string;
  s2l2aColor: string;
  s2l2bColor: string;
  s2l3Color: string;
  s3l1Color: string;
  s3l2aColor: string;
  s3l2bColor: string;
  s3l3Color: string;
  s4l1Color: string;
  s4l2aColor: string;
  s4l2bColor: string;
  s4l3Color: string;
  s5l1Color: string;
  s5l2aColor: string;
  s5l2bColor: string;
  s5l3Color: string;
  s6l1Color: string;
  s6l2aColor: string;
  s6l2bColor: string;
  s6l3Color: string;
  s7l1Color: string;
  s7l2aColor: string;
  s7l2bColor: string;
  s7l3Color: string;
  s8l1Color: string;
  s8l2aColor: string;
  s8l2bColor: string;
  s8l3Color: string;
  s9l1Color: string;
  s9l2aColor: string;
  s9l2bColor: string;
  s9l3Color: string;
  s10l1Color: string;
  s10l2aColor: string;
  s10l2bColor: string;
  s10l3Color: string;
  s11l1Color: string;
  s11l2aColor: string;
  s11l2bColor: string;
  s11l3Color: string;
  s12l1Color: string;
  s12l2aColor: string;
  s12l2bColor: string;
  s12l3Color: string;
  s13l1Color: string;
  s13l2aColor: string;
  s13l2bColor: string;
  s13l3Color: string;
  transitionCSS: string;
  randomSettings: RandomSettings;
  refreshInterval: number;
  callback?: (callbackType: BeltCallbackType, belt: BeltProps, event: Event | null) => void;
}

/**
 * Settings for random belt generation
 * @interface
 */
export interface RandomSettings {
  hasPatch: boolean | undefined;
  hasProfessorPatch: boolean | undefined;
  stripeCount: number | undefined;
  stripePosition: StripePosition | undefined;
  includeBelts: Array<BeltType> | undefined;
}

/****************************************************/
// DEFAULTS
/****************************************************/

const UniqueIDPrefix = 'custom-belt-'; // prefix for unique ID generation

/** Default color when no color provided */
export const DefaultBeltColor = '#FF0000';
/** Maximum number of stripes a belt may have */
export const MaximumStripeCount = 10;
/** Minimum number of stripes */
export const MinimumStripeCount = 0;
/** Default stripe position */
export const StripePositionDefault = StripePosition.Right;

/****************************************************/
// EXPORT FUNCTIONS
/****************************************************/

/**
 * Combine multiple BeltProps[] arrays into a single BeltProps[] array
 * @param {BeltProps[][]} beltProps array of BeltProp[] arrays to combine
 * @return {BeltProps[]} combined array of BeltProps[] arrays
 */
export const combineBeltProps = (beltProps: BeltProps[][]): BeltProps[] => {
  let combinedBeltProps: BeltProps[] = [];
  beltProps.forEach((beltProp) => {
    combinedBeltProps = combinedBeltProps.concat(beltProp);
  });
  return combinedBeltProps;
};

/**
 * Create new Belt object
 * @param {number} id unique identifier for belt
 * @param {string} name unique name of belt
 * @param {BeltType} type type of belt
 * @param {number} sortOrder used for sorting belts for display
 * @param {string} color1 hex value for belt color 1
 * @param {string} color2 hex value for belt color 2
 * @param {string} color3 hex value for belt color 3
 * @param {string} borderColor hex value for belt border color
 * @param {boolean} hasPatch whether belt has patch or not
 * @param {string} patchColor hex value for patch color
 * @param {string} patchBorderColor hex value for patch border color
 * @param {boolean} hasProfessorPatch whether belt has professor patch or not
 * @param {string} professorPatchColor hex value for professor patch color
 * @param {string} professorBorderColor hex value for professor patch border color
 * @param {string} stripeColor hex value for stripe color
 * @param {number} stripeCount number of stripes for belt [0-10]
 * @param {StripePosition} stripePosition starting position of stripes on belt
 * @param {number} minStripes minimum number of stripes for belt
 * @param {number} maxStripes maximum number of stripes for belt
 * @return {Belt} Belt object
 */
export const getBelt = (
  id = 0,
  name = '',
  type: BeltType = BeltType.Solid,
  sortOrder = 0,
  color1 = '',
  color2 = '',
  color3 = '',
  borderColor = '',
  hasPatch = false,
  patchColor = '',
  patchBorderColor = '',
  hasProfessorPatch = false,
  professorPatchColor = '',
  professorBorderColor = '',
  stripeColor = '',
  stripeCount = 0,
  stripePosition: StripePosition = StripePositionDefault,
  minStripes: number = MinimumStripeCount,
  maxStripes: number = MaximumStripeCount
): Belt => {
  const belt: Belt = {
    system: 'none',
    id: id ? id : 0,
    name: name ? name : '',
    type: type ? type : BeltType.Solid,
    sortOrder: sortOrder ? sortOrder : 0,
    color1: color1 ? color1 : '',
    color2: color2 ? color2 : '',
    color3: color3 ? color3 : '',
    borderColor: borderColor ? borderColor : '',
    hasPatch: hasPatch ? hasPatch : false,
    patchColor: patchColor ? patchColor : '',
    patchBorderColor: patchBorderColor ? patchBorderColor : '',
    hasProfessorPatch: hasProfessorPatch ? hasProfessorPatch : false,
    professorPatchColor: professorPatchColor ? professorPatchColor : '',
    professorBorderColor: professorBorderColor ? professorBorderColor : '',
    stripeColor: stripeColor ? stripeColor : '',
    stripeCount: stripeCount ? stripeCount : 0,
    stripePosition: stripePosition ? stripePosition : StripePositionDefault,
    minStripes: minStripes ? minStripes : 0,
    maxStripes: maxStripes ? maxStripes : 4
  };

  validateBelt(belt);

  return belt;
};

// Todo: use in custom-belt
/**
 * Get number of colors in BeltType [1-3]
 * @param {BeltType} beltType BeltType to lookup color count
 * @return {number} number of colors in beltType
 */
export const getBeltColorCount = (beltType: BeltType): number => {
  let colorCount = 0;
  switch (beltType) {
    case BeltType.Solid:
      colorCount = 1;
      break;
    case BeltType.Coral:
    case BeltType.Split:
    case BeltType.Checkered:
      colorCount = 2;
      break;
    case BeltType.Striped:
      colorCount = 3;
      break;
    case BeltType.Crazy:
      colorCount = 3;
      break;
  }

  return colorCount;
};

/**
 * Create new BeltProps[] array
 * @param {string} name unique name of belt
 * @param {BeltType} beltType type of belt
 * @param {string} color1 hex value for belt color 1
 * @param {string} color2 hex value for belt color 2
 * @param {string} color3 hex value for belt color 3
 * @param {number} id unique identifier for belt
 * @param {string} borderColor hex value for belt border color
 * @param {boolean} hasPatch whether belt has patch or not
 * @param {string} patchColor hex value for patch color
 * @param {string} patchBorderColor hex value for patch border color
 * @param {boolean} hasProfessorPatch whether belt has professor patch or not
 * @param {string} professorPatchColor hex value for professor patch color
 * @param {string} professorBorderColor hex value for professor patch border color
 * @param {string} stripeColor hex value for stripe color
 * @param {number} stripeCount number of stripes for belt [0-10]
 * @param {StripePosition} stripePosition starting position of stripes on belt
 * @param {number} minStripes minimum number of stripes for belt
 * @param {number} maxStripes maximum number of stripes for belt
 * @param {string} transitionCSS CSS for transition animation
 * @param {number} refreshInterval interval for refreshing belt in milliseconds
 * @param {(callbackType: BeltCallbackType, belt: BeltProps, event: Event | null) => void} callback callback function to call after belt actions
 * @return {BeltProps[]} BeltProps[] array
 */
export const getBeltProps = (
  name: string,
  beltType: BeltType,
  color1: string,
  color2: string,
  color3: string,
  id = 0,
  borderColor = '#434244',
  hasPatch = true,
  patchColor = '#000000',
  patchBorderColor = '',
  hasProfessorPatch = false,
  professorPatchColor = '',
  professorBorderColor = '',
  stripeColor = '',
  stripeCount = 0,
  stripePosition: StripePosition = StripePosition.Right,
  minStripes = 0,
  maxStripes = 10,
  transitionCSS = '',
  refreshInterval = 0,
  callback?: (callbackType: BeltCallbackType, belt: BeltProps, event: Event | null) => void
): BeltProps[] => {
  const belt: Belt = getBelt(
    id,
    name,
    beltType,
    0,
    color1,
    color2,
    color3,
    borderColor,
    hasPatch,
    patchColor,
    patchBorderColor,
    hasProfessorPatch,
    professorPatchColor,
    professorBorderColor,
    stripeColor,
    stripeCount,
    stripePosition,
    minStripes,
    maxStripes
  );

  const beltProps: BeltProps = getBeltPropsFromBelt(
    belt,
    stripeCount,
    stripePosition,
    transitionCSS,
    refreshInterval,
    callback
  );

  const beltPropAry: BeltProps[] = [];
  beltPropAry.push(beltProps);

  return beltPropAry;
};

/**
 * Create new Checkered BeltProps[] array
 * @param {string} name unique name of belt
 * @param {string} color1 hex value for belt color 1
 * @param {string} color2 hex value for belt color 2
 * @param {number} id unique identifier for belt
 * @param {string} borderColor hex value for belt border color
 * @param {boolean} hasPatch whether belt has patch or not
 * @param {string} patchColor hex value for patch color
 * @param {string} patchBorderColor hex value for patch border color
 * @param {boolean} hasProfessorPatch whether belt has professor patch or not
 * @param {string} professorPatchColor hex value for professor patch color
 * @param {string} professorBorderColor hex value for professor patch border color
 * @param {string} stripeColor hex value for stripe color
 * @param {number} stripeCount number of stripes for belt [0-10]
 * @param {StripePosition} stripePosition starting position of stripes on belt
 * @param {number} minStripes minimum number of stripes for belt
 * @param {number} maxStripes maximum number of stripes for belt
 * @param {string} transitionCSS CSS for transition animation
 * @param {number} refreshInterval interval for refreshing belt in milliseconds
 * @param {(callbackType: BeltCallbackType, belt: BeltProps, event: Event | null) => void} callback callback function to call after belt actions
 * @return {BeltProps[]} BeltProps[] array
 */
export const getBeltPropsCheckered = (
  name: string,
  color1: string,
  color2: string,
  id = 0,
  borderColor = '#434244',
  hasPatch = true,
  patchColor = '#000000',
  patchBorderColor = '',
  hasProfessorPatch = false,
  professorPatchColor = '',
  professorBorderColor = '',
  stripeColor = '',
  stripeCount = 0,
  stripePosition: StripePosition = StripePosition.Right,
  minStripes = 0,
  maxStripes = 10,
  transitionCSS = '',
  refreshInterval = 0,
  callback?: (callbackType: BeltCallbackType, belt: BeltProps, event: Event | null) => void
): BeltProps[] => {
  return getBeltProps(
    name,
    BeltType.Checkered,
    color1,
    color2,
    '',
    id,
    borderColor,
    hasPatch,
    patchColor,
    patchBorderColor,
    hasProfessorPatch,
    professorPatchColor,
    professorBorderColor,
    stripeColor,
    stripeCount,
    stripePosition,
    minStripes,
    maxStripes,
    transitionCSS,
    refreshInterval,
    callback
  );
};

/**
 * Create new Coral BeltProps[] array
 * @param {string} name unique name of belt
 * @param {string} color1 hex value for belt color 1
 * @param {string} color2 hex value for belt color 2
 * @param {number} id unique identifier for belt
 * @param {string} borderColor hex value for belt border color
 * @param {boolean} hasPatch whether belt has patch or not
 * @param {string} patchColor hex value for patch color
 * @param {string} patchBorderColor hex value for patch border color
 * @param {boolean} hasProfessorPatch whether belt has professor patch or not
 * @param {string} professorPatchColor hex value for professor patch color
 * @param {string} professorBorderColor hex value for professor patch border color
 * @param {string} stripeColor hex value for stripe color
 * @param {number} stripeCount number of stripes for belt [0-10]
 * @param {StripePosition} stripePosition starting position of stripes on belt
 * @param {number} minStripes minimum number of stripes for belt
 * @param {number} maxStripes maximum number of stripes for belt
 * @param {string} transitionCSS CSS for transition animation
 * @param {number} refreshInterval interval for refreshing belt in milliseconds
 * @param {(callbackType: BeltCallbackType, belt: BeltProps, event: Event | null) => void} callback callback function to call after belt actions
 * @return {BeltProps[]} BeltProps[] array
 */
export const getBeltPropsCoral = (
  name: string,
  color1: string,
  color2: string,
  id = 0,
  borderColor = '#434244',
  hasPatch = true,
  patchColor = '#000000',
  patchBorderColor = '',
  hasProfessorPatch = false,
  professorPatchColor = '',
  professorBorderColor = '',
  stripeColor = '',
  stripeCount = 0,
  stripePosition: StripePosition = StripePosition.Right,
  minStripes = 0,
  maxStripes = 10,
  transitionCSS = '',
  refreshInterval = 0,
  callback?: (callbackType: BeltCallbackType, belt: BeltProps, event: Event | null) => void
): BeltProps[] => {
  return getBeltProps(
    name,
    BeltType.Coral,
    color1,
    color2,
    '',
    id,
    borderColor,
    hasPatch,
    patchColor,
    patchBorderColor,
    hasProfessorPatch,
    professorPatchColor,
    professorBorderColor,
    stripeColor,
    stripeCount,
    stripePosition,
    minStripes,
    maxStripes,
    transitionCSS,
    refreshInterval,
    callback
  );
};

/**
 * Create new Crazy BeltProps[] array
 * @param {string} borderColor hex value for belt border color
 * @param {boolean} hasPatch whether belt has patch or not
 * @param {string} patchColor hex value for patch color
 * @param {string} patchBorderColor hex value for patch border color
 * @param {boolean} hasProfessorPatch whether belt has professor patch or not
 * @param {string} professorPatchColor hex value for professor patch color
 * @param {string} professorBorderColor hex value for professor patch border color
 * @param {string} stripeColor hex value for stripe color
 * @param {number} stripeCount number of stripes for belt [0-10]
 * @param {StripePosition} stripePosition starting position of stripes on belt
 * @param {number} minStripes minimum number of stripes for belt
 * @param {number} maxStripes maximum number of stripes for belt
 * @param {string} transitionCSS CSS for transition animation
 * @param {number} refreshInterval interval for refreshing belt in milliseconds
 * @param {(callbackType: BeltCallbackType, belt: BeltProps, event: Event | null) => void} callback callback function to call after belt actions
 * @return {BeltProps[]} BeltProps[] array
 */
export const getBeltPropsCrazy = (
  borderColor = '#434244',
  hasPatch = true,
  patchColor = '#000000',
  patchBorderColor = '',
  hasProfessorPatch = false,
  professorPatchColor = '',
  professorBorderColor = '',
  stripeCount = 0,
  stripePosition: StripePosition = StripePosition.Right,
  transitionCSS = '',
  refreshInterval = 0,
  callback?: (callbackType: BeltCallbackType, belt: BeltProps, event: Event | null) => void
): BeltProps[] => {
  const crazyBelt: BeltProps[] = getBeltPropsRandom(
    hasPatch,
    hasProfessorPatch,
    stripeCount,
    stripePosition,
    transitionCSS,
    [BeltType.Crazy],
    refreshInterval
  );
  crazyBelt[0].borderColor = borderColor;
  crazyBelt[0].patchColor = patchColor;
  crazyBelt[0].patchBorder = patchBorderColor;
  crazyBelt[0].professorPatch = professorPatchColor;
  crazyBelt[0].professorBorder = professorBorderColor;
  crazyBelt[0].callback = callback;

  return crazyBelt;
};

/**
 * Create new BeltProps[] array from Belt object
 * @param {Belt} belt Belt object to create BeltProps[] array from
 * @param {number} stripeCount number of stripes for belt [0-10]
 * @param {StripePosition} [stripePosition=StripePositionDefault] starting position of stripes on belt patch
 * @param {string?} transitionCSS CSS for transition animation
 * @param {number?} refreshInterval interval in milliseconds before displaying next belt
 * @param {(callbackType: BeltCallbackType, belt: BeltProps, event: Event | null) => void} callback callback function to call after belt actions
 * @return {BeltProps[]} BeltProps[] array
 */
export const getBeltPropsFromBelt = (
  belt: Belt,
  stripeCount = 0,
  stripePosition: StripePosition = StripePositionDefault,
  transitionCSS = '',
  refreshInterval = 0,
  callback?: (callbackType: BeltCallbackType, belt: BeltProps, event: Event | null) => void
): BeltProps => {
  const randomSettings: RandomSettings = getRandomSettings();
  const beltProps: BeltProps = {
    version: version,
    id: generateUniqueId(),
    belt: belt,
    borderColor: '',
    hasPatch: true,
    patchColor: '',
    patchBorder: '',
    professorPatch: '',
    professorBorder: '',
    hasProfessorPatch: false,
    stripeCount: stripeCount,
    stripePosition: StripePositionDefault,
    stripeColor1: '',
    stripeColor2: '',
    stripeColor3: '',
    stripeColor4: '',
    stripeColor5: '',
    stripeColor6: '',
    stripeColor7: '',
    stripeColor8: '',
    stripeColor9: '',
    stripeColor10: '',
    s1l1Color: '',
    s1l2aColor: '',
    s1l2bColor: '',
    s1l3Color: '',
    s2l1Color: '',
    s2l2aColor: '',
    s2l2bColor: '',
    s2l3Color: '',
    s3l1Color: '',
    s3l2aColor: '',
    s3l2bColor: '',
    s3l3Color: '',
    s4l1Color: '',
    s4l2aColor: '',
    s4l2bColor: '',
    s4l3Color: '',
    s5l1Color: '',
    s5l2aColor: '',
    s5l2bColor: '',
    s5l3Color: '',
    s6l1Color: '',
    s6l2aColor: '',
    s6l2bColor: '',
    s6l3Color: '',
    s7l1Color: '',
    s7l2aColor: '',
    s7l2bColor: '',
    s7l3Color: '',
    s8l1Color: '',
    s8l2aColor: '',
    s8l2bColor: '',
    s8l3Color: '',
    s9l1Color: '',
    s9l2aColor: '',
    s9l2bColor: '',
    s9l3Color: '',
    s10l1Color: '',
    s10l2aColor: '',
    s10l2bColor: '',
    s10l3Color: '',
    s11l1Color: '',
    s11l2aColor: '',
    s11l2bColor: '',
    s11l3Color: '',
    s12l1Color: '',
    s12l2aColor: '',
    s12l2bColor: '',
    s12l3Color: '',
    s13l1Color: '',
    s13l2aColor: '',
    s13l2bColor: '',
    s13l3Color: '',
    transitionCSS: '',
    randomSettings: randomSettings,
    refreshInterval: 0,
    callback: callback
  };

  beltProps.transitionCSS = transitionCSS;
  beltProps.refreshInterval = refreshInterval;
  beltProps.stripeCount = stripeCount;
  if (stripePosition != undefined) beltProps.stripePosition = stripePosition;
  else if (belt != undefined) beltProps.stripePosition = belt.stripePosition;

  if (belt) {
    switch (belt.type) {
      case 'Solid':
        setBeltSolid(belt, beltProps);
        break;
      case 'Striped':
        setBeltStriped(belt, beltProps);
        break;
      case 'Coral':
        setBeltCoral(belt, beltProps);
        break;
      case 'Split':
        setBeltSplit(belt, beltProps);
        break;
      case 'Checkered':
        setBeltCheckered(belt, beltProps);
        break;
      case 'Crazy':
        setBeltCrazy(beltProps);
        break;
    }
    beltProps.borderColor = belt.borderColor;

    setPatchProperties(
      beltProps,
      belt.hasPatch,
      belt.patchColor,
      belt.patchBorderColor,
      belt.professorPatchColor,
      belt.professorBorderColor,
      belt.hasProfessorPatch,
      belt.stripeColor,
      stripeCount,
      stripePosition
    );
  }

  return beltProps;
};

/**
 * Create new random BeltProps[] array
 * @param {boolean | undefined} hasPatch whether belt has a patch
 * @param {boolean | undefined} hasProfessorPatch whether belt has a professor patch
 * @param {number | undefined} stripeCount number of stripes for belt [0-10]
 * @param {StripePosition} stripePosition starting position of streips on belt patch
 * @param {string | undefined} transitionCSS CSS for transition animation
 * @param {Array<BeltType> | undefined} includeBelts array of BeltTyps to include in random selection
 * @param {number} refreshInterval interval in milliseconds before displaying next belt
 * @param {(callbackType: BeltCallbackType, belt: BeltProps, event: Event | null) => void} callback callback function to call after belt actions
 * @return {BeltProps[]} Belt object
 */
export const getBeltPropsRandom = (
  hasPatch?: boolean,
  hasProfessorPatch?: boolean,
  stripeCount?: number,
  stripePosition?: StripePosition,
  transitionCSS?: string,
  includeBelts?: Array<BeltType>,
  refreshInterval?: number,
  callback?: (callbackType: BeltCallbackType, belt: BeltProps, event: Event | null) => void
): BeltProps[] => {
  let randomBeltTypeIndex;
  const title = 'Random';
  const randomSettings: RandomSettings = getRandomSettings(
    hasPatch,
    hasProfessorPatch,
    stripeCount,
    stripePosition,
    includeBelts
  );
  if (hasPatch == undefined) hasPatch = Math.random() < 0.5; // randomly pick true or false
  if (hasProfessorPatch === undefined) hasProfessorPatch = Math.random() < 0.5; // randomly pick true or false
  if (stripeCount === undefined) stripeCount = Math.floor(Math.random() * MaximumStripeCount + 1); // randomly pick between 0-10 stripes
  if (stripePosition === undefined)
    Math.random() < 0.5 === true
      ? (stripePosition = StripePosition.Left)
      : (stripePosition = StripePosition.Right); // randomly pick Left or Right
  if (transitionCSS === undefined) transitionCSS = '';
  if (includeBelts !== undefined && includeBelts.length > 0) {
    if (includeBelts.length === 1) {
      // if only one includeBelt items is specified, then use that belt type
      randomBeltTypeIndex = getBeltIndex(includeBelts[0]);
    } else {
      // build array of includeBelt types and selct random one
      const ary: Array<BeltType> = [];
      for (let i = 0; i < includeBelts.length; i++) {
        ary.push(includeBelts[i]);
      }
      const rand = Math.floor(Math.random() * ary.length);
      randomBeltTypeIndex = getBeltIndex(ary[rand]);
    }
  } else {
    // no includeBelt types specified, for select random from all
    randomBeltTypeIndex = Math.floor(Math.random() * 6);
  }
  if (refreshInterval === undefined) refreshInterval = 0;
  let name = '';
  let beltType: BeltType = BeltType.Solid;
  switch (randomBeltTypeIndex) {
    case 0: // solid belt
      name = `${title} Solid belt`;
      beltType = BeltType.Solid;
      break;
    case 1: // striped belt
      name = `${title} Striped belt`;
      beltType = BeltType.Striped;
      break;
    case 2: // coral belt
      name = `${title} Coral belt`;
      beltType = BeltType.Coral;
      break;
    case 3: // split belt
      name = `${title} Split belt`;
      beltType = BeltType.Split;
      break;
    case 4: // checkered belt
      name = `${title} Checkered belt`;
      beltType = BeltType.Checkered;
      break;
    case 5: // crazy belt
      name = `${title} Crazy belt`;
      beltType = BeltType.Crazy;
      break;
  }

  const belt: Belt = getBelt(
    undefined,
    name,
    beltType,
    0,
    getRandomHexColor(),
    getRandomHexColor(),
    getRandomHexColor(),
    getRandomHexColor(),
    hasPatch,
    getRandomHexColor(),
    getRandomHexColor(),
    hasProfessorPatch,
    getRandomHexColor(),
    getRandomHexColor(),
    getRandomHexColor(),
    0,
    StripePosition.Right,
    0,
    10
  );

  const beltProps: BeltProps = getBeltPropsFromBelt(
    belt,
    stripeCount,
    stripePosition,
    transitionCSS,
    refreshInterval,
    callback
  );

  beltProps.randomSettings = randomSettings;

  const beltPropsAry: BeltProps[] = [];
  beltPropsAry.push(beltProps);
  return beltPropsAry;
};

/**
 * Create new Solid BeltProps[] array
 * @param {string} name unique name of belt
 * @param {string} color hex value for belt color 1
 * @param {number} id unique identifier for belt
 * @param {string} borderColor hex value for belt border color
 * @param {boolean} hasPatch whether belt has patch or not
 * @param {string} patchColor hex value for patch color
 * @param {string} patchBorderColor hex value for patch border color
 * @param {boolean} hasProfessorPatch whether belt has professor patch or not
 * @param {string} professorPatchColor hex value for professor patch color
 * @param {string} professorBorderColor hex value for professor patch border color
 * @param {string} stripeColor hex value for stripe color
 * @param {number} stripeCount number of stripes for belt [0-10]
 * @param {StripePosition} stripePosition starting position of stripes on belt
 * @param {number} minStripes minimum number of stripes for belt
 * @param {number} maxStripes maximum number of stripes for belt
 * @param {string} transitionCSS CSS for transition animation
 * @param {number} refreshInterval interval for refreshing belt in milliseconds
 * @param {(callbackType: BeltCallbackType, belt: BeltProps, event: Event | null) => void} callback callback function to call after belt actions
 * @return {BeltProps[]} BeltProps[] array
 */
export const getBeltPropsSolid = (
  name: string,
  color: string,
  id = 0,
  borderColor = '#434244',
  hasPatch = true,
  patchColor = '#000000',
  patchBorderColor = '',
  hasProfessorPatch = false,
  professorPatchColor = '',
  professorBorderColor = '',
  stripeColor = '',
  stripeCount = 0,
  stripePosition: StripePosition = StripePosition.Right,
  minStripes = 0,
  maxStripes = 10,
  transitionCSS = '',
  refreshInterval = 0,
  callback?: (callbackType: BeltCallbackType, belt: BeltProps, event: Event | null) => void
): BeltProps[] => {
  return getBeltProps(
    name,
    BeltType.Solid,
    color,
    '',
    '',
    id,
    borderColor,
    hasPatch,
    patchColor,
    patchBorderColor,
    hasProfessorPatch,
    professorPatchColor,
    professorBorderColor,
    stripeColor,
    stripeCount,
    stripePosition,
    minStripes,
    maxStripes,
    transitionCSS,
    refreshInterval,
    callback
  );
};

/**
 * Create new Split BeltProps[] array
 * @param {string} name unique name of belt
 * @param {string} color1 hex value for belt color 1
 * @param {string} color2 hex value for belt color 2
 * @param {number} id unique identifier for belt
 * @param {string} borderColor hex value for belt border color
 * @param {boolean} hasPatch whether belt has patch or not
 * @param {string} patchColor hex value for patch color
 * @param {string} patchBorderColor hex value for patch border color
 * @param {boolean} hasProfessorPatch whether belt has professor patch or not
 * @param {string} professorPatchColor hex value for professor patch color
 * @param {string} professorBorderColor hex value for professor patch border color
 * @param {string} stripeColor hex value for stripe color
 * @param {number} stripeCount number of stripes for belt [0-10]
 * @param {StripePosition} stripePosition starting position of stripes on belt
 * @param {number} minStripes minimum number of stripes for belt
 * @param {number} maxStripes maximum number of stripes for belt
 * @param {string} transitionCSS CSS for transition animation
 * @param {number} refreshInterval interval for refreshing belt in milliseconds
 * @param {(callbackType: BeltCallbackType, belt: BeltProps, event: Event | null) => void} callback callback function to call after belt actions
 * @return {BeltProps[]} BeltProps[] array
 */
export const getBeltPropsSplit = (
  name: string,
  color1: string,
  color2: string,
  id = 0,
  borderColor = '#434244',
  hasPatch = true,
  patchColor = '#000000',
  patchBorderColor = '',
  hasProfessorPatch = false,
  professorPatchColor = '',
  professorBorderColor = '',
  stripeColor = '',
  stripeCount = 0,
  stripePosition: StripePosition = StripePosition.Right,
  minStripes = 0,
  maxStripes = 10,
  transitionCSS = '',
  refreshInterval = 0,
  callback?: (callbackType: BeltCallbackType, belt: BeltProps, event: Event | null) => void
): BeltProps[] => {
  return getBeltProps(
    name,
    BeltType.Split,
    color1,
    color2,
    '',
    id,
    borderColor,
    hasPatch,
    patchColor,
    patchBorderColor,
    hasProfessorPatch,
    professorPatchColor,
    professorBorderColor,
    stripeColor,
    stripeCount,
    stripePosition,
    minStripes,
    maxStripes,
    transitionCSS,
    refreshInterval,
    callback
  );
};

/**
 * Create new Striped BeltProps[] array
 * @param {string} name unique name of belt
 * @param {string} color1 hex value for belt color 1
 * @param {string} color2 hex value for belt color 2
 * @param {string} color3 hex value for belt color 3
 * @param {number} id unique identifier for belt
 * @param {string} borderColor hex value for belt border color
 * @param {boolean} hasPatch whether belt has patch or not
 * @param {string} patchColor hex value for patch color
 * @param {string} patchBorderColor hex value for patch border color
 * @param {boolean} hasProfessorPatch whether belt has professor patch or not
 * @param {string} professorPatchColor hex value for professor patch color
 * @param {string} professorBorderColor hex value for professor patch border color
 * @param {string} stripeColor hex value for stripe color
 * @param {number} stripeCount number of stripes for belt [0-10]
 * @param {StripePosition} stripePosition starting position of stripes on belt
 * @param {number} minStripes minimum number of stripes for belt
 * @param {number} maxStripes maximum number of stripes for belt
 * @param {string} transitionCSS CSS for transition animation
 * @param {number} refreshInterval interval for refreshing belt in milliseconds
 * @param {(callbackType: BeltCallbackType, belt: BeltProps, event: Event | null) => void} callback callback function to call after belt actions
 * @return {BeltProps[]} BeltProps[] array
 */
export const getBeltPropsStriped = (
  name: string,
  color1: string,
  color2: string,
  color3: string,
  id = 0,
  borderColor = '#434244',
  hasPatch = true,
  patchColor = '#000000',
  patchBorderColor = '',
  hasProfessorPatch = false,
  professorPatchColor = '',
  professorBorderColor = '',
  stripeColor = '',
  stripeCount = 0,
  stripePosition: StripePosition = StripePosition.Right,
  minStripes = 0,
  maxStripes = 10,
  transitionCSS = '',
  refreshInterval = 0,
  callback?: (callbackType: BeltCallbackType, belt: BeltProps, event: Event | null) => void
): BeltProps[] => {
  return getBeltProps(
    name,
    BeltType.Striped,
    color1,
    color2,
    color3,
    id,
    borderColor,
    hasPatch,
    patchColor,
    patchBorderColor,
    hasProfessorPatch,
    professorPatchColor,
    professorBorderColor,
    stripeColor,
    stripeCount,
    stripePosition,
    minStripes,
    maxStripes,
    transitionCSS,
    refreshInterval,
    callback
  );
};

/**
 * Generate unique id for belt suitiable for element id
 */
export const getBeltUniqueId = (): string => {
  return `custom_belt_${Math.random().toString(36).substring(2, 9)}`;
};

/**
 * Check for valid color hex code (must begin with # and then 3 or 6 valid hex characters)
 *
 * RegEx: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
 *
 * Example JavaScript Usage:
 *
 * ```js
 * isValidHexCode("#1AFFa1"); // returns true
 * isValidHexCode("#F00"); // returns true
 * isValidHexCode("123456"); // returns false (does not begin with #)
 * isValidHexCode("#123abce"); // returns false (too long)
 * isValidHexCode("#afafah"); // returns false (contains invalid character)
 * ```
 *
 * @param {string} input string to validate
 * @return {boolean} true if valid color hex code, false otherwise
 */
export const isValidHexCode = (input: string): boolean => {
  // Regex to check for valid hex code
  const regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

  // if str is empty return false
  if (input == null) {
    return false;
  }

  // Return true if the str matches the Regex
  if (regex.test(input) == true) {
    return true;
  } else {
    return false;
  }
};

/**
 * Return hex code from BeltColor[] for color name
 * @param {string} color color name to lookup
 * @param {BeltColor[]} colors BeltColor[] lookup array
 * @return {string} found hex code or original color name
 */
export const mapBeltColor = (color: string, colors: BeltColor[]): string => {
  /*
   * 1. if color is valid hex code, return it
   * 2. else if color in colors, return hex code
   * 3. else return color
   */
  let rval = color;

  if (!isValidHexCode(color)) {
    const beltColor = colors.find((c) => c.name.toUpperCase() === color.toUpperCase());
    if (beltColor) {
      rval = beltColor.hex;
    }
  }

  return rval;
};

/**
 * Map all belt color names in all Belt array object to hex codes
 * @param {Belt[]} belts belt object
 * @param {BeltColor[]} colors BeltColor[] lookup array
 */
export const mapBeltColors = (belts: Belt[], colors: BeltColor[]) => {
  belts.forEach((belt) => {
    belt.color1 = mapBeltColor(belt.color1, colors);
    belt.color2 = mapBeltColor(belt.color2, colors);
    belt.color3 = mapBeltColor(belt.color3, colors);
    belt.borderColor = mapBeltColor(belt.borderColor, colors);
    belt.patchColor = mapBeltColor(belt.patchColor, colors);
    belt.patchBorderColor = mapBeltColor(belt.patchBorderColor, colors);
    belt.professorPatchColor = mapBeltColor(belt.professorPatchColor, colors);
    belt.professorBorderColor = mapBeltColor(belt.professorBorderColor, colors);
    belt.stripeColor = mapBeltColor(belt.stripeColor, colors);
  });
};

/*
 *  _                 _   ___             _   _
 * | |   ___  __ __ _| | | __|  _ _ _  __| |_(_)___ _ _  ___
 * | |__/ _ \/ _/ _` | | | _| || | ' \/ _|  _| / _ \ ' \(_-<
 * |____\___/\__\__,_|_| |_| \_,_|_||_\__|\__|_\___/_||_/__/
 */

/**
 * Generate a unique id suitable for use as element id
 * @return {string} unique id
 */
const generateUniqueId = (): string => {
  return `${UniqueIDPrefix}${Date.now()}${Math.floor(Math.random() * 1000)}`;
};

/**
 * Get index of BeltType
 * @param {BeltType} beltType BeltType
 * @return {number} index of BeltType
 */
const getBeltIndex = (beltType: BeltType): number => {
  let index = -1;

  switch (beltType) {
    case 'Solid':
      index = 0;
      break;
    case 'Striped':
      index = 1;
      break;
    case 'Coral':
      index = 2;
      break;
    case 'Split':
      index = 3;
      break;
    case 'Checkered':
      index = 4;
      break;
    case 'Crazy':
      index = 5;
      break;
  }
  return index;
};

/**
 * Get a random hex color
 * @return {string} random hex color
 */
const getRandomHexColor = (): string => {
  return `#${[...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`;
};

/**
 * Get new RandomSettings object
 * @param {boolean?} hasPatch whether random belt should have patch or not
 * @param {boolean?} hasProfessorPatch whether random belt should have professor patch or not
 * @param {number?} stripeCount stripes for random belt [0-10]
 * @param {StripePosition?} stripePosition starting position of stripes on random belt patch
 * @param {Array<BeltType>?} includeBelts array of BeltTypes to include in random selection
 * @return {RandomSettings?} RandomSettings object
 */
const getRandomSettings = (
  hasPatch?: boolean,
  hasProfessorPatch?: boolean,
  stripeCount?: number,
  stripePosition?: StripePosition,
  includeBelts?: Array<BeltType>
): RandomSettings => {
  const randomSettings: RandomSettings = {
    hasPatch: hasPatch,
    hasProfessorPatch: hasProfessorPatch,
    stripeCount: stripeCount,
    stripePosition: stripePosition,
    includeBelts: includeBelts
  };

  return randomSettings;
};

/**
 * Log message to console
 * @param {LogType} logType type of log message
 * @param {string} beltName name of belt
 * @param {number} beltId id of belt
 * @param {string} message message to log
 */
const logMessage = (logType: LogType, beltName: string, beltId: number, message: string) => {
  const myName: string = beltName ? beltName : 'Not Specified';
  const msg = `CustomBelt ${logType}: {'beltName': '${myName}', 'id': ${beltId}, 'message': '${message}'}`;

  console.log(msg);
};

/**
 * Set all BeltProps for Checkered Belt
 * @param {Belt} belt belt object
 * @param {BeltProps} beltProps beltProps object to set values on
 */
const setBeltCheckered = (belt: Belt, beltProps: BeltProps) => {
  beltProps.s1l1Color = belt.color1;
  beltProps.s1l2aColor = belt.color2;
  beltProps.s1l2bColor = belt.color2;
  beltProps.s1l3Color = belt.color1;
  beltProps.s2l1Color = belt.color2;
  beltProps.s2l2aColor = belt.color1;
  beltProps.s2l2bColor = belt.color1;
  beltProps.s2l3Color = belt.color2;
  beltProps.s3l1Color = belt.color1;
  beltProps.s3l2aColor = belt.color2;
  beltProps.s3l2bColor = belt.color2;
  beltProps.s3l3Color = belt.color1;
  beltProps.s4l1Color = belt.color2;
  beltProps.s4l2aColor = belt.color1;
  beltProps.s4l2bColor = belt.color1;
  beltProps.s4l3Color = belt.color2;
  beltProps.s5l1Color = belt.color2;
  beltProps.s5l2aColor = belt.color1;
  beltProps.s5l2bColor = belt.color1;
  beltProps.s5l3Color = belt.color2;
  beltProps.s6l1Color = belt.color1;
  beltProps.s6l2aColor = belt.color2;
  beltProps.s6l2bColor = belt.color2;
  beltProps.s6l3Color = belt.color1;
  beltProps.s7l1Color = belt.color1;
  beltProps.s7l2aColor = belt.color2;
  beltProps.s7l2bColor = belt.color2;
  beltProps.s7l3Color = belt.color1;
  beltProps.s8l1Color = belt.color1;
  beltProps.s8l2aColor = belt.color2;
  beltProps.s8l2bColor = belt.color2;
  beltProps.s8l3Color = belt.color1;
  beltProps.s9l1Color = belt.color2;
  beltProps.s9l2aColor = belt.color1;
  beltProps.s9l2bColor = belt.color1;
  beltProps.s9l3Color = belt.color2;
  beltProps.s10l1Color = belt.color2;
  beltProps.s10l2aColor = belt.color1;
  beltProps.s10l2bColor = belt.color1;
  beltProps.s10l3Color = belt.color2;
  beltProps.s11l1Color = belt.color1;
  beltProps.s11l2aColor = belt.color2;
  beltProps.s11l2bColor = belt.color2;
  beltProps.s11l3Color = belt.color1;
  beltProps.s12l1Color = belt.color2;
  beltProps.s12l2aColor = belt.color1;
  beltProps.s12l2bColor = belt.color1;
  beltProps.s12l3Color = belt.color2;
  beltProps.s13l1Color = belt.color1;
  beltProps.s13l2aColor = belt.color2;
  beltProps.s13l2bColor = belt.color2;
  beltProps.s13l3Color = belt.color1;
};

/**
 * Set all BeltProps for Coral Belt
 * @param {Belt} belt belt object
 * @param {BeltProps} beltProps beltProps object to set values on
 */
const setBeltCoral = (belt: Belt, beltProps: BeltProps) => {
  beltProps.s1l1Color = belt.color2;
  beltProps.s1l2aColor = belt.color2;
  beltProps.s1l2bColor = belt.color2;
  beltProps.s1l3Color = belt.color2;
  beltProps.s2l1Color = belt.color1;
  beltProps.s2l2aColor = belt.color1;
  beltProps.s2l2bColor = belt.color1;
  beltProps.s2l3Color = belt.color1;
  beltProps.s3l1Color = belt.color1;
  beltProps.s3l2aColor = belt.color1;
  beltProps.s3l2bColor = belt.color1;
  beltProps.s3l3Color = belt.color1;
  beltProps.s4l1Color = belt.color2;
  beltProps.s4l2aColor = belt.color2;
  beltProps.s4l2bColor = belt.color2;
  beltProps.s4l3Color = belt.color2;
  beltProps.s5l1Color = belt.color2;
  beltProps.s5l2aColor = belt.color2;
  beltProps.s5l2bColor = belt.color2;
  beltProps.s5l3Color = belt.color2;
  beltProps.s6l1Color = belt.color1;
  beltProps.s6l2aColor = belt.color1;
  beltProps.s6l2bColor = belt.color1;
  beltProps.s6l3Color = belt.color1;
  beltProps.s6l1Color = belt.color1;
  beltProps.s6l2aColor = belt.color1;
  beltProps.s6l2bColor = belt.color1;
  beltProps.s6l3Color = belt.color1;
  beltProps.s7l1Color = belt.color1;
  beltProps.s7l2aColor = belt.color1;
  beltProps.s7l2bColor = belt.color1;
  beltProps.s7l3Color = belt.color1;
  beltProps.s8l1Color = belt.color1;
  beltProps.s8l2aColor = belt.color1;
  beltProps.s8l2bColor = belt.color1;
  beltProps.s8l3Color = belt.color1;
  beltProps.s9l1Color = belt.color2;
  beltProps.s9l2aColor = belt.color2;
  beltProps.s9l2bColor = belt.color2;
  beltProps.s9l3Color = belt.color2;
  beltProps.s10l1Color = belt.color2;
  beltProps.s10l2aColor = belt.color2;
  beltProps.s10l2bColor = belt.color2;
  beltProps.s10l3Color = belt.color2;
  beltProps.s11l1Color = belt.color1;
  beltProps.s11l2aColor = belt.color1;
  beltProps.s11l2bColor = belt.color1;
  beltProps.s11l3Color = belt.color1;
  beltProps.s12l1Color = belt.color2;
  beltProps.s12l2aColor = belt.color2;
  beltProps.s12l2bColor = belt.color2;
  beltProps.s12l3Color = belt.color2;
  beltProps.s13l1Color = belt.color1;
  beltProps.s13l2aColor = belt.color1;
  beltProps.s13l2bColor = belt.color1;
  beltProps.s13l3Color = belt.color1;
};

/**
 * Set all BeltProps for Crazy Belt
 * @param {BeltProps} beltProps beltProps object to set values on
 */
const setBeltCrazy = (beltProps: BeltProps) => {
  beltProps.s1l1Color = getRandomHexColor();
  beltProps.s1l2aColor = getRandomHexColor();
  beltProps.s1l2bColor = getRandomHexColor();
  beltProps.s1l3Color = getRandomHexColor();
  beltProps.s2l1Color = getRandomHexColor();
  beltProps.s2l2aColor = getRandomHexColor();
  beltProps.s2l2bColor = getRandomHexColor();
  beltProps.s2l3Color = getRandomHexColor();
  beltProps.s3l1Color = getRandomHexColor();
  beltProps.s3l2aColor = getRandomHexColor();
  beltProps.s3l2bColor = getRandomHexColor();
  beltProps.s3l3Color = getRandomHexColor();
  beltProps.s4l1Color = getRandomHexColor();
  beltProps.s4l2aColor = getRandomHexColor();
  beltProps.s4l2bColor = getRandomHexColor();
  beltProps.s4l3Color = getRandomHexColor();
  beltProps.s5l1Color = getRandomHexColor();
  beltProps.s5l2aColor = getRandomHexColor();
  beltProps.s5l2bColor = getRandomHexColor();
  beltProps.s5l3Color = getRandomHexColor();
  beltProps.s6l1Color = getRandomHexColor();
  beltProps.s6l2aColor = getRandomHexColor();
  beltProps.s6l2bColor = getRandomHexColor();
  beltProps.s6l3Color = getRandomHexColor();
  beltProps.s6l1Color = getRandomHexColor();
  beltProps.s6l2aColor = getRandomHexColor();
  beltProps.s6l2bColor = getRandomHexColor();
  beltProps.s6l3Color = getRandomHexColor();
  beltProps.s7l1Color = getRandomHexColor();
  beltProps.s7l2aColor = getRandomHexColor();
  beltProps.s7l2bColor = getRandomHexColor();
  beltProps.s7l3Color = getRandomHexColor();
  beltProps.s8l1Color = getRandomHexColor();
  beltProps.s8l2aColor = getRandomHexColor();
  beltProps.s8l2bColor = getRandomHexColor();
  beltProps.s8l3Color = getRandomHexColor();
  beltProps.s9l1Color = getRandomHexColor();
  beltProps.s9l2aColor = getRandomHexColor();
  beltProps.s9l2bColor = getRandomHexColor();
  beltProps.s9l3Color = getRandomHexColor();
  beltProps.s10l1Color = getRandomHexColor();
  beltProps.s10l2aColor = getRandomHexColor();
  beltProps.s10l2bColor = getRandomHexColor();
  beltProps.s10l3Color = getRandomHexColor();
  beltProps.s11l1Color = getRandomHexColor();
  beltProps.s11l2aColor = getRandomHexColor();
  beltProps.s11l2bColor = getRandomHexColor();
  beltProps.s11l3Color = getRandomHexColor();
  beltProps.s12l1Color = getRandomHexColor();
  beltProps.s12l2aColor = getRandomHexColor();
  beltProps.s12l2bColor = getRandomHexColor();
  beltProps.s12l3Color = getRandomHexColor();
  beltProps.s13l1Color = getRandomHexColor();
  beltProps.s13l2aColor = getRandomHexColor();
  beltProps.s13l2bColor = getRandomHexColor();
  beltProps.s13l3Color = getRandomHexColor();
};

/**
 * Set all BeltProps for Solid Belt
 * @param {Belt} belt belt object
 * @param {BeltProps} beltProps beltProps object to set values on
 */
const setBeltSolid = (belt: Belt, beltProps: BeltProps) => {
  beltProps.s1l1Color = belt.color1;
  beltProps.s1l2aColor = belt.color1;
  beltProps.s1l2bColor = belt.color1;
  beltProps.s1l3Color = belt.color1;
  beltProps.s2l1Color = belt.color1;
  beltProps.s2l2aColor = belt.color1;
  beltProps.s2l2bColor = belt.color1;
  beltProps.s2l3Color = belt.color1;
  beltProps.s3l1Color = belt.color1;
  beltProps.s3l2aColor = belt.color1;
  beltProps.s3l2bColor = belt.color1;
  beltProps.s3l3Color = belt.color1;
  beltProps.s4l1Color = belt.color1;
  beltProps.s4l2aColor = belt.color1;
  beltProps.s4l2bColor = belt.color1;
  beltProps.s4l3Color = belt.color1;
  beltProps.s5l1Color = belt.color1;
  beltProps.s5l2aColor = belt.color1;
  beltProps.s5l2bColor = belt.color1;
  beltProps.s5l3Color = belt.color1;
  beltProps.s6l1Color = belt.color1;
  beltProps.s6l2aColor = belt.color1;
  beltProps.s6l2bColor = belt.color1;
  beltProps.s6l3Color = belt.color1;
  beltProps.s6l1Color = belt.color1;
  beltProps.s6l2aColor = belt.color1;
  beltProps.s6l2bColor = belt.color1;
  beltProps.s6l3Color = belt.color1;
  beltProps.s7l1Color = belt.color1;
  beltProps.s7l2aColor = belt.color1;
  beltProps.s7l2bColor = belt.color1;
  beltProps.s7l3Color = belt.color1;
  beltProps.s8l1Color = belt.color1;
  beltProps.s8l2aColor = belt.color1;
  beltProps.s8l2bColor = belt.color1;
  beltProps.s8l3Color = belt.color1;
  beltProps.s9l1Color = belt.color1;
  beltProps.s9l2aColor = belt.color1;
  beltProps.s9l2bColor = belt.color1;
  beltProps.s9l3Color = belt.color1;
  beltProps.s10l1Color = belt.color1;
  beltProps.s10l2aColor = belt.color1;
  beltProps.s10l2bColor = belt.color1;
  beltProps.s10l3Color = belt.color1;
  beltProps.s11l1Color = belt.color1;
  beltProps.s11l2aColor = belt.color1;
  beltProps.s11l2bColor = belt.color1;
  beltProps.s11l3Color = belt.color1;
  beltProps.s12l1Color = belt.color1;
  beltProps.s12l2aColor = belt.color1;
  beltProps.s12l2bColor = belt.color1;
  beltProps.s12l3Color = belt.color1;
  beltProps.s13l1Color = belt.color1;
  beltProps.s13l2aColor = belt.color1;
  beltProps.s13l2bColor = belt.color1;
  beltProps.s13l3Color = belt.color1;
};

/**
 * Set all BeltProps for Split Belt
 * @param {Belt} belt belt object
 * @param {BeltProps} beltProps beltProps object to set values on
 */
const setBeltSplit = (belt: Belt, beltProps: BeltProps) => {
  beltProps.s1l1Color = belt.color1;
  beltProps.s1l2aColor = belt.color1;
  beltProps.s1l2bColor = belt.color2;
  beltProps.s1l3Color = belt.color2;
  beltProps.s2l1Color = belt.color1;
  beltProps.s2l2aColor = belt.color1;
  beltProps.s2l2bColor = belt.color2;
  beltProps.s2l3Color = belt.color2;
  beltProps.s3l1Color = belt.color1;
  beltProps.s3l2aColor = belt.color1;
  beltProps.s3l2bColor = belt.color2;
  beltProps.s3l3Color = belt.color2;
  beltProps.s4l1Color = belt.color1;
  beltProps.s4l2aColor = belt.color1;
  beltProps.s4l2bColor = belt.color2;
  beltProps.s4l3Color = belt.color2;
  beltProps.s5l1Color = belt.color1;
  beltProps.s5l2bColor = belt.color1;
  beltProps.s5l2aColor = belt.color2;
  beltProps.s5l3Color = belt.color2;
  beltProps.s6l1Color = belt.color1;
  beltProps.s6l2bColor = belt.color1;
  beltProps.s6l2aColor = belt.color2;
  beltProps.s6l3Color = belt.color2;
  beltProps.s6l1Color = belt.color1;
  beltProps.s6l2bColor = belt.color1;
  beltProps.s6l2aColor = belt.color2;
  beltProps.s6l3Color = belt.color2;
  beltProps.s7l1Color = belt.color1;
  beltProps.s7l2aColor = belt.color1;
  beltProps.s7l2bColor = belt.color2;
  beltProps.s7l3Color = belt.color2;
  beltProps.s8l1Color = belt.color1;
  beltProps.s8l2aColor = belt.color1;
  beltProps.s8l2bColor = belt.color2;
  beltProps.s8l3Color = belt.color2;
  beltProps.s9l1Color = belt.color1;
  beltProps.s9l2aColor = belt.color1;
  beltProps.s9l2bColor = belt.color2;
  beltProps.s9l3Color = belt.color2;
  beltProps.s10l1Color = belt.color1;
  beltProps.s10l2aColor = belt.color1;
  beltProps.s10l2bColor = belt.color2;
  beltProps.s10l3Color = belt.color2;
  beltProps.s11l1Color = belt.color1;
  beltProps.s11l2aColor = belt.color1;
  beltProps.s11l2bColor = belt.color2;
  beltProps.s11l3Color = belt.color2;
  beltProps.s12l1Color = belt.color1;
  beltProps.s12l2aColor = belt.color1;
  beltProps.s12l2bColor = belt.color2;
  beltProps.s12l3Color = belt.color2;
  beltProps.s13l1Color = belt.color1;
  beltProps.s13l2aColor = belt.color1;
  beltProps.s13l2bColor = belt.color2;
  beltProps.s13l3Color = belt.color2;
};

/**
 * Set all BeltProps for Striped Belt
 * @param {Belt} belt belt object
 * @param {BeltProps} beltProps beltProps object to set values on
 */
const setBeltStriped = (belt: Belt, beltProps: BeltProps) => {
  beltProps.s1l1Color = belt.color1;
  beltProps.s1l2aColor = belt.color2;
  beltProps.s1l2bColor = belt.color2;
  beltProps.s1l3Color = belt.color3;
  beltProps.s2l1Color = belt.color1;
  beltProps.s2l2aColor = belt.color2;
  beltProps.s2l2bColor = belt.color2;
  beltProps.s2l3Color = belt.color3;
  beltProps.s3l1Color = belt.color1;
  beltProps.s3l2aColor = belt.color2;
  beltProps.s3l2bColor = belt.color2;
  beltProps.s3l3Color = belt.color3;
  beltProps.s4l1Color = belt.color1;
  beltProps.s4l2aColor = belt.color2;
  beltProps.s4l2bColor = belt.color2;
  beltProps.s4l3Color = belt.color3;
  beltProps.s5l1Color = belt.color1;
  beltProps.s5l2aColor = belt.color2;
  beltProps.s5l2bColor = belt.color2;
  beltProps.s5l3Color = belt.color3;
  beltProps.s6l1Color = belt.color1;
  beltProps.s6l2aColor = belt.color2;
  beltProps.s6l2bColor = belt.color2;
  beltProps.s6l3Color = belt.color3;
  beltProps.s6l1Color = belt.color1;
  beltProps.s6l2aColor = belt.color2;
  beltProps.s6l2bColor = belt.color2;
  beltProps.s6l3Color = belt.color3;
  beltProps.s7l1Color = belt.color1;
  beltProps.s7l2aColor = belt.color2;
  beltProps.s7l2bColor = belt.color2;
  beltProps.s7l3Color = belt.color3;
  beltProps.s8l1Color = belt.color1;
  beltProps.s8l2aColor = belt.color2;
  beltProps.s8l2bColor = belt.color2;
  beltProps.s8l3Color = belt.color3;
  beltProps.s9l1Color = belt.color1;
  beltProps.s9l2aColor = belt.color2;
  beltProps.s9l2bColor = belt.color2;
  beltProps.s9l3Color = belt.color3;
  beltProps.s10l1Color = belt.color1;
  beltProps.s10l2aColor = belt.color2;
  beltProps.s10l2bColor = belt.color2;
  beltProps.s10l3Color = belt.color3;
  beltProps.s11l1Color = belt.color1;
  beltProps.s11l2aColor = belt.color2;
  beltProps.s11l2bColor = belt.color2;
  beltProps.s11l3Color = belt.color3;
  beltProps.s12l1Color = belt.color1;
  beltProps.s12l2aColor = belt.color2;
  beltProps.s12l2bColor = belt.color2;
  beltProps.s12l3Color = belt.color3;
  beltProps.s13l1Color = belt.color1;
  beltProps.s13l2aColor = belt.color2;
  beltProps.s13l2bColor = belt.color2;
  beltProps.s13l3Color = belt.color3;
};

/**
 * Set patch properties on BeltProps object
 * @param {BeltProps} beltProps BeltPRops object to set values on
 * @param {boolean} hasPatch whether belt has patch or not
 * @param {string} patchColor color of patch
 * @param {string} patchBorderColor color of patch border
 * @param {string} professorPatchColor color of professor patch
 * @param {string} professorBorderColor color of professor patch border
 * @param {boolean} hasProfessorPatch whether belt has professor patch or not
 * @param {string} stripeColor color of stripes
 * @param {number} stripeCount number of stripes [0-10]
 * @param {StripePosition} stripePosition position of stripes on patch
 */
const setPatchProperties = (
  beltProps: BeltProps,
  hasPatch: boolean,
  patchColor: string,
  patchBorderColor: string,
  professorPatchColor: string,
  professorBorderColor: string,
  hasProfessorPatch: boolean,
  stripeColor: string,
  stripeCount: number,
  stripePosition: StripePosition | undefined
) => {
  beltProps.hasPatch = hasPatch;
  beltProps.patchColor = patchColor;
  beltProps.patchBorder = patchBorderColor;
  beltProps.professorPatch = professorPatchColor;
  beltProps.professorBorder = professorBorderColor;
  beltProps.hasProfessorPatch = hasProfessorPatch;
  beltProps.stripeCount = stripeCount;
  beltProps.stripePosition = stripePosition != undefined ? stripePosition : StripePositionDefault;
  beltProps.stripeColor1 = stripeColor;
  beltProps.stripeColor2 = stripeColor;
  beltProps.stripeColor3 = stripeColor;
  beltProps.stripeColor4 = stripeColor;
  beltProps.stripeColor5 = stripeColor;
  beltProps.stripeColor6 = stripeColor;
  beltProps.stripeColor7 = stripeColor;
  beltProps.stripeColor8 = stripeColor;
  beltProps.stripeColor9 = stripeColor;
  beltProps.stripeColor10 = stripeColor;
};

/**
 * __   __    _ _    _      _             ___             _   _
 * \ \ / /_ _| (_)__| |__ _| |_ ___ _ _  | __|  _ _ _  __| |_(_)___ _ _  ___
 *  \ V / _` | | / _` / _` |  _/ _ \ '_| | _| || | ' \/ _|  _| / _ \ ' \(_-<
 *   \_/\__,_|_|_\__,_\__,_|\__\___/_|   |_| \_,_|_||_\__|\__|_\___/_||_/__/
 */

/**
 * Validate parameters received for Belt object
 * @param {Belt} belt belt object to validate
 */
const validateBelt = (belt: Belt) => {
  validateBelt_Colors(belt);
  validateBelt_StripeCount(belt);
};

/**
 * Validate color parameters for  Belt object
 * @param {Belt} belt belt object to validate
 */
const validateBelt_Colors = (belt: Belt) => {
  let msg;
  const colorCount: number | undefined = getBeltColorCount(belt.type);

  if (colorCount === undefined) {
    msg = `unknown color count`;
    logMessage(LogType.Error, belt.name, belt.id, msg);
  } else {
    if (colorCount >= 1) {
      if (!belt.color1) {
        msg = `color1 is required setting to (${DefaultBeltColor})`;
        logMessage(LogType.Error, belt.name, belt.id, msg);
        belt.color1 = DefaultBeltColor;
      } else if (!isValidHexCode(belt.color1)) {
        msg = `invalid color1 (${belt.color1}) setting to (${DefaultBeltColor})`;
        logMessage(LogType.Warning, belt.name, belt.id, msg);
        belt.color1 = DefaultBeltColor;
      }
    }
    if (colorCount >= 2) {
      if (!belt.color2) {
        msg = `color2 is required setting to (${DefaultBeltColor})`;
        logMessage(LogType.Error, belt.name, belt.id, msg);
        belt.color2 = DefaultBeltColor;
      } else if (!isValidHexCode(belt.color2)) {
        msg = `invalid color2 (${belt.color2}) setting to (${DefaultBeltColor})`;
        logMessage(LogType.Warning, belt.name, belt.id, msg);
        belt.color2 = DefaultBeltColor;
      }
    }
    if (colorCount >= 3) {
      if (!belt.color3) {
        msg = `color3 is required setting to (${DefaultBeltColor})`;
        logMessage(LogType.Error, belt.name, belt.id, msg);
        belt.color3 = DefaultBeltColor;
      } else if (!isValidHexCode(belt.color3)) {
        msg = `invalid color2 (${belt.color3}) setting to (${DefaultBeltColor})`;
        logMessage(LogType.Warning, belt.name, belt.id, msg);
        belt.color3 = DefaultBeltColor;
      }
    }
  }
};

/**
 * Validate minStripes and maxStripes parameters received for Belt object
 * @param {Belt} belt belt object to validate
 */
const validateBelt_StripeCount = (belt: Belt) => {
  let msg;
  if (belt.minStripes < MinimumStripeCount) {
    msg = `invalid minStripes (${belt.minStripes}) setting to (${MinimumStripeCount})`;
    logMessage(LogType.Warning, belt.name, belt.id, msg);
    belt.minStripes = MinimumStripeCount;
  } else if (belt.minStripes > MaximumStripeCount) {
    msg = `invalid minStripes (${belt.minStripes}) setting to (${MinimumStripeCount})`;
    logMessage(LogType.Warning, belt.name, belt.id, msg);
    belt.minStripes = MinimumStripeCount;
  }

  if (belt.maxStripes > MaximumStripeCount) {
    msg = `invalid maxStripes (${belt.maxStripes}) setting to (${MaximumStripeCount})`;
    logMessage(LogType.Warning, belt.name, belt.id, msg);
    belt.maxStripes = MaximumStripeCount;
  } else if (belt.maxStripes < MinimumStripeCount) {
    msg = `invalid maxStripes (${belt.maxStripes}) setting to (${MaximumStripeCount})`;
    logMessage(LogType.Warning, belt.name, belt.id, msg);
    belt.maxStripes = MaximumStripeCount;
  }

  if (belt.minStripes > belt.maxStripes) {
    msg = `minStripes (${belt.minStripes}) must be <= maxStripes (${belt.maxStripes}) setting minStripes to (${MinimumStripeCount})`;
    logMessage(LogType.Warning, belt.name, belt.id, msg);
    belt.minStripes = MinimumStripeCount;
  }
};
