import React from 'react';
import { Navbar, HeroSection, FundacionSection, VideoParallaxSection, EditorialSection, ContactSection, VideoParallaxSection2, TeamSection } from './components';
import { useContent } from './hooks/useContent';

const App: React.FC = () => {
  const { navigation, hero, error } = useContent();

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-500 text-lg mb-4">Error al cargar el contenido</p>
          <p className="text-brand-text">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent">
      {/* Navbar */}
      <Navbar items={navigation} />

      {/* Hero Section */}
      {hero && <HeroSection content={hero} />}

      {/* Sección Fundación Pentecostés con efecto parallax interactivo */}
      <FundacionSection />

      {/* Sección de Video Parallax (igual que portada) */}
      <VideoParallaxSection />

      {/* Sección Editorial con bloques */}
      <EditorialSection />

      {/* Segunda sección de Video Parallax (transición al equipo) */}
      <VideoParallaxSection2 />

      {/* Sección del Equipo */}
      <TeamSection />

      {/* Sección de Contacto */}
      <ContactSection />
    </div>
  );
};

export default App;
