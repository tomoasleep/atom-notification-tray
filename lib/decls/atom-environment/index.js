declare class AtomEnvironment {
  commands: CommandRegistry;
  notifications: NotificationManager;
  workspace: Workspace;
};

declare var atom: AtomEnvironment;
