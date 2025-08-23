import { Organization } from './content-types';

export const organizations: Organization[] = [
  // Associações Paraeclesiásticas
  {
    id: "alianca-evangelica",
    name: "Aliança Evangélica Brasileira",
    description: "A Aliança Evangélica Brasileira, baseada nos princípios da Reforma Protestante (suficiência das Escrituras, mediação de Cristo e justificação pela graça), busca ser uma plataforma relacional para igrejas, organizações e indivíduos, promovendo o testemunho cristão e o serviço ao Reino de Deus.",
    website: "https://aliancaevangelica.org.br",
    socialMedia: [],
    category: "organizacoes-paraeclesiasticas",
  },
  {
    id: "world-evangelical-alliance",
    name: "World Evangelical Alliance",
    description: "A Aliança Evangélica Mundial (WEA) se destaca por suas características únicas: confissão doutrinária, constituição formal, base eclesiástica, alcance global e funcionamento em rede com serviços de aliança.",
    website: "https://worldea.org",
    socialMedia: [],
    category: "organizacoes-paraeclesiasticas",
  },

  // Projetos Sociais
  {
    id: "visao-mundial",
    name: "Visão Mundial",
    description: "Organização humanitária cristã dedicada a trabalhar com crianças, famílias e comunidades para superar a pobreza e a injustiça.",
    website: "https://visaomundial.org.br",
    socialMedia: [],
    category: "projetos-sociais",
  },
  {
    id: "pella-bethania",
    name: "Associação Beneficente Pella Bethânia",
    description: "Abrigo para idosos ligado à Igreja Evangélica de Confissão Luterana no Brasil. Existe desde 1892.",
    website: "https://pellabethania.org.br",
    socialMedia: [],
    category: "projetos-sociais",
    foundedYear: 1892,
  },

  // Institutos
  {
    id: "ibdr",
    name: "Instituto Brasileiro de Direito e Religião",
    description: "O IBDR surge da necessidade de se preencher uma lacuna no cenário acadêmico brasileiro, que negligencia a influência da religião, especialmente a cristã, na formação da sociedade e do direito.",
    website: "https://www.ibdr.org.br",
    socialMedia: [],
    category: "organizacoes-paraeclesiasticas",
  },
  {
    id: "csntm",
    name: "Centro para o Estudo de Manuscritos do Novo Testamento",
    description: "O CSNTM dedica-se à preservação do texto e dos manuscritos do Novo Testamento, rastreando sua história ao longo dos séculos.",
    website: "https://www.csntm.org",
    socialMedia: [],
    category: "revistas-academicas",
  },

  // Missões
  {
    id: "sepal",
    name: "SEPAL",
    description: "Organização missionária focada no desenvolvimento de liderança e plantio de igrejas.",
    website: "",
    socialMedia: [],
    category: "organizacoes-paraeclesiasticas",
  },
  {
    id: "portas-abertas",
    name: "Portas Abertas",
    description: "Ministério internacional que serve aos cristãos perseguidos ao redor do mundo.",
    website: "",
    socialMedia: [],
    category: "projetos-sociais",
  },

  // Denominações (algumas principais)
  {
    id: "assembleia-deus",
    name: "Assembleia de Deus",
    description: "Uma das maiores denominações pentecostais do Brasil, presente em todo o território nacional.",
    website: "",
    socialMedia: [],
    category: "denominacoes",
  },

  // Livros
  {
    id: "cristianismo-puro-simples",
    name: "Cristianismo Puro e Simples",
    description: "Obra clássica de C.S. Lewis que apresenta os fundamentos da fé cristã de forma clara e acessível.",
    website: "",
    socialMedia: [],
    category: "livros",
    foundedYear: 1952,
  },
  {
    id: "teologia-sistematica-grudem",
    name: "Teologia Sistemática",
    description: "Compêndio completo de Wayne Grudem sobre os principais temas da teologia cristã.",
    website: "",
    socialMedia: [],
    category: "livros",
  },

  // Podcasts
  {
    id: "dois-dedos-teologia",
    name: "Dois Dedos de Teologia",
    description: "Podcast que aborda temas teológicos de forma acessível e profunda.",
    website: "",
    socialMedia: [],
    category: "podcasts",
  },
  {
    id: "biblia-podcast",
    name: "Bíblia Podcast",
    description: "Estudos bíblicos e reflexões para crescimento espiritual diário.",
    website: "",
    socialMedia: [],
    category: "podcasts",
  },
];