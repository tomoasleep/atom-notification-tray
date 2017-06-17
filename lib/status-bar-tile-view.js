/* @flow */
import { h, render, Component } from 'preact';
import StatusBarTileContainer from './containers/status-bar-tile';

export default class TrayView {
  element: ?HTMLDivElement;
  getElement(): HTMLDivElement {
    if (this.element) {
      return this.element;
    }
    const element = this.element = document.createElement('span');
    render(<StatusBarTileContainer notificationManager={atom.notifications} />, element);
    return element;
  }
};
