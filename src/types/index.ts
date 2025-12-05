// types/index.ts
// Definiciones de tipos para el proyecto Co-crecer

export interface NavigationItem {
  id: number;
  label: string;
  path: string;
  isActive?: boolean;
}

export interface HeroContent {
  title: string;
  backgroundImageUrl: string;
  backgroundVideoUrl?: string; // Video de fondo opcional
  logoUrl?: string; // Logo para mostrar en el hero
  overlayOpacity: number; // 0.8 a 0.9
}

// Tipos para el contenido de la página
export interface PageContent {
  navigation: NavigationItem[];
  hero: HeroContent;
}

// Supabase Database definitions (preparado para integración futura)
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      pages: {
        Row: {
          id: number;
          slug: string;
          title: string;
          content: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          slug: string;
          title: string;
          content: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          slug?: string;
          title?: string;
          content?: Json;
          created_at?: string;
          updated_at?: string;
        };
      };
      navigation: {
        Row: {
          id: number;
          label: string;
          path: string;
          order: number;
        };
        Insert: {
          id?: number;
          label: string;
          path: string;
          order: number;
        };
        Update: {
          id?: number;
          label?: string;
          path?: string;
          order?: number;
        };
      };
    };
  };
};
