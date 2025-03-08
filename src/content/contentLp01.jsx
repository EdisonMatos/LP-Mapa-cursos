import bgImg from "../assets/imgs/hero/bgHeroLp01.webp";
import logo from "../assets/imgs/logo/logo.png";
import { infos } from "./content";

const currentYear = new Date().getFullYear();

const contentLp01 = {
  infos: {
    title:
      "Mapa Cursos - Curso de Improbidade e Controle de Contas - Cascavel PR",
    description:
      "Aprenda com os melhores profissionais da gestão pública no Curso de Improbidade e Controle de Contas. Aulas práticas e teóricas em Cascavel, PR.",
    keywords:
      "Curso de Improbidade Administrativa, Curso de Controle de Contas, Curso de Gestão Pública Cascavel, Capacitação em Improbidade Administrativa, Curso de Direito Administrativo Cascavel, Curso de Administração Pública, Improbidade e Controle de Contas, Curso de Administração Pública PR, Formação em Gestão Pública, Capacitação para Servidores Públicos, Curso para Servidores Públicos, Curso de Direito Eleitoral, Curso de Direito Constitucional, Curso de Governança Pública, Dhiego Bernardo Alves, Mapa Cursos, Curso para Advogados, Curso de Direito Cascavel, Aperfeiçoamento em Improbidade Administrativa, Formação para Profissionais do Direito.",
  },
  hero: {
    bgImg: bgImg,
    logo: {
      logoImg: logo,
      alt: "Logomarca",
    },
    textArea: {
      title: (
        <h1>
          <span className="bg-black/60 p-[10px] rounded-lg text-white text-title1">
            {" "}
            De 22 a 24 de Abril de 2025
          </span>
          <br />
          Improbidade Administrativa e Controle de Contas
        </h1>
      ),
      subtitle:
        "Seu primeiro ano de exercício pode definir toda a sua carreira. Domine as regras, evite erros fatais e proteja sua trajetória profissional!",
      ctaButtonAriaLabel: "Garantir minha vaga agora!",
    },
  },
  features: {
    sectionHeader: {
      miniTag: "PROGRAMAÇÃO DO CURSO",
      title: "Cada aula um passo para blindar sua carreira contra erros fatais",
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
              Dia 22/04
            </span>{" "}
            <br></br>
            Recepção e Credenciamento
          </h1>
        ),
        description: (
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
        title: (
          <h1>
            <span className="opacity-100 text-primary text-paragraph5">
              Dia 23/04
            </span>{" "}
            <br></br>
            Improbidade e Controle Fiscal
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
              Dia 24/04
            </span>{" "}
            <br></br>
            Procedimentos e Licitações
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
            <br /> <strong>17:00 – Coffee-break</strong>
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
              Dia 25/04
            </span>{" "}
            <br></br>
            Encerramento e Certificação
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
  },
  about: {
    bgImg: bgImg,
    logo: {
      logoImg: logo,
      alt: "Logomarca",
    },
    sectionHeader: {
      miniTag: "GESTÃO COM QUEM ENTENDE",
      title:
        "A capacitação que separa profissionais comuns de referências na gestão pública",
    },
    paragraph: (
      <p>
        No setor público, erro não é opção. O Mapa Cursos nasceu para
        transformar agentes públicos em especialistas prontos para enfrentar os
        desafios da administração. São anos de experiência preparando
        servidores, vereadores, prefeitos e assessores com conhecimento real,
        direto ao ponto e aplicável no dia a dia da gestão. Aqui, você não
        aprende teoria vazia, aprende a dominar as regras do jogo e evitar
        armadilhas que podem custar sua carreira.
      </p>
    ),
    buttonLabel: "Quero falar com um especialista",
    ctaButtonAriaLabel: "Fortaleça sua atuação na gestão pública.",
  },
  whyUs: {
    sectionHeader: {
      miniTag: "O ESPECIALISTA EM AÇÃO",
      title: "Aprenda com quem já transformou a Gestão Pública",
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
            class="lucide lucide-graduation-cap"
          >
            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
            <path d="M22 10v6" />
            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
          </svg>
        ),
        title: "Formação acadêmica e experiência jurídica",
        description:
          "Bacharel em Direito pela UDC Cataratas, com mais de 40 processos de cassação eleitoral no Paraná. Dhiego Alves tem a experiência necessária para ensinar o que realmente importa na gestão pública.",
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
            class="lucide lucide-vote"
          >
            <path d="m9 12 2 2 4-4" />
            <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
            <path d="M22 19H2" />
          </svg>
        ),
        title: "Especializações que fazem a diferença",
        description:
          "Pós-graduado em Controle de Constitucionalidade e Direito Eleitoral, Dhiego é especialista em áreas essenciais para quem atua na administração pública e quer evitar falhas jurídicas.",
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
            class="lucide lucide-lightbulb"
          >
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
          </svg>
        ),
        title: "Experiência em assessoria eleitoral",
        description:
          "Assessor jurídico eleitoral com experiência prática em cassações eleitorais, Dhiego Alves traz a vivência necessária para a aplicação real dos conceitos no campo da gestão pública.",
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
            class="lucide lucide-users"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
        title: "Líder pedagógico do Mapa Cursos",
        description:
          "Como coordenador pedagógico do Mapa Cursos, Dhiego Alves aplica seu vasto conhecimento para transformar a capacitação de agentes públicos, preparando-os para os desafios reais da administração.",
      },
    },
  },
  cta: {
    bgImg: bgImg,
    sectionHeader: {
      miniTag: "NÃO ESPERE MAIS",
      title: "Garanta sua indenização agora mesmo!",
      subtitle: `Se seu voo foi cancelado ou sofreu um grande atraso, você pode ter direito a uma indenização. Nossa equipe especializada está pronta para oferecer toda a orientação necessária para que você receba a compensação que merece. Não deixe que a burocracia impeça você de buscar seus direitos!`,
    },
    buttonLabel: "Quero falar com um especialista",
    ctaButtonAriaLabel: "Botão para chamada de ação para contato pelo whatsapp",
  },
  contact: {
    card1: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-linkedin"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      title: "LinkedIn",
      description: `@${infos.linkeDinProfile}`,
    },
    card2: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-mail"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      title: "Email",
      description: `${infos.email}@${infos.domain}`,
    },
    card3: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      ),
      title: "Whatsapp",
      description: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart}`,
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
        title: "Servidores Públicos",
        valor: "R$1.800,00",
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
  },
  footer: {
    copyrightLine: `© ${currentYear} ${infos.name}. Todos os direitos reservados.`,
    disclaimer: `Este site não é um produto Meta Platforms, Inc., Google LLC, tampouco oferece serviços públicos oficiais. ${infos.name} oferece serviços jurídicos privativos de advogado, de acordo com a legislação vigente e o Código de Ética e Disciplina da Ordem dos Advogados do Brasil.`,
  },
  links: {
    instagram: `https://www.instagram.com/${infos.instagramProfile}/`,
    ctaWhatsapp: `https://wa.me/+55${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}?text=${infos.whatsappDefaultMessage}`,
  },
};

export default contentLp01;
