import React from 'react';

interface DecorativeScribbleProps {
  className?: string;
  color?: string;
}

export const DecorativeScribble: React.FC<DecorativeScribbleProps> = ({
  className = '',
  color = '#5C8BC0', // brand.secondary
}) => {
  return (
    <div className={`text-brand-secondary ${className}`}>
      <svg
        viewBox="0 0 200 60"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full animate-draw"
        style={{
          strokeDasharray: '300',
          strokeDashoffset: '0',
        }}
        aria-hidden="true"
      >
        {/* Garabato ondulado estilo Co-crecer */}
        <path d="M10 30 Q 30 10, 50 30 T 90 30 T 130 30 T 170 30 Q 190 30, 190 35" />
        {/* Pequeño loop decorativo */}
        <path d="M85 25 Q 95 15, 105 25 Q 115 35, 105 40 Q 95 45, 90 35" />
      </svg>
    </div>
  );
};

export default DecorativeScribble;
