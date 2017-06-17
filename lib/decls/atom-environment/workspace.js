declare interface Panel {};
declare type PanelOptions = {
  item: Item,
  visible?: boolean,
  priority?: number,
};

declare class Workspace {
  addRightPanel(PanelOptions): Panel;
  getRightPanels(): Panel;

  open(Item | string): any;
  toggle(Item | string): any;
};
