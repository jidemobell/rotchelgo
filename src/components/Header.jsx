import { useState } from "react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#direction", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#" className="logo" onClick={close}>
          rotchelgo
        </a>
        <span className="header-note">developer + photographer</span>
        <button
          type="button"
          className={`nav-toggle${open ? " is-open" : ""}`}
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
        <nav
          className={`site-nav${open ? " is-open" : ""}`}
          id="site-nav"
          aria-label="Primary"
        >
          {LINKS.map(({ href, label }) => (
            <a key={href} href={href} onClick={close}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
