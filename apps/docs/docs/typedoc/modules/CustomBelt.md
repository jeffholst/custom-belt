[custom-belt-lib](../README.md) / [Modules](../modules.md) / CustomBelt

# Module: CustomBelt

## Table of contents

### Classes

- [CustomBelt](../classes/CustomBelt.CustomBelt.md)

### Interfaces

- [CustomBeltInit](../interfaces/CustomBelt.CustomBeltInit.md)

### Functions

- [getCustomBeltInit](CustomBelt.md#getcustombeltinit)

## Functions

### getCustomBeltInit

▸ **getCustomBeltInit**(`selectors`, `beltProps`, `beltAttributes?`): [`CustomBeltInit`](../interfaces/CustomBelt.CustomBeltInit.md)

Create new CustomBeltInit object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `selectors` | ``null`` \| `string`[] \| `HTMLElement`[] | `undefined` | array of HTMLElements or array of HTML Ids and/or Classes to replace |
| `beltProps` | [`BeltProps`](../interfaces/Belt.BeltProps.md)[] | `undefined` | - |
| `beltAttributes` | ``null`` \| [`BeltAttributes`](../interfaces/Belt.BeltAttributes.md) | `null` | - |

#### Returns

[`CustomBeltInit`](../interfaces/CustomBelt.CustomBeltInit.md)

CustomBeltInit object

#### Defined in

[CustomBelt.ts:36](https://github.com/jeffholst/custom-belt/blob/392183a/packages/custom-belt-lib/src/CustomBelt.ts#L36)
