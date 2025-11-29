import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import CardHeroCursos from "../cards/CardHero";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import { cursosDataBase } from "../../content/contentCursos";
import content from "../../content/content";

export default function CursosMinistrados() {
  // pega apenas os ministrados
  const ministradosCursosData = cursosDataBase.curso.ministrados;

  // converte "15 a 17 de Outubro de 2025" → Date
  function getDataInicio(curso) {
    const texto = curso.data;

    const diaInicio = Number(texto.match(/\d{1,2}/)[0]);

    const mesNome = texto.match(
      /Janeiro|Fevereiro|Março|Abril|Maio|Junho|Julho|Agosto|Setembro|Outubro|Novembro|Dezembro/
    )[0];

    const ano = Number(texto.match(/\d{4}/)[0]);

    const meses = {
      Janeiro: 0,
      Fevereiro: 1,
      Março: 2,
      Abril: 3,
      Maio: 4,
      Junho: 5,
      Julho: 6,
      Agosto: 7,
      Setembro: 8,
      Outubro: 9,
      Novembro: 10,
      Dezembro: 11,
    };

    return new Date(ano, meses[mesNome], diaInicio);
  }

  // ordena da data mais antiga para a mais recente
  const ministradosOrdenados = [...ministradosCursosData].sort(
    (a, b) => getDataInicio(a) - getDataInicio(b)
  );

  return (
    <SectionArea className="bg-bgSectionDark">
      <SectionWrapper>
        <SectionHeader
          className="text-center"
          miniTitle={content.texts.cursosMinistrados.miniTag}
          sectionHeaderTitle={content.texts.cursosMinistrados.title}
          sectionHeaderSubtitle={content.texts.cursosMinistrados.subtitle}
        />

        <MotionDivDownToUp>
          <div className="flex flex-wrap justify-center gap-5 w-full">
            {ministradosOrdenados.map((card) => (
              <CardHeroCursos
                key={card.id}
                imageUrl={card.imgs}
                title={card.titulo}
                date={card.data}
                hora={card.hora}
                description={card.subtitulo}
                buttonLink={card.rota}
                labelButton={card.labelButton}
                button={false}
              />
            ))}
          </div>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
