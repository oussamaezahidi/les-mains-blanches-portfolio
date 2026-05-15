const Counter = ({ number, label, icon }) => (
  <div className="card text-center" style={{ padding: '2rem' }}>
    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{icon}</div>
    <div style={{ 
      fontSize: '2.8rem', 
      fontWeight: 'bold', 
      color: 'var(--color-light-green)',
      marginBottom: '0.5rem'
    }}>
      {number}
    </div>
    <div style={{ 
      fontWeight: '600', 
      color: 'var(--color-text-dark)',
      textTransform: 'uppercase',
      fontSize: '0.9rem',
      letterSpacing: '1px'
    }}>
      {label}
    </div>
  </div>
);

export default Counter;