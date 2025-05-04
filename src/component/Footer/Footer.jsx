import "./Footer.css";

export default function Footer() {
  return (
    <footer id="contato" className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="./LogoLaranjaLogo.png" alt="Logo da Motoreira" />
          <p>Seu destino para peças e acessórios de moto.</p>
        </div>

        <div className="footer-links">
          <h4>Links Rápidos</h4>
          <ul>
            <li>
              <a href="/pecas">Peças</a>
            </li>
            <li>
              <a href="/capacetes">Capacetes</a>
            </li>
            <li>
              <a href="/mais-vendidos">Mais Vendidos</a>
            </li>
            <li>
              <a href="/promocoes">Promoções</a>
            </li>
          </ul>
        </div>
        <div className="footer-pagamentos">
          <h4>Formas de Pagamento</h4>
          <div className="payment-icons">
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-amex"></i>
            <i className="fab fa-cc-paypal"></i>
          </div>
        </div>

        <div className="footer-contato">
          <h4>Contato</h4>
          <p>Email: contato@motoreira.com</p>
          <p>WhatsApp: (11) 99999-9999</p>
        </div>

        <div className="footer-social">
          <h4>Redes Sociais</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} CΛVΛLIΞRE. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
