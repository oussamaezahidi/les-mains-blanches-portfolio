import React from "react";

const Activites = () => {
  const listeActivites = [
    {
      title: "Accompagnement Éducatif",
      image: "/activities/educatif.jpg", // Chemin vers ton dossier public
      description: "Soutien scolaire personnalisé, ateliers artistiques (dessin, peinture) et initiation à l'informatique pour stimuler l'apprentissage.",
      details: ["Soutien scolaire", "Ateliers dessin", "Informatique"]
    },
    {
      title: "Suivi Thérapeutique",
      image: "/activities/therapeutique.jpg",
      description: "Orthophonie, psychomotricité et rééducation fonctionnelle assurées par des spécialistes pour améliorer les capacités motrices et de communication.",
      details: ["Orthophonie", "Psychomotricité", "Rééducation"]
    },
    {
      title: "Inclusion Sociale",
      image: "/activities/social.jpg",
      description: "Jeux collectifs, sorties culturelles et programmes sportifs visant à renforcer la confiance en soi et l'intégration dans la société.",
      details: ["Sorties culturelles", "Sports adaptés", "Jeux collectifs"]
    }
  ];

  return (
    <div className="container section" style={{ marginTop: '80px' }}>
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <h2 style={{ color: 'var(--color-dark-green)' }}>Nos Programmes & Services</h2>
        <p style={{ maxWidth: '800px', margin: '1rem auto', color: 'var(--color-text-light)' }}>
          Des services adaptés aux besoins spécifiques de chaque enfant pour favoriser son autonomie quotidienne.
        </p>
      </div>

      <div className="grid">
        {listeActivites.map((act, index) => (
          <div key={index} className="card" style={{ padding: '0', overflow: 'hidden' }}>
            {/* Image de l'activité */}
            <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
              <img 
                src={act.image} 
                alt={act.title} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }} 
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>

            {/* Contenu de la carte */}
            <div style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--color-dark-green)', marginBottom: '1rem' }}>{act.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                {act.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {act.details.map((tag, i) => (
                  <span key={i} style={{ 
                    background: 'var(--color-light-gray)', 
                    padding: '4px 12px', 
                    borderRadius: '15px', 
                    fontSize: '0.8rem',
                    color: 'var(--color-dark-green)',
                    fontWeight: '600'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Section Équipements */}
      <div style={{ 
        marginTop: '4rem', 
        background: 'var(--color-dark-green)', 
        color: 'white', 
        padding: '3rem', 
        borderRadius: '20px',
        textAlign: 'center'
      }}>
        <h3>Équipements Pédagogiques Spécialisés</h3>
        <p style={{ marginTop: '1rem', opacity: '0.9' }}>
          Le centre dispose de matériel de psychomotricité, d'outils informatiques adaptés et de supports 
          pédagogiques numériques pour garantir un accompagnement de haute qualité.
        </p>
      </div>
    </div>
  );
};

export default Activites;
