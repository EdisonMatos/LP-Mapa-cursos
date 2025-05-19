import imgCurso1 from "../assets/imgs/hero/cursoHero1.webp";
import imgCurso3 from "../assets/imgs/hero/cursoHero2.webp";
import imgCurso2 from "../assets/imgs/hero/cursoHero3.webp";
import imgCursoAnterior1 from "../assets/imgs/hero/cursoAnteriorHero1.webp";
import imgCursoAnterior2 from "../assets/imgs/hero/cursoAnteriorHero2.webp";
import imgCursoAnterior3 from "../assets/imgs/hero/cursoAnteriorHero3.webp";

const contentCursos = {
  proximosCursos: {
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
  cursosMinistrados: {
    curso1: {
      title: "STF, Prefeituras e Câmaras",
      date: "04 de dezembro de 2024",
      description:
        "Os reflexos e os efeitos das decisões do Judiciário no Executivo e no Legislativo no encerramento de mandato.",
      img: { imgCursoAnterior1 },
    },
    curso2: {
      title: "Atividade Parlamentar",
      date: "26 de junho de 2024",
      description:
        "Estrutura  daAdministração Pública e a fiscalização do Legislativo.",
      img: { imgCursoAnterior2 },
    },
    curso3: {
      title: "A Escola e o Conselho Tutelar",
      date: "Fevereiro de 2025",
      description:
        "Um elo de integração na rede de proteção e garantia de direitos da criança e do adolescente.",
      img: { imgCursoAnterior3 },
    },
  },
  cursosProgramados: {
    sectionHeader: {
      miniTag: "PROGRAMAÇÃO DO CURSO",
      title: "Cada aula um passo para blindar sua carreira contra erros fatais",
    },
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
      title: (
        <h1>
          <span className="opacity-100 text-primary text-paragraph5">
            Dia 22/04 – Recepção e Credenciamento
          </span>{" "}
        </h1>
      ),
      description: (
        <p>
          <strong>15:00 às 17:00</strong>
          <br />- Credenciamento e confirmação de inscrições <br /> - Networking
          inicial com participantes
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
      title: (
        <h1>
          <span className="opacity-100 text-primary text-paragraph5">
            Dia 23/04 – Improbidade e Controle Fiscal
          </span>{" "}
        </h1>
      ),
      description: (
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
      title: (
        <h1>
          <span className="opacity-100 text-primary text-paragraph5">
            Dia 24/04 – Procedimentos e Licitações
          </span>{" "}
        </h1>
      ),
      description: (
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
      title: (
        <h1>
          <span className="opacity-100 text-primary text-paragraph5">
            Dia 25/04 – Encerramento e Certificação
          </span>{" "}
        </h1>
      ),
      description: (
        <p>
          <strong>09:00 às 12:00</strong>
          <br />
          <br /> - Debate e esclarecimento de dúvidas
          <br /> - Entrega de certificados
        </p>
      ),
    },
  },
  subscription: {
    sectionHeader: {
      miniTag: "INSCREVA-SE AGORA",
      title: "Não perca a chance de transformar sua carreira",
      subtitle:
        "Garanta sua vaga e aprenda com quem realmente entende de gestão pública.",
    },
    cards: {
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
            class="lucide lucide-plane"
          >
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
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
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-clock-alert"
          >
            <path d="M12 6v6l4 2" />
            <path d="M16 21.16a10 10 0 1 1 5-13.516" />
            <path d="M20 11.5v6" />
            <path d="M20 21.5h.01" />
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
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-siren"
          >
            <path d="M7 18v-6a5 5 0 1 1 10 0v6" />
            <path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" />
            <path d="M21 12h1" />
            <path d="M18.5 4.5 18 5" />
            <path d="M2 12h1" />
            <path d="M12 2v1" />
            <path d="m4.929 4.929.707.707" />
            <path d="M12 12v6" />
          </svg>
        ),
        title: "Servidores Públicos / Agentes Políticos",
        valor: "R$2.500,00",
        buttonLabel: "Inscrever-se",
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
            class="lucide lucide-triangle-alert"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
        ),
        title: "Dia 21/03 – Encerramento e Certificação",
        description: "",
      },
    },
    paragraphs: (
      <p className="text-white text-paragraph2 desktop2:text-paragraph4 mt-[26px] tablet1:mt-[40px] desktop1:mt-[72px] text-center">
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

export default contentCursos;
