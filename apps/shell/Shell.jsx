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
        {/* TODO: widgets and grid (5-column) */}
        <div className="bo-card">Clock (2x2)</div>
        <div className="bo-card">Weather (2x1)</div>
        <div className="bo-card">Now Playing (1x1)</div>
      </main>
      <Panel onOpenLauncher={() => setShowLauncher(true)} />
      {showLauncher && <Launcher onClose={() => setShowLauncher(false)} />}
    </div>
  );
}
