import React, { useState } from 'react';
import { HeroContent } from '../types';

interface HeroProps {
  content: HeroContent;
}

// Videos disponibles para cambiar
const AVAILABLE_VIDEOS = [
  '/assets/216832.mp4',
  '/assets/2340-157269921.mp4',
  '/assets/7552611-hd_1920_1080_25fps.mp4',
  '/assets/113343-697717990.mp4',
];

export const HeroSection: React.FC<HeroProps> = ({ content: _content }) => {
  void _content; // Reservado para uso futuro
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const currentVideo = AVAILABLE_VIDEOS[currentVideoIndex];

  const handleChangeVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % AVAILABLE_VIDEOS.length);
  };

  return (
    <>
      {/* Fondo fijo (parallax) - Video o Imagen */}
      <div className="hero-parallax-bg" aria-hidden="true">
        <video
          key={currentVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="hero-video"
        >
          <source src={currentVideo} type="video/mp4" />
        </video>
        {/* Overlay negro sobre el fondo */}
        <div
          className="hero-overlay"
          style={{ backgroundColor: 'black', opacity: 0.4 }}
        />
      </div>

      {/* Sección Hero con contenido */}
      <section className="relative w-full h-screen flex justify-center items-center overflow-hidden z-10">
        {/* Contenido Central - Logo movido a la derecha */}
        <div className="relative z-20 text-center flex flex-col items-center animate-fade-in ml-12 md:ml-20">
          <img
            src="https://i.postimg.cc/rF6csstk/3131313.png"
            alt="Co-crecer Logo"
            className="w-[500px] md:w-[600px] lg:w-[700px] drop-shadow-xl"
          />
        </div>

        {/* Botón oculto para cambiar video - esquina inferior derecha */}
        <button
          onClick={handleChangeVideo}
          className="absolute bottom-4 right-4 z-50 w-8 h-8 rounded-full opacity-0 hover:opacity-20 transition-opacity cursor-pointer bg-white/10 border border-white/5"
          title={`Video ${currentVideoIndex + 1}/${AVAILABLE_VIDEOS.length}`}
          aria-label="Cambiar video de fondo"
        />
      </section>
    </>
  );
};

export default HeroSection;
