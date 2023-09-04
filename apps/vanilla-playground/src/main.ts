import {
  getBeltPropsSolid,
  BeltProps,
  getBeltAttributes,
} from "../../../packages/custom-belt-lib/src/Belt"
import {
  CustomBeltInit,
  CustomBelt,
  getCustomBeltInit,
} from "../../../packages/custom-belt-lib/src/CustomBelt"

const whiteBelt: BeltProps[] = getBeltPropsSolid("Solid White Belt", "#00FF00")
const customBeltInit: CustomBeltInit = getCustomBeltInit(
  ["whiteBelt"],
  whiteBelt
)
const beltAttributes = getBeltAttributes("100%")
new CustomBelt(customBeltInit, beltAttributes)
