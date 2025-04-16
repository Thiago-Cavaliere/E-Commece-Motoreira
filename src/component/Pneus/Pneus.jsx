import "./Pneus.css";

export default function Pneus() {
  const pneus = [
    { nome: "Pneu Moto Pirelli Scorpion MX Extra X 100/90 R19 57M - Aro 18", preco: "R$ 950,00", img: "Pneu Moto Pirelli Scorpion MX Extra.jpg", estrelas: 5 },
    { nome: "Pneu Moto Pirelli Super City 90/90 R18 51P TT - Aro 18 - Traseiro", preco: "R$ 520,00", img: "Pneu Moto Pirelli Super City.jpg", estrelas: 4 },
    { nome: "Pneu Moto Pirelli Supercorsa V3 SP 200/60 ZR17 80W TL - Aro 17 - Traseiro", preco: "R$ 2380,00", img: "Pneu Moto Pirelli Supercorsa Traseiro.jpg", estrelas: 4 },
    { nome: "Pneu Moto Michelin Power 5 180/55 ZR17 73W TL - Aro 17 - Traseiro", preco: "R$ 410,00", img: "PneusMotoMichelin.jpg", estrelas: 3 },
  ];

  return (
    <section id="pneus" className="pneus-container">
      <div className="banner-pneus">
        <h1>Encontre o Pneu Ideal para sua Moto</h1>
        <p>Desempenho, segurança e durabilidade para todas as rotas.</p>
        <button>Ver Todos</button>
      </div>

      <div className="conteudo-pneus">
        <aside className="filtros">
          <h3>Filtrar por</h3>
          <label><input type="checkbox" /> Aro 17</label>
          <label><input type="checkbox" /> Aro 18</label>
          <label><input type="checkbox" /> Michelin</label>
          <label><input type="checkbox" /> Pirelli</label>
        </aside>

        <div className="grade-pneus">
          {pneus.map((pneu, index) => (
            <div className="pneu-card" key={index}>
              <img src={pneu.img} alt={pneu.nome} />
              <h4>{pneu.nome}</h4>
              <p>{pneu.preco}</p>
              <div className="estrelas">
                {"★".repeat(pneu.estrelas)}
                {"☆".repeat(5 - pneu.estrelas)}
              </div>
              <button>Comprar</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
