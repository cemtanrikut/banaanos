export function Launcher({ onClose }) {
  const items = Array.from({ length: 15 }, (_, i) => ({ id: i, name: `App ${i + 1}` }));
  return (
    <div className="bo-launcher">
      <div className="bo-launcher-top">
        <input className="bo-input" placeholder="Search apps" />
        <button className="bo-btn" onClick={onClose}>Close</button>
      </div>
      <div className="bo-grid">
        {items.map((app) => (
          <button key={app.id} className="bo-tile">{app.name}</button>
        ))}
      </div>
    </div>
  );
}
