/* @flow */
import { h, Component } from 'preact';
import autobind from 'autobind-decorator';
import NotificationComponent from './notification';

export default class TrayComponent extends Component {
  props: {
    notifications: Array<Notification>,
  };

  render() {
    return (
      <div className="notification-tray--notifications" >
        {
          this.props.notifications.filter((notification) => !notification.isDismissed()).map((notification) => {
            return <NotificationComponent dismiss={this.dismiss} notification={notification}/>
          })
        }
      </div>
    );
  }

  @autobind
  dismiss(notification: Notification) {
    notification.dismiss();
  }
}
