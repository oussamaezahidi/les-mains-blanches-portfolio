import React from 'react';

const Partenariats = () => {
  const partenaires = [
    {
      name: 'INDH Berrechid',
      img: '/logos2/indh.png',
      desc: 'Initiative Nationale pour le Développement Humain',
    },
    {
      name: 'Entraide Nationale',
      img: '/logos2/entraide.png',
      desc: "Soutien et coordination de l'action sociale",
    },
    {
      name: 'Commune de Deroua',
      img: '/logos2/commune.png',
      desc: "Partenaire local pour l'intégration territoriale",
    },
  ];

  const communes = [
    'Ville de Deroua',
    'Commune Oulad Ziane',
    'Commune Jakma',
    'Commune Kasbat Ben Mshish',
    'Commune Nouaceur',
  ];

  return (
    <div className="container section" style={{ marginTop: '80px' }}>
      <div className="text-center" style={{ marginBottom: '5rem' }}>
        <h2 style={{ color: 'var(--color-dark-green)', marginBottom: '1.5rem' }}>
          Nos Partenaires Institutionnels
        </h2>
        <p style={{ maxWidth: '800px', margin: '0 auto 3rem', color: 'var(--color-text-light)' }}>
          Le centre collabore étroitement avec des institutions publiques pour garantir un soutien pérenne aux bénéficiaires.
        </p>
        <div className="grid">
          {partenaires.map((partner, index) => (
            <div key={index} className="card text-center" style={{ padding: '2rem' }}>
              <div
                style={{
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <img
                  src={partner.img}
                  alt={partner.name}
                  style={{ maxWidth: '100%', maxHeight: '80px', objectFit: 'contain' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <h4 style={{ color: 'var(--color-dark-green)' }}>{partner.name}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>{partner.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="feature-panel" style={{ marginTop: '4rem' }}>
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <img
            src="/logos2/white hands logo.png"
            alt="Association Les Mains Blanches"
            style={{ maxWidth: '200px', marginBottom: '1.5rem' }}
          />
          <h2 style={{ color: 'var(--color-dark-green)' }}>Association White Hands (Les Mains Blanches)</h2>
          <p style={{ color: 'var(--color-light-green)', fontWeight: 'bold' }}>
            L&apos;Entité de Gestion et d&apos;Encadrement
          </p>
        </div>

        <div className="split-grid">
          <div style={{ paddingRight: '20px' }}>
            <h3 style={{ color: 'var(--color-dark-green)', marginBottom: '1rem' }}>Notre Rôle Stratégique</h3>
            <p style={{ lineHeight: '1.8', color: 'var(--color-text-dark)', marginBottom: '1.5rem' }}>
              L&apos;Association Les Mains Blanches constitue le pilier administratif et opérationnel du centre CAQPSH.
              Grâce à son expertise et son engagement constant, elle assure l&apos;encadrement pédagogique, social et thérapeutique des enfants en situation de handicap.
              Elle se positionne comme un centre pivot pour l&apos;inclusion sociale, offrant des services complets de réadaptation médicale et de soutien psychologique.
            </p>
            <p style={{ lineHeight: '1.8', color: 'var(--color-text-dark)' }}>
              En mobilisant des ressources locales et nationales, l&apos;association œuvre quotidiennement pour améliorer la qualité de vie des familles et favoriser l&apos;intégration pleine et entière des bénéficiaires dans la société.
            </p>
          </div>

          <div
            style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '20px',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <h4
              style={{
                color: 'var(--color-dark-green)',
                marginBottom: '1.5rem',
                borderBottom: '2px solid var(--color-light-green)',
                paddingBottom: '0.5rem',
              }}
            >
              Couverture Géographique
            </h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem', fontStyle: 'italic' }}>
              Nos services s&apos;étendent sur cinq communes majeures de la province :
            </p>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              {communes.map((loc, i) => (
                <li
                  key={i}
                  style={{
                    padding: '10px 0',
                    borderBottom: i !== communes.length - 1 ? '1px solid #f0f0f0' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <span style={{ color: 'var(--color-light-green)', fontWeight: 'bold' }}>•</span>
                  {loc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partenariats;
