[custom-belt-lib](../README.md) / [Modules](../modules.md) / [BeltSystem](../modules/BeltSystem.md) / BeltSystem

# Class: BeltSystem

[BeltSystem](../modules/BeltSystem.md).BeltSystem

Class used to represent predefined belt systems

## Table of contents

### Constructors

- [constructor](BeltSystem.BeltSystem.md#constructor)

### Properties

- [belts](BeltSystem.BeltSystem.md#belts)
- [colors](BeltSystem.BeltSystem.md#colors)
- [name](BeltSystem.BeltSystem.md#name)
- [refreshInterval](BeltSystem.BeltSystem.md#refreshinterval)
- [title](BeltSystem.BeltSystem.md#title)
- [transitionCSS](BeltSystem.BeltSystem.md#transitioncss)

### Methods

- [getBeltById](BeltSystem.BeltSystem.md#getbeltbyid)
- [getBeltByName](BeltSystem.BeltSystem.md#getbeltbyname)
- [getBeltProps](BeltSystem.BeltSystem.md#getbeltprops)
- [getBeltPropsAll](BeltSystem.BeltSystem.md#getbeltpropsall)
- [getBeltPropsById](BeltSystem.BeltSystem.md#getbeltpropsbyid)
- [getBeltPropsByIds](BeltSystem.BeltSystem.md#getbeltpropsbyids)
- [getBeltPropsByName](BeltSystem.BeltSystem.md#getbeltpropsbyname)
- [getBeltPropsByNames](BeltSystem.BeltSystem.md#getbeltpropsbynames)
- [getBeltsByIds](BeltSystem.BeltSystem.md#getbeltsbyids)
- [getBeltsByNames](BeltSystem.BeltSystem.md#getbeltsbynames)

## Constructors

### constructor

• **new BeltSystem**(`system`)

Instantiate a new BeltSystem object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `system` | `string` | belt system object to use |

#### Defined in

[BeltSystem.ts:49](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/BeltSystem.ts#L49)

## Properties

### belts

• **belts**: [`Belt`](../interfaces/Belt.Belt.md)[]

belts in the system

#### Defined in

[BeltSystem.ts:43](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/BeltSystem.ts#L43)

___

### colors

• **colors**: [`BeltColor`](../interfaces/Belt.BeltColor.md)[]

lookup table of friendly color names to hex codes

#### Defined in

[BeltSystem.ts:41](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/BeltSystem.ts#L41)

___

### name

• **name**: `string`

name of belt system

#### Defined in

[BeltSystem.ts:33](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/BeltSystem.ts#L33)

___

### refreshInterval

• **refreshInterval**: `number`

refresh interval in milliseconds

#### Defined in

[BeltSystem.ts:39](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/BeltSystem.ts#L39)

___

### title

• **title**: `string`

title of belt system

#### Defined in

[BeltSystem.ts:35](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/BeltSystem.ts#L35)

___

### transitionCSS

• **transitionCSS**: `string`

transition CSS

#### Defined in

[BeltSystem.ts:37](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/BeltSystem.ts#L37)

## Methods

### getBeltById

▸ **getBeltById**(`id`): `undefined` \| [`Belt`](../interfaces/Belt.Belt.md)

Get a Belt by Id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | belt id to find |

#### Returns

`undefined` \| [`Belt`](../interfaces/Belt.Belt.md)

matching Belt or undefined

#### Defined in

[BeltSystem.ts:79](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/BeltSystem.ts#L79)

___

### getBeltByName

▸ **getBeltByName**(`name`): `undefined` \| [`Belt`](../interfaces/Belt.Belt.md)

Get a Belt by Name (case insensitive search)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | belt name to find |

#### Returns

`undefined` \| [`Belt`](../interfaces/Belt.Belt.md)

matching Belt or undefined

#### Defined in

[BeltSystem.ts:88](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/BeltSystem.ts#L88)

___

### getBeltProps

▸ **getBeltProps**(`belt`, `stripeCount`, `stripePosition?`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)

Get BeltpProps for provided Belt object and stripe info

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `belt` | [`Belt`](../interfaces/Belt.Belt.md) | `undefined` | belt object to use |
| `stripeCount` | `number` | `undefined` | number of stripes to use (0-10) |
| `stripePosition` | `undefined` \| [`StripePosition`](../enums/Belt.StripePosition.md) | `undefined` | stripe placement |
| `callback?` | (`callbackType`: [`BeltCallbackType`](../enums/Belt.BeltCallbackType.md), `belt`: [`BeltProps`](../interfaces/Belt.BeltProps.md), `event`: ``null`` \| `Event`) => `void` | `undefined` | - |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)

BeltProps for provided Belt object and stripe info

#### Defined in

[BeltSystem.ts:99](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/BeltSystem.ts#L99)

___

### getBeltPropsAll

▸ **getBeltPropsAll**(`transitionCSS?`, `refreshInterval?`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Get all BeltProps from the belt system

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `transitionCSS` | `string` | `''` | transition css to use between belt changes. Empty for no effect |
| `refreshInterval` | `number` | `0` | milliseconds to wait before changing belt. 0 for no rotate |
| `callback?` | (`callbackType`: [`BeltCallbackType`](../enums/Belt.BeltCallbackType.md), `belt`: [`BeltProps`](../interfaces/Belt.BeltProps.md), `event`: ``null`` \| `Event`) => `void` | `undefined` | - |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

all belts in the belt system

#### Defined in

[BeltSystem.ts:124](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/BeltSystem.ts#L124)

___

### getBeltPropsById

▸ **getBeltPropsById**(`id`, `stripeCount?`, `stripePosition?`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Get BeltProps for matching belt id

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `number` | `undefined` | belt id to find |
| `stripeCount` | `undefined` \| `number` | `undefined` | number of stripes to use (0-10) |
| `stripePosition` | `undefined` \| [`StripePosition`](../enums/Belt.StripePosition.md) | `undefined` | stripe placement (Right or Left) |
| `callback?` | (`callbackType`: [`BeltCallbackType`](../enums/Belt.BeltCallbackType.md), `belt`: [`BeltProps`](../interfaces/Belt.BeltProps.md), `event`: ``null`` \| `Event`) => `void` | `undefined` | - |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

BeltProps for matching belt name

#### Defined in

[BeltSystem.ts:148](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/BeltSystem.ts#L148)

___

### getBeltPropsByIds

▸ **getBeltPropsByIds**(`ids`, `stripeCount?`, `stripePosition?`, `transitionCSS?`, `refreshInterval?`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Get BeltProps for matching belt ids

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ids` | `number`[] | `undefined` | ids of belts to return |
| `stripeCount` | `undefined` \| `number` | `undefined` | the number of stripes to use |
| `stripePosition` | `undefined` \| [`StripePosition`](../enums/Belt.StripePosition.md) | `undefined` | the stripe position to use |
| `transitionCSS` | `string` | `''` | transition css to use between belt changes |
| `refreshInterval` | `number` | `0` | milliseconds to wait before changing belt |
| `callback?` | (`callbackType`: [`BeltCallbackType`](../enums/Belt.BeltCallbackType.md), `belt`: [`BeltProps`](../interfaces/Belt.BeltProps.md), `event`: ``null`` \| `Event`) => `void` | `undefined` | - |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

BeltProps[] of matching belts

#### Defined in

[BeltSystem.ts:180](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/BeltSystem.ts#L180)

___

### getBeltPropsByName

▸ **getBeltPropsByName**(`name`, `stripeCount?`, `stripePosition?`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Get BeltProps for matching belt name

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | belt name to find |
| `stripeCount` | `undefined` \| `number` | `undefined` | number of stripes to use (0-10) |
| `stripePosition` | `undefined` \| [`StripePosition`](../enums/Belt.StripePosition.md) | `undefined` | stripe placement (Right or Left) |
| `callback?` | (`callbackType`: [`BeltCallbackType`](../enums/Belt.BeltCallbackType.md), `belt`: [`BeltProps`](../interfaces/Belt.BeltProps.md), `event`: ``null`` \| `Event`) => `void` | `undefined` | - |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

BeltProps for matching belt name

#### Defined in

[BeltSystem.ts:215](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/BeltSystem.ts#L215)

___

### getBeltPropsByNames

▸ **getBeltPropsByNames**(`names`, `stripeCount?`, `stripePosition?`, `transitionCSS?`, `refreshInterval?`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Get BeltProps for matching belt names

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `names` | `string`[] | `undefined` | names of belts to return |
| `stripeCount` | `undefined` \| `number` | `undefined` | the number of stripes to use |
| `stripePosition` | `undefined` \| [`StripePosition`](../enums/Belt.StripePosition.md) | `undefined` | the stripe position to use |
| `transitionCSS` | `string` | `''` | transition css to use between belt changes |
| `refreshInterval` | `number` | `0` | milliseconds to wait before changing belt |
| `callback?` | (`callbackType`: [`BeltCallbackType`](../enums/Belt.BeltCallbackType.md), `belt`: [`BeltProps`](../interfaces/Belt.BeltProps.md), `event`: ``null`` \| `Event`) => `void` | `undefined` | - |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

BeltProps[] of matching belts

#### Defined in

[BeltSystem.ts:247](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/BeltSystem.ts#L247)

___

### getBeltsByIds

▸ **getBeltsByIds**(`ids`): [`Belt`](../interfaces/Belt.Belt.md)[]

Get matching belts by ids

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `number`[] | ids of belts to return |

#### Returns

[`Belt`](../interfaces/Belt.Belt.md)[]

Belt[] of matching belts

#### Defined in

[BeltSystem.ts:280](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/BeltSystem.ts#L280)

___

### getBeltsByNames

▸ **getBeltsByNames**(`names`): [`Belt`](../interfaces/Belt.Belt.md)[]

Get matching belts by names

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `names` | `string`[] | names of belts to return |

#### Returns

[`Belt`](../interfaces/Belt.Belt.md)[]

Belt[] of matching belts

#### Defined in

[BeltSystem.ts:297](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/BeltSystem.ts#L297)
