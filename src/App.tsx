import { Header } from "./components/Header";
import { Surface } from "./components/Surface";
import { PetalButton } from "./components/PetalButton";

export default function App() {
  return (
    <main style={{ padding: "2rem" }}>
      <Header />

      <Surface>
        <p>Welcome to LilyFrame 🌸</p>
        <br />
        <PetalButton>Blush</PetalButton>
      </Surface>
    </main>
  );
}
