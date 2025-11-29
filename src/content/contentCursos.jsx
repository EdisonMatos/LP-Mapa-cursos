import imgCurso1 from "../assets/imgs/cursos/curso1.webp";
import imgCurso2 from "../assets/imgs/cursos/curso2.webp";
import imgCurso3 from "../assets/imgs/cursos/curso3.webp";
import imgCursoAnterior1 from "../assets/imgs/cursos/cursoAnteriorHero1.webp";
import imgCursoAnterior2 from "../assets/imgs/cursos/cursoAnteriorHero2.webp";
import imgCursoAnterior3 from "../assets/imgs/cursos/cursoAnteriorHero3.webp";
import bgImg from "../assets/imgs/hero/bgHeroLp01.webp";
import logo from "../assets/imgs/logo/logo.png";
import content, { infos } from "./content";

const currentYear = new Date().getFullYear();

const landingPageInfos = {
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
  footer: {
    copyrightLine: `© ${currentYear} ${infos.name}. Todos os direitos reservados.`,
    disclaimer: `Este site não é um produto Meta Platforms, Inc., Google LLC, tampouco oferece serviços públicos oficiais. ${infos.name} oferece serviços jurídicos privativos de advogado, de acordo com a legislação vigente e o Código de Ética e Disciplina da Ordem dos Advogados do Brasil.`,
  },
};

const cursosDataBase = {
  curso: {
    proximos: [
      {
        id: "001",
        nome: "Primeiro Curso",
        data: "05 a 07 de Novembro de 2025",
        hora: "",
        titulo: "Liderança e Alta Performance no Setor Público",
        subtitulo:
          "Ferramentas práticas para gestores que querem motivar equipes, melhorar entregas e revolucionar a cultura organizacional.",
        status: "A_Definir",
        rota: content.texts.links.ctaWhatsappCurso,
        imgs: {
          imgCard: imgCurso1,
          imgHero: bgImg,
        },
        labelButton: "Inscreva-se agora!",
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
                </span>
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
      {
        id: "002",
        nome: "Segundo Curso",
        data: "12 a 14 de Novembro de 2025",
        hora: "",
        titulo: "Compras Governamentais Inteligentes",
        subtitulo:
          "Do planejamento ao pregão: reduza riscos, aumente a eficiência e economize recursos públicos com segurança jurídica.",
        status: "ativo",
        rota: content.texts.links.ctaWhatsappCurso,
        imgs: {
          imgCard: imgCurso2,
          imgHero: bgImg,
        },
        labelButton: "Inscreva-se agora!",
      },
      {
        id: "003",
        nome: "Terceiro Curso",
        data: "26 a 28 de Novembro de 2025",
        hora: "",
        titulo: "Gestão Pública Estratégica para Pequenos Municípios",
        subtitulo:
          "Como planejar, executar e transformar políticas públicas mesmo com equipe enxuta e orçamento limitado.",
        status: "ativo",
        rota: content.texts.links.ctaWhatsappCurso,
        imgs: {
          imgCard: imgCurso3,
          imgHero: bgImg,
        },
        labelButton: "Inscreva-se agora!",
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
                </span>
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
    ],
    ministrados: [
      {
        id: "001",
        data: "15 a 17 de Outubro de 2025",
        hora: "",
        titulo: "Prefeituras: Concurso público e PSS",
        subtitulo:
          "O estudo preliminar e os critérios legais para abertura dos procedimentos de contratação de funcionários.",
        status: "A_Definir",
        rota: content.texts.links.ctaWhatsappCurso,
        imgs: {
          imgCard: imgCursoAnterior1,
          imgHero: bgImg,
        },
        labelButton: "Inscreva-se agora!",
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
                </span>
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
      {
        id: "002",
        data: "22 a 24 de Outubro de 2025",
        hora: "",
        titulo: "Violência nas escolas: Desafios pedagógicos",
        subtitulo:
          "A condução da gestão de crise e soluções para problemas de segurança pública que envolvam crianças e adolescentes na rede municipal.",
        status: "ativo",
        rota: content.texts.links.ctaWhatsappCurso,
        imgs: {
          imgCard: imgCursoAnterior2,
          imgHero: bgImg,
        },
        labelButton: "Inscreva-se agora!",
      },
      {
        id: "003",
        data: "29 a 31 de Outubro de 2025",
        hora: "",
        titulo: "Reformas administrativas municipais",
        subtitulo:
          "A necessidade de atualização do ordenamento jurídico municipal diante dos avanços tecnológicos dos ambientes de trabalho e da gestão de serviços públicos.",
        status: "ativo",
        rota: content.texts.links.ctaWhatsappCurso,
        imgs: {
          imgCard: imgCursoAnterior3,
          imgHero: bgImg,
        },
        labelButton: "Inscreva-se agora!",
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
                </span>
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
    ],
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
