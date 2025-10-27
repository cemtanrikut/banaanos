export function Panel({ onOpenLauncher }) {
  return (
    <div className="bo-panel">
      <div className="bo-dock">
        <button className="bo-app">Phone</button>
        <button className="bo-app">Messages</button>
        <button className="bo-app">Camera</button>
      </div>
      <button className="bo-btn-primary" onClick={onOpenLauncher}>
        Open Launcher
      </button>
    </div>
  );
}
