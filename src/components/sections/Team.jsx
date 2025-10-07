import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import TeamMember from "../cards/TeamMember";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function Team() {
  return (
    <SectionArea className="bg-bgSectionDark" paddingtop={false} id="team">
      <SectionHeader
        className="text-center"
        miniTitle={content.texts.team.minitag}
        sectionHeaderTitle={content.texts.team.title}
        sectionHeaderSubtitle={content.texts.team.subtitle}
        titleColorSet="text-white"
        subtitleColorSet="text-white"
      />

      <SectionWrapper className="flex justify-center">
        <MotionDivDownToUp>
          <div className="flex flex-col gap-[20px] tablet1:flex-wrap justify-evenly tablet1:items-start tablet1:gap-[20px]">
            <div className="flex flex-wrap justify-center gap-6 items-start">
              <TeamMember
                img={content.texts.team.members.member1.img.img}
                alt={content.texts.team.members.member1.img.alt}
                name={content.texts.team.members.member1.name}
                role={content.texts.team.members.member1.role}
                modalTitle={content.texts.team.members.member1.name}
                modalContent={
                  <p>
                    Advogado atuante em mais de 40 processos de responsabilidade
                    administrativa e eleitoral em diversas comarcas do Paraná,
                    com especialidade em Direito Eleitoral e experiência sólida
                    em ações de investigação judicial eleitoral (AIJE), ações de
                    impugnação de mandato eletivo (AIME), representações
                    eleitorais e ainda em defesas de processos administrativos
                    disciplinares, 12 anos de experiência em advocacia eleitoral
                    e política, com atuação direta em campanhas eleitorais
                    municipais e estaduais.
                    <br />
                    <br />
                    Sócio fundador do escritório de advocacia Alves Advogados,
                    com sede em Maringá/PR; Especialista em Controle de
                    Constitucionalidade, com atuação direta no Supremo Tribunal
                    Federal (STF); atuou no processo, de 2016, que resultou na
                    declaração de inconstitucionalidade de dispositivo do
                    estatuto do servidor de Foz do Iguaçu/PR.
                    <br />
                    <br />
                    Fundador e Coordenador do Mapa Instituto, com sede em
                    Cascavel/PR, instituição voltada à formação e capacitação
                    por cursos, palestras e workshops sobre Direito
                    Constitucional, Eleitoral e Administrativo, abrangendo temas
                    de abuso de poder político, improbidade, processo
                    legislativo e responsabilidade de agentes políticos;
                    especialista e docente em contratações diretas, de dispensa
                    e inexigibilidade de licitação.
                  </p>
                }
              />
              <TeamMember
                img={content.texts.team.members.member2.img.img}
                alt={content.texts.team.members.member2.img.alt}
                name={content.texts.team.members.member2.name}
                role={content.texts.team.members.member2.role}
                modalTitle={content.texts.team.members.member2.name}
                modalContent={
                  <p>
                    Formada em Direito, Ciências Biológicas, Letras/Literatura e
                    Marketing. Especialista em Segurança Pública e Gestão em
                    Políticas Públicas. Professora concursada da rede Estadual
                    de ensino (SEED) durante 30 anos.
                    <br />
                    <br />
                    Foi Presidente do Provopar e do Conselho de Direitos das
                    crianças e adolescentes, em Foz do Iguaçu/PR. Foi Presidente
                    do Conselho da Mulher, em Foz do Iguaçu/PR. Foi Diretora dos
                    colégios estaduais Monsenhor Guilherme e Almirante
                    Tamandaré, em Foz do Iguaçu/PR.
                    <br />
                    <br />
                    Professora da Unidade Educacional do Centro socioeducativo
                    adolescente infrator CENSE, em Cascavel/PR. Vereadora por
                    dois mandatos eletivos em Céu Azul/PR, sendo, em 2020, a
                    primeira mulher reeleita na história da cidade Policial
                    Civil da 15 Subdivisão Policial de Cascavel/PR e 21 anos de
                    atuação na Delegacia da Mulher e no DENARC/Cascavel,
                    Departamento de repressão ao narcotráfico.
                  </p>
                }
              />
              <TeamMember
                img={content.texts.team.members.member3.img.img}
                alt={content.texts.team.members.member3.img.alt}
                name={content.texts.team.members.member3.name}
                role={content.texts.team.members.member3.role}
                modalTitle={content.texts.team.members.member3.name}
                modalContent={
                  <p>
                    Advogado. Pós-graduação em Direito do Estado pela
                    Universidade Estadual de Londrina (UEL); Mestrado em
                    Sociedade, Cultura e Fronteiras na Universidade Estadual do
                    Oeste do Paraná (UNIOESTE); Secretário Municipal de Direitos
                    Humanos da Prefeitura de Foz do Iguaçu em 2023.
                    <br />
                    <br />
                    Diretor Superintendente do Instituto de habitação do Foz do
                    Iguaçu/PR (FOZHABITA) de 2023 a 2024; Liderança em projetos
                    de habitação de interesse social e regularização fundiária
                    (Reurb) Gestão e execução de convênios como: Fundo de
                    Arrendamento Residencial (FAR).
                    <br />
                    <br />
                    Liderou a criação de 516 unidades habitacionais aprovadas e
                    contratadas; Conduziu o Convênio com a Itaipu Binacional –
                    Projeto Moradias (254 unidades habitacionais) Programa
                    Pró-Moradia (FGTS).
                  </p>
                }
              />
              <TeamMember
                img={content.texts.team.members.member4.img.img}
                alt={content.texts.team.members.member4.img.alt}
                name={content.texts.team.members.member4.name}
                role={content.texts.team.members.member4.role}
                modalTitle={content.texts.team.members.member4.name}
                modalContent={
                  <p>
                    Doutor em Letras - Literatura Comparada, Área de
                    Concentração Linguagem e Sociedade - 2018 (Unioeste -
                    Universidade Estadual do Oeste do Paraná), Mestre em Letras
                    - Linguagem e Sociedade (Unioeste - 2009). Especialização em
                    Língua, Literatura e Ensino (Unioeste - 1999) e Graduação em
                    Letras Português/Inglês (Unioeste - 1996).
                    <br />
                    <br />
                    Professor da UDC - Medianeira - Faculdade Educacional de
                    Medianeira (2012-2018). Professor e Diretor da Faculdade
                    Educacional de Matelândia - FAMA (2009-2012). Professor
                    titular da Faculdade de Ciências Aplicadas de Cascavel
                    (2003-2008). Diretor Fundador e Repórter do Jornal O
                    Panorama (1992-2002).
                    <br />
                    <br />
                    Assessor Pedagógico do Programa "A União Faz a Vida"
                    (Fundação Sicredi 2014-2022). Atualmente é Professor
                    Estatutário da SEED-PR atuando como Docente no Grupo de
                    Estudos Formadores em Ação e nos Componentes Curriculares de
                    Língua Portuguesa e Língua Inglesa; Diretor da empresa A.
                    LIMA Consultoria. Presidente do IEPOP - Instituto de
                    Educação Popular do Oeste do Paraná.
                    <br />
                    <br />
                    Jornalista - Insc. 0012193/PR e palestrante nas áreas de
                    Educação, Linguagem, Avaliação, Comunicação e Cultura
                    Afro-Brasileira. Tem experiência na área de docência em
                    Letras, Direito, Administração, Comunicação e EAD.
                  </p>
                }
              />
            </div>
          </div>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
