import { useState } from "react";
import { Header } from "./components/Header";
import { Surface } from "./components/Surface";
import { PetalButton } from "./components/PetalButton";

type ThemePreset = {
  name: string;
  emoji: string;
  variables: Record<string, string>;
};

const blushPreset: ThemePreset = {
  name: "Blush",
  emoji: "❤︎",
  variables: {
    "--theme-accent": "#f3b6b3",
    "--theme-bg": "#faf5ed",
    "--petal-radius": "16px",
  },
};

const dewPreset: ThemePreset = {
  name: "Dew",
  emoji: "🪷",
  variables: {
    "--theme-accent": "#91a097",
    "--theme-bg": "#f4f7f5",
    "--petal-radius": "32px",
  },
};

export default function App() {
  /* Active Preset */
  const [activePreset, setActivePreset] =
    useState<ThemePreset>(blushPreset);

  function applyPreset(preset: ThemePreset) {
    const root = document.documentElement;

    Object.entries(preset.variables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    setActivePreset(preset);
  }

  /* Return Layout */
  return (
    <main style={{ padding: "2rem" }}>
      <Header />

      <div className="app-layout">

        <aside className="control-panel">
          <Surface>
            <h3>Presets</h3>
            <PetalButton onClick={() => applyPreset(blushPreset)}>
              {blushPreset.name}
            </PetalButton>
            <PetalButton onClick={() => applyPreset(dewPreset)}>
              {dewPreset.name}
            </PetalButton>
          </Surface>
        </aside>

        <section className="preview">
          <Surface>
            <p>
              Welcome to LilyFrame {activePreset.emoji}
            </p>
            <p><i>This is a live preview...</i></p>
          </Surface>
        </section>

      </div>
    </main>
  );
}
