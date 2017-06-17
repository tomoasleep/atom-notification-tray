/* @flow */
import { h, Component } from 'preact';

export default class NotificationComponent extends Component {
  props: {
    notification: Notification,
    dismiss: (Notification) => void,
  };

  render() {
    const notification = this.props.notification;
    return (
      <div className={`notification--tray--item ${this.classNameOfNofiticationHeader()}`}>
        <div className="notification--tray--item__header">
          <span className="notification--tray--item__header__message">
            {notification.getMessage()}
          </span>
          <span className="close-button icon icon-x" onClick={this.props.dismiss(notification)}/>
        </div>
        <div className="notification--tray--item__detail">
          {notification.getDetail()}
        </div>
      </div>
    );
  }

  classNameOfNofiticationHeader(): string {
    switch (this.props.notification.getType()) {
      case 'error':
        return 'error';
      case 'fatal':
        return 'fatal';
      case 'success':
        return 'success';
      case 'info':
        return 'info';
      case 'warning':
        return 'warning';
      default:
        return 'info';
    }
  }
}
