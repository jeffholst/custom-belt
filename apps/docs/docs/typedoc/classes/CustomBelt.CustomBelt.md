[custom-belt-lib](../README.md) / [Modules](../modules.md) / [CustomBelt](../modules/CustomBelt.md) / CustomBelt

# Class: CustomBelt

[CustomBelt](../modules/CustomBelt.md).CustomBelt

---

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

• **new CustomBelt**(`customBeltInit`)

Instantiate a new CustomBelt object

#### Parameters

| Name             | Type                                                           | Description           |
| :--------------- | :------------------------------------------------------------- | :-------------------- |
| `customBeltInit` | [`CustomBeltInit`](../interfaces/CustomBelt.CustomBeltInit.md) | initialization object |

#### Defined in

[CustomBelt.ts:63](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L63)

## Properties

### clickCount

• **clickCount**: `number` = `0`

#### Defined in

[CustomBelt.ts:55](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L55)

---

### clickDelay

• **clickDelay**: `number` = `700`

#### Defined in

[CustomBelt.ts:54](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L54)

---

### clickTimer

• **clickTimer**: `undefined` \| `Timeout` = `undefined`

#### Defined in

[CustomBelt.ts:56](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L56)

---

### currentBelt

• **currentBelt**: `null` \| [`BeltProps`](../interfaces/Belt.BeltProps.md)

#### Defined in

[CustomBelt.ts:49](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L49)

---

### currentIndex

• **currentIndex**: `number`

#### Defined in

[CustomBelt.ts:50](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L50)

---

### customBeltInit

• **customBeltInit**: [`CustomBeltInit`](../interfaces/CustomBelt.CustomBeltInit.md)

#### Defined in

[CustomBelt.ts:48](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L48)

---

### elements

• **elements**: `HTMLElement`[]

#### Defined in

[CustomBelt.ts:52](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L52)

---

### originalId

• **originalId**: `string` = `''`

#### Defined in

[CustomBelt.ts:51](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L51)

---

### refreshIntervalId

• **refreshIntervalId**: `undefined` \| `Timeout` = `undefined`

#### Defined in

[CustomBelt.ts:53](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L53)

---

### svgString

• **svgString**: `string` = `''`

#### Defined in

[CustomBelt.ts:57](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L57)

---

### valid

• **valid**: `boolean` = `true`

#### Defined in

[CustomBelt.ts:58](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L58)

## Methods

### additionalStyles

▸ **additionalStyles**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:100](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L100)

---

### borderColor

▸ **borderColor**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:104](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L104)

---

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[CustomBelt.ts:111](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L111)

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

[CustomBelt.ts:120](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L120)

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

[CustomBelt.ts:126](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L126)

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

[CustomBelt.ts:149](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L149)

---

### getSVGString

▸ **getSVGString**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:169](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L169)

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

[CustomBelt.ts:158](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L158)

---

### hasPatch

▸ **hasPatch**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:637](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L637)

---

### hasProfessorPatch

▸ **hasProfessorPatch**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:644](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L644)

---

### initElements

▸ **initElements**(): `HTMLElement`[]

#### Returns

`HTMLElement`[]

#### Defined in

[CustomBelt.ts:651](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L651)

---

### isValid

▸ **isValid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[CustomBelt.ts:682](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L682)

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

[CustomBelt.ts:686](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L686)

---

### patchBorderColor

▸ **patchBorderColor**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:710](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L710)

---

### patchColor

▸ **patchColor**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:703](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L703)

---

### professorPatchColor

▸ **professorPatchColor**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:717](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L717)

---

### refreshElements

▸ **refreshElements**(): `void`

#### Returns

`void`

#### Defined in

[CustomBelt.ts:724](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L724)

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

[CustomBelt.ts:732](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L732)

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

[CustomBelt.ts:775](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L775)

---

### transition

▸ **transition**(): `string`

#### Returns

`string`

#### Defined in

[CustomBelt.ts:786](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L786)

---

### transitionNextBelt

▸ **transitionNextBelt**(): `void`

#### Returns

`void`

#### Defined in

[CustomBelt.ts:794](https://github.com/jeffholst/custom-belt/blob/3e8ce41/packages/custom-belt-lib/src/CustomBelt.ts#L794)
