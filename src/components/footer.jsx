const Footer = () => (
  <footer className="footer">
    <div className="container grid">
      <div>
        <h3>CAQPSH Deroua</h3>
        <p style={{marginTop:'1rem', opacity:0.8}}>Accompagnement spécialisé pour l'épanouissement des personnes en situation d'handicap.</p>
      </div>
      <div>
        <h4>Contact</h4>
        <p style={{marginTop:'1rem', opacity:0.8}}>📍 Province de Berrechid, Maroc</p>
        <p style={{opacity:0.8}}>📞 07 08 78 07 70</p>
      </div>
      <div>
        <h4>Valeurs</h4>
        <p style={{marginTop:'1rem', opacity:0.8}}>Solidarité • Respect • Dignité • Égalité</p>
      </div>
    </div>
    <div className="container text-center" style={{marginTop:'3rem', borderTop:'1px solid rgba(255,255,255,0.1)', paddingTop:'2rem'}}>
      <p>&copy; 2026 CAQPSH Deroua. Tous droits réservés.</p>
    </div>
  </footer>
);
export default Footer;