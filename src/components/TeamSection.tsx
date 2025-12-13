import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Gonzalo Durán Jara',
    role: 'Curso Educadores, Actualización Bases curriculares Religión, Acuerdo Marco Afectividad, sexualidad y género',
    image: 'https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/equipo/gduran.jpg',
  },
  {
    name: 'Bárbara Reyes Santibáñez',
    role: 'Coordinación proyectos Red de colegios kentenijianos',
    image: 'https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/equipo/breyes.jpg',
  },
  {
    name: 'Carolina Cherniavsky Bozzolo',
    role: 'Laboratorios pedagógicos, Formación ciudadana, Acompañamiento actualización PEI',
    image: 'https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/equipo/ccherniavsky.jpg',
  },
  {
    name: 'Francisca Varela Ovalle',
    role: 'Difusión y comunicaciones Red de colegios Kentenijianos',
    image: 'https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/equipo/fvarela.jpg',
  },
  {
    name: 'Estíbaliz Ramírez Herrera',
    role: 'Acompañamiento y coordinación Ciclo inicial',
    image: 'https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/equipo/eramirez.jpg',
  },
  {
    name: 'Padre Francisco Jensen Escudero',
    role: 'Capellanía general',
    image: 'https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/equipo/pfcojensen.jpg',
  },
];

// Segunda sección de video parallax con el nuevo video
export const VideoParallaxSection2: React.FC = () => {
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
          preload="auto"
          className="w-full h-full object-cover"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
          }}
        >
          <source src="/assets/27803-365891137.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40 z-10" />
    </section>
  );
};

// Componente del equipo - versión estática con grid
export const TeamSection: React.FC = () => {
  return (
    <section className="relative z-20 py-20 bg-[#f5f5f0] overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-64 h-64 bg-[#DD5D14]/5 rounded-full -top-20 -right-20" />
        <div className="absolute w-48 h-48 bg-[#8B9CC8]/10 rounded-full bottom-10 -left-10" />
      </div>

      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 text-[#DD5D14] font-semibold mb-3">
            <span className="w-8 h-[3px] bg-[#DD5D14] rounded-sm"></span>
            Nuestro Equipo
            <span className="w-8 h-[3px] bg-[#DD5D14] rounded-sm"></span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
            Fundación Pentecostés
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conoce a las personas que hacen posible la misión de la Red de Colegios Kentenijianos
          </p>
        </div>

        {/* Grid de miembros del equipo */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="w-36 h-36 mx-auto mb-3 rounded-full overflow-hidden bg-gray-200 shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 leading-tight mb-2">
                {member.name}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* Foto grupal grande y centrada */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#DD5D14]/15 to-[#8B9CC8]/15 rounded-3xl transform rotate-1" />
            <img
              src="https://www.pentecostes.cl/website/www.pentecostes.cl/cloud/equipo/equipo.jpg"
              alt="Equipo Fundación Pentecostés"
              className="relative w-full h-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>
          <p className="mt-6 text-center text-gray-600 font-medium">
            Equipo Fundación Pentecostés
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
