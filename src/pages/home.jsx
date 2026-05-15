import { Link } from 'react-router-dom';
import Counter from '../components/Counter';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      {/* 1. Hero Section */}
      <header style={{
        height: '85vh',
        background: 'linear-gradient(rgba(20, 83, 45, 0.85), rgba(34, 197, 94, 0.4)), url("https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: '800' }}>
            Centre d’Accueil et de Qualification des Personnes en Situation d’Handicaps
          </h1>
          <p style={{ fontSize: '1.3rem', maxWidth: '850px', margin: '0 auto 2.5rem', lineHeight: '1.8' }}>
            Un environnement sécurisé, adapté et inclusif à Deroua pour favoriser le développement personnel et l'autonomie.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/about" className="btn btn-primary">Découvrir notre Mission</Link>
            <Link to="/contact" className="btn" style={{ background: 'white', color: 'var(--color-dark-green)' }}>Nous Contacter</Link>
          </div>
        </div>
      </header>

      {/* 2. Mission, Vision, Valeurs (M-mchechin) */}
      <section className="section container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span style={{ color: 'var(--color-secondary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Qui Sommes-Nous</span>
          <h2 style={{ color: 'var(--color-dark-green)', fontSize: '2.8rem', marginTop: '10px', fontWeight: '800' }}>Notre Engagement</h2>
          <div style={{ width: '50px', height: '4px', background: 'var(--color-secondary)', margin: '15px auto', borderRadius: '10px' }}></div>
        </div>
        
        <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <ProjectCard 
            title="Notre Mission" 
            icon="🎯" 
            description="Apporter un accompagnement spécialisé aux enfants en situation de handicap pour favoriser leur autonomie et leur intégration."
          />
          <ProjectCard 
            title="Notre Vision" 
            icon="👁️" 
            description="Construire une société plus inclusive à Deroua et Berrechid où chaque personne bénéficie des mêmes opportunités."
          />
          <ProjectCard 
            title="Nos Valeurs" 
            icon="🤝" 
            description="Solidarité, respect de la dignité humaine, égalité des chances et engagement communautaire profond."
          />
        </div>
      </section>

      {/* 3. L'Association en Chiffres (Neumorphic Style) */}
      <section style={{ padding: '100px 0', background: '#f8faf8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '2.8rem', color: 'var(--color-dark-green)', fontWeight: '800' }}>
              L'Association en <span style={{ color: 'var(--color-secondary)' }}>Chiffres</span>
            </h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '30px' 
          }}>
            {[
              { num: "120+", label: "Bénéficiaires", icon: "👶", color: "#f1fdf5" },
              { num: "40", label: "Professionnels", icon: "👥", color: "#f8fdf1" },
              { num: "22", label: "Éducatrices", icon: "👩‍🏫", color: "#fdfdf1" },
              { num: "3", label: "Étages de Soins", icon: "🏢", color: "#f4f9f4" }
            ].map((item, index) => (
              <div key={index} style={{
                position: 'relative',
                padding: '45px 25px',
                borderRadius: '30px',
                background: 'white',
                boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
                textAlign: 'center',
                transition: '0.4s ease',
                border: '1px solid rgba(0,0,0,0.02)'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{item.icon}</div>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-dark-green)', marginBottom: '5px' }}>
                  <Counter number={item.num} label="" />
                </div>
                <div style={{ color: '#888', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;