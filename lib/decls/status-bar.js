declare interface Tile {
  getPriority(): number;
  getItem(): any;
  destroy(): void;
};

declare interface StatusBar {
  addLeftTile({ item: Item, priority?: number }): Tile;
  addRightTile({ item: Item, priority?: number }): Tile;
  getLeftTiles(): Array<Tile>;
  getRightTiles(): Array<Tile>;
};
