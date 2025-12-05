import React from 'react';

// Datos de los bloques editoriales
const blocks = [
  {
    id: 1,
    filename: 'banner-labs.png',
    url: 'https://i.postimg.cc/MGFQ8Pxh/banner-labs.png',
    alt: 'Laboratorios - Fundación Pentecostés',
    caption: 'Laboratorios y espacios de innovación',
  },
  {
    id: 2,
    filename: 'banner-fc.png',
    url: 'https://i.postimg.cc/NFh2KKKD/banner-fc.png',
    alt: 'Formación Continua - Fundación Pentecostés',
    caption: 'Programas de formación continua',
  },
  {
    id: 3,
    filename: 'banner-afsex.png',
    url: 'https://i.postimg.cc/MZRjhmLc/banner-afsex.png',
    alt: 'Actividades Físicas y Bienestar - Fundación Pentecostés',
    caption: 'Actividades físicas y bienestar',
  },
  {
    id: 4,
    filename: 'img-ciclo.png',
    url: 'https://i.postimg.cc/J4LBmBVh/img-ciclo.png',
    alt: 'Ciclos y etapas educativas - Fundación Pentecostés',
    caption: 'Ciclos formativos',
  },
  {
    id: 5,
    filename: 'banner-cmundo.png',
    url: 'https://i.postimg.cc/bvWs5ZH1/banner-cmundo.png',
    alt: 'Comunidad Mundo - Fundación Pentecostés',
    caption: 'Conexión con la comunidad',
  },
  {
    id: 6,
    filename: 'banner-hitos.png',
    url: 'https://i.postimg.cc/5yMjxDr2/banner-hitos.png',
    alt: 'Hitos y logros - Fundación Pentecostés',
    caption: 'Hitos y trayectoria',
  },
];

// SVG decorativo de estrellas
const DecorativeStars: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg 
    viewBox="0 0 102 102" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      fill="#f58300" 
      d="M70,16 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z M30,0 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z M43,42 c0,20,-10,30,-20,30 c10,0,20,10,20,30 c0,-20,10,-30,20,-30 c-10,0,-20,-10,-20,-30 z"
    />
  </svg>
);

export const EditorialSection: React.FC = () => {
  return (
    <section className="relative z-20 py-20 bg-white overflow-hidden">
      {/* SVG decorativo superior izquierdo */}
      <DecorativeStars className="absolute top-8 left-8 w-20 h-20 opacity-60" />
      
      {/* SVG decorativo superior derecho (espejado) */}
      <DecorativeStars className="absolute top-12 right-12 w-16 h-16 opacity-40 transform scale-x-[-1]" />

      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Encabezado de sección */}
        <div className="text-center mb-16 relative">
          <div className="flex items-center justify-center gap-3 text-[#DD5D14] font-semibold mb-4">
            <span className="w-8 h-[3px] bg-[#DD5D14] rounded-sm"></span>
            Bloques Editoriales
            <span className="w-8 h-[3px] bg-[#DD5D14] rounded-sm"></span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
            Nuestros Programas y Servicios
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre las diferentes áreas de trabajo y programas que ofrecemos para el desarrollo integral de nuestra comunidad educativa.
          </p>
        </div>

        {/* Grid de bloques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* SVG decorativo en el medio del grid */}
          <DecorativeStars className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 opacity-30 hidden lg:block" />
          <DecorativeStars className="absolute -right-4 top-1/3 w-14 h-14 opacity-25 hidden lg:block" />

          {blocks.map((block) => (
            <article
              key={block.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Imagen del bloque */}
              <div className="relative overflow-hidden aspect-[240/158]">
                <img
                  src={block.url}
                  alt={block.alt}
                  width={240}
                  height={158}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay en hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Caption */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#DD5D14] transition-colors duration-300">
                  {block.caption}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-6 h-[2px] bg-[#DD5D14] rounded-sm transition-all duration-300 group-hover:w-10"></span>
                  <span>Ver más</span>
                </div>
              </div>

              {/* Borde decorativo inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#DD5D14] to-[#8B9CC8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </article>
          ))}
        </div>

        {/* SVG decorativo inferior */}
        <div className="flex justify-center mt-16">
          <DecorativeStars className="w-24 h-24 opacity-50" />
        </div>
      </div>

      {/* Decoración de fondo sutil */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#DD5D14]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-[#8B9CC8]/5 rounded-full blur-3xl translate-x-1/2" />
    </section>
  );
};

export default EditorialSection;
