import { useState } from "react";
import { StatusBar } from "./StatusBar";
import { Panel } from "./Panel";
import { Launcher } from "./Launcher";

export function Shell() {
  const [showLauncher, setShowLauncher] = useState(false);

  return (
    <div className="bo-root">
      <StatusBar />

      <main className="bo-main">
        {/* Row 1 — hero widgets */}
        <div className="bo-card bo-span-2x2">Clock (2x2)</div>
        <div className="bo-card bo-span-2x1">Weather (2x1)</div>
        <div className="bo-card">Now Playing</div>

        {/* Rows 2–4 — app icons (samples) */}
        {Array.from({ length: 12 }).map((_, i) => (
          <button key={i} className="bo-tile">App {i + 1}</button>
        ))}
      </main>

      <Panel onOpenLauncher={() => setShowLauncher(true)} />
      {showLauncher && <Launcher onClose={() => setShowLauncher(false)} />}
    </div>
  );
}
