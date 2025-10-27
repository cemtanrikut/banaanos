export function Tile({ emoji = "📱", label = "App", color = "gray" }) {
  return (
    <button className="bo-tile" data-color={color} aria-label={label} title={label}>
      <div className="bo-icon" aria-hidden>{emoji}</div>
      <div className="bo-label">{label}</div>
    </button>
  );
}
