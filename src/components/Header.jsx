import logo from "../assets/globe-white.png"

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="globe icon" className="header-logo" />
      <h1 className="title">my travel journal.</h1>
    </header>
  )
}