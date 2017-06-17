declare interface ElementContainer {
  getElement(): HTMLElement;
}

declare type Item = HTMLElement | ElementContainer | { element: HTMLElement } | Function
