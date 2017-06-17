declare interface Command {
  name: string;
  displayName: string;
}

declare class CommandRegistry {
  add(target: string | HTMLElement, commandName: string, callback: (Event) => mixed): DisposableItem;
  findCommands({ target: HTMLElement }): Array<Command>;
  dispatch(target: EventTarget, commandName: string): void;

  onWillDispatch(callback: (Event) => mixed): DisposableItem;
  onDidDispatch(callback: (Event) => mixed): DisposableItem;
}
