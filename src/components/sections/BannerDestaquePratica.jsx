export default function BannerDestaquePratica() {
  const coverImage =
    "https://praticarededeprotecao20julho.mapacursos.com/images/capa-escola-bullying.png";
  const folderImage =
    "https://praticarededeprotecaonovembro.mapacursos.com/images/folder-escola-bullying.png";
  const logo = "https://licitacoesnapratica.mapacursos.com/images/logo.webp";

  return (
    <header className="relative  overflow-hidden bg-[#05071f] text-white">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${coverImage})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/95 to-black/95" />
      {/* <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f6f8ff] to-transparent" /> */}

      <div className="relative z-10 flex items-center px-5 mx-auto py-14 max-w-7xl">
        <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            {/* <div className="flex justify-center mb-20 md:justify-start">
              <img src={logo} className="w-[200px]" />
            </div> */}
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.5em] text-cyan-200">
              3ª edição
            </p>

            <h1 className="max-w-5xl text-5xl font-black leading-none tracking-tight uppercase md:text-7xl lg:text-8xl">
              Prática em Rede de Proteção
            </h1>

            <p className="max-w-4xl mt-5 text-xl font-bold tracking-wide uppercase text-cyan-200 md:text-3xl">
              Prevenção e gerenciamento de crises na escola em conjunto com o
              Conselho Tutelar
            </p>

            <div className="grid max-w-3xl gap-4 mt-9 sm:grid-cols-3">
              <HeroInfo label="Data" value="26 e 27 de novembro" />
              <HeroInfo label="Cidade" value="Foz do Iguaçu/PR" />
              <HeroInfo label="Carga horária" value="16 horas" />
            </div>

            <div className="flex flex-col gap-4 mt-10 sm:flex-row sm:items-center">
              <a
                href="https://praticarededeprotecaonovembro.mapacursos.com/"
                target="_blank"
              >
                <button className="rounded-full bg-primary px-9 py-4 text-base font-black uppercase tracking-wide text-[#05071f] shadow-[0_0_45px_rgba(103,232,249,0.45)] transition hover:scale-105 hover:bg-white">
                  Inscreva-se já
                </button>
              </a>

              <a
                href="https://wa.me/5545991290837?text=Ol%C3%A1%2C%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20curso%20Rede%20de%20prote%C3%A7%C3%A3o%20%E2%80%93%20Pr%C3%A1tica%20em%20Rede%20de%20Prote%C3%A7%C3%A3o."
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 bg-white/10 px-9 py-4 text-center text-base font-black uppercase tracking-wide text-white backdrop-blur transition hover:bg-white hover:text-[#05071f]"
              >
                Tirar dúvidas
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-cyan-300/20 blur-3xl" />
            <img
              src={folderImage}
              alt="Folder do curso Licitações na Prática"
              className="relative w-full rounded-[2rem] border border-white/15 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </header>
  );

  function HeroInfo({ label, value }) {
    return (
      <div className="p-5 border rounded-2xl border-white/10 bg-white/10 backdrop-blur">
        <p className="text-xs font-bold tracking-widest uppercase text-white/60">
          {label}
        </p>

        <p className="mt-2 text-xl font-black text-white">{value}</p>
      </div>
    );
  }
}
