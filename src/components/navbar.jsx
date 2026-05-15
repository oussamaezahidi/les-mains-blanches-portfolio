import { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/about', label: "L'Association" },
  { to: '/activites', label: 'ActivitÃ©s' },
  { to: '/partenariats', label: 'Partenariats' },
  { to: '/galerie', label: 'Galerie' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link
          to="/"
          className="navbar-brand"
          onClick={closeMenu}
        >
          CAQPSH<span style={{ color: 'var(--color-light-green)' }}>.</span>
        </Link>

        <button
          type="button"
          className="navbar-toggle"
          aria-label="Ouvrir le menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-links ${isOpen ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="navbar-link"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn btn-primary navbar-cta"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
