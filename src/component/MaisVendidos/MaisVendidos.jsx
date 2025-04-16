import React, { useState } from "react";
import "./MaisVendidos.css";
import Button from "../Button/Button";

const MaisVendidos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lista de 7 produtos com duas imagens e preço
  const produtos = [
    {
      nome: "Balaclava X11 Climate Preta",
      descricao: "Balaclava X11 Climate",
      img1: "Balaclava X11 Climate 2 Preta.jpg",
      img2: "Balaclava X11 Climate 2 Preta1.jpg",
      preco: "R$ 49,90",
    },
    {
      nome: "Bota Gaerne SG22 - CinzaBranca",
      descricao: "Descrição do produto 2",
      img1: "Bota Gaerne SG22 - CinzaBranca.jpg",
      img2: "Bota Gaerne SG22 - CinzaBranca1.jpg",
      preco: "R$ 1199,90",
    },
    {
      nome: "Conjunto ASW Relay VermelhoPretoAzul",
      descricao: "Descrição do produto 3",
      img1: "Conjunto ASW Image Relay 25 - VermelhoPretoAzul.jpg",
      img2: "Conjunto ASW Image Relay 25 - VermelhoPretoAzul1.jpg",
      preco: "R$ 479,90",
    },
    {
      nome: "Cotoveleira Dainese MX1 - PretoCinza",
      descricao: "Descrição do produto 4",
      img1: "Cotoveleira Dainese MX1 - PretoCinza.jpg",
      img2: "Cotoveleira Dainese MX1 - PretoCinza1.jpg",
      preco: "R$ 929,90",
    },
    {
      nome: "Jaqueta X11 Dusk Airflow Preto",
      descricao: "Descrição do produto 5",
      img1: "1030590_jaqueta-x11-iron-3-preta_z1_637896819636291227.jpg",
      img2: "1030590_jaqueta-x11-iron-3-preta_z3_637896819664572267.jpg",
      preco: "R$ 799,90",
    },
    {
      nome: "Luva Alpinestars PretaVermelhaBranca",
      descricao: "Descrição do produto 6",
      img1: "Luva Alpinestars SP 3 PretaVermelhaBranca.jpg",
      img2: "Luva Alpinestars SP 3 PretaVermelhaBranca1.jpg",
      preco: "R$ 659,90",
    },
    {
      nome: "Óculos Leatt Velocity 6.5 Iriz VerdeVermelho",
      descricao: "Descrição do produto 7",
      img1: "Óculos Leatt Velocity 6.5 Iriz VerdeVermelho.jpg",
      img2: "Óculos Leatt Velocity 6.5 Iriz VerdeVermelho1.jpg",
      preco: "R$ 389,90",
    },
  ];

  const nextProduct = () => {
    if (currentIndex < produtos.length - 4) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevProduct = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(produtos.length - 4);
    }
  };

  return (
    <div className="mais-vendidos-container">
      <h2>Mais Vendidos</h2>

      <div className="carousel">
        <button className="arrow prev" onClick={prevProduct}>
          &#8592;
        </button>
        <div className="cards">
          {produtos
            .slice(currentIndex, currentIndex + 4)
            .map((produto, index) => (
              <div className="card" key={index}>
                <div className="card-img">
                  <img
                    src={produto.img1}
                    alt={produto.nome}
                    onMouseOver={(e) => (e.currentTarget.src = produto.img2)}
                    onMouseOut={(e) => (e.currentTarget.src = produto.img1)}
                  />
                </div>
                <div className="card-info">
                  <h3>{produto.nome}</h3>
                  <p>{produto.descricao}</p>
                  <p className="preco">{produto.preco}</p>
                  <Button />
                </div>
              </div>
            ))}
        </div>
        <button className="arrow next" onClick={nextProduct}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default MaisVendidos;
