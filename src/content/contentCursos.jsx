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
        inscricao: {},
      },
    },
    curso2: {
      id: "002",
      nome: "Segundo Curso",
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
    },
    curso3: {
      id: "003",
      nome: "Terceiro Curso",
      data: "13/05/2025 - 15h",
      hora: "A_Definir",
      titulo: "Licitações e Contratação",
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
  },
  landingPage: {
    programacao: {
      card1: {
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
        titulo: "Dia 22/04 – Recepção e Credenciamento",
        subtitulo: (
          <p>
            <strong>15:00 às 17:00</strong>
            <br />- Credenciamento e confirmação de inscrições <br /> -
            Networking inicial com participantes
          </p>
        ),
      },
      card2: {
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
            class="lucide lucide-notebook-pen"
          >
            <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" />
            <path d="M2 6h4" />
            <path d="M2 10h4" />
            <path d="M2 14h4" />
            <path d="M2 18h4" />
            <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
          </svg>
        ),
        titulo: "Dia 23/04 – Improbidade e Controle Fiscal",
        subtitulo: (
          <p>
            <strong>09:00 às 12:00 – Abertura</strong> <br /> - Entrega de
            material <br /> - Apresentação dos temas
            <br /> <br />
            <strong>14:00 às 17:00 – Aula</strong>
            <br />- Nova Lei de Improbidade Administrativa <br /> - Atos de
            improbidade e controle fiscal <br /> - Orientações jurídicas para o
            controle de contas e atos
            <br />
            <br /> <strong>15:30 - Coffee Break</strong>
          </p>
        ),
      },
      card3: {
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
            class="lucide lucide-notebook-pen"
          >
            <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" />
            <path d="M2 6h4" />
            <path d="M2 10h4" />
            <path d="M2 14h4" />
            <path d="M2 18h4" />
            <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
          </svg>
        ),
        titulo: " Dia 24/04 – Procedimentos e Licitações",
        subtitulo: (
          <p>
            <strong>09:00 às 12:00 – Aula</strong>
            <br /> - Diferenças na prestação de contas
            <br />
            - Transparência em procedimentos administrativos
            <br /> - Prevenção ao abuso de poder e fraudes
            <br />
            <br /> <strong>14:00 às 17:00 – Aula</strong>
            <br />- Limites da dispensa de licitação
            <br />- Métodos de contratação preventiva
            <br />- Exemplos práticos para evitar erros
            <br />
            <br /> <strong>15:30 - Coffee Break</strong>
          </p>
        ),
      },
      card4: {
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
            class="lucide lucide-file-badge"
          >
            <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path d="M7 16.5 8 22l-3-1-3 1 1-5.5" />
          </svg>
        ),
        titulo: "Dia 25/04 – Encerramento e Certificação",
        subtitulo: (
          <p>
            <strong>09:00 às 12:00</strong>
            <br />
            <br /> - Debate e esclarecimento de dúvidas
            <br /> - Entrega de certificados
          </p>
        ),
      },
    },
  },
  inscricao: {
    card1: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-corner-down-right"
        >
          <polyline points="15 10 20 15 15 20" />
          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
        </svg>
      ),
      title: "Acadêmicos de universidades e faculdades",
      valor: "R$200,00",
      buttonLabel: "Inscrever-se",
    },
    card2: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-corner-down-right"
        >
          <polyline points="15 10 20 15 15 20" />
          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
        </svg>
      ),
      title: "Profissionais do Direito e da iniciativa privada",
      valor: "R$400,00",
      buttonLabel: "Inscrever-se",
    },
    card3: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-corner-down-right"
        >
          <polyline points="15 10 20 15 15 20" />
          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
        </svg>
      ),
      title: "Servidores Públicos / Agentes Políticos",
      valor: "R$2.500,00",
      buttonLabel: "Inscrever-se",
    },
    paragrafoRodape: (
      <p>
        {" "}
        Nossa empresa está em total conformidade com a Lei Geral de Proteção de
        Dados (LGPD). Para garantir a segurança e a privacidade das suas
        informações, a confirmação de inscrição será realizada exclusivamente
        por e-mail e/ou WhatsApp, após o envio do formulário preenchido. <br />{" "}
        <br /> Pedimos que complete o formulário de maneira detalhada para que
        nossa equipe possa entrar em contato e concluir sua inscrição. A Nota
        Fiscal Eletrônica (NFe) será emitida em até 1 (um) dia útil após a
        confirmação do pagamento. Assim que a NFe for gerada, ela será
        encaminhada para o e-mail cadastrado no formulário de inscrição.
      </p>
    ),
  },
};

export { cursosDataBase, landingPageInfos };
