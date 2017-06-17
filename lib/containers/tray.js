/* @flow */
import { h, Component } from 'preact';
import TrayComponent from '../components/tray';

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

  resetNotifications() {
    this.setState({
      notifications: this.props.notificationManager.getNotifications().filter((notification) => {
        !notification.isDismissed();
      }),
    });
  }

  render() {
    return <TrayComponent notifications={this.state.notifications} />;
  }
}
