declare type NotificationOptions = {
  buttons?: Array<any>,
  description?: string,
  detail?: string,
  icon?: string,
  dismissable?: boolean
}

declare class NotificationManager {

  onDidAddNotification((Notification) => any): DisposableItem;
  getNotifications(): Array<Notification>;

  addSuccess(string, NotificationOptions): void;
  addInfo(string, NotificationOptions): void;
  addWarning(string, NotificationOptions): void;
  addError(string, NotificationOptions): void;
  addFatalError(string, NotificationOptions): void;
}
