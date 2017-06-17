/* @flow */
import { h, render, Component } from 'preact';
import TrayContainer from './containers/tray';

export default class TrayView {
  element: ?HTMLDivElement;
  getElement(): HTMLDivElement {
    if (this.element) {
      return this.element;
    }
    const element = this.element = document.createElement('div');
    render(<TrayContainer notificationManager={atom.notifications} />, element);
    return element;
  }

  getTitle() {
    return "Notification Tray";
  }

  getURI() {
    return "atom://notification-tray/tray";
  }

  getDefaultLocation() {
    return "right";
  }
};
