import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <Link to="/" style={{textDecoration:'none', fontWeight:'bold', fontSize:'1.5rem', color:'var(--color-dark-green)'}}>
        CAQPSH<span style={{color:'var(--color-light-green)'}}>.</span>
      </Link>
      <div style={{display:'flex', gap:'1.5rem', alignItems:'center'}}>
        <Link to="/" style={{textDecoration:'none', color:'var(--color-text-dark)', fontWeight:'500'}}>Accueil</Link>
        <Link to="/about" style={{textDecoration:'none', color:'var(--color-text-dark)', fontWeight:'500'}}>L'Association</Link>
        <Link to="/activites" style={{textDecoration:'none', color:'var(--color-text-dark)', fontWeight:'500'}}>Activités</Link>
        <Link to="/partenariats" style={{textDecoration:'none', color:'var(--color-text-dark)', fontWeight:'500'}}>Partenariats</Link>
        <Link to="/galerie" style={{textDecoration:'none', color:'var(--color-text-dark)', fontWeight:'500'}}>Galerie</Link> {/* <--- Zidi l'Link hna */}
        <Link to="/contact" className="btn btn-primary" style={{padding:'0.5rem 1.2rem'}}>Contact</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;