import MotionDivDownToUp from '../animation/MotionDivDownToUp'
import CardHeroCursos from '../cards/CardHero'
import SectionArea from '../sectionElements/SectionArea'
import SectionHeader from '../sectionElements/SectionHeader'
import SectionWrapper from '../sectionElements/SectionWrapper'
import { cursosDataBase } from '../../content/contentCursos'
import content from '../../content/content'

export default function ProximosCursos() {
  const proximos = cursosDataBase.curso.proximos
  const ministrados = cursosDataBase.curso.ministrados

  // função que converte data para Date
  function getDataInicio(curso) {
    const texto = curso.data || ''
    const dia = Number(texto.match(/\d{1,2}/)?.[0] || 1)
    const mesNome = texto.match(
      /Janeiro|Fevereiro|Março|Abril|Maio|Junho|Julho|Agosto|Setembro|Outubro|Novembro|Dezembro/,
    )?.[0]
    const ano = Number(texto.match(/\d{4}/)?.[0] || new Date().getFullYear())

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
    }

    return new Date(ano, meses[mesNome] ?? 0, dia)
  }

  // data atual
  const hoje = new Date()

  // ordena próximos por data
  proximos.sort((a, b) => getDataInicio(a) - getDataInicio(b))

  // enquanto houver mais de 3, remove o curso mais antigo que seja **antes da data atual**
  while (proximos.length > 3) {
    // encontra o índice do curso mais antigo antes de hoje
    const indexMaisAntigo = proximos.findIndex(
      (curso) => getDataInicio(curso) < hoje,
    )

    // se não tiver nenhum mais antigo, remove o último
    const cursoParaMinistrados =
      indexMaisAntigo >= 0
        ? proximos.splice(indexMaisAntigo, 1)[0]
        : proximos.pop()

    ministrados.push(cursoParaMinistrados)
  }

  const proximosCursos = proximos.slice(0, 3)

  return (
    <SectionArea className="bg-white squares">
      <SectionWrapper>
        <SectionHeader
          className="text-center"
          miniTitle={content.texts.proximosCursos.miniTag}
          sectionHeaderTitle={content.texts.proximosCursos.title}
          sectionHeaderSubtitle={content.texts.proximosCursos.subtitle}
          color="dark"
        />

        <MotionDivDownToUp className={`w-full`}>
          <div className="flex flex-wrap justify-center gap-5 w-full">
            {proximosCursos.map((card) => (
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
  )
}
