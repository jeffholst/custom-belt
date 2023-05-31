import "./style.css"
import {
  getBeltPropsSolid,
  BeltProps,
} from "../../../packages/custom-belt-lib/src/Belt"
import { VanillaBeltSystem } from "../../../packages/vanilla-custom-belt/src/custom-belt"

const whiteBelt: BeltProps[] = getBeltPropsSolid("Solid White Belt", "#00FF00")

const myImg = document.getElementById("whiteBelt") as HTMLElement
const vbs = new VanillaBeltSystem(myImg, whiteBelt)
