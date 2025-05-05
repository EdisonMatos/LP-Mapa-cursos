import imgCurso1 from "../assets/imgs/hero/cursoHero1.webp";
import imgCurso3 from "../assets/imgs/hero/cursoHero2.webp";
import imgCurso2 from "../assets/imgs/hero/cursoHero3.webp";

import imgCursoAnterior1 from "../assets/imgs/hero/cursoAnteriorHero1.webp";
import imgCursoAnterior2 from "../assets/imgs/hero/cursoAnteriorHero2.webp";
import imgCursoAnterior3 from "../assets/imgs/hero/cursoAnteriorHero3.webp";

const contentCursos = {
  texts: {
    proximosCursos: {
      miniTag: "Cursos",
      title: "Próximos Cursos",
      subtitle:
        "Acompanhe nossa agenda de cursos para não perder nenhuma oportunidade",
      card1: {
        imageUrl: imgCurso1,
        date: "22/04/2025 - 15h",
        title: "Improbidade e Controle de Contas",
        description:
          "Garanta a transparência e evite irregularidades financeiras.",
      },
      card2: {
        imageUrl: imgCurso2,
        date: "29/05/2025 - 15h",
        title: "A integração dos poderes na Gestão Pública",
        description: "Fortaleça a governança com colaboração entre os poderes.",
      },
      card3: {
        imageUrl: imgCurso3,
        date: "29/05/2025 - 15h",
        title: "Licitações e Contratação",
        description:
          "Garanta eficiência e legalidade nas contratações públicas.",
      },
    },

    cursosMinistrados: {
      miniTag: "Cursos Anteriores",
      title: "Cursos Ministrados",
      subtitle:
        "Saiba quais cursos tivemos em nossa unidade de cursos para não perder nenhuma oportunidade.",
      card1: {
        imageUrl: imgCursoAnterior1,
        title: "STF, Prefeituras e Câmaras",
        date: "04 de dezembro de 2024",
        description:
          "Os reflexos e os efeitos das decisões do Judiciário no Executivo e no Legislativo no encerramento de mandato.",
      },
      card2: {
        imageUrl: imgCursoAnterior2,
        title: "Atividade Parlamentar",
        date: "26 de junho de 2024",
        description:
          "Estrutura da Administração Pública e a fiscalização do Legislativo.",
      },
      card3: {
        imageUrl: imgCursoAnterior3,
        title: "A Escola e o Conselho Tutelar",
        date: "Fevereiro de 2025",
        description:
          "Um elo de integração na rede de proteção e garantia de direitos da criança e do adolescente.",
      },
    },
  },
};

export default contentCursos;
