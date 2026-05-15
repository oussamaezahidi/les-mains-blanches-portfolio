import ProjectCard from '../components/ProjectCard';

const About = () => {
  return (
    <div className="container section" style={{ marginTop: '80px' }}>
      {/* Introduction */}
      <div style={{ maxWidth: '900px', margin: '0 auto', marginBottom: '4rem' }}>
        <h2 style={{ color: 'var(--color-dark-green)', borderLeft: '6px solid var(--color-light-green)', paddingLeft: '1.5rem' }}>
          À propos de l'Association
        </h2>
        <p style={{ fontSize: '1.15rem', marginTop: '1.5rem', color: 'var(--color-text-dark)', lineHeight: '1.8' }}>
          Le <strong>Centre d’Accueil et de Qualification des Personnes en Situation d’Handicaps</strong> est une association sociale et éducative située à Deroua, dans la province de Berrechid au Maroc. 
          Le centre a été créé pour apporter un accompagnement spécialisé aux enfants et aux personnes en situation de handicap, en leur offrant un environnement sécurisé, adapté et inclusif.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid" style={{ marginBottom: '4rem' }}>
        <div className="card" style={{ background: 'var(--color-dark-green)', color: 'white' }}>
          <h3 style={{ color: 'var(--color-light-green)', marginBottom: '1rem' }}>Notre Mission</h3>
          <p>Offrir un accompagnement éducatif, social et thérapeutique adapté aux enfants en situation de handicap afin de favoriser leur développement personnel, leur autonomie et leur inclusion dans la société.</p>
        </div>
        <div className="card" style={{ border: '2px solid var(--color-dark-green)' }}>
          <h3 style={{ color: 'var(--color-dark-green)', marginBottom: '1rem' }}>Notre Vision</h3>
          <p>Construire une société plus inclusive où chaque personne, quelle que soit sa situation, peut bénéficier des mêmes opportunités et participer pleinement à la vie sociale.</p>
        </div>
      </div>

      {/* L'Équipe (Utilisation de ProjectCard) */}
      <h2 className="text-center" style={{ marginBottom: '3rem', color: 'var(--color-dark-green)' }}>
        Une Équipe Professionnelle de 40 Membres
      </h2>
      <div className="grid" style={{ marginBottom: '4rem' }}>
        <ProjectCard 
          title="Pôle Thérapeutique" 
          icon="🩺" 
          description="Un suivi spécialisé pour le développement cognitif et moteur."
          list={[
            "3 Spécialistes en orthophonie",
            "3 Spécialistes en psychomotricité",
            "1 Psychologue (suivi émotionnel)",
            "1 Spécialiste en rééducation médicale"
          ]}
        />
        <ProjectCard 
          title="Pôle Éducatif" 
          icon="🎓" 
          description="Encadrement quotidien et apprentissage social."
          list={[
            "22 Éducatrices ",
            "2 Accompagnatrices de soutien",
            "Coordinatrice des programmes"
          ]}
        />
        <ProjectCard 
          title="Administration & Logistique" 
          icon="🏢" 
          description="Gestion et bon fonctionnement du centre."
          list={[
            "Directrice (supervision générale)",
            "Secrétaire administrative",
            "3 Chauffeurs (transport adapté)",
            "3 Agentes de nettoyage (hygiène)"
          ]}
        />
      </div>

      {/* Infrastructure Section */}
      <div style={{ background: 'var(--color-light-gray)', padding: '4rem 2rem', borderRadius: '30px' }}>
        <h2 className="text-center" style={{ marginBottom: '3.5rem', color: 'var(--color-dark-green)' }}>
          Notre Infrastructure sur 3 Étages
        </h2>
        <div className="grid">
          <div className="card">
            <h4 style={{ color: 'var(--color-light-green)', marginBottom: '1rem' }}>📍 Rez-de-chaussée</h4>
            <p>Espaces administratifs, salle de réunion, cuisine équipée, grande salle à manger et salle d’activités récréatives.</p>
          </div>
          <div className="card">
            <h4 style={{ color: 'var(--color-light-green)', marginBottom: '1rem' }}>📍 1er Étage (Hébergement)</h4>
            <p>Chambres organisées par âge, salles de bain adaptées et espace d’étude supervisé par les éducatrices.</p>
          </div>
          <div className="card">
            <h4 style={{ color: 'var(--color-light-green)', marginBottom: '1rem' }}>📍 2ème Étage (Éducation)</h4>
            <p>Salle de soutien scolaire, bibliothèque, salle informatique et salle polyvalente pour ateliers artistiques.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;