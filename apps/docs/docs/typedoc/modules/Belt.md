[custom-belt-lib](../README.md) / [Modules](../modules.md) / Belt

# Module: Belt

## Table of contents

### Enumerations

- [BeltCallbackType](../enums/Belt.BeltCallbackType.md)
- [BeltType](../enums/Belt.BeltType.md)
- [BeltTypeStandard](../enums/Belt.BeltTypeStandard.md)
- [StripePosition](../enums/Belt.StripePosition.md)

### Interfaces

- [Belt](../interfaces/Belt.Belt.md)
- [BeltAttributes](../interfaces/Belt.BeltAttributes.md)
- [BeltColor](../interfaces/Belt.BeltColor.md)
- [BeltProps](../interfaces/Belt.BeltProps.md)
- [RandomSettings](../interfaces/Belt.RandomSettings.md)

### Variables

- [DefaultBeltBorderColor](Belt.md#defaultbeltbordercolor)
- [DefaultBeltColor](Belt.md#defaultbeltcolor)
- [MaximumStripeCount](Belt.md#maximumstripecount)
- [MinimumStripeCount](Belt.md#minimumstripecount)
- [StripePositionDefault](Belt.md#stripepositiondefault)
- [UniqueIDPrefix](Belt.md#uniqueidprefix)

### Functions

- [combineBeltProps](Belt.md#combinebeltprops)
- [generateUniqueId](Belt.md#generateuniqueid)
- [getBelt](Belt.md#getbelt)
- [getBeltAttributes](Belt.md#getbeltattributes)
- [getBeltColorCount](Belt.md#getbeltcolorcount)
- [getBeltProps](Belt.md#getbeltprops)
- [getBeltPropsCheckered](Belt.md#getbeltpropscheckered)
- [getBeltPropsCoral](Belt.md#getbeltpropscoral)
- [getBeltPropsCrazy](Belt.md#getbeltpropscrazy)
- [getBeltPropsFromBelt](Belt.md#getbeltpropsfrombelt)
- [getBeltPropsRandom](Belt.md#getbeltpropsrandom)
- [getBeltPropsSolid](Belt.md#getbeltpropssolid)
- [getBeltPropsSplit](Belt.md#getbeltpropssplit)
- [getBeltPropsStriped](Belt.md#getbeltpropsstriped)
- [isValidHexCode](Belt.md#isvalidhexcode)
- [mapBeltColor](Belt.md#mapbeltcolor)
- [mapBeltColors](Belt.md#mapbeltcolors)

## Variables

### DefaultBeltBorderColor

• `Const` **DefaultBeltBorderColor**: ``"#434244"``

Default border color when no color provided

#### Defined in

[Belt.ts:222](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/Belt.ts#L222)

___

### DefaultBeltColor

• `Const` **DefaultBeltColor**: ``"#FF0000"``

Default color when no color provided

#### Defined in

[Belt.ts:220](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/Belt.ts#L220)

___

### MaximumStripeCount

• `Const` **MaximumStripeCount**: ``10``

Maximum number of stripes a belt may have

#### Defined in

[Belt.ts:224](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/Belt.ts#L224)

___

### MinimumStripeCount

• `Const` **MinimumStripeCount**: ``0``

Minimum number of stripes

#### Defined in

[Belt.ts:226](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/Belt.ts#L226)

___

### StripePositionDefault

• `Const` **StripePositionDefault**: [`Right`](../enums/Belt.StripePosition.md#right) = `StripePosition.Right`

Default stripe position

#### Defined in

[Belt.ts:228](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/Belt.ts#L228)

___

### UniqueIDPrefix

• `Const` **UniqueIDPrefix**: ``"custom-belt-"``

Default prefix for unique element id

#### Defined in

[Belt.ts:230](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/Belt.ts#L230)

## Functions

### combineBeltProps

▸ **combineBeltProps**(`beltProps`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Combine multiple BeltProps[] arrays into a single BeltProps[] array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `beltProps` | [`BeltProps`](../interfaces/Belt.BeltProps.md)[][] | array of BeltProp[] arrays to combine |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

combined array of BeltProps[] arrays

#### Defined in

[Belt.ts:241](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/Belt.ts#L241)

___

### generateUniqueId

▸ **generateUniqueId**(): `string`

Generate unique element id for belt

#### Returns

`string`

unique element id

#### Defined in

[Belt.ts:253](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/Belt.ts#L253)

___

### getBelt

▸ **getBelt**(`id?`, `name?`, `type?`, `sortOrder?`, `color1?`, `color2?`, `color3?`, `borderColor?`, `hasPatch?`, `patchColor?`, `patchBorderColor?`, `hasProfessorPatch?`, `professorPatchColor?`, `professorBorderColor?`, `stripeColor?`, `stripeCount?`, `stripePosition?`, `minStripes?`, `maxStripes?`): [`Belt`](../interfaces/Belt.Belt.md)

Create new Belt object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `number` | `0` | unique identifier for belt |
| `name` | `string` | `''` | unique name of belt |
| `type` | [`BeltType`](../enums/Belt.BeltType.md) | `BeltType.Solid` | type of belt |
| `sortOrder` | `number` | `0` | used for sorting belts for display |
| `color1` | `string` | `''` | hex value for belt color 1 |
| `color2` | `string` | `''` | hex value for belt color 2 |
| `color3` | `string` | `''` | hex value for belt color 3 |
| `borderColor` | `string` | `''` | hex value for belt border color |
| `hasPatch` | `boolean` | `false` | whether belt has patch or not |
| `patchColor` | `string` | `''` | hex value for patch color |
| `patchBorderColor` | `string` | `''` | hex value for patch border color |
| `hasProfessorPatch` | `boolean` | `false` | whether belt has professor patch or not |
| `professorPatchColor` | `string` | `''` | hex value for professor patch color |
| `professorBorderColor` | `string` | `''` | hex value for professor patch border color |
| `stripeColor` | `string` | `''` | hex value for stripe color |
| `stripeCount` | `number` | `0` | number of stripes for belt [0-10] |
| `stripePosition` | [`StripePosition`](../enums/Belt.StripePosition.md) | `StripePositionDefault` | starting position of stripes on belt |
| `minStripes` | `number` | `MinimumStripeCount` | minimum number of stripes for belt |
| `maxStripes` | `number` | `MaximumStripeCount` | maximum number of stripes for belt |

#### Returns

[`Belt`](../interfaces/Belt.Belt.md)

Belt object

#### Defined in

[Belt.ts:280](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/Belt.ts#L280)

___

### getBeltAttributes

▸ **getBeltAttributes**(`id?`, `width?`, `styles?`, `classes?`): [`BeltAttributes`](../interfaces/Belt.BeltAttributes.md)

Create new BeltAttributes object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | ``null`` \| `string` | `null` | element id for belt SVG |
| `width` | ``null`` \| `string` | `null` | width of belt SVG |
| `styles` | ``null`` \| `string` | `null` | additional style elements for belt SVG |
| `classes` | ``null`` \| `string` | `null` | classes for belt SVG |

#### Returns

[`BeltAttributes`](../interfaces/Belt.BeltAttributes.md)

Belt object

#### Defined in

[Belt.ts:337](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/Belt.ts#L337)

___

### getBeltColorCount

▸ **getBeltColorCount**(`beltType`): `number`

Get number of colors in BeltType [1-3]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `beltType` | [`BeltType`](../enums/Belt.BeltType.md) | BeltType to lookup color count |

#### Returns

`number`

number of colors in beltType

#### Defined in

[Belt.ts:359](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/Belt.ts#L359)

___

### getBeltProps

▸ **getBeltProps**(`name`, `beltType`, `color1`, `color2`, `color3`, `id?`, `borderColor?`, `hasPatch?`, `patchColor?`, `patchBorderColor?`, `hasProfessorPatch?`, `professorPatchColor?`, `professorBorderColor?`, `stripeColor?`, `stripeCount?`, `stripePosition?`, `minStripes?`, `maxStripes?`, `transitionCSS?`, `refreshInterval?`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Create new BeltProps[] array

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | unique name of belt |
| `beltType` | [`BeltType`](../enums/Belt.BeltType.md) | `undefined` | type of belt |
| `color1` | `string` | `undefined` | hex value for belt color 1 |
| `color2` | `string` | `undefined` | hex value for belt color 2 |
| `color3` | `string` | `undefined` | hex value for belt color 3 |
| `id` | `number` | `0` | unique identifier for belt |
| `borderColor` | `string` | `DefaultBeltBorderColor` | hex value for belt border color |
| `hasPatch` | `boolean` | `true` | whether belt has patch or not |
| `patchColor` | `string` | `'#000000'` | hex value for patch color |
| `patchBorderColor` | `string` | `''` | hex value for patch border color |
| `hasProfessorPatch` | `boolean` | `false` | whether belt has professor patch or not |
| `professorPatchColor` | `string` | `''` | hex value for professor patch color |
| `professorBorderColor` | `string` | `''` | hex value for professor patch border color |
| `stripeColor` | `string` | `''` | hex value for stripe color |
| `stripeCount` | `number` | `0` | number of stripes for belt [0-10] |
| `stripePosition` | [`StripePosition`](../enums/Belt.StripePosition.md) | `StripePosition.Right` | starting position of stripes on belt |
| `minStripes` | `number` | `0` | minimum number of stripes for belt |
| `maxStripes` | `number` | `10` | maximum number of stripes for belt |
| `transitionCSS` | `string` | `''` | CSS for transition animation |
| `refreshInterval` | `number` | `0` | interval for refreshing belt in milliseconds |
| `callback?` | (`callbackType`: [`BeltCallbackType`](../enums/Belt.BeltCallbackType.md), `belt`: [`BeltProps`](../interfaces/Belt.BeltProps.md), `event`: ``null`` \| `Event`) => `void` | `undefined` | callback function to call after belt actions |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

BeltProps[] array

#### Defined in

[Belt.ts:406](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/Belt.ts#L406)

___

### getBeltPropsCheckered

▸ **getBeltPropsCheckered**(`name`, `color1`, `color2`, `id?`, `borderColor?`, `hasPatch?`, `patchColor?`, `patchBorderColor?`, `hasProfessorPatch?`, `professorPatchColor?`, `professorBorderColor?`, `stripeColor?`, `stripeCount?`, `stripePosition?`, `minStripes?`, `maxStripes?`, `transitionCSS?`, `refreshInterval?`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Create new Checkered BeltProps[] array

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | unique name of belt |
| `color1` | `string` | `undefined` | hex value for belt color 1 |
| `color2` | `string` | `undefined` | hex value for belt color 2 |
| `id` | `number` | `0` | unique identifier for belt |
| `borderColor` | `string` | `DefaultBeltBorderColor` | hex value for belt border color |
| `hasPatch` | `boolean` | `true` | whether belt has patch or not |
| `patchColor` | `string` | `'#000000'` | hex value for patch color |
| `patchBorderColor` | `string` | `''` | hex value for patch border color |
| `hasProfessorPatch` | `boolean` | `false` | whether belt has professor patch or not |
| `professorPatchColor` | `string` | `''` | hex value for professor patch color |
| `professorBorderColor` | `string` | `''` | hex value for professor patch border color |
| `stripeColor` | `string` | `''` | hex value for stripe color |
| `stripeCount` | `number` | `0` | number of stripes for belt [0-10] |
| `stripePosition` | [`StripePosition`](../enums/Belt.StripePosition.md) | `StripePosition.Right` | starting position of stripes on belt |
| `minStripes` | `number` | `0` | minimum number of stripes for belt |
| `maxStripes` | `number` | `10` | maximum number of stripes for belt |
| `transitionCSS` | `string` | `''` | CSS for transition animation |
| `refreshInterval` | `number` | `0` | interval for refreshing belt in milliseconds |
| `callback?` | (`callbackType`: [`BeltCallbackType`](../enums/Belt.BeltCallbackType.md), `belt`: [`BeltProps`](../interfaces/Belt.BeltProps.md), `event`: ``null`` \| `Event`) => `void` | `undefined` | callback function to call after belt actions |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

BeltProps[] array

#### Defined in

[Belt.ts:489](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/Belt.ts#L489)

___

### getBeltPropsCoral

▸ **getBeltPropsCoral**(`name`, `color1`, `color2`, `id?`, `borderColor?`, `hasPatch?`, `patchColor?`, `patchBorderColor?`, `hasProfessorPatch?`, `professorPatchColor?`, `professorBorderColor?`, `stripeColor?`, `stripeCount?`, `stripePosition?`, `minStripes?`, `maxStripes?`, `transitionCSS?`, `refreshInterval?`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Create new Coral BeltProps[] array

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | unique name of belt |
| `color1` | `string` | `undefined` | hex value for belt color 1 |
| `color2` | `string` | `undefined` | hex value for belt color 2 |
| `id` | `number` | `0` | unique identifier for belt |
| `borderColor` | `string` | `DefaultBeltBorderColor` | hex value for belt border color |
| `hasPatch` | `boolean` | `true` | whether belt has patch or not |
| `patchColor` | `string` | `'#000000'` | hex value for patch color |
| `patchBorderColor` | `string` | `''` | hex value for patch border color |
| `hasProfessorPatch` | `boolean` | `false` | whether belt has professor patch or not |
| `professorPatchColor` | `string` | `''` | hex value for professor patch color |
| `professorBorderColor` | `string` | `''` | hex value for professor patch border color |
| `stripeColor` | `string` | `''` | hex value for stripe color |
| `stripeCount` | `number` | `0` | number of stripes for belt [0-10] |
| `stripePosition` | [`StripePosition`](../enums/Belt.StripePosition.md) | `StripePosition.Right` | starting position of stripes on belt |
| `minStripes` | `number` | `0` | minimum number of stripes for belt |
| `maxStripes` | `number` | `10` | maximum number of stripes for belt |
| `transitionCSS` | `string` | `''` | CSS for transition animation |
| `refreshInterval` | `number` | `0` | interval for refreshing belt in milliseconds |
| `callback?` | (`callbackType`: [`BeltCallbackType`](../enums/Belt.BeltCallbackType.md), `belt`: [`BeltProps`](../interfaces/Belt.BeltProps.md), `event`: ``null`` \| `Event`) => `void` | `undefined` | callback function to call after belt actions |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

BeltProps[] array

#### Defined in

[Belt.ts:558](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/Belt.ts#L558)

___

### getBeltPropsCrazy

▸ **getBeltPropsCrazy**(`borderColor?`, `hasPatch?`, `patchColor?`, `patchBorderColor?`, `hasProfessorPatch?`, `professorPatchColor?`, `professorBorderColor?`, `stripeCount?`, `stripePosition?`, `transitionCSS?`, `refreshInterval?`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Create new Crazy BeltProps[] array

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `borderColor` | `string` | `DefaultBeltBorderColor` | hex value for belt border color |
| `hasPatch` | `boolean` | `true` | whether belt has patch or not |
| `patchColor` | `string` | `'#000000'` | hex value for patch color |
| `patchBorderColor` | `string` | `''` | hex value for patch border color |
| `hasProfessorPatch` | `boolean` | `false` | whether belt has professor patch or not |
| `professorPatchColor` | `string` | `''` | hex value for professor patch color |
| `professorBorderColor` | `string` | `''` | hex value for professor patch border color |
| `stripeCount` | `number` | `0` | number of stripes for belt [0-10] |
| `stripePosition` | [`StripePosition`](../enums/Belt.StripePosition.md) | `StripePosition.Right` | starting position of stripes on belt |
| `transitionCSS` | `string` | `''` | CSS for transition animation |
| `refreshInterval` | `number` | `0` | interval for refreshing belt in milliseconds |
| `callback?` | (`callbackType`: [`BeltCallbackType`](../enums/Belt.BeltCallbackType.md), `belt`: [`BeltProps`](../interfaces/Belt.BeltProps.md), `event`: ``null`` \| `Event`) => `void` | `undefined` | callback function to call after belt actions |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

BeltProps[] array

#### Defined in

[Belt.ts:623](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/Belt.ts#L623)

___

### getBeltPropsFromBelt

▸ **getBeltPropsFromBelt**(`belt`, `stripeCount?`, `stripePosition?`, `transitionCSS?`, `refreshInterval?`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)

Create new BeltProps[] array from Belt object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `belt` | [`Belt`](../interfaces/Belt.Belt.md) | `undefined` | Belt object to create BeltProps[] array from |
| `stripeCount` | `number` | `0` | number of stripes for belt [0-10] |
| `stripePosition?` | [`StripePosition`](../enums/Belt.StripePosition.md) | `StripePositionDefault` | starting position of stripes on belt patch |
| `transitionCSS` | `string` | `''` | CSS for transition animation |
| `refreshInterval` | `number` | `0` | interval in milliseconds before displaying next belt |
| `callback?` | (`callbackType`: [`BeltCallbackType`](../enums/Belt.BeltCallbackType.md), `belt`: [`BeltProps`](../interfaces/Belt.BeltProps.md), `event`: ``null`` \| `Event`) => `void` | `undefined` | callback function to call after belt actions |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)

BeltProps[] array

#### Defined in

[Belt.ts:666](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/Belt.ts#L666)

___

### getBeltPropsRandom

▸ **getBeltPropsRandom**(`hasPatch?`, `hasProfessorPatch?`, `stripeCount?`, `stripePosition?`, `transitionCSS?`, `includeBelts?`, `refreshInterval?`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Create new random BeltProps[] array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hasPatch?` | `boolean` | whether belt has a patch |
| `hasProfessorPatch?` | `boolean` | whether belt has a professor patch |
| `stripeCount?` | `number` | number of stripes for belt [0-10] |
| `stripePosition?` | [`StripePosition`](../enums/Belt.StripePosition.md) | starting position of streips on belt patch |
| `transitionCSS?` | `string` | CSS for transition animation |
| `includeBelts?` | [`BeltType`](../enums/Belt.BeltType.md)[] | array of BeltTyps to include in random selection |
| `refreshInterval?` | `number` | interval in milliseconds before displaying next belt |
| `callback?` | (`callbackType`: [`BeltCallbackType`](../enums/Belt.BeltCallbackType.md), `belt`: [`BeltProps`](../interfaces/Belt.BeltProps.md), `event`: ``null`` \| `Event`) => `void` | callback function to call after belt actions |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Belt object

#### Defined in

[Belt.ts:812](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/Belt.ts#L812)

___

### getBeltPropsSolid

▸ **getBeltPropsSolid**(`name`, `color`, `id?`, `borderColor?`, `hasPatch?`, `patchColor?`, `patchBorderColor?`, `hasProfessorPatch?`, `professorPatchColor?`, `professorBorderColor?`, `stripeColor?`, `stripeCount?`, `stripePosition?`, `minStripes?`, `maxStripes?`, `transitionCSS?`, `refreshInterval?`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Create new Solid BeltProps[] array

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | unique name of belt |
| `color` | `string` | `undefined` | hex value for belt color 1 |
| `id` | `number` | `0` | unique identifier for belt |
| `borderColor` | `string` | `DefaultBeltBorderColor` | hex value for belt border color |
| `hasPatch` | `boolean` | `true` | whether belt has patch or not |
| `patchColor` | `string` | `'#000000'` | hex value for patch color |
| `patchBorderColor` | `string` | `''` | hex value for patch border color |
| `hasProfessorPatch` | `boolean` | `false` | whether belt has professor patch or not |
| `professorPatchColor` | `string` | `''` | hex value for professor patch color |
| `professorBorderColor` | `string` | `''` | hex value for professor patch border color |
| `stripeColor` | `string` | `''` | hex value for stripe color |
| `stripeCount` | `number` | `0` | number of stripes for belt [0-10] |
| `stripePosition` | [`StripePosition`](../enums/Belt.StripePosition.md) | `StripePosition.Right` | starting position of stripes on belt |
| `minStripes` | `number` | `0` | minimum number of stripes for belt |
| `maxStripes` | `number` | `10` | maximum number of stripes for belt |
| `transitionCSS` | `string` | `''` | CSS for transition animation |
| `refreshInterval` | `number` | `0` | interval for refreshing belt in milliseconds |
| `callback?` | (`callbackType`: [`BeltCallbackType`](../enums/Belt.BeltCallbackType.md), `belt`: [`BeltProps`](../interfaces/Belt.BeltProps.md), `event`: ``null`` \| `Event`) => `void` | `undefined` | callback function to call after belt actions |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

BeltProps[] array

#### Defined in

[Belt.ts:946](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/Belt.ts#L946)

___

### getBeltPropsSplit

▸ **getBeltPropsSplit**(`name`, `color1`, `color2`, `id?`, `borderColor?`, `hasPatch?`, `patchColor?`, `patchBorderColor?`, `hasProfessorPatch?`, `professorPatchColor?`, `professorBorderColor?`, `stripeColor?`, `stripeCount?`, `stripePosition?`, `minStripes?`, `maxStripes?`, `transitionCSS?`, `refreshInterval?`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Create new Split BeltProps[] array

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | unique name of belt |
| `color1` | `string` | `undefined` | hex value for belt color 1 |
| `color2` | `string` | `undefined` | hex value for belt color 2 |
| `id` | `number` | `0` | unique identifier for belt |
| `borderColor` | `string` | `DefaultBeltBorderColor` | hex value for belt border color |
| `hasPatch` | `boolean` | `true` | whether belt has patch or not |
| `patchColor` | `string` | `'#000000'` | hex value for patch color |
| `patchBorderColor` | `string` | `''` | hex value for patch border color |
| `hasProfessorPatch` | `boolean` | `false` | whether belt has professor patch or not |
| `professorPatchColor` | `string` | `''` | hex value for professor patch color |
| `professorBorderColor` | `string` | `''` | hex value for professor patch border color |
| `stripeColor` | `string` | `''` | hex value for stripe color |
| `stripeCount` | `number` | `0` | number of stripes for belt [0-10] |
| `stripePosition` | [`StripePosition`](../enums/Belt.StripePosition.md) | `StripePosition.Right` | starting position of stripes on belt |
| `minStripes` | `number` | `0` | minimum number of stripes for belt |
| `maxStripes` | `number` | `10` | maximum number of stripes for belt |
| `transitionCSS` | `string` | `''` | CSS for transition animation |
| `refreshInterval` | `number` | `0` | interval for refreshing belt in milliseconds |
| `callback?` | (`callbackType`: [`BeltCallbackType`](../enums/Belt.BeltCallbackType.md), `belt`: [`BeltProps`](../interfaces/Belt.BeltProps.md), `event`: ``null`` \| `Event`) => `void` | `undefined` | callback function to call after belt actions |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

BeltProps[] array

#### Defined in

[Belt.ts:1014](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/Belt.ts#L1014)

___

### getBeltPropsStriped

▸ **getBeltPropsStriped**(`name`, `color1`, `color2`, `color3`, `id?`, `borderColor?`, `hasPatch?`, `patchColor?`, `patchBorderColor?`, `hasProfessorPatch?`, `professorPatchColor?`, `professorBorderColor?`, `stripeColor?`, `stripeCount?`, `stripePosition?`, `minStripes?`, `maxStripes?`, `transitionCSS?`, `refreshInterval?`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Create new Striped BeltProps[] array

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | unique name of belt |
| `color1` | `string` | `undefined` | hex value for belt color 1 |
| `color2` | `string` | `undefined` | hex value for belt color 2 |
| `color3` | `string` | `undefined` | hex value for belt color 3 |
| `id` | `number` | `0` | unique identifier for belt |
| `borderColor` | `string` | `DefaultBeltBorderColor` | hex value for belt border color |
| `hasPatch` | `boolean` | `true` | whether belt has patch or not |
| `patchColor` | `string` | `'#000000'` | hex value for patch color |
| `patchBorderColor` | `string` | `''` | hex value for patch border color |
| `hasProfessorPatch` | `boolean` | `false` | whether belt has professor patch or not |
| `professorPatchColor` | `string` | `''` | hex value for professor patch color |
| `professorBorderColor` | `string` | `''` | hex value for professor patch border color |
| `stripeColor` | `string` | `''` | hex value for stripe color |
| `stripeCount` | `number` | `0` | number of stripes for belt [0-10] |
| `stripePosition` | [`StripePosition`](../enums/Belt.StripePosition.md) | `StripePosition.Right` | starting position of stripes on belt |
| `minStripes` | `number` | `0` | minimum number of stripes for belt |
| `maxStripes` | `number` | `10` | maximum number of stripes for belt |
| `transitionCSS` | `string` | `''` | CSS for transition animation |
| `refreshInterval` | `number` | `0` | interval for refreshing belt in milliseconds |
| `callback?` | (`callbackType`: [`BeltCallbackType`](../enums/Belt.BeltCallbackType.md), `belt`: [`BeltProps`](../interfaces/Belt.BeltProps.md), `event`: ``null`` \| `Event`) => `void` | `undefined` | callback function to call after belt actions |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

BeltProps[] array

#### Defined in

[Belt.ts:1084](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/Belt.ts#L1084)

___

### isValidHexCode

▸ **isValidHexCode**(`input`): `boolean`

Check for valid color hex code (must begin with # and then 3 or 6 valid hex characters)

RegEx: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

Example JavaScript Usage:

```js
isValidHexCode("#1AFFa1"); // returns true
isValidHexCode("#F00"); // returns true
isValidHexCode("123456"); // returns false (does not begin with #)
isValidHexCode("#123abce"); // returns false (too long)
isValidHexCode("#afafah"); // returns false (contains invalid character)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | string to validate |

#### Returns

`boolean`

true if valid color hex code, false otherwise

#### Defined in

[Belt.ts:1149](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/Belt.ts#L1149)

___

### mapBeltColor

▸ **mapBeltColor**(`color`, `colors`): `string`

Return hex code from BeltColor[] for color name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | color name to lookup |
| `colors` | [`BeltColor`](../interfaces/Belt.BeltColor.md)[] | BeltColor[] lookup array |

#### Returns

`string`

found hex code or original color name

#### Defined in

[Belt.ts:1172](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/Belt.ts#L1172)

___

### mapBeltColors

▸ **mapBeltColors**(`belts`, `colors`): `void`

Map all belt color names in all Belt array object to hex codes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `belts` | [`Belt`](../interfaces/Belt.Belt.md)[] | belt object |
| `colors` | [`BeltColor`](../interfaces/Belt.BeltColor.md)[] | BeltColor[] lookup array |

#### Returns

`void`

#### Defined in

[Belt.ts:1195](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/Belt.ts#L1195)
