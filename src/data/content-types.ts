export interface SocialMedia {
  platform: string;
  url: string;
}

export interface Organization {
  id: string;
  name: string;
  description: string;
  website?: string;
  email?: string;
  socialMedia: SocialMedia[];
  image?: string;
  category: string;
  foundedYear?: number;
  location?: string;
}

export interface ContentCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
  color?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image?: string;
  author?: string;
  publishedAt: Date;
  category: string;
  tags: string[];
  externalUrl?: string;
}

export const CONTENT_CATEGORIES: ContentCategory[] = [
  {
    id: "denominacoes",
    name: "Denominações",
    slug: "denominacoes",
    description: "Principais denominações evangélicas do Brasil",
    color: "bg-blue-500",
  },
  {
    id: "projetos-sociais",
    name: "Projetos Sociais",
    slug: "projetos-sociais",
    description: "Iniciativas sociais e de impacto comunitário",
    color: "bg-green-500",
  },
  {
    id: "confissoes-fe",
    name: "Confissões de Fé",
    slug: "confissoes-fe",
    description: "Documentos e declarações doutrinárias fundamentais",
    color: "bg-purple-500",
  },
  {
    id: "organizacoes-paraeclesiasticas",
    name: "Organizações Paraeclesiásticas",
    slug: "organizacoes-paraeclesiasticas",
    description: "Organizações que apoiam e complementam o trabalho da igreja",
    color: "bg-orange-500",
  },
  {
    id: "revistas-academicas",
    name: "Revistas Acadêmicas",
    slug: "revistas-academicas",
    description: "Publicações acadêmicas e científicas",
    color: "bg-red-500",
  },
  {
    id: "seminarios-faculdades",
    name: "Seminários e Faculdades",
    slug: "seminarios-faculdades",
    description: "Instituições de ensino teológico e superior",
    color: "bg-indigo-500",
  },
  {
    id: "livros",
    name: "Livros",
    slug: "livros",
    description: "Livros recomendados para crescimento espiritual e intelectual",
    color: "bg-emerald-500",
  },
  {
    id: "podcasts",
    name: "Podcasts",
    slug: "podcasts",
    description: "Podcasts evangélicos para edificação e aprendizado",
    color: "bg-pink-500",
  },
];