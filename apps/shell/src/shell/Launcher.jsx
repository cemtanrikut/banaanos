import { Tile } from "./Tile";

export function Launcher({ open, onClose }) {
  const items = Array.from({ length: 15 }, (_, i) => ({ id: i + 1, name: `App ${i + 1}` }));

  return (
    <div className={`bo-launcher ${open ? "open" : ""}`} aria-hidden={!open}>
      <div className="bo-launcher-top">
        <input className="bo-input" placeholder="Search apps" />
        <button className="bo-btn" onClick={onClose}>Close</button>
      </div>

      <div className="bo-grid">
        {items.map((app) => (
          <Tile
            key={app.id}
            emoji="⬜"
            label={app.name}
            color={["blue","green","yellow","pink","gray"][app.id % 5]}
          />
        ))}
      </div>
    </div>
  );
}
