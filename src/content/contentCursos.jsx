import imgCurso1 from "../assets/imgs/hero/cursoHero1.webp";
import imgCurso3 from "../assets/imgs/hero/cursoHero2.webp";
import imgCurso2 from "../assets/imgs/hero/cursoHero3.webp";
import imgCursoAnterior1 from "../assets/imgs/hero/cursoAnteriorHero1.webp";
import imgCursoAnterior2 from "../assets/imgs/hero/cursoAnteriorHero2.webp";
import imgCursoAnterior3 from "../assets/imgs/hero/cursoAnteriorHero3.webp";
import bgImg from "../assets/imgs/hero/bgHeroLp01.webp";



const landingPageInfos = {
  about: {
    //trazer todo conteúdo do about
  },
  whyUs: {
    //trazer todo conteúdo do whyUs
  },
  footer: {
    //trazer todo conteúdo do footer
  },
};

const cursosDataBase = {
  curso: {
    curso1: {
      id: "001",
      nome: "Primeiro Curso",
      data: "22/04/2025 - 15h",
      hora: "A_Definir",
      titulo: "Improbidade e Controle de Contas",
      subtitulo: "Garanta a transparência e evite irregularidades financeiras.",
      status: "A_Definir", //realizado ou futuro
      rota: "/curso-improbidade-22-04", // (/rota)
      imgs: {
        imgCard: { imgCurso1 }, //img do card
        imgHero: bgImg,
      },
      labelButton: "Saiba mais",
      landingPage: {
        programacao: {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-id-card"
            >
              <path d="M16 10h2" />
              <path d="M16 14h2" />
              <path d="M6.17 15a3 3 0 0 1 5.66 0" />
              <circle cx="9" cy="11" r="2" />
              <rect x="2" y="5" width="20" height="14" rx="2" />
            </svg>
          ),
          titulo: (
            <h1>
              <span className="opacity-100 text-primary text-paragraph5">
                Dia 22/04 – Recepção e Credenciamento
              </span>{" "}
            </h1>
          ),
          subtitulo: (
            <p>
              <strong>15:00 às 17:00</strong>
              <br />- Credenciamento e confirmação de inscrições <br /> -
              Networking inicial com participantes
            </p>
          ),
        },
        inscricao: {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-plane"
            >
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
            </svg>
          ),
          title: "Acadêmicos de universidades e faculdades",
          valor: "R$200,00",
          buttonLabel: "Inscrever-se",
        },
      },
    },
    curso2: {
      id: "002",
      nome: "Primeiro Curso",
      data: "29/05/2025 - 15h",
      hora: "A_Definir",
      titulo: "A integração dos poderes na Gestão Pública",
      subtitulo: "Fortaleça a governança com colaboração entre os poderes.",
      status: "futuro", //realizado ou futuro
      rota: "A_Definir", // (/rota)
      imgs: {
        imgCard: { imgCurso2 }, //img do card
        imgHero: bgImg,
      },
      labelButton: "Em breve!",
      landingPage: {
        programacao: {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-id-card"
            >
              <path d="M16 10h2" />
              <path d="M16 14h2" />
              <path d="M6.17 15a3 3 0 0 1 5.66 0" />
              <circle cx="9" cy="11" r="2" />
              <rect x="2" y="5" width="20" height="14" rx="2" />
            </svg>
          ),
          titulo: (
            <h1>
              <span className="opacity-100 text-primary text-paragraph5">
                Dia 22/04 – Recepção e Credenciamento
              </span>{" "}
            </h1>
          ),
          subtitulo: (
            <p>
              <strong>15:00 às 17:00</strong>
              <br />- Credenciamento e confirmação de inscrições <br /> -
              Networking inicial com participantes
            </p>
          ),
        },
        inscricao: {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-plane"
            >
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
            </svg>
          ),
          title: "Acadêmicos de universidades e faculdades",
          valor: "R$200,00",
          buttonLabel: "Inscrever-se",
        },
      },
    },
    curso3: {
      id: "003",
      nome: "Licitações e Contratação",
      data: "13/05/2025 - 15h",
      hora: "A_Definir",
      titulo: "A integração dos poderes na Gestão Pública",
      subtitulo: "Garanta eficiência e legalidade nas contratações públicas.",
      status: "futuro", //realizado ou futuro
      rota: "A_Definir", // (/rota)
      imgs: {
        imgCard: { imgCurso3 }, //img do card
        imgHero: bgImg,
      },
      labelButton: "Em breve!",
      landingPage: {
        programacao: {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-id-card"
            >
              <path d="M16 10h2" />
              <path d="M16 14h2" />
              <path d="M6.17 15a3 3 0 0 1 5.66 0" />
              <circle cx="9" cy="11" r="2" />
              <rect x="2" y="5" width="20" height="14" rx="2" />
            </svg>
          ),
          titulo: (
            <h1>
              <span className="opacity-100 text-primary text-paragraph5">
                Dia 22/04 – Recepção e Credenciamento
              </span>{" "}
            </h1>
          ),
          subtitulo: (
            <p>
              <strong>15:00 às 17:00</strong>
              <br />- Credenciamento e confirmação de inscrições <br /> -
              Networking inicial com participantes
            </p>
          ),
        },
        inscricao: {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-plane"
            >
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
            </svg>
          ),
          title: "Acadêmicos de universidades e faculdades",
          valor: "R$200,00",
          buttonLabel: "Inscrever-se",
        },
      },
    },
    curso4: {
      id: "004",
      nome: "A_Definir",
      data: "A_Definir",
      hora: "A_Definir",
      titulo: "A_Definir",
      subtitulo: "A_Definir",
      status: "A_Definir", //realizado ou futuro
      rota: "A_Definir", // (/rota)
      imgs: {
        imgCard: { imgCurso3 }, //img do card
        imgHero: bgImg,
      },
      labelButton: "Em breve!",
      landingPage: {
        programacao: {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-id-card"
            >
              <path d="M16 10h2" />
              <path d="M16 14h2" />
              <path d="M6.17 15a3 3 0 0 1 5.66 0" />
              <circle cx="9" cy="11" r="2" />
              <rect x="2" y="5" width="20" height="14" rx="2" />
            </svg>
          ),
          titulo: (
            <h1>
              <span className="opacity-100 text-primary text-paragraph5">
                Dia 22/04 – Recepção e Credenciamento
              </span>{" "}
            </h1>
          ),
          subtitulo: (
            <p>
              <strong>15:00 às 17:00</strong>
              <br />- Credenciamento e confirmação de inscrições <br /> -
              Networking inicial com participantes
            </p>
          ),
        },
        inscricao: {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-plane"
            >
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
            </svg>
          ),
          title: "Acadêmicos de universidades e faculdades",
          valor: "R$200,00",
          buttonLabel: "Inscrever-se",
        },
      },
    },
  },
};

export { cursosDataBase, landingPageInfos };
