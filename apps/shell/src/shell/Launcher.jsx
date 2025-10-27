export function Launcher({ onClose }) {
  return (
    <div className="bo-launcher">
      <div className="bo-launcher-top">
        <input className="bo-input" placeholder="Search apps" />
        <button className="bo-btn" onClick={onClose}>Close</button>
      </div>
      <div className="bo-grid">
        <button className="bo-tile">App 1</button>
      </div>
    </div>
  );
}
