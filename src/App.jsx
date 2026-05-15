import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Activites from './pages/Activites';
import Partenariats from './pages/Partenariats';
import Contact from './pages/Contact';
import Galerie from './pages/galerie'; // <--- Zidi had l-import jdid

function App() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activites" element={<Activites />} />
          <Route path="/partenariats" element={<Partenariats />} />
          <Route path="/galerie" element={<Galerie />} /> {/* <--- Zidi l-Route jdid hna */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;