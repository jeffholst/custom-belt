[custom-belt-lib](../README.md) / [Modules](../modules.md) / [Belt](../modules/Belt.md) / BeltProps

# Interface: BeltProps

[Belt](../modules/Belt.md).BeltProps

Property object passed to <CustomBelt /> component

## Table of contents

### Properties

- [belt](Belt.BeltProps.md#belt)
- [borderColor](Belt.BeltProps.md#bordercolor)
- [callback](Belt.BeltProps.md#callback)
- [hasPatch](Belt.BeltProps.md#haspatch)
- [hasProfessorPatch](Belt.BeltProps.md#hasprofessorpatch)
- [id](Belt.BeltProps.md#id)
- [patchBorder](Belt.BeltProps.md#patchborder)
- [patchColor](Belt.BeltProps.md#patchcolor)
- [professorBorder](Belt.BeltProps.md#professorborder)
- [professorPatch](Belt.BeltProps.md#professorpatch)
- [randomSettings](Belt.BeltProps.md#randomsettings)
- [refreshInterval](Belt.BeltProps.md#refreshinterval)
- [s10l1Color](Belt.BeltProps.md#s10l1color)
- [s10l2aColor](Belt.BeltProps.md#s10l2acolor)
- [s10l2bColor](Belt.BeltProps.md#s10l2bcolor)
- [s10l3Color](Belt.BeltProps.md#s10l3color)
- [s11l1Color](Belt.BeltProps.md#s11l1color)
- [s11l2aColor](Belt.BeltProps.md#s11l2acolor)
- [s11l2bColor](Belt.BeltProps.md#s11l2bcolor)
- [s11l3Color](Belt.BeltProps.md#s11l3color)
- [s12l1Color](Belt.BeltProps.md#s12l1color)
- [s12l2aColor](Belt.BeltProps.md#s12l2acolor)
- [s12l2bColor](Belt.BeltProps.md#s12l2bcolor)
- [s12l3Color](Belt.BeltProps.md#s12l3color)
- [s13l1Color](Belt.BeltProps.md#s13l1color)
- [s13l2aColor](Belt.BeltProps.md#s13l2acolor)
- [s13l2bColor](Belt.BeltProps.md#s13l2bcolor)
- [s13l3Color](Belt.BeltProps.md#s13l3color)
- [s1l1Color](Belt.BeltProps.md#s1l1color)
- [s1l2aColor](Belt.BeltProps.md#s1l2acolor)
- [s1l2bColor](Belt.BeltProps.md#s1l2bcolor)
- [s1l3Color](Belt.BeltProps.md#s1l3color)
- [s2l1Color](Belt.BeltProps.md#s2l1color)
- [s2l2aColor](Belt.BeltProps.md#s2l2acolor)
- [s2l2bColor](Belt.BeltProps.md#s2l2bcolor)
- [s2l3Color](Belt.BeltProps.md#s2l3color)
- [s3l1Color](Belt.BeltProps.md#s3l1color)
- [s3l2aColor](Belt.BeltProps.md#s3l2acolor)
- [s3l2bColor](Belt.BeltProps.md#s3l2bcolor)
- [s3l3Color](Belt.BeltProps.md#s3l3color)
- [s4l1Color](Belt.BeltProps.md#s4l1color)
- [s4l2aColor](Belt.BeltProps.md#s4l2acolor)
- [s4l2bColor](Belt.BeltProps.md#s4l2bcolor)
- [s4l3Color](Belt.BeltProps.md#s4l3color)
- [s5l1Color](Belt.BeltProps.md#s5l1color)
- [s5l2aColor](Belt.BeltProps.md#s5l2acolor)
- [s5l2bColor](Belt.BeltProps.md#s5l2bcolor)
- [s5l3Color](Belt.BeltProps.md#s5l3color)
- [s6l1Color](Belt.BeltProps.md#s6l1color)
- [s6l2aColor](Belt.BeltProps.md#s6l2acolor)
- [s6l2bColor](Belt.BeltProps.md#s6l2bcolor)
- [s6l3Color](Belt.BeltProps.md#s6l3color)
- [s7l1Color](Belt.BeltProps.md#s7l1color)
- [s7l2aColor](Belt.BeltProps.md#s7l2acolor)
- [s7l2bColor](Belt.BeltProps.md#s7l2bcolor)
- [s7l3Color](Belt.BeltProps.md#s7l3color)
- [s8l1Color](Belt.BeltProps.md#s8l1color)
- [s8l2aColor](Belt.BeltProps.md#s8l2acolor)
- [s8l2bColor](Belt.BeltProps.md#s8l2bcolor)
- [s8l3Color](Belt.BeltProps.md#s8l3color)
- [s9l1Color](Belt.BeltProps.md#s9l1color)
- [s9l2aColor](Belt.BeltProps.md#s9l2acolor)
- [s9l2bColor](Belt.BeltProps.md#s9l2bcolor)
- [s9l3Color](Belt.BeltProps.md#s9l3color)
- [stripeColor1](Belt.BeltProps.md#stripecolor1)
- [stripeColor10](Belt.BeltProps.md#stripecolor10)
- [stripeColor2](Belt.BeltProps.md#stripecolor2)
- [stripeColor3](Belt.BeltProps.md#stripecolor3)
- [stripeColor4](Belt.BeltProps.md#stripecolor4)
- [stripeColor5](Belt.BeltProps.md#stripecolor5)
- [stripeColor6](Belt.BeltProps.md#stripecolor6)
- [stripeColor7](Belt.BeltProps.md#stripecolor7)
- [stripeColor8](Belt.BeltProps.md#stripecolor8)
- [stripeColor9](Belt.BeltProps.md#stripecolor9)
- [stripeCount](Belt.BeltProps.md#stripecount)
- [stripePosition](Belt.BeltProps.md#stripeposition)
- [transitionCSS](Belt.BeltProps.md#transitioncss)
- [version](Belt.BeltProps.md#version)

## Properties

### belt

• **belt**: [`Belt`](Belt.Belt.md)

#### Defined in

[Belt.ts:124](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L124)

---

### borderColor

• **borderColor**: `string`

#### Defined in

[Belt.ts:125](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L125)

---

### callback

• `Optional` **callback**: (`callbackType`: [`BeltCallbackType`](../enums/Belt.BeltCallbackType.md), `belt`: [`BeltProps`](Belt.BeltProps.md), `event`: `null` \| `Event`) => `void`

#### Type declaration

▸ (`callbackType`, `belt`, `event`): `void`

##### Parameters

| Name           | Type                                                    |
| :------------- | :------------------------------------------------------ |
| `callbackType` | [`BeltCallbackType`](../enums/Belt.BeltCallbackType.md) |
| `belt`         | [`BeltProps`](Belt.BeltProps.md)                        |
| `event`        | `null` \| `Event`                                       |

##### Returns

`void`

#### Defined in

[Belt.ts:199](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L199)

---

### hasPatch

• **hasPatch**: `boolean`

#### Defined in

[Belt.ts:126](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L126)

---

### hasProfessorPatch

• **hasProfessorPatch**: `boolean`

#### Defined in

[Belt.ts:131](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L131)

---

### id

• **id**: `string`

#### Defined in

[Belt.ts:123](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L123)

---

### patchBorder

• **patchBorder**: `string`

#### Defined in

[Belt.ts:128](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L128)

---

### patchColor

• **patchColor**: `string`

#### Defined in

[Belt.ts:127](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L127)

---

### professorBorder

• **professorBorder**: `string`

#### Defined in

[Belt.ts:130](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L130)

---

### professorPatch

• **professorPatch**: `string`

#### Defined in

[Belt.ts:129](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L129)

---

### randomSettings

• **randomSettings**: [`RandomSettings`](Belt.RandomSettings.md)

#### Defined in

[Belt.ts:197](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L197)

---

### refreshInterval

• **refreshInterval**: `number`

#### Defined in

[Belt.ts:198](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L198)

---

### s10l1Color

• **s10l1Color**: `string`

#### Defined in

[Belt.ts:180](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L180)

---

### s10l2aColor

• **s10l2aColor**: `string`

#### Defined in

[Belt.ts:181](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L181)

---

### s10l2bColor

• **s10l2bColor**: `string`

#### Defined in

[Belt.ts:182](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L182)

---

### s10l3Color

• **s10l3Color**: `string`

#### Defined in

[Belt.ts:183](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L183)

---

### s11l1Color

• **s11l1Color**: `string`

#### Defined in

[Belt.ts:184](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L184)

---

### s11l2aColor

• **s11l2aColor**: `string`

#### Defined in

[Belt.ts:185](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L185)

---

### s11l2bColor

• **s11l2bColor**: `string`

#### Defined in

[Belt.ts:186](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L186)

---

### s11l3Color

• **s11l3Color**: `string`

#### Defined in

[Belt.ts:187](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L187)

---

### s12l1Color

• **s12l1Color**: `string`

#### Defined in

[Belt.ts:188](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L188)

---

### s12l2aColor

• **s12l2aColor**: `string`

#### Defined in

[Belt.ts:189](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L189)

---

### s12l2bColor

• **s12l2bColor**: `string`

#### Defined in

[Belt.ts:190](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L190)

---

### s12l3Color

• **s12l3Color**: `string`

#### Defined in

[Belt.ts:191](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L191)

---

### s13l1Color

• **s13l1Color**: `string`

#### Defined in

[Belt.ts:192](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L192)

---

### s13l2aColor

• **s13l2aColor**: `string`

#### Defined in

[Belt.ts:193](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L193)

---

### s13l2bColor

• **s13l2bColor**: `string`

#### Defined in

[Belt.ts:194](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L194)

---

### s13l3Color

• **s13l3Color**: `string`

#### Defined in

[Belt.ts:195](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L195)

---

### s1l1Color

• **s1l1Color**: `string`

#### Defined in

[Belt.ts:144](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L144)

---

### s1l2aColor

• **s1l2aColor**: `string`

#### Defined in

[Belt.ts:145](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L145)

---

### s1l2bColor

• **s1l2bColor**: `string`

#### Defined in

[Belt.ts:146](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L146)

---

### s1l3Color

• **s1l3Color**: `string`

#### Defined in

[Belt.ts:147](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L147)

---

### s2l1Color

• **s2l1Color**: `string`

#### Defined in

[Belt.ts:148](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L148)

---

### s2l2aColor

• **s2l2aColor**: `string`

#### Defined in

[Belt.ts:149](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L149)

---

### s2l2bColor

• **s2l2bColor**: `string`

#### Defined in

[Belt.ts:150](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L150)

---

### s2l3Color

• **s2l3Color**: `string`

#### Defined in

[Belt.ts:151](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L151)

---

### s3l1Color

• **s3l1Color**: `string`

#### Defined in

[Belt.ts:152](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L152)

---

### s3l2aColor

• **s3l2aColor**: `string`

#### Defined in

[Belt.ts:153](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L153)

---

### s3l2bColor

• **s3l2bColor**: `string`

#### Defined in

[Belt.ts:154](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L154)

---

### s3l3Color

• **s3l3Color**: `string`

#### Defined in

[Belt.ts:155](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L155)

---

### s4l1Color

• **s4l1Color**: `string`

#### Defined in

[Belt.ts:156](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L156)

---

### s4l2aColor

• **s4l2aColor**: `string`

#### Defined in

[Belt.ts:157](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L157)

---

### s4l2bColor

• **s4l2bColor**: `string`

#### Defined in

[Belt.ts:158](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L158)

---

### s4l3Color

• **s4l3Color**: `string`

#### Defined in

[Belt.ts:159](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L159)

---

### s5l1Color

• **s5l1Color**: `string`

#### Defined in

[Belt.ts:160](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L160)

---

### s5l2aColor

• **s5l2aColor**: `string`

#### Defined in

[Belt.ts:161](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L161)

---

### s5l2bColor

• **s5l2bColor**: `string`

#### Defined in

[Belt.ts:162](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L162)

---

### s5l3Color

• **s5l3Color**: `string`

#### Defined in

[Belt.ts:163](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L163)

---

### s6l1Color

• **s6l1Color**: `string`

#### Defined in

[Belt.ts:164](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L164)

---

### s6l2aColor

• **s6l2aColor**: `string`

#### Defined in

[Belt.ts:165](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L165)

---

### s6l2bColor

• **s6l2bColor**: `string`

#### Defined in

[Belt.ts:166](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L166)

---

### s6l3Color

• **s6l3Color**: `string`

#### Defined in

[Belt.ts:167](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L167)

---

### s7l1Color

• **s7l1Color**: `string`

#### Defined in

[Belt.ts:168](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L168)

---

### s7l2aColor

• **s7l2aColor**: `string`

#### Defined in

[Belt.ts:169](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L169)

---

### s7l2bColor

• **s7l2bColor**: `string`

#### Defined in

[Belt.ts:170](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L170)

---

### s7l3Color

• **s7l3Color**: `string`

#### Defined in

[Belt.ts:171](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L171)

---

### s8l1Color

• **s8l1Color**: `string`

#### Defined in

[Belt.ts:172](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L172)

---

### s8l2aColor

• **s8l2aColor**: `string`

#### Defined in

[Belt.ts:173](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L173)

---

### s8l2bColor

• **s8l2bColor**: `string`

#### Defined in

[Belt.ts:174](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L174)

---

### s8l3Color

• **s8l3Color**: `string`

#### Defined in

[Belt.ts:175](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L175)

---

### s9l1Color

• **s9l1Color**: `string`

#### Defined in

[Belt.ts:176](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L176)

---

### s9l2aColor

• **s9l2aColor**: `string`

#### Defined in

[Belt.ts:177](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L177)

---

### s9l2bColor

• **s9l2bColor**: `string`

#### Defined in

[Belt.ts:178](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L178)

---

### s9l3Color

• **s9l3Color**: `string`

#### Defined in

[Belt.ts:179](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L179)

---

### stripeColor1

• **stripeColor1**: `string`

#### Defined in

[Belt.ts:134](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L134)

---

### stripeColor10

• **stripeColor10**: `string`

#### Defined in

[Belt.ts:143](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L143)

---

### stripeColor2

• **stripeColor2**: `string`

#### Defined in

[Belt.ts:135](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L135)

---

### stripeColor3

• **stripeColor3**: `string`

#### Defined in

[Belt.ts:136](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L136)

---

### stripeColor4

• **stripeColor4**: `string`

#### Defined in

[Belt.ts:137](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L137)

---

### stripeColor5

• **stripeColor5**: `string`

#### Defined in

[Belt.ts:138](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L138)

---

### stripeColor6

• **stripeColor6**: `string`

#### Defined in

[Belt.ts:139](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L139)

---

### stripeColor7

• **stripeColor7**: `string`

#### Defined in

[Belt.ts:140](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L140)

---

### stripeColor8

• **stripeColor8**: `string`

#### Defined in

[Belt.ts:141](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L141)

---

### stripeColor9

• **stripeColor9**: `string`

#### Defined in

[Belt.ts:142](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L142)

---

### stripeCount

• **stripeCount**: `number`

#### Defined in

[Belt.ts:132](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L132)

---

### stripePosition

• **stripePosition**: [`StripePosition`](../enums/Belt.StripePosition.md)

#### Defined in

[Belt.ts:133](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L133)

---

### transitionCSS

• **transitionCSS**: `string`

#### Defined in

[Belt.ts:196](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L196)

---

### version

• **version**: `string`

#### Defined in

[Belt.ts:122](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/Belt.ts#L122)
