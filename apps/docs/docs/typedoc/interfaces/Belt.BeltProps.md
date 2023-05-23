[custom-belt-lib](../README.md) / [Modules](../modules.md) / [Belt](../modules/Belt.md) / BeltProps

# Interface: BeltProps

[Belt](../modules/Belt.md).BeltProps

Property object passed to <CustomBelt /> component

## Table of contents

### Properties

- [belt](Belt.BeltProps.md#belt)
- [border](Belt.BeltProps.md#border)
- [callback](Belt.BeltProps.md#callback)
- [hasPatch](Belt.BeltProps.md#haspatch)
- [hasProfessorPatch](Belt.BeltProps.md#hasprofessorpatch)
- [id](Belt.BeltProps.md#id)
- [patch](Belt.BeltProps.md#patch)
- [patchBorder](Belt.BeltProps.md#patchborder)
- [professorBorder](Belt.BeltProps.md#professorborder)
- [professorPatch](Belt.BeltProps.md#professorpatch)
- [randomSettings](Belt.BeltProps.md#randomsettings)
- [refreshInterval](Belt.BeltProps.md#refreshinterval)
- [s10l1](Belt.BeltProps.md#s10l1)
- [s10l2a](Belt.BeltProps.md#s10l2a)
- [s10l2b](Belt.BeltProps.md#s10l2b)
- [s10l3](Belt.BeltProps.md#s10l3)
- [s11l1](Belt.BeltProps.md#s11l1)
- [s11l2a](Belt.BeltProps.md#s11l2a)
- [s11l2b](Belt.BeltProps.md#s11l2b)
- [s11l3](Belt.BeltProps.md#s11l3)
- [s12l1](Belt.BeltProps.md#s12l1)
- [s12l2a](Belt.BeltProps.md#s12l2a)
- [s12l2b](Belt.BeltProps.md#s12l2b)
- [s12l3](Belt.BeltProps.md#s12l3)
- [s13l1](Belt.BeltProps.md#s13l1)
- [s13l2a](Belt.BeltProps.md#s13l2a)
- [s13l2b](Belt.BeltProps.md#s13l2b)
- [s13l3](Belt.BeltProps.md#s13l3)
- [s1l1](Belt.BeltProps.md#s1l1)
- [s1l2a](Belt.BeltProps.md#s1l2a)
- [s1l2b](Belt.BeltProps.md#s1l2b)
- [s1l3](Belt.BeltProps.md#s1l3)
- [s2l1](Belt.BeltProps.md#s2l1)
- [s2l2a](Belt.BeltProps.md#s2l2a)
- [s2l2b](Belt.BeltProps.md#s2l2b)
- [s2l3](Belt.BeltProps.md#s2l3)
- [s3l1](Belt.BeltProps.md#s3l1)
- [s3l2a](Belt.BeltProps.md#s3l2a)
- [s3l2b](Belt.BeltProps.md#s3l2b)
- [s3l3](Belt.BeltProps.md#s3l3)
- [s4l1](Belt.BeltProps.md#s4l1)
- [s4l2a](Belt.BeltProps.md#s4l2a)
- [s4l2b](Belt.BeltProps.md#s4l2b)
- [s4l3](Belt.BeltProps.md#s4l3)
- [s5l1](Belt.BeltProps.md#s5l1)
- [s5l2a](Belt.BeltProps.md#s5l2a)
- [s5l2b](Belt.BeltProps.md#s5l2b)
- [s5l3](Belt.BeltProps.md#s5l3)
- [s6l1](Belt.BeltProps.md#s6l1)
- [s6l2a](Belt.BeltProps.md#s6l2a)
- [s6l2b](Belt.BeltProps.md#s6l2b)
- [s6l3](Belt.BeltProps.md#s6l3)
- [s7l1](Belt.BeltProps.md#s7l1)
- [s7l2a](Belt.BeltProps.md#s7l2a)
- [s7l2b](Belt.BeltProps.md#s7l2b)
- [s7l3](Belt.BeltProps.md#s7l3)
- [s8l1](Belt.BeltProps.md#s8l1)
- [s8l2a](Belt.BeltProps.md#s8l2a)
- [s8l2b](Belt.BeltProps.md#s8l2b)
- [s8l3](Belt.BeltProps.md#s8l3)
- [s9l1](Belt.BeltProps.md#s9l1)
- [s9l2a](Belt.BeltProps.md#s9l2a)
- [s9l2b](Belt.BeltProps.md#s9l2b)
- [s9l3](Belt.BeltProps.md#s9l3)
- [stripe1](Belt.BeltProps.md#stripe1)
- [stripe10](Belt.BeltProps.md#stripe10)
- [stripe2](Belt.BeltProps.md#stripe2)
- [stripe3](Belt.BeltProps.md#stripe3)
- [stripe4](Belt.BeltProps.md#stripe4)
- [stripe5](Belt.BeltProps.md#stripe5)
- [stripe6](Belt.BeltProps.md#stripe6)
- [stripe7](Belt.BeltProps.md#stripe7)
- [stripe8](Belt.BeltProps.md#stripe8)
- [stripe9](Belt.BeltProps.md#stripe9)
- [stripeCount](Belt.BeltProps.md#stripecount)
- [stripePosition](Belt.BeltProps.md#stripeposition)
- [transitionCSS](Belt.BeltProps.md#transitioncss)
- [version](Belt.BeltProps.md#version)

## Properties

### belt

• **belt**: [`Belt`](Belt.Belt.md)

#### Defined in

[Belt.ts:124](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L124)

---

### border

• **border**: `string`

#### Defined in

[Belt.ts:125](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L125)

---

### callback

• `Optional` **callback**: (`event`: `null` \| `Event`, `callbackType`: [`BeltCallbackType`](../enums/Belt.BeltCallbackType.md), `belt`: [`BeltProps`](Belt.BeltProps.md)) => `void`

#### Type declaration

▸ (`event`, `callbackType`, `belt`): `void`

##### Parameters

| Name           | Type                                                    |
| :------------- | :------------------------------------------------------ |
| `event`        | `null` \| `Event`                                       |
| `callbackType` | [`BeltCallbackType`](../enums/Belt.BeltCallbackType.md) |
| `belt`         | [`BeltProps`](Belt.BeltProps.md)                        |

##### Returns

`void`

#### Defined in

[Belt.ts:199](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L199)

---

### hasPatch

• **hasPatch**: `boolean`

#### Defined in

[Belt.ts:126](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L126)

---

### hasProfessorPatch

• **hasProfessorPatch**: `boolean`

#### Defined in

[Belt.ts:131](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L131)

---

### id

• **id**: `string`

#### Defined in

[Belt.ts:123](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L123)

---

### patch

• **patch**: `string`

#### Defined in

[Belt.ts:127](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L127)

---

### patchBorder

• **patchBorder**: `string`

#### Defined in

[Belt.ts:128](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L128)

---

### professorBorder

• **professorBorder**: `string`

#### Defined in

[Belt.ts:130](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L130)

---

### professorPatch

• **professorPatch**: `string`

#### Defined in

[Belt.ts:129](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L129)

---

### randomSettings

• **randomSettings**: [`RandomSettings`](Belt.RandomSettings.md)

#### Defined in

[Belt.ts:197](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L197)

---

### refreshInterval

• **refreshInterval**: `number`

#### Defined in

[Belt.ts:198](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L198)

---

### s10l1

• **s10l1**: `string`

#### Defined in

[Belt.ts:180](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L180)

---

### s10l2a

• **s10l2a**: `string`

#### Defined in

[Belt.ts:181](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L181)

---

### s10l2b

• **s10l2b**: `string`

#### Defined in

[Belt.ts:182](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L182)

---

### s10l3

• **s10l3**: `string`

#### Defined in

[Belt.ts:183](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L183)

---

### s11l1

• **s11l1**: `string`

#### Defined in

[Belt.ts:184](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L184)

---

### s11l2a

• **s11l2a**: `string`

#### Defined in

[Belt.ts:185](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L185)

---

### s11l2b

• **s11l2b**: `string`

#### Defined in

[Belt.ts:186](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L186)

---

### s11l3

• **s11l3**: `string`

#### Defined in

[Belt.ts:187](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L187)

---

### s12l1

• **s12l1**: `string`

#### Defined in

[Belt.ts:188](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L188)

---

### s12l2a

• **s12l2a**: `string`

#### Defined in

[Belt.ts:189](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L189)

---

### s12l2b

• **s12l2b**: `string`

#### Defined in

[Belt.ts:190](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L190)

---

### s12l3

• **s12l3**: `string`

#### Defined in

[Belt.ts:191](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L191)

---

### s13l1

• **s13l1**: `string`

#### Defined in

[Belt.ts:192](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L192)

---

### s13l2a

• **s13l2a**: `string`

#### Defined in

[Belt.ts:193](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L193)

---

### s13l2b

• **s13l2b**: `string`

#### Defined in

[Belt.ts:194](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L194)

---

### s13l3

• **s13l3**: `string`

#### Defined in

[Belt.ts:195](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L195)

---

### s1l1

• **s1l1**: `string`

#### Defined in

[Belt.ts:144](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L144)

---

### s1l2a

• **s1l2a**: `string`

#### Defined in

[Belt.ts:145](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L145)

---

### s1l2b

• **s1l2b**: `string`

#### Defined in

[Belt.ts:146](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L146)

---

### s1l3

• **s1l3**: `string`

#### Defined in

[Belt.ts:147](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L147)

---

### s2l1

• **s2l1**: `string`

#### Defined in

[Belt.ts:148](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L148)

---

### s2l2a

• **s2l2a**: `string`

#### Defined in

[Belt.ts:149](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L149)

---

### s2l2b

• **s2l2b**: `string`

#### Defined in

[Belt.ts:150](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L150)

---

### s2l3

• **s2l3**: `string`

#### Defined in

[Belt.ts:151](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L151)

---

### s3l1

• **s3l1**: `string`

#### Defined in

[Belt.ts:152](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L152)

---

### s3l2a

• **s3l2a**: `string`

#### Defined in

[Belt.ts:153](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L153)

---

### s3l2b

• **s3l2b**: `string`

#### Defined in

[Belt.ts:154](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L154)

---

### s3l3

• **s3l3**: `string`

#### Defined in

[Belt.ts:155](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L155)

---

### s4l1

• **s4l1**: `string`

#### Defined in

[Belt.ts:156](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L156)

---

### s4l2a

• **s4l2a**: `string`

#### Defined in

[Belt.ts:157](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L157)

---

### s4l2b

• **s4l2b**: `string`

#### Defined in

[Belt.ts:158](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L158)

---

### s4l3

• **s4l3**: `string`

#### Defined in

[Belt.ts:159](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L159)

---

### s5l1

• **s5l1**: `string`

#### Defined in

[Belt.ts:160](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L160)

---

### s5l2a

• **s5l2a**: `string`

#### Defined in

[Belt.ts:161](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L161)

---

### s5l2b

• **s5l2b**: `string`

#### Defined in

[Belt.ts:162](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L162)

---

### s5l3

• **s5l3**: `string`

#### Defined in

[Belt.ts:163](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L163)

---

### s6l1

• **s6l1**: `string`

#### Defined in

[Belt.ts:164](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L164)

---

### s6l2a

• **s6l2a**: `string`

#### Defined in

[Belt.ts:165](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L165)

---

### s6l2b

• **s6l2b**: `string`

#### Defined in

[Belt.ts:166](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L166)

---

### s6l3

• **s6l3**: `string`

#### Defined in

[Belt.ts:167](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L167)

---

### s7l1

• **s7l1**: `string`

#### Defined in

[Belt.ts:168](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L168)

---

### s7l2a

• **s7l2a**: `string`

#### Defined in

[Belt.ts:169](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L169)

---

### s7l2b

• **s7l2b**: `string`

#### Defined in

[Belt.ts:170](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L170)

---

### s7l3

• **s7l3**: `string`

#### Defined in

[Belt.ts:171](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L171)

---

### s8l1

• **s8l1**: `string`

#### Defined in

[Belt.ts:172](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L172)

---

### s8l2a

• **s8l2a**: `string`

#### Defined in

[Belt.ts:173](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L173)

---

### s8l2b

• **s8l2b**: `string`

#### Defined in

[Belt.ts:174](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L174)

---

### s8l3

• **s8l3**: `string`

#### Defined in

[Belt.ts:175](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L175)

---

### s9l1

• **s9l1**: `string`

#### Defined in

[Belt.ts:176](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L176)

---

### s9l2a

• **s9l2a**: `string`

#### Defined in

[Belt.ts:177](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L177)

---

### s9l2b

• **s9l2b**: `string`

#### Defined in

[Belt.ts:178](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L178)

---

### s9l3

• **s9l3**: `string`

#### Defined in

[Belt.ts:179](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L179)

---

### stripe1

• **stripe1**: `string`

#### Defined in

[Belt.ts:134](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L134)

---

### stripe10

• **stripe10**: `string`

#### Defined in

[Belt.ts:143](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L143)

---

### stripe2

• **stripe2**: `string`

#### Defined in

[Belt.ts:135](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L135)

---

### stripe3

• **stripe3**: `string`

#### Defined in

[Belt.ts:136](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L136)

---

### stripe4

• **stripe4**: `string`

#### Defined in

[Belt.ts:137](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L137)

---

### stripe5

• **stripe5**: `string`

#### Defined in

[Belt.ts:138](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L138)

---

### stripe6

• **stripe6**: `string`

#### Defined in

[Belt.ts:139](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L139)

---

### stripe7

• **stripe7**: `string`

#### Defined in

[Belt.ts:140](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L140)

---

### stripe8

• **stripe8**: `string`

#### Defined in

[Belt.ts:141](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L141)

---

### stripe9

• **stripe9**: `string`

#### Defined in

[Belt.ts:142](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L142)

---

### stripeCount

• **stripeCount**: `number`

#### Defined in

[Belt.ts:132](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L132)

---

### stripePosition

• **stripePosition**: [`StripePosition`](../enums/Belt.StripePosition.md)

#### Defined in

[Belt.ts:133](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L133)

---

### transitionCSS

• **transitionCSS**: `string`

#### Defined in

[Belt.ts:196](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L196)

---

### version

• **version**: `string`

#### Defined in

[Belt.ts:122](https://github.com/jeffholst/custom-belt/blob/e321ac8/packages/custom-belt-lib/src/Belt.ts#L122)
