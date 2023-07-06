[custom-belt-lib](../README.md) / [Modules](../modules.md) / [CustomBelt](../modules/CustomBelt.md) / CustomBelt

# Class: CustomBelt

[CustomBelt](../modules/CustomBelt.md).CustomBelt

## Table of contents

### Constructors

- [constructor](CustomBelt.CustomBelt.md#constructor)

### Properties

- [clickCount](CustomBelt.CustomBelt.md#clickcount)
- [clickDelay](CustomBelt.CustomBelt.md#clickdelay)
- [clickTimer](CustomBelt.CustomBelt.md#clicktimer)
- [currentBelt](CustomBelt.CustomBelt.md#currentbelt)
- [currentIndex](CustomBelt.CustomBelt.md#currentindex)
- [customBeltInit](CustomBelt.CustomBelt.md#custombeltinit)
- [elements](CustomBelt.CustomBelt.md#elements)
- [originalId](CustomBelt.CustomBelt.md#originalid)
- [refreshIntervalId](CustomBelt.CustomBelt.md#refreshintervalid)

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

• **new CustomBelt**(`customBeltInit`)

Instantiate a new VanilaaBelt object

#### Parameters

| Name | Type |
| :------ | :------ |
| `customBeltInit` | [`CustomBeltInit`](../interfaces/CustomBelt.CustomBeltInit.md) |

#### Defined in

[CustomBelt.ts:59](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L59)

## Properties

### clickCount

• **clickCount**: `number` = `0`

#### Defined in

[CustomBelt.ts:51](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L51)

___

### clickDelay

• **clickDelay**: `number` = `700`

#### Defined in

[CustomBelt.ts:50](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L50)

___

### clickTimer

• **clickTimer**: `undefined` \| `Timeout` = `undefined`

#### Defined in

[CustomBelt.ts:52](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L52)

___

### currentBelt

• **currentBelt**: [`BeltProps`](../interfaces/Belt.BeltProps.md)

#### Defined in

[CustomBelt.ts:45](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L45)

___

### currentIndex

• **currentIndex**: `number`

#### Defined in

[CustomBelt.ts:46](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L46)

___

### customBeltInit

• **customBeltInit**: [`CustomBeltInit`](../interfaces/CustomBelt.CustomBeltInit.md)

#### Defined in

[CustomBelt.ts:44](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L44)

___

### elements

• **elements**: `HTMLElement`[]

#### Defined in

[CustomBelt.ts:48](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L48)

___

### originalId

• **originalId**: `string` = `''`

#### Defined in

[CustomBelt.ts:47](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L47)

___

### refreshIntervalId

• **refreshIntervalId**: `undefined` \| `Timeout` = `undefined`

#### Defined in

[CustomBelt.ts:49](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L49)

## Methods

### additionalStyles

▸ **additionalStyles**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:187](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L187)

___

### borderColor

▸ **borderColor**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:299](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L299)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[CustomBelt.ts:84](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L84)

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

[CustomBelt.ts:158](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L158)

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

[CustomBelt.ts:164](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L164)

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

[CustomBelt.ts:306](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L306)

___

### getSVGString

▸ **getSVGString**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:315](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L315)

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

[CustomBelt.ts:226](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L226)

___

### hasPatch

▸ **hasPatch**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:191](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L191)

___

### hasProfessorPatch

▸ **hasProfessorPatch**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:198](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L198)

___

### initElements

▸ **initElements**(): `HTMLElement`[]

#### Returns

`HTMLElement`[]

#### Defined in

[CustomBelt.ts:93](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L93)

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

[CustomBelt.ts:141](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L141)

___

### patchBorderColor

▸ **patchBorderColor**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:212](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L212)

___

### patchColor

▸ **patchColor**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:205](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L205)

___

### professorPatchColor

▸ **professorPatchColor**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:219](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L219)

___

### refreshElements

▸ **refreshElements**(): `void`

#### Returns

`void`

#### Defined in

[CustomBelt.ts:107](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L107)

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

[CustomBelt.ts:248](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L248)

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

[CustomBelt.ts:237](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L237)

___

### transition

▸ **transition**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:291](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L291)

___

### transitionNextBelt

▸ **transitionNextBelt**(): `void`

#### Returns

`void`

#### Defined in

[CustomBelt.ts:115](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L115)
