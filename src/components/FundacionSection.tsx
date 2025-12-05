import React, { useEffect, useRef, useState } from 'react';

export const FundacionSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight && rect.bottom > 0) {
          const progress = (windowHeight - sectionTop) / (windowHeight + rect.height);
          setScrollY(progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Movimiento brusco e instantáneo
  const parallaxOffset = scrollY * 600;

  return (
    <section 
      ref={sectionRef}
      className="relative z-20 py-16 bg-gray-100 overflow-hidden min-h-[600px]"
    >
      {/* Solo burbujas/puntos moviéndose rápido - reducidas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grupo 1 - Izquierda */}
        <div 
          className="absolute inset-0"
          style={{ transform: `translateX(${parallaxOffset * 0.5}px) translateY(${parallaxOffset * 0.2}px)` }}
        >
          <div className="absolute w-4 h-4 bg-[#DD5D14]/30 rounded-full top-[10%] left-[8%]" />
          <div className="absolute w-3 h-3 bg-[#8B9CC8]/40 rounded-full top-[28%] left-[12%]" />
          <div className="absolute w-4 h-4 bg-[#DD5D14]/30 rounded-full top-[52%] left-[18%]" />
          <div className="absolute w-3 h-3 bg-[#8B9CC8]/35 rounded-full top-[78%] left-[10%]" />
        </div>

        {/* Grupo 2 - Derecha (dirección opuesta) */}
        <div 
          className="absolute inset-0"
          style={{ transform: `translateX(${-parallaxOffset * 0.45}px) translateY(${-parallaxOffset * 0.15}px)` }}
        >
          <div className="absolute w-4 h-4 bg-[#8B9CC8]/35 rounded-full top-[12%] right-[10%]" />
          <div className="absolute w-3 h-3 bg-[#DD5D14]/30 rounded-full top-[35%] right-[8%]" />
          <div className="absolute w-4 h-4 bg-[#8B9CC8]/30 rounded-full top-[58%] right-[15%]" />
          <div className="absolute w-3 h-3 bg-[#DD5D14]/35 rounded-full top-[82%] right-[12%]" />
        </div>

        {/* Grupo 3 - Centro (más lento) */}
        <div 
          className="absolute inset-0"
          style={{ transform: `translateX(${parallaxOffset * 0.3}px) translateY(${parallaxOffset * 0.35}px)` }}
        >
          <div className="absolute w-4 h-4 bg-[#DD5D14]/20 rounded-full top-[20%] left-[40%]" />
          <div className="absolute w-3 h-3 bg-[#8B9CC8]/25 rounded-full top-[60%] left-[35%]" />
        </div>

        {/* Grupo 4 - Centro-derecha (opuesto) */}
        <div 
          className="absolute inset-0"
          style={{ transform: `translateX(${-parallaxOffset * 0.35}px) translateY(${-parallaxOffset * 0.25}px)` }}
        >
          <div className="absolute w-3 h-3 bg-[#8B9CC8]/30 rounded-full top-[35%] right-[40%]" />
          <div className="absolute w-4 h-4 bg-[#DD5D14]/25 rounded-full top-[75%] right-[38%]" />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-8 z-10">
        {/* Contenido de texto */}
        <div className="flex-1 min-w-[280px]">
          <div className="flex items-center gap-3 text-[#DD5D14] font-semibold mb-3">
            <span className="w-8 h-[3px] bg-[#DD5D14] rounded-sm"></span> Fundación Pentecostés
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
            Pedagogía kentenijiana en comunidades educativas de excelencia
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl">
            La Fundación Pentecostés plasma el sello de la pedagogía kentenijiana en cada comunidad educativa
            de la Red, aspirando ser un apoyo al desarrollo de colegios que alcancen una educación orgánica de calidad.
            Fundamentada en la espiritualidad del P. José Kentenich, promovemos una gestión de excelencia que sirve
            desinteresadamente a la singularidad de cada persona.
          </p>
          <a 
            className="inline-block bg-[#DD5D14] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#c54f10] transition-all hover:translate-x-1" 
            href="#"
          >
            Ver Más →
          </a>
        </div>

        {/* Imagen con efectos */}
        <div className="relative">
          <div 
            className="absolute -right-5 -top-5 w-44 h-44 rounded-2xl opacity-95 transition-transform duration-150"
            style={{ 
              background: 'linear-gradient(135deg, rgba(139,156,200,0.15), rgba(200,190,230,0.25))',
              transform: `translate(${parallaxOffset * 0.15}px, ${-parallaxOffset * 0.1}px)`
            }}
          />
          <div className="relative w-[340px] h-[340px] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] z-10">
            <img 
              src="https://schoenstatt-fathers.org/es_new/wp-content/uploads/2021/04/0-CoverPK.jpg.pagespeed.ce.jmBv3pg7cb.jpg" 
              alt="P. José Kentenich" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
              loading="lazy" 
            />
          </div>
          <div 
            className="absolute right-1/2 -bottom-4 w-16 h-16 rounded-xl opacity-95 transition-transform duration-150"
            style={{ 
              background: 'linear-gradient(180deg, rgba(221,93,20,0.15), rgba(255,180,140,0.09))',
              transform: `translate(${-parallaxOffset * 0.2}px, ${parallaxOffset * 0.12}px)`
            }}
          />
        </div>
      </div>

      {/* Carrusel de Logos */}
      <div className="relative mt-20 pt-12 border-t border-gray-200/50 z-10">
        <h3 className="text-center text-gray-500 text-sm font-medium uppercase tracking-wider mb-8">
          Red de Colegios
        </h3>
        
        <div className="logo-carousel-container">
          <div className="logo-carousel">
            <img src="https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/logos/mtn-chile.png" alt="MTN Chile" className="logo-item" />
            <img src="https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/logos/ccst.png" alt="CCST" className="logo-item" />
            <img src="https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/logos/ccampanario.png" alt="Campanario" className="logo-item" />
            <img src="https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/logos/sagrada-familia.png" alt="Sagrada Familia" className="logo-item" />
            <img src="https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/logos/mtn-ecuador.png" alt="MTN Ecuador" className="logo-item" />
            <img src="https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/logos/san-jose.png" alt="San José" className="logo-item" />
            <img src="https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/logos/santa-maria-pt.png" alt="Santa María" className="logo-item" />
            <img src="https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/logos/jose-kentenich.png" alt="José Kentenich" className="logo-item" />
            <img src="https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/logos/csanmarc.png" alt="San Marcos" className="logo-item" />
            <img src="https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/logos/cmonte-tabor.png" alt="Monte Tabor" className="logo-item" />
            <img src="https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/logos/monte-reina.png" alt="Monte Reina" className="logo-item" />
            
            <img src="https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/logos/mtn-chile.png" alt="MTN Chile" className="logo-item" />
            <img src="https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/logos/ccst.png" alt="CCST" className="logo-item" />
            <img src="https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/logos/ccampanario.png" alt="Campanario" className="logo-item" />
            <img src="https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/logos/sagrada-familia.png" alt="Sagrada Familia" className="logo-item" />
            <img src="https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/logos/mtn-ecuador.png" alt="MTN Ecuador" className="logo-item" />
            <img src="https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/logos/san-jose.png" alt="San José" className="logo-item" />
            <img src="https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/logos/santa-maria-pt.png" alt="Santa María" className="logo-item" />
            <img src="https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/logos/jose-kentenich.png" alt="José Kentenich" className="logo-item" />
            <img src="https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/logos/csanmarc.png" alt="San Marcos" className="logo-item" />
            <img src="https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/logos/cmonte-tabor.png" alt="Monte Tabor" className="logo-item" />
            <img src="https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/logos/monte-reina.png" alt="Monte Reina" className="logo-item" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente separado para la sección de video parallax
export const VideoParallaxSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video de fondo con efecto parallax usando clip */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          clipPath: 'inset(0 0 0 0)',
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
          }}
        >
          <source src="/assets/113343-697717990.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40 z-10" />
    </section>
  );
};

export default FundacionSection;
