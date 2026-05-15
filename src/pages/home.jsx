import { Link } from 'react-router-dom';
import Counter from '../components/counter';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <header
        className="hero-section"
        style={{
          background:
            'linear-gradient(rgba(20, 83, 45, 0.85), rgba(34, 197, 94, 0.4)), url("https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070")',
        }}
      >
        <div className="container">
          <h1 className="hero-title">
            Centre dâ€™Accueil et de Qualification des Personnes en Situation dâ€™Handicaps
          </h1>
          <p className="hero-text">
            Un environnement sÃ©curisÃ©, adaptÃ© et inclusif Ã  Deroua pour favoriser le dÃ©veloppement personnel et l'autonomie.
          </p>
          <div className="hero-actions">
            <Link to="/about" className="btn btn-primary">DÃ©couvrir notre Mission</Link>
            <Link
              to="/contact"
              className="btn"
              style={{ background: 'white', color: 'var(--color-dark-green)' }}
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </header>

      <section className="section container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span
            style={{
              color: 'var(--color-secondary)',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '0.9rem',
            }}
          >
            Qui Sommes-Nous
          </span>
          <h2
            style={{
              color: 'var(--color-dark-green)',
              fontSize: '2.8rem',
              marginTop: '10px',
              fontWeight: '800',
            }}
          >
            Notre Engagement
          </h2>
          <div
            style={{
              width: '50px',
              height: '4px',
              background: 'var(--color-secondary)',
              margin: '15px auto',
              borderRadius: '10px',
            }}
          ></div>
        </div>

        <div className="grid" style={{ gap: '30px' }}>
          <ProjectCard
            title="Notre Mission"
            icon="ðŸŽ¯"
            description="Apporter un accompagnement spÃ©cialisÃ© aux enfants en situation de handicap pour favoriser leur autonomie et leur intÃ©gration."
          />
          <ProjectCard
            title="Notre Vision"
            icon="ðŸ‘ï¸"
            description="Construire une sociÃ©tÃ© plus inclusive Ã  Deroua et Berrechid oÃ¹ chaque personne bÃ©nÃ©ficie des mÃªmes opportunitÃ©s."
          />
          <ProjectCard
            title="Nos Valeurs"
            icon="ðŸ¤"
            description="SolidaritÃ©, respect de la dignitÃ© humaine, Ã©galitÃ© des chances et engagement communautaire profond."
          />
        </div>
      </section>

      <section style={{ padding: '100px 0', background: '#f8faf8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '2.8rem', color: 'var(--color-dark-green)', fontWeight: '800' }}>
              L'Association en <span style={{ color: 'var(--color-secondary)' }}>Chiffres</span>
            </h2>
          </div>

          <div className="stats-grid">
            {[
              { num: '120+', label: 'BÃ©nÃ©ficiaires', icon: 'ðŸ‘¶' },
              { num: '40', label: 'Professionnels', icon: 'ðŸ‘¥' },
              { num: '22', label: 'Ã‰ducatrices', icon: 'ðŸ‘©â€ðŸ«' },
              { num: '3', label: 'Ã‰tages de Soins', icon: 'ðŸ¢' },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  padding: '45px 25px',
                  borderRadius: '30px',
                  background: 'white',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
                  textAlign: 'center',
                  transition: '0.4s ease',
                  border: '1px solid rgba(0,0,0,0.02)',
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-10px)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{item.icon}</div>
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '900',
                    color: 'var(--color-dark-green)',
                    marginBottom: '5px',
                  }}
                >
                  <Counter number={item.num} label="" />
                </div>
                <div
                  style={{
                    color: '#888',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
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
