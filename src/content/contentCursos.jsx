import imgCurso1 from "../assets/imgs/hero/cursoHero1.webp";
import imgCurso3 from "../assets/imgs/hero/cursoHero2.webp";
import imgCurso2 from "../assets/imgs/hero/cursoHero3.webp";

const contentCursos = {
  texts: {
    curso1: {
      title: "Improbidade e Controle de Contas",
      date: "22/04/2025 - 15h",
      description:
        "Garanta a transparência e evite irregularidades financeiras.",
      labelButton: "Saiba mais",
      img: { imgCurso1 },
    },
    curso2: {
      title: "A integração dos poderes na Gestão Pública",
      date: "29/05/2025 - 15h",
      description: "Fortaleça a governança com colaboração entre os poderes.",
      labelButton: "Em breve!",
      img: { imgCurso2 },
    },
    curso3: {
      title: "Licitações e Contratação",
      date: "13/05/2025 - 15h",
      description: "Garanta eficiência e legalidade nas contratações públicas.",
      labelButton: "Em breve!",
      img: { imgCurso3 },
    },
  },
};

export default contentCursos;

//  imageUrl={imgCurso1}
//                     title={content.texts.proximosCursos.card1.title}
//                     date={content.texts.features.card1.date}
//                     description={content.texts.proximosCursos.card1.description}
//                     labelButton="Saiba mais"
