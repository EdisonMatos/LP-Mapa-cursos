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
            <div className="flex flex-wrap items-start justify-center gap-6">
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
            </div>
          </div>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
