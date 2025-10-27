import { useEffect, useState } from "react";
import { StatusBar } from "./StatusBar";
import { Panel } from "./Panel";
import { Launcher } from "./Launcher";
import { Tile } from "./Tile";

export function Shell() {
  const [showLauncher, setShowLauncher] = useState(false);

  // optional: ESC ile kapat
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setShowLauncher(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="bo-root">
      <StatusBar />

      <main className="bo-main">
        {/* Row 1 — hero widgets */}
        <div className="bo-card bo-span-2x2">Clock (2x2)</div>
        <div className="bo-card bo-span-2x1">Weather (2x1)</div>
        <div className="bo-card">Now Playing</div>

        {/* Rows 2–4 — app icons */}
        {[
          { emoji:"📞", label:"Phone",    color:"green" },
          { emoji:"💬", label:"Messages", color:"blue"  },
          { emoji:"📷", label:"Camera",   color:"gray"  },
          { emoji:"🌐", label:"Browser",  color:"blue"  },
          { emoji:"🎵", label:"Music",    color:"yellow"},
          { emoji:"🗒️", label:"Notes",    color:"pink"  },
          { emoji:"🖼️", label:"Gallery",  color:"yellow"},
          { emoji:"⚙️", label:"Settings", color:"gray"  },
          { emoji:"🧭", label:"Maps",     color:"green" },
          { emoji:"🛒", label:"Store",    color:"pink"  },
          { emoji:"🧠", label:"AI Chat",  color:"blue"  },
          { emoji:"🎮", label:"Games",    color:"yellow"},
        ].map((a, i) => (
          <Tile key={i} emoji={a.emoji} label={a.label} color={a.color} />
        ))}
      </main>

      <Panel onOpenLauncher={() => setShowLauncher(true)} />

      {/* Always mounted; CSS class controls visibility for smooth animation */}
      <Launcher open={showLauncher} onClose={() => setShowLauncher(false)} />
    </div>
  );
}
