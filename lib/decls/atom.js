declare module "atom" {
  declare interface DisposableItem {
    dispose(): void;
  }

  declare export class Disposable {
    static isDisposable(object): boolean;
    constructor(() => mixed): Disposable;
    dispose(): void;
  }

  declare export class CompositeDisposable {
    constructor(): CompositeDisposable;
    dispose(): void;
    add(DisposableItem): void;
    remove(DisposableItem): void;
    delete(DisposableItem): void;
    clear(): void;
  }

  declare export class Emitter {
    constructor(): Emitter;
    clear(): void;
    dispose(): void;
    on(string, (any) => mixed, ?boolean): Disposable;
    once(string, (any) => mixed, ?boolean): Disposable;
    preempt(string, (any) => mixed): Disposable;
    on(string, (any) => mixed): void;
    emit(string, any): void;
    getEventNames(): Array<string>;
    listenerCountForEventName(string): number;
    getTotalListenerCount(): number;
  }

  declare export var Notification: Notification;

  declare export var BufferedNodeProcess: any;
  declare export var BufferedProcess: any;
  declare export var GitRepository: any;
  declare export var TextBuffer: any;
  declare export var Point: any;
  declare export var Range: any;
  declare export var File: any;
  declare export var Directory: any;
  declare export var Task: any;
  declare export var TextEditor: any;
}
