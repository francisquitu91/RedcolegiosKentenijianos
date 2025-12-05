import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { HeroContent, NavigationItem, Database } from '../types';

// Inicialización del cliente Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.REACT_APP_SUPABASE_ANON_KEY;

let supabase: SupabaseClient<Database> | null = null;

// Solo inicializar si tenemos las credenciales
if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
}

/**
 * Verifica si Supabase está configurado
 */
export const isSupabaseConfigured = (): boolean => {
  return supabase !== null;
};

/**
 * Obtiene los items de navegación desde Supabase
 */
export const getNavigationItems = async (): Promise<NavigationItem[]> => {
  if (!supabase) {
    console.warn('Supabase no está configurado. Usando datos mock.');
    return getMockNavigationItems();
  }

  const { data, error } = await supabase
    .from('navigation')
    .select('*')
    .order('order', { ascending: true });

  if (error) {
    console.error('Error fetching navigation:', error);
    throw error;
  }

  return data || [];
};

/**
 * Obtiene el contenido del Hero desde Supabase
 */
export const getHeroData = async (): Promise<HeroContent | null> => {
  if (!supabase) {
    console.warn('Supabase no está configurado. Usando datos mock.');
    return getMockHeroContent();
  }

  const { data, error } = await supabase
    .from('pages')
    .select('content')
    .eq('slug', 'home')
    .single();

  if (error) {
    console.error('Error fetching hero data:', error);
    throw error;
  }

  // Extraer hero_data del contenido JSON
  const content = data?.content as { hero?: HeroContent } | null;
  return content?.hero || null;
};

/**
 * Obtiene todo el contenido de la página
 */
export const getPageContent = async (slug: string = 'home'): Promise<{
  navigation: NavigationItem[];
  hero: HeroContent | null;
}> => {
  const [navigation, hero] = await Promise.all([
    getNavigationItems(),
    getHeroData(),
  ]);

  return { navigation, hero };
};

// ============================================
// DATOS MOCK (para desarrollo sin Supabase)
// ============================================

const getMockNavigationItems = (): NavigationItem[] => [
  { id: 1, label: 'Inicio', path: '/', isActive: true },
  { id: 2, label: 'Nosotros', path: '/nosotros', isActive: false },
  { id: 3, label: 'Servicios', path: '/servicios', isActive: false },
  { id: 4, label: 'Programas', path: '/programas', isActive: false },
  { id: 5, label: 'Contacto', path: '/contacto', isActive: false },
];

const getMockHeroContent = (): HeroContent => ({
  title: '',
  backgroundImageUrl: '/assets/hero-background.jpg',
  backgroundVideoUrl: '/assets/hero-background.mp4',
  logoUrl: 'https://i.postimg.cc/dQ9YZcdv/Diseno-sin-titulo-9.png',
  overlayOpacity: 0.3,
});

export default {
  getNavigationItems,
  getHeroData,
  getPageContent,
  isSupabaseConfigured,
};
