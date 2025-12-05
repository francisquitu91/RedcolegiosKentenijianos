# Co-crecer Landing Page

Proyecto de landing page para **Co-crecer** construido con React, TypeScript y Tailwind CSS.

## 🎨 Design Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `brand.primary` | `#E5535A` | Rojo Salmón - Botones activos |
| `brand.secondary` | `#5C8BC0` | Azul - Gráficos/garabatos |
| `brand.text` | `#333333` | Gris Oscuro - Texto |
| `overlay` | `rgba(255,255,255,0.85)` | Overlay blanco |
| `headerHeight` | `80px` | Altura del header |

## 📁 Estructura del Proyecto

```
co-crecer/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navegación fixed con estilos
│   │   ├── HeroSection.tsx     # Sección hero con overlay
│   │   ├── DecorativeScribble.tsx # SVG decorativo
│   │   └── index.ts            # Barrel exports
│   ├── hooks/
│   │   └── useContent.ts       # Hook para fetch de contenido
│   ├── services/
│   │   └── contentService.ts   # Servicio Supabase
│   ├── styles/
│   │   └── globals.css         # Estilos globales + Tailwind
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   ├── App.tsx                 # Componente principal
│   └── index.tsx               # Entry point
├── public/
│   └── assets/                 # Imágenes y recursos
├── tailwind.config.js          # Configuración Tailwind
├── tsconfig.json               # Configuración TypeScript
├── vite.config.ts              # Configuración Vite
└── package.json
```

## 🚀 Instalación

```bash
# Navegar al directorio
cd co-crecer

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 📦 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Build para producción |
| `npm run preview` | Preview del build |
| `npm run lint` | Ejecuta ESLint |
| `npm run type-check` | Verifica tipos TypeScript |

## 🔌 Integración con Supabase

1. Copia `.env.example` a `.env.local`
2. Añade tus credenciales de Supabase:

```env
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu-anon-key
```

### Tablas necesarias en Supabase:

**Tabla `navigation`:**
```sql
CREATE TABLE navigation (
  id SERIAL PRIMARY KEY,
  label TEXT NOT NULL,
  path TEXT NOT NULL,
  "order" INTEGER NOT NULL
);
```

**Tabla `pages`:**
```sql
CREATE TABLE pages (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  content JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

## 🎯 Componentes Principales

### Navbar
- Posición fija con transparencia y backdrop blur
- Items de navegación con estilos activo/inactivo
- Item activo: fondo `#E5535A` con texto blanco
- Items inactivos: borde derecho gris separador
- Iconos de redes sociales (Instagram, LinkedIn)

### HeroSection
- Altura completa (100vh)
- Imagen de fondo con overlay blanco (opacity 0.85)
- Garabato decorativo SVG en color azul `#5C8BC0`
- Título centrado con animación fade-in

### useContent Hook
- Simula llamadas a Supabase con datos mock
- Manejo de estados: loading, error, data
- Función `refetch` para recargar contenido

## 📝 Licencia

MIT © Co-crecer
