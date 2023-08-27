[custom-belt-lib](../README.md) / [Modules](../modules.md) / [CustomBelt](../modules/CustomBelt.md) / CustomBelt

# Class: CustomBelt

[CustomBelt](../modules/CustomBelt.md).CustomBelt

*************************************************

## Table of contents

### Constructors

- [constructor](CustomBelt.CustomBelt.md#constructor)

### Properties

- [beltAttributes](CustomBelt.CustomBelt.md#beltattributes)
- [clickCount](CustomBelt.CustomBelt.md#clickcount)
- [clickDelay](CustomBelt.CustomBelt.md#clickdelay)
- [clickTimer](CustomBelt.CustomBelt.md#clicktimer)
- [currentBelt](CustomBelt.CustomBelt.md#currentbelt)
- [currentIndex](CustomBelt.CustomBelt.md#currentindex)
- [customBeltInit](CustomBelt.CustomBelt.md#custombeltinit)
- [elements](CustomBelt.CustomBelt.md#elements)
- [refreshIntervalId](CustomBelt.CustomBelt.md#refreshintervalid)
- [svgString](CustomBelt.CustomBelt.md#svgstring)
- [valid](CustomBelt.CustomBelt.md#valid)

### Methods

- [additionalStyles](CustomBelt.CustomBelt.md#additionalstyles)
- [borderColor](CustomBelt.CustomBelt.md#bordercolor)
- [destroy](CustomBelt.CustomBelt.md#destroy)
- [doCallback](CustomBelt.CustomBelt.md#docallback)
- [downLoadSVG](CustomBelt.CustomBelt.md#downloadsvg)
- [getColor](CustomBelt.CustomBelt.md#getcolor)
- [getSVGString](CustomBelt.CustomBelt.md#getsvgstring)
- [getStripeIndex](CustomBelt.CustomBelt.md#getstripeindex)
- [hasPatch](CustomBelt.CustomBelt.md#haspatch)
- [hasProfessorPatch](CustomBelt.CustomBelt.md#hasprofessorpatch)
- [initElements](CustomBelt.CustomBelt.md#initelements)
- [isValid](CustomBelt.CustomBelt.md#isvalid)
- [oneClick](CustomBelt.CustomBelt.md#oneclick)
- [patchBorderColor](CustomBelt.CustomBelt.md#patchbordercolor)
- [patchColor](CustomBelt.CustomBelt.md#patchcolor)
- [professorPatchColor](CustomBelt.CustomBelt.md#professorpatchcolor)
- [refreshElements](CustomBelt.CustomBelt.md#refreshelements)
- [stripe](CustomBelt.CustomBelt.md#stripe)
- [stripeStyle](CustomBelt.CustomBelt.md#stripestyle)
- [transition](CustomBelt.CustomBelt.md#transition)
- [transitionNextBelt](CustomBelt.CustomBelt.md#transitionnextbelt)

## Constructors

### constructor

• **new CustomBelt**(`customBeltInit`, `beltAttributes?`)

Instantiate a new CustomBelt object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `customBeltInit` | [`CustomBeltInit`](../interfaces/CustomBelt.CustomBeltInit.md) | `undefined` | initialization object |
| `beltAttributes` | ``null`` \| [`BeltAttributes`](../interfaces/Belt.BeltAttributes.md) | `null` | - |

#### Defined in

[CustomBelt.ts:70](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L70)

## Properties

### beltAttributes

• **beltAttributes**: [`BeltAttributes`](../interfaces/Belt.BeltAttributes.md)

#### Defined in

[CustomBelt.ts:55](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L55)

___

### clickCount

• **clickCount**: `number` = `0`

#### Defined in

[CustomBelt.ts:62](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L62)

___

### clickDelay

• **clickDelay**: `number` = `700`

#### Defined in

[CustomBelt.ts:61](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L61)

___

### clickTimer

• **clickTimer**: `undefined` \| `Timeout` = `undefined`

#### Defined in

[CustomBelt.ts:63](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L63)

___

### currentBelt

• **currentBelt**: ``null`` \| [`BeltProps`](../interfaces/Belt.BeltProps.md)

#### Defined in

[CustomBelt.ts:57](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L57)

___

### currentIndex

• **currentIndex**: `number`

#### Defined in

[CustomBelt.ts:58](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L58)

___

### customBeltInit

• **customBeltInit**: [`CustomBeltInit`](../interfaces/CustomBelt.CustomBeltInit.md)

#### Defined in

[CustomBelt.ts:56](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L56)

___

### elements

• **elements**: `HTMLElement`[]

#### Defined in

[CustomBelt.ts:59](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L59)

___

### refreshIntervalId

• **refreshIntervalId**: `undefined` \| `Timeout` = `undefined`

#### Defined in

[CustomBelt.ts:60](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L60)

___

### svgString

• **svgString**: `string` = `''`

#### Defined in

[CustomBelt.ts:64](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L64)

___

### valid

• **valid**: `boolean` = `true`

#### Defined in

[CustomBelt.ts:65](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L65)

## Methods

### additionalStyles

▸ **additionalStyles**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:112](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L112)

___

### borderColor

▸ **borderColor**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:116](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L116)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[CustomBelt.ts:123](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L123)

___

### doCallback

▸ **doCallback**(`event`, `callbackType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``null`` \| `Event` |
| `callbackType` | [`BeltCallbackType`](../enums/Belt.BeltCallbackType.md) |

#### Returns

`void`

#### Defined in

[CustomBelt.ts:132](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L132)

___

### downLoadSVG

▸ **downLoadSVG**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`void`

#### Defined in

[CustomBelt.ts:138](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L138)

___

### getColor

▸ **getColor**(`hexColor`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hexColor` | `string` |

#### Returns

`string`

#### Defined in

[CustomBelt.ts:161](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L161)

___

### getSVGString

▸ **getSVGString**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:181](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L181)

___

### getStripeIndex

▸ **getStripeIndex**(`stripeCount`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stripeCount` | `number` |

#### Returns

`number`

#### Defined in

[CustomBelt.ts:170](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L170)

___

### hasPatch

▸ **hasPatch**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:656](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L656)

___

### hasProfessorPatch

▸ **hasProfessorPatch**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:663](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L663)

___

### initElements

▸ **initElements**(): `HTMLElement`[]

#### Returns

`HTMLElement`[]

#### Defined in

[CustomBelt.ts:670](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L670)

___

### isValid

▸ **isValid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[CustomBelt.ts:701](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L701)

___

### oneClick

▸ **oneClick**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`void`

#### Defined in

[CustomBelt.ts:705](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L705)

___

### patchBorderColor

▸ **patchBorderColor**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:729](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L729)

___

### patchColor

▸ **patchColor**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:722](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L722)

___

### professorPatchColor

▸ **professorPatchColor**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:736](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L736)

___

### refreshElements

▸ **refreshElements**(): `void`

#### Returns

`void`

#### Defined in

[CustomBelt.ts:743](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L743)

___

### stripe

▸ **stripe**(`stripeCount`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stripeCount` | `number` |

#### Returns

`string`

#### Defined in

[CustomBelt.ts:751](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L751)

___

### stripeStyle

▸ **stripeStyle**(`stripeCount`, `fillColor`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stripeCount` | `number` |
| `fillColor` | `string` |

#### Returns

`string`

#### Defined in

[CustomBelt.ts:794](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L794)

___

### transition

▸ **transition**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:805](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L805)

___

### transitionNextBelt

▸ **transitionNextBelt**(): `void`

#### Returns

`void`

#### Defined in

[CustomBelt.ts:813](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L813)
