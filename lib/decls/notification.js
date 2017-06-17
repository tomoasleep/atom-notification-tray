declare class Notification {
  onDidDismiss(() => mixed): DisposableItem;
  onDidDisplay(() => mixed): DisposableItem;

  getType(): string;
  getMessage(): string;
  getDetail(): string;
  dismiss(): void;
  isDismissed(): boolean;
}
