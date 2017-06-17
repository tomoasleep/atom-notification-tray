/* @flow */
import TrayView from './tray-view';
import StatusBarTileView from './status-bar-tile-view';
import { CompositeDisposable } from 'atom';

console.log('fuga');

module.exports = {
  activate() {
    console.log('hoge');
    this.statusBarTileView = new StatusBarTileView();
    this.trayView = new TrayView();

    this.disposable = new CompositeDisposable();
    this.disposable.add(atom.commands.add('atom-workspace', 'notification-tray:toggle', () => this.toggleTray()));
  },

  deactivate() {
    if (this.tile) { this.tile.destroy(); }
    if (this.panel) { this.panel.destroy(); }
    this.disposable.dispose();
  },

  consumeStatusBar(statusBar: StatusBar) {
    this.tile = statusBar.addRightTile({ item: this.statusBarTileView, priority: 1000 });
  },

  toggleTray() {
    atom.workspace.toggle(this.trayView);
  }
};
