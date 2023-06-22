import { BeltProps } from '../../custom-belt-lib/src/Belt';
import { BeltBuilder } from '../../custom-belt-lib/src/BeltBuilder';

export class VanillaBelt {
  element: HTMLElement;
  beltProps: BeltProps[];
  currentBelt: BeltProps;
  currentIndex: number;

  /**
   * Instantiate a new VanillaBelt object
   * @param {element} HTMLElement HTML element to replace
   * @param {beltProps} BeltProps[] BeltProps array
   */
  constructor(element: HTMLElement, beltProps: BeltProps[]) {
    this.element = element;
    this.beltProps = beltProps;
    this.currentIndex = 0;
    this.currentBelt = beltProps[this.currentIndex];
    new BeltBuilder(this.beltProps, this.callback, this.element);
  }

  callback(event: Event | null, callbackType: BeltCallbackType, beltProps: BeltProps): void {
    /*
    // Create a container element
    const container = document.createElement('div');

    // Set the SVG string as HTML content of the container element
    container.innerHTML = svgString;

    // Retrieve the SVG element from the container
    const svgElement = container.querySelector('svg');

    const parentElement = element.parentNode;

    if (parentElement && svgElement) {
      // Replace the old element with the new one
      parentElement.replaceChild(svgElement, element);
    }
    */
  }
}
