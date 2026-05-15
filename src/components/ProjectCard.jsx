const ProjectCard = ({ title, description, icon, list }) => {
  return (
    <div className="card" style={{ height: '100%', borderTop: '5px solid var(--color-light-green)' }}>
      <div style={{ 
        fontSize: '2.5rem', 
        marginBottom: '1.5rem',
        color: 'var(--color-dark-green)'
      }}>
        {icon}
      </div>
      <h3 style={{ marginBottom: '1rem', color: 'var(--color-dark-green)' }}>{title}</h3>
      <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>{description}</p>
      {list && (
        <ul style={{ 
          textAlign: 'left', 
          paddingLeft: '1.2rem', 
          color: 'var(--color-text-dark)',
          fontSize: '0.95rem'
        }}>
          {list.map((item, index) => (
            <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectCard;