import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
      <img id="logo" src={logo} alt="LilyFrame logo" width={36} height={36} />
      <h1>LilyFrame</h1>
    </header>
  );
}
