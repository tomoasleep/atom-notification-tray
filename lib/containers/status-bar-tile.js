/* @flow */
import { h, Component } from 'preact';
import autobind from 'autobind-decorator';
import StatusBarTileComponent from '../components/status-bar-tile';

export default class TrayContainer extends Component {
  props: {
    notificationManager: NotificationManager;
  };

  state: {
    notifications: Array<Notification>;
  };

  constructor(props: Object) {
    super(props);

    atom.notifications.getNotifications().map((notification) => {
      notification.onDidDismiss(() => { this.resetNotifications(); });
    });
    this.state.notifications = atom.notifications.getNotifications();
    atom.notifications.onDidAddNotification((notification) => {
      this.resetNotifications();
      notification.onDidDismiss(() => { this.resetNotifications(); });
    });
  }

  @autobind
  handleClick(event: Event) {
    atom.commands.dispatch(event.target, 'notification-tray:toggle');
  }

  resetNotifications() {
    this.setState({
      notifications: this.props.notificationManager.getNotifications().filter((notification) => {
        !notification.isDismissed();
      }),
    });
  }

  render() {
    return (
      <StatusBarTileComponent
        notifications={this.state.notifications}
        onClick={this.handleClick}
      />
    );
  }
}
