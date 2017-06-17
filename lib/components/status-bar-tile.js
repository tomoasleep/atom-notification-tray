/* @flow */
import { h, Component } from 'preact';

export default class StatusBarTileComponent extends Component {
  props: {
    notifications: Array<Notification>,
    onClick(Event): void,
  };

  render() {
    return (
      <span className="status-bar--notification-tray">
        <a onClick={this.props.onClick}>
          { `${this.props.notifications.length} notifications` }
        </a>
      </span>
    );
  };
}
