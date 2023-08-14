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

| Name             | Type                                                           |
| :--------------- | :------------------------------------------------------------- |
| `customBeltInit` | [`CustomBeltInit`](../interfaces/CustomBelt.CustomBeltInit.md) |

#### Defined in

[CustomBelt.ts:59](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L59)

## Properties

### clickCount

• **clickCount**: `number` = `0`

#### Defined in

[CustomBelt.ts:51](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L51)

---

### clickDelay

• **clickDelay**: `number` = `700`

#### Defined in

[CustomBelt.ts:50](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L50)

---

### clickTimer

• **clickTimer**: `undefined` \| `Timeout` = `undefined`

#### Defined in

[CustomBelt.ts:52](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L52)

---

### currentBelt

• **currentBelt**: [`BeltProps`](../interfaces/Belt.BeltProps.md)

#### Defined in

[CustomBelt.ts:45](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L45)

---

### currentIndex

• **currentIndex**: `number`

#### Defined in

[CustomBelt.ts:46](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L46)

---

### customBeltInit

• **customBeltInit**: [`CustomBeltInit`](../interfaces/CustomBelt.CustomBeltInit.md)

#### Defined in

[CustomBelt.ts:44](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L44)

---

### elements

• **elements**: `HTMLElement`[]

#### Defined in

[CustomBelt.ts:48](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L48)

---

### originalId

• **originalId**: `string` = `''`

#### Defined in

[CustomBelt.ts:47](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L47)

---

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

---

### borderColor

▸ **borderColor**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:299](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L299)

---

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[CustomBelt.ts:84](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L84)

---

### doCallback

▸ **doCallback**(`event`, `callbackType`): `void`

#### Parameters

| Name           | Type                                                    |
| :------------- | :------------------------------------------------------ |
| `event`        | `null` \| `Event`                                       |
| `callbackType` | [`BeltCallbackType`](../enums/Belt.BeltCallbackType.md) |

#### Returns

`void`

#### Defined in

[CustomBelt.ts:158](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L158)

---

### downLoadSVG

▸ **downLoadSVG**(`event`): `void`

#### Parameters

| Name    | Type    |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`void`

#### Defined in

[CustomBelt.ts:164](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L164)

---

### getColor

▸ **getColor**(`hexColor`): `string`

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `hexColor` | `string` |

#### Returns

`string`

#### Defined in

[CustomBelt.ts:306](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L306)

---

### getSVGString

▸ **getSVGString**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:315](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L315)

---

### getStripeIndex

▸ **getStripeIndex**(`stripeCount`): `number`

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `stripeCount` | `number` |

#### Returns

`number`

#### Defined in

[CustomBelt.ts:226](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L226)

---

### hasPatch

▸ **hasPatch**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:191](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L191)

---

### hasProfessorPatch

▸ **hasProfessorPatch**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:198](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L198)

---

### initElements

▸ **initElements**(): `HTMLElement`[]

#### Returns

`HTMLElement`[]

#### Defined in

[CustomBelt.ts:93](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L93)

---

### oneClick

▸ **oneClick**(`event`): `void`

#### Parameters

| Name    | Type    |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`void`

#### Defined in

[CustomBelt.ts:141](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L141)

---

### patchBorderColor

▸ **patchBorderColor**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:212](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L212)

---

### patchColor

▸ **patchColor**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:205](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L205)

---

### professorPatchColor

▸ **professorPatchColor**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:219](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L219)

---

### refreshElements

▸ **refreshElements**(): `void`

#### Returns

`void`

#### Defined in

[CustomBelt.ts:107](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L107)

---

### stripe

▸ **stripe**(`stripeCount`): `string`

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `stripeCount` | `number` |

#### Returns

`string`

#### Defined in

[CustomBelt.ts:248](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L248)

---

### stripeStyle

▸ **stripeStyle**(`stripeCount`, `fillColor`): `string`

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `stripeCount` | `number` |
| `fillColor`   | `string` |

#### Returns

`string`

#### Defined in

[CustomBelt.ts:237](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L237)

---

### transition

▸ **transition**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:291](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L291)

---

### transitionNextBelt

▸ **transitionNextBelt**(): `void`

#### Returns

`void`

#### Defined in

[CustomBelt.ts:115](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L115)
