import "./style.css"
import {
  getBeltPropsSolid,
  BeltProps,
} from "../../../packages/custom-belt-lib/src/Belt"
import {
  CustomBeltInit,
  BeltBuilder,
  getCustomBeltInit,
} from "../../../packages/custom-belt-lib/src/BeltBuilder"

const whiteBelt: BeltProps[] = getBeltPropsSolid("Solid White Belt", "#00FF00")
const myDiv: HTMLElement = document.getElementById("whiteBelt") as HTMLElement
const customBeltInit: CustomBeltInit = getCustomBeltInit(
  [myDiv],
  null,
  null,
  whiteBelt
)
new BeltBuilder(customBeltInit)
