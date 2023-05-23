import {
  BeltProps,
  BeltColor,
  Belt,
  StripePosition,
  mapBeltColors,
  getBeltPropsFromBelt,
  BeltCallbackType,
} from "./Belt";

export interface BeltSystemInt {
  name: string;
  title: string;
  transitionCSS: string;
  refreshInterval: number;
  colors: BeltColor[];
  belts: Belt[];
}

/**
 * Class used to represent predefined belt systems
 */
export class BeltSystem {
  /** name of belt system */
  name: string;
  /** title of belt system */
  title: string;
  /** transition CSS  */
  transitionCSS: string;
  /** refresh interval in milliseconds */
  refreshInterval: number;
  /** lookup table of friendly color names to hex codes */
  colors: BeltColor[];
  /** belts in the system */
  belts: Belt[];

  /**
   * Instantiate a new BeltSystem object
   * @param {BeltSystemInt} system belt system object to use
   */
  constructor(system: string) {
    let beltSystem: BeltSystemInt = {
      name: "",
      title: "",
      transitionCSS: "",
      refreshInterval: 0,
      colors: [],
      belts: [],
    };
    try {
      beltSystem = JSON.parse(system);
    } catch (e) {
      console.log("Error parsing belt system: " + e);
    }
    this.name = beltSystem.name;
    this.title = beltSystem.title;
    this.transitionCSS = beltSystem.transitionCSS;
    this.refreshInterval = beltSystem.refreshInterval;
    this.colors = beltSystem.colors;
    this.belts = beltSystem.belts;

    // Replace friendly color names in Belt objects with hex values
    mapBeltColors(this.belts, this.colors);
  }

  /**
   * Get a Belt by Id
   * @param {number} id belt id to find
   * @return {Belt | undefined} matching Belt or undefined
   */
  getBeltById(id: number): Belt | undefined {
    return this.belts.find((belt) => belt.id === id);
  }

  /**
   * Get a Belt by Name (case insensitive search)
   * @param {string} name belt name to find
   * @return {Belt | undefined} matching Belt or undefined
   */
  getBeltByName(name: string): Belt | undefined {
    return this.belts.find(
      (belt) => belt.name.toUpperCase() === name.toUpperCase()
    );
  }

  /**
   * Get BeltpProps for provided Belt object and stripe info
   * @param {Belt} belt belt object to use
   * @param {number} stripeCount number of stripes to use (0-10)
   * @param {StripePosition | undefined} stripePosition stripe placement
   * @return {BeltProps} BeltProps for provided Belt object and stripe info
   */
  getBeltProps(
    belt: Belt,
    stripeCount: number,
    stripePosition: StripePosition | undefined = undefined,
    callback?: (
      event: Event | null,
      callbackType: BeltCallbackType,
      belt: BeltProps
    ) => void
  ): BeltProps {
    belt.system = this.title;
    const beltProps: BeltProps = getBeltPropsFromBelt(
      belt,
      stripeCount,
      stripePosition,
      this.transitionCSS,
      this.refreshInterval,
      callback
    );

    return beltProps;
  }

  /**
   * Get all BeltProps from the belt system
   * @param {string} transitionCSS transition css to use between belt changes. Empty for no effect
   * @param {number} refreshInterval milliseconds to wait before changing belt. 0 for no rotate
   * @return {BeltProps[]} all belts in the belt system
   */
  getBeltPropsAll(
    transitionCSS = "",
    refreshInterval = 0,
    callback?: (
      event: Event | null,
      callbackType: BeltCallbackType,
      belt: BeltProps
    ) => void
  ): BeltProps[] {
    const beltPropsAry: BeltProps[] = [];
    let uniqueElementId: string | undefined = undefined;
    this.belts.forEach((belt) => {
      const beltProps = this.getBeltProps(
        belt,
        belt.minStripes,
        belt.stripePosition,
        callback
      );
      // use same element id for all belts
      if (uniqueElementId === undefined) uniqueElementId = beltProps.id;
      else beltProps.id = uniqueElementId;
      beltProps.transitionCSS = transitionCSS;
      beltProps.refreshInterval = refreshInterval;
      beltPropsAry.push(beltProps);
    });

    return beltPropsAry;
  }

  /**
   * Get BeltProps for matching belt id
   * @param {number} id belt id to find
   * @param {number | undefined} stripeCount number of stripes to use (0-10)
   * @param {StripePosition | undefined} stripePosition stripe placement (Right or Left)
   * @return {BeltProps[]} BeltProps for matching belt name
   */
  getBeltPropsById(
    id: number,
    stripeCount: number | undefined = undefined,
    stripePosition: StripePosition | undefined = undefined,
    callback?: (
      event: Event | null,
      callbackType: BeltCallbackType,
      belt: BeltProps
    ) => void
  ): BeltProps[] {
    const beltPropsAry: BeltProps[] = [];
    const belt = this.getBeltById(id);

    if (belt) {
      beltPropsAry.push(
        this.getBeltProps(
          belt,
          stripeCount === undefined ? belt.minStripes : stripeCount,
          stripePosition,
          callback
        )
      );
    }

    return beltPropsAry;
  }

  /**
   * Get BeltProps for matching belt ids
   * @param {number[]} ids ids of belts to return
   * @param {number | undefined} stripeCount the number of stripes to use
   * @param {StripePosition | undefined} stripePosition the stripe position to use
   * @param {string} transitionCSS transition css to use between belt changes
   * @param {number} refreshInterval milliseconds to wait before changing belt
   * @return {BeltProps[]} BeltProps[] of matching belts
   */
  getBeltPropsByIds(
    ids: number[],
    stripeCount: number | undefined = undefined,
    stripePosition: StripePosition | undefined = undefined,
    transitionCSS = "",
    refreshInterval = 0,
    callback?: (
      event: Event | null,
      callbackType: BeltCallbackType,
      belt: BeltProps
    ) => void
  ): BeltProps[] {
    const beltPropsAry: BeltProps[] = [];
    const belts = this.getBeltsByIds(ids);

    if (belts) {
      belts.forEach((belt) => {
        const beltProps: BeltProps = this.getBeltProps(
          belt,
          stripeCount === undefined ? belt.minStripes : stripeCount,
          stripePosition,
          callback
        );
        beltProps.transitionCSS = transitionCSS;
        beltProps.refreshInterval = refreshInterval;
        beltPropsAry.push(beltProps);
      });
    }

    return beltPropsAry;
  }

  /**
   * Get BeltProps for matching belt name
   * @param {string} name belt name to find
   * @param {number | undefined} stripeCount number of stripes to use (0-10)
   * @param {StripePosition | undefined} stripePosition stripe placement (Right or Left)
   * @return {BeltProps[]} BeltProps for matching belt name
   */
  getBeltPropsByName(
    name: string,
    stripeCount: number | undefined = undefined,
    stripePosition: StripePosition | undefined = undefined,
    callback?: (
      event: Event | null,
      callbackType: BeltCallbackType,
      belt: BeltProps
    ) => void
  ): BeltProps[] {
    const beltPropsAry: BeltProps[] = [];
    const belt = this.getBeltByName(name);

    if (belt) {
      beltPropsAry.push(
        this.getBeltProps(
          belt,
          stripeCount === undefined ? belt.minStripes : stripeCount,
          stripePosition,
          callback
        )
      );
    }

    return beltPropsAry;
  }

  /**
   * Get BeltProps for matching belt names
   * @param {string[]} names names of belts to return
   * @param {number | undefined} stripeCount the number of stripes to use
   * @param {StripePosition | undefined} stripePosition the stripe position to use
   * @param {string} transitionCSS transition css to use between belt changes
   * @param {number} refreshInterval milliseconds to wait before changing belt
   * @return {BeltProps[]} BeltProps[] of matching belts
   */
  getBeltPropsByNames(
    names: string[],
    stripeCount: number | undefined = undefined,
    stripePosition: StripePosition | undefined = undefined,
    transitionCSS = "",
    refreshInterval = 0,
    callback?: (
      event: Event | null,
      callbackType: BeltCallbackType,
      belt: BeltProps
    ) => void
  ): BeltProps[] {
    const beltPropsAry: BeltProps[] = [];
    const belts = this.getBeltsByNames(names);

    if (belts) {
      belts.forEach((belt) => {
        const beltProps: BeltProps = this.getBeltProps(
          belt,
          stripeCount === undefined ? belt.minStripes : stripeCount,
          stripePosition,
          callback
        );
        beltProps.transitionCSS = transitionCSS;
        beltProps.refreshInterval = refreshInterval;
        beltPropsAry.push(beltProps);
      });
    }

    return beltPropsAry;
  }

  /**
   * Get matching belts by ids
   * @param {number[]} ids ids of belts to return
   * @return {Belt[]} Belt[] of matching belts
   */
  getBeltsByIds(ids: number[]): Belt[] {
    const belts: Belt[] = [];
    ids.forEach((id) => {
      const b: Belt | undefined = this.getBeltById(id);
      if (b !== undefined) {
        belts.push(b);
      }
    });

    return belts;
  }

  /**
   * Get matching belts by names
   * @param {string[]} names names of belts to return
   * @return {Belt[]} Belt[] of matching belts
   */
  getBeltsByNames(names: string[]): Belt[] {
    const upperCased: string[] = names.map((val) => val.toUpperCase());
    const belts: Belt[] = [];
    upperCased.forEach((belt) => {
      const b: Belt | undefined = this.getBeltByName(belt);
      if (b !== undefined) {
        belts.push(b);
      }
    });

    return belts;
  }
}
