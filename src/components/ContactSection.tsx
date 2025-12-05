import React from 'react';

export const ContactSection: React.FC = () => {
  return (
    <section className="w-full bg-[#142139] py-24 flex flex-col items-center justify-center text-center relative overflow-hidden">
      
      {/* 1. Título Principal */}
      <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 font-serif tracking-tight">
        Contáctanos
      </h2>

      {/* 2. Subtítulo Rosa */}
      <p className="text-[#EA9A9D] text-2xl md:text-3xl font-serif mb-4">
        Escríbele a nuestra secretaria
      </p>

      {/* 3. Contenedor Relativo para el Correo y la Flecha */}
      <div className="relative mt-4 mb-12 group">
        
        {/* Enlace de Correo */}
        <a 
          href="mailto:secretaria@fundacionpentecostes.cl"
          className="text-[#FCEE21] text-xl md:text-2xl font-bold underline decoration-2 underline-offset-4 hover:opacity-90 transition-opacity block mt-8"
        >
          secretaria@fundacionpentecostes.cl
        </a>

        {/* Imagen de la Flecha (Posicionada Absolutamente) */}
        <img 
          src="https://static.wixstatic.com/media/5183e4_d83df27d65a04ef1ae2210a4e2591718~mv2.png/v1/fill/w_110,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%C2%BFPor%20qu%C3%A9%20nos%20hicimos%20(16)_edited.png"
          alt="Flecha decorativa"
          className="hidden md:block absolute -right-36 -top-20 w-28 h-auto transform rotate-[48deg]"
        />
      </div>

      {/* 4. Iconos Sociales */}
      <div className="flex gap-6 items-center">
        {/* Facebook */}
        <a 
          href="https://www.facebook.com/fundacionpentecostes" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:scale-110 transition-transform duration-300"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
          >
            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a 
          href="https://www.instagram.com/reddecolegioskentenijianos?igsh=MWc3aXF1Y2Q0enA3ZQ==" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:scale-110 transition-transform duration-300"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>

        {/* LinkedIn */}
        <a 
          href="https://cl.linkedin.com/in/fundaci%C3%B3n-pentecostes-042412169" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:scale-110 transition-transform duration-300"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
      </div>

    </section>
  );
};

export default ContactSection;
