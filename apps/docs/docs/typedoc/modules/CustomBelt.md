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

▸ **getCustomBeltInit**(`elements`, `elementIds`, `elementClasses`, `beltProps`): [`CustomBeltInit`](../interfaces/CustomBelt.CustomBeltInit.md)

Create new CustomBeltInit object

#### Parameters

| Name             | Type                                             | Description                         |
| :--------------- | :----------------------------------------------- | :---------------------------------- |
| `elements`       | `null` \| `HTMLElement`[]                        | array of HTMLElements to replace    |
| `elementIds`     | `null` \| `string`[]                             | array of element Ids to replace     |
| `elementClasses` | `null` \| `string`[]                             | array of element classes to replace |
| `beltProps`      | [`BeltProps`](../interfaces/Belt.BeltProps.md)[] | -                                   |

#### Returns

[`CustomBeltInit`](../interfaces/CustomBelt.CustomBeltInit.md)

CustomBeltInit object

#### Defined in

[CustomBelt.ts:27](https://github.com/jeffholst/custom-belt/blob/dc727c6/packages/custom-belt-lib/src/CustomBelt.ts#L27)
