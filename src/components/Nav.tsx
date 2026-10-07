export default function Nav() {
  return (
    <header className="nav" aria-label="Navigation">
      <div className="nav-inner glass-xs">
        <span className="nav-brand">
          <span className="dot" aria-hidden="true" />
          FX · SILENT.Ss
        </span>
        <nav className="nav-links">
          <a href="#method">Method</a>
          <a href="#faq">FAQ</a>
          <a href="#join" className="cta">Join · Free</a>
        </nav>
      </div>
    </header>
  );
}
