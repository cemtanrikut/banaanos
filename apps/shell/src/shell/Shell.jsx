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
        <div className="bo-card">Home grid</div>
      </main>
      <Panel onOpenLauncher={() => setShowLauncher(true)} />
      {showLauncher && <Launcher onClose={() => setShowLauncher(false)} />}
    </div>
  );
}
