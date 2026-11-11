import React, { useEffect, useRef, useState } from "react";

const members = [
  {
    name: "Matheus Lomba Castelan",
    role: "Presidente",
    course: "Administração · 3º ano",
    initials: "MC",
    image: "/images/members/matheus-lomba-castelan.jpeg",
    bio: "Atua no Centro Acadêmico desde 2024. Já passou pela Escola de Idiomas e pela diretoria de Projetos e Eventos. Quer fortalecer o movimento estudantil e ampliar a voz dos alunos nas decisões da FEA.",
  },
  {
    name: "Rúbia Sherimam",
    role: "Vice-presidente",
    course: "Administração · 4º ano",
    initials: "RS",
    image: "/images/members/rubia-sherimam.jpeg",
    bio: "Entrou para o CA em 2026, na área acadêmica. Acredita em um Centro Acadêmico feito de diálogo, representatividade e construção coletiva, cada vez mais próximo dos estudantes.",
  },
  {
    name: "Henrique “Net”",
    role: "1º secretário",
    course: "Economia · 4º semestre",
    initials: "HN",
    image: "/images/members/henrique-net.jpg",
    bio: "Vê o Centro Acadêmico como agente transformador da vida universitária e quer construir pontes de diálogo entre estudantes e professores.",
  },
  {
    name: "Rafael",
    role: "2º secretário",
    course: "Economia · 2º semestre",
    initials: "RA",
    image: "/images/members/rafael.jpeg",
    bio: "Acredita na democracia e na importância de os estudantes participarem das decisões que afetam o dia a dia da faculdade.",
  },
  {
    name: "Raphaela",
    role: "1ª tesoureira",
    course: "Finanças e Negócios · 4º semestre",
    initials: "RP",
    image: "/images/members/rafaela.jpeg",
    bio: "Quer contribuir para o crescimento do Centro Acadêmico e para o fortalecimento da comunidade universitária.",
  },
  {
    name: "João Osti",
    role: "2º tesoureiro",
    course: "Administração · 6º semestre",
    initials: "JO",
    image: "/images/members/joao-osti.jpg",
    bio: "Com experiência em entidades estudantis e finanças, quer ajudar a manter as contas organizadas e dar transparência ao uso dos recursos do CA.",
  },
];

const internalProposals = [
  {
    number: "01",
    title: "Governança democrática",
    text: "Reuniões semanais da Diretoria, acompanhamento próximo do Conselho Diretor e um calendário unificado de ações e prazos.",
    icon: "↗",
  },
  {
    number: "02",
    title: "Cultura organizacional",
    text: "Manter os eventos de integração tradicionais e incentivar uma convivência acolhedora, descontraída e colaborativa.",
    icon: "✳",
  },
  {
    number: "03",
    title: "Capacitações",
    text: "Organizar ciclos de formação para novos membros, com cronogramas e conteúdos definidos por cada diretoria.",
    icon: "⌁",
  },
  {
    number: "04",
    title: "Revisão do estatuto",
    text: "Atualizar o Estatuto Social e o Regimento Interno para refletir a realidade da entidade e ampliar a representação estudantil.",
    icon: "§",
  },
];

const externalProposals = [
  {
    number: "05",
    title: "Representação discente",
    text: "Aproximar estudantes e representantes nos colegiados, incentivar candidaturas e ouvir os alunos sobre pautas importantes.",
    icon: "◎",
  },
  {
    number: "06",
    title: "Movimento estudantil da USP",
    text: "Participar das atividades do DCE e fortalecer o diálogo com os Centros Acadêmicos e Centros Estudantis da USP.",
    icon: "↗",
  },
  {
    number: "07",
    title: "Liga das Entidades",
    text: "Articular a cooperação entre entidades da FEA-RP e construir projetos em parceria, respeitando o papel de cada uma.",
    icon: "⌘",
  },
  {
    number: "08",
    title: "Comunicação transparente",
    text: "Manter os alunos informados sobre a atuação do CA, as pautas do DCE e as discussões do movimento estudantil.",
    icon: "◉",
  },
  {
    number: "09",
    title: "Inclusão e pertencimento",
    text: "Apoiar iniciativas da CIP, os coletivos da FEA-RP e ações do CAN voltadas ao pertencimento de pessoas PPI.",
    icon: "✳",
  },
  {
    number: "10",
    title: "Eventos para a comunidade",
    text: "Apoiar eventos com propósito, como Bixo Folia, Semana Cultural, FEA-Viva e Campanha do Agasalho.",
    icon: "✦",
  },
  {
    number: "11",
    title: "Flaviana Idiomas",
    text: "Estudar a viabilidade de retomar as atividades da escola de idiomas, considerando a capacidade da entidade.",
    icon: "文",
  },
];

const values = ["Diálogo", "Democracia", "Inclusão", "Integração"];

function PhoenixMark({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 48 48"
    >
      <path
        d="M24 5c-1 8-9 11-9 19 0 4 2 7 6 8-1-4 1-7 4-10 0 5 5 7 5 12 0 3-2 6-5 8 9-1 14-7 14-15 0-6-4-11-10-15 1 6-1 9-3 11-1-6 0-12-2-18ZM15 37c-4-2-7-5-8-10-3 8 1 16 8 19 3 1 6 2 9 2-4-3-7-6-9-11Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
      <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ProposalCard({ proposal }) {
  return (
    <article className="proposal-card">
      <div className="proposal-card-top">
        <span className="proposal-number">{proposal.number}</span>
        <span aria-hidden="true" className="proposal-icon">{proposal.icon}</span>
      </div>
      <h3>{proposal.title}</h3>
      <p>{proposal.text}</p>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const voteDetailsRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const closeVoteDetails = (event) => {
      if (!voteDetailsRef.current?.contains(event.target)) {
        voteDetailsRef.current.open = false;
      }
    };

    document.addEventListener("pointerdown", closeVoteDetails);
    return () => document.removeEventListener("pointerdown", closeVoteDetails);
  }, []);

  return (
    <>
      <aside aria-label="Informações da votação" className="vote-banner">
        <div className="vote-timing">
          <span className="vote-label"><span /> Votação CAFCF</span>
          <span className="vote-date">
            11 nov. 2026 <span aria-hidden="true">·</span>{" "}
            <time dateTime="2026-11-11T09:00:00-03:00">09:00</time>–<time dateTime="2026-11-11T17:00:00-03:00">17:00</time>
          </span>
        </div>
        <div className="vote-actions">
          <details className="vote-details" ref={voteDetailsRef}>
            <summary>Como votar?</summary>
            <div className="vote-instructions">
              <strong>Vote com sua Senha Única USP</strong>
              <p>
                Acesse a votação no sistema oficial da USP e autentique-se com
                seu número USP e sua Senha Única.
              </p>
              <a
                href="https://uspdigital.usp.br/wsusuario/?acao=esqueciSenha"
                rel="noreferrer"
                target="_blank"
              >
                Esqueceu a senha? Recupere aqui <ArrowIcon />
              </a>
            </div>
          </details>
          <a
            className="vote-link"
            href="https://vote.usp.br/usp/57ef194f-4517-45e6-bdbd-3d616ce89562/vote"
            rel="noreferrer"
            target="_blank"
          >
            Acessar votação <ArrowIcon />
          </a>
        </div>
      </aside>
      <header className="site-header">
        <a aria-label="Chapa Fênix — início" className="brand" href="#inicio" onClick={closeMenu}>
          <span className="brand-mark"><PhoenixMark /></span>
          <span className="brand-copy">
            <strong>Chapa Fênix</strong>
            <small>CAFCF · FEA-RP / USP</small>
          </span>
        </a>
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <span />
          <span />
        </button>
        <nav aria-label="Navegação principal" className={menuOpen ? "main-nav is-open" : "main-nav"}>
          <a href="#quem-somos" onClick={closeMenu}>Quem somos</a>
          <a href="#propostas" onClick={closeMenu}>Propostas</a>
          <a
            className="instagram-link"
            href="https://www.instagram.com/chapafenix2026/"
            rel="noreferrer"
            target="_blank"
          >
            Instagram <span aria-hidden="true">↗</span>
          </a>
          <a className="nav-cta" href="#manifesto" onClick={closeMenu}>
            Nossa visão <ArrowIcon />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-grain" />
          <div className="hero-content">
            <span className="eyebrow hero-eyebrow"><span /> Plano de gestão · 2027</span>
            <h1>Um CA que<br />renasce <em>com você.</em></h1>
            <p className="hero-intro">
              Uma gestão feita de escuta, participação e vontade de transformar
              a experiência de quem vive a FEA-RP.
            </p>
            <a className="button button-light" href="#manifesto">
              Conheça nossas ideias <ArrowIcon />
            </a>
          </div>
          <div aria-hidden="true" className="hero-art">
            <div className="sun-disc" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <PhoenixMark className="hero-phoenix" />
            <span className="hero-art-caption">Renascer · Construir · Pertencer</span>
          </div>
          <a aria-label="Role para conhecer a chapa" className="scroll-cue" href="#manifesto">
            <span />
            role para descobrir
          </a>
          <div aria-hidden="true" className="hero-index">01 <span>/ 04</span></div>
        </section>

        <section className="manifesto section-wrap" id="manifesto">
          <div className="section-kicker"><span>01</span> O que nos move</div>
          <div className="manifesto-copy">
            <h2>O Centro Acadêmico é de quem <em>faz parte dele.</em></h2>
            <p>
              Acreditamos em um CA conectado à comunidade da FEARP e ao movimento
              estudantil: um espaço de respeito, justiça e integração, onde os
              estudantes possam construir juntos os rumos da universidade.
            </p>
            <p>
              Defendemos o diálogo e a democracia como caminhos para ouvir quem
              nem sempre é ouvido. Queremos uma entidade que acolha, represente
              e ajude cada pessoa a se desenvolver na sua jornada acadêmica.
            </p>
            <div className="values-list" aria-label="Valores da Chapa Fênix">
              {values.map((value) => <span key={value}>{value}</span>)}
            </div>
          </div>
          <div className="manifesto-quote">
            <span aria-hidden="true" className="quote-mark">“</span>
            <blockquote>“A morte é agora o ninho da fênix”</blockquote>
            <cite>— William Shakespeare</cite>
            <PhoenixMark className="quote-phoenix" />
          </div>
        </section>

        <section className="team-section" id="quem-somos">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <div className="section-kicker"><span>02</span> Nossa chapa</div>
                <h2>Gente que acredita<br />no <em>coletivo.</em></h2>
              </div>
              <p>
                Uma equipe que chega com diferentes vivências e um propósito
                em comum: fazer do CA um lugar mais próximo, participativo e vivo.
              </p>
            </div>
            <div className="member-grid">
              {members.map((member, index) => (
                <article className="member-card" key={member.name}>
                  <div className={`member-photo member-photo-${index + 1}`}>
                    <span aria-hidden="true" className="member-initials">{member.initials}</span>
                    <img
                      alt={`Foto de ${member.name}`}
                      loading="lazy"
                      onError={(event) => { event.currentTarget.style.display = "none"; }}
                      src={member.image}
                    />
                    <span aria-hidden="true" className="member-photo-index">0{index + 1}</span>
                  </div>
                  <div className="member-info">
                    <span className="member-role">{member.role}</span>
                    <h3>{member.name}</h3>
                    <span className="member-course">{member.course}</span>
                    <p>{member.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="proposals-section" id="propostas">
          <div className="section-wrap">
            <div className="section-heading proposal-heading">
              <div>
                <div className="section-kicker"><span>03</span> Plano de gestão</div>
                <h2>Ideias que viram<br /><em>movimento.</em></h2>
              </div>
              <p>
                Propostas para fortalecer a vida dentro do CA e ampliar a
                presença da entidade na FEA-RP e na USP.
              </p>
            </div>

            <div className="proposal-group">
              <div className="proposal-group-title">
                <span className="group-line" />
                <h3>Por dentro do CA</h3>
                <span className="group-count">01 — 04</span>
              </div>
              <div className="proposal-grid internal-grid">
                {internalProposals.map((proposal) => <ProposalCard key={proposal.number} proposal={proposal} />)}
              </div>
            </div>

            <div className="proposal-group">
              <div className="proposal-group-title">
                <span className="group-line" />
                <h3>Com a FEA-RP e a comunidade</h3>
                <span className="group-count">05 — 11</span>
              </div>
              <div className="proposal-grid external-grid">
                {externalProposals.map((proposal) => <ProposalCard key={proposal.number} proposal={proposal} />)}
              </div>
            </div>
          </div>
        </section>

        <section className="closing-section">
          <div className="closing-art" aria-hidden="true"><PhoenixMark /></div>
          <div className="closing-copy">
            <div className="section-kicker"><span>04</span> O próximo capítulo</div>
            <h2>A Fênix também<br />é <em>você.</em></h2>
            <p>Uma faculdade mais integrada começa quando todo mundo pode participar.</p>
            <a className="button button-light" href="#quem-somos">
              Conheça quem está nessa <ArrowIcon />
            </a>
          </div>
          <span aria-hidden="true" className="closing-spark">✳</span>
        </section>
      </main>

      <footer className="site-footer">
        <a aria-label="Voltar ao início" className="footer-brand" href="#inicio">
          <PhoenixMark />
          <span>Chapa Fênix</span>
        </a>
        <p>Centro Acadêmico Flaviana Condeixa Favaretto</p>
        <a className="back-top" href="#inicio">Voltar ao topo ↑</a>
        <small>FEA-RP · Universidade de São Paulo · 2027</small>
        <a
          className="footer-instagram"
          href="https://www.instagram.com/chapafenix2026/"
          rel="noreferrer"
          target="_blank"
        >
          Instagram @chapafenix2026 ↗
        </a>
      </footer>
    </>
  );
}

export default App;
