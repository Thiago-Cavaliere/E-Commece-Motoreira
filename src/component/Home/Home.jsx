import "./Home.css";

export default function Home() {
  return (
    <main>
      <section className="home-container">
        <div className="home-content">
          <img src="./Motoreira.png" alt="imagem de intro motoreira" />
          <h1>Aventura sobre duas rodas começa aqui!</h1>
          <p>
            Peças, capacetes e equipamentos para quem vive a liberdade na
            estrada.
          </p>
          <button className="btn-cta">Ver Produtos</button>

          <div className="newsletter">
            <p>Quer receber promoções exclusivas?</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Seu e-mail" />
              <button>Assinar</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
