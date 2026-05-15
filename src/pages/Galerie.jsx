import React, { useState } from 'react';

const Galerie = () => {
  const [filter, setFilter] = useState('all');

  const photos = [
    { id: 1, category: 'dessin', src: '/gallery/dessin/img5.jpg', title: 'Atelier Dessin 1' },
    { id: 2, category: 'dessin', src: '/gallery/dessin/img8.jpg', title: 'Atelier Dessin 2' },
    { id: 3, category: 'dessin', src: '/gallery/dessin/img40.jpg', title: 'Atelier Dessin 3' },
    { id: 4, category: 'fetes', src: '/gallery/fetes/img3.jpg', title: 'Célébration 1' },
    { id: 5, category: 'fetes', src: '/gallery/fetes/img6.jpg', title: 'Célébration 2' },
    { id: 6, category: 'fetes', src: '/gallery/fetes/img13.jpg', title: 'Célébration 3' },
    { id: 7, category: 'fetes', src: '/gallery/fetes/img31.jpg', title: 'Célébration 4' },
    { id: 8, category: 'fetes', src: '/gallery/fetes/img32.jpg', title: 'Célébration 5' },
    { id: 9, category: 'fetes', src: '/gallery/fetes/img34.jpg', title: 'Célébration 6' },
    { id: 10, category: 'fetes', src: '/gallery/fetes/img36.jpg', title: 'Célébration 7' },
    { id: 11, category: 'fetes', src: '/gallery/fetes/img38.jpg', title: 'Célébration 8' },
    { id: 12, category: 'fetes', src: '/gallery/fetes/img39.jpg', title: 'Célébration 9' },
    { id: 14, category: 'jeux', src: '/gallery/jeux/img4.jpg', title: 'Jeux & Sport 1' },
    { id: 15, category: 'jeux', src: '/gallery/jeux/img7.jpg', title: 'Jeux & Sport 2' },
    { id: 16, category: 'jeux', src: '/gallery/jeux/img11.jpg', title: 'Jeux & Sport 3' },
    { id: 17, category: 'jeux', src: '/gallery/jeux/img14.jpg', title: 'Jeux & Sport 4' },
    { id: 18, category: 'jeux', src: '/gallery/jeux/img15.jpg', title: 'Jeux & Sport 5' },
    { id: 19, category: 'jeux', src: '/gallery/jeux/img16.jpg', title: 'Jeux & Sport 6' },
    { id: 20, category: 'mer', src: '/gallery/mer/img12.jpg', title: 'Sortie Mer 1' },
    { id: 21, category: 'mer', src: '/gallery/mer/img17.jpg', title: 'Sortie Mer 2' },
    { id: 22, category: 'mer', src: '/gallery/mer/img29.jpg', title: 'Sortie Mer 3' },
  ];

  const filteredPhotos = filter === 'all' ? photos : photos.filter(p => p.category === filter);

  return (
    <div className="container section" style={{ marginTop: '100px', paddingBottom: '50px' }}>
      <div className="text-center" style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: 'var(--color-dark-green)', fontSize: '2.5rem' }}>L'Album des Mains Blanches</h2>
        <p style={{ color: 'var(--color-text-light)' }}>
          Une immersion dans le quotidien et les sorties de nos enfants.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '4rem', flexWrap: 'wrap' }}>
        {[
          { id: 'all', label: 'Tout' },
          { id: 'dessin', label: '🎨 Dessin' },
          { id: 'mer', label: '🏖️ Sorties Mer' },
          { id: 'jeux', label: '🎮 Jeux & Sport' },
          { id: 'fetes', label: '🕯️ Fêtes' }
        ].map(cat => (
          <button 
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            style={{ 
              background: filter === cat.id ? 'var(--color-dark-green)' : 'white',
              color: filter === cat.id ? 'white' : 'var(--color-dark-green)',
              border: '2px solid var(--color-dark-green)',
              borderRadius: '25px',
              padding: '10px 25px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: '0.3s'
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '25px' 
      }}>
        {filteredPhotos.map(photo => (
          <div key={photo.id} style={{
            background: 'white',
            padding: '12px 12px 35px 12px',
            boxShadow: '0 8px 15px rgba(0,0,0,0.1)',
            borderRadius: '4px'
          }}>
            <img 
              src={photo.src} 
              alt={photo.title}
              style={{ width: '100%', height: '240px', objectFit: 'cover' }}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/300x240?text=Check+Path";
              }}
            />
            <p style={{ textAlign: 'center', marginTop: '15px', fontFamily: 'cursive', color: '#666' }}>
              {photo.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galerie;