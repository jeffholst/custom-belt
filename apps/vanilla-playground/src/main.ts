import {
  getBeltPropsSolid,
  BeltProps,
} from "../../../packages/custom-belt-lib/src/Belt"
import {
  CustomBeltInit,
  CustomBelt,
  getCustomBeltInit,
} from "../../../packages/custom-belt-lib/src/CustomBelt"

const whiteBelt: BeltProps[] = getBeltPropsSolid("Solid White Belt", "#00FF00")
const myDiv: HTMLElement = document.getElementById("whiteBelt") as HTMLElement
const customBeltInit: CustomBeltInit = getCustomBeltInit(
  [myDiv],
  null,
  null,
  whiteBelt
)
new CustomBelt(customBeltInit)
