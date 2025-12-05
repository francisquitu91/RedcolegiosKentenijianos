import React from 'react';
import { NavigationItem } from '../types';
import { Instagram, Linkedin } from 'lucide-react';

interface NavbarProps {
  items: NavigationItem[];
  logoSrc?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  items, 
  logoSrc = 'https://i.postimg.cc/gjB5bXWR/ddq.png' 
}) => {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-header bg-transparent">
      {/* Logo Izquierda */}
      <div className="w-48 flex-shrink-0">
        <img 
          src={logoSrc} 
          alt="Co-crecer Logo" 
          className="h-44 w-auto" 
        />
      </div>

      {/* Navegación Central */}
      <nav className="flex-1 flex justify-center">
        <ul className="flex bg-white/90 rounded-full overflow-hidden shadow-lg px-2 py-1">
          {items.map((item) => (
            <li key={item.id} className="relative">
              <a
                href={item.path}
                className={`
                  block px-5 py-2 text-sm font-medium transition-all duration-200 rounded-full mx-1
                  ${item.isActive
                    ? 'bg-brand-primary text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Redes Sociales Derecha */}
      <div className="flex gap-4 flex-shrink-0">
        {/* Facebook */}
        <a 
          href="https://www.facebook.com/fundacionpentecostes" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-6 h-6 text-[#e66916] hover:text-[#c55812] cursor-pointer transition-colors"
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
          aria-label="Instagram"
        >
          <Instagram className="w-6 h-6 text-[#e66916] hover:text-[#c55812] cursor-pointer transition-colors" />
        </a>
        {/* LinkedIn */}
        <a 
          href="https://cl.linkedin.com/in/fundaci%C3%B3n-pentecostes-042412169" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-6 h-6 text-[#e66916] hover:text-[#c55812] cursor-pointer transition-colors" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
