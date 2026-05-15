import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); 
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Veuillez entrer un email valide';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setLoading(true); // Bouton kiy-t-chargi
      
      // Simulation d'envoi (Hna t-9der t-zid API dyalk men ba3d)
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Success message kiy-ghber men ba3d 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      }, 1500);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#fff' }}>
      <section className="section container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--color-dark-green)', fontSize: '2.5rem', fontWeight: '800' }}>Nous Contacter</h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-secondary)', margin: '15px auto', borderRadius: '10px' }}></div>
          <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Vous avez des questions sur nos programmes ou vous souhaitez nous soutenir ? 
            L'équipe de l'Association Ayadi Baydae est à votre écoute.
          </p>
        </div>

        <div className="contact-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '4rem', 
          marginBottom: '50px' 
        }}>
          
          {/* FORMULAIRE SECTION */}
          <div className="contact-card" style={{ 
            background: '#ffffff', 
            padding: '40px', 
            borderRadius: '24px', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            border: '1px solid #f0f0f0'
          }}>
            <h3 style={{ marginBottom: '2rem', color: 'var(--color-dark-green)', fontWeight: '700' }}>Envoyez-nous un message</h3>
            
            {submitted && (
              <div style={{ 
                backgroundColor: '#ecfdf5', color: '#065f46', padding: '1rem', 
                borderRadius: '12px', marginBottom: '1.5rem', borderLeft: '5px solid #10b981' 
              }}>
                ✅ Merci ! Votre message a été envoyé avec succès.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontWeight: '600', display: 'block', marginBottom: '8px' }}>Nom Complet</label>
                <input
                  type="text" name="name" value={formData.name} onChange={handleChange}
                  placeholder="Votre nom"
                  style={{ 
                    width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid',
                    borderColor: errors.name ? '#ef4444' : '#e2e8f0', outline: 'none'
                  }}
                />
                {errors.name && <small style={{ color: '#ef4444' }}>{errors.name}</small>}
              </div>

              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontWeight: '600', display: 'block', marginBottom: '8px' }}>Email Address</label>
                <input
                  type="email" name="email" value={formData.email} onChange={handleChange}
                  placeholder="exemple@mail.com"
                  style={{ 
                    width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid',
                    borderColor: errors.email ? '#ef4444' : '#e2e8f0', outline: 'none'
                  }}
                />
                {errors.email && <small style={{ color: '#ef4444' }}>{errors.email}</small>}
              </div>

              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label style={{ fontWeight: '600', display: 'block', marginBottom: '8px' }}>Message</label>
                <textarea
                  name="message" value={formData.message} onChange={handleChange} rows="5"
                  placeholder="Comment pouvons-nous vous aider ?"
                  style={{ 
                    width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid',
                    borderColor: errors.message ? '#ef4444' : '#e2e8f0', outline: 'none', resize: 'none'
                  }}
                ></textarea>
                {errors.message && <small style={{ color: '#ef4444' }}>{errors.message}</small>}
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="btn btn-primary" 
                style={{ width: '100%', padding: '15px', borderRadius: '12px', cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                {loading ? 'Envoi en cours...' : 'Envoyer le Message'}
              </button>
            </form>
          </div>

          {/* INFOS SECTION */}
          <div className="contact-info" style={{ padding: '20px' }}>
            <h3 style={{ marginBottom: '2rem', color: 'var(--color-dark-green)', fontWeight: '700' }}>Coordonnées</h3>
            
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
              <div style={{ fontSize: '1.5rem' }}>📍</div>
              <div>
                <h4 style={{ margin: 0, color: 'var(--color-dark-green)' }}>Siège Social</h4>
                <p style={{ color: '#666' }}>Almadina 3, Deroua, Province de Berrechid, Maroc</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
              <div style={{ fontSize: '1.5rem' }}>📞</div>
              <div>
                <h4 style={{ margin: 0, color: 'var(--color-dark-green)' }}>Téléphones</h4>
                <p style={{ color: '#666', margin: 0 }}>07 08 78 07 70</p>
                <p style={{ color: '#666', margin: 0 }}>07 08 07 63 43</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
              <div style={{ fontSize: '1.5rem' }}>✉️</div>
              <div>
                <h4 style={{ margin: 0, color: 'var(--color-dark-green)' }}>Email</h4>
                <p style={{ color: '#666' }}>contact@ayadibaydae.org</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
              <div style={{ fontSize: '1.5rem' }}>🕒</div>
              <div>
                <h4 style={{ margin: 0, color: 'var(--color-dark-green)' }}>Horaires d'ouverture</h4>
                <p style={{ color: '#666' }}>Lundi - Vendredi: 09h00 - 15h30</p>
              </div>
            </div>

<div className="contact-map" style={{ 
  marginTop: '40px', 
  width: '100%', 
  height: '350px', 
  borderRadius: '24px', 
  overflow: 'hidden', 
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  border: '1px solid #e2e8f0'
}}>
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1610.7418483134288!2d-7.530851783845159!3d33.38430443000673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sles%20mains%20blaches%20almadina%203%2C%20deroua!5e0!3m2!1sfr!2sma!4v1773270929867!5m2!1sfr!2sma" 
    width="100%" 
    height="100%" 
    style={{ border: 0 }} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
    title="Localisation Ayadi Baydae"
  ></iframe>
</div>
          </div>

        </div>
      </section>
    </div>
  );
}
