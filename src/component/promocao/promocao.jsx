import React from "react";
import "./promocao.css";
import Button from "../Button/Button";

export default function Promocao() {
  return (
    <section id="capacetes" className="promocao-container">
      <h2 className="promocao-title">Promoções Especiais</h2>
      <div className="promocao-cards">
        <div className="promocao-card">
          <img
            src="capaceteShark.jpg"
            alt="Capacete Shark"
            className="promocao-img"
          />
          <div className="promocao-details">
            <h3>Capacete Shark</h3>
            <p className="old-price">De R$ 2500,00</p>
            <p className="new-price">Por R$ 1350,00</p>
            <Button />
          </div>
        </div>

        <div className="promocao-card">
          <img
            src="malaParaTanque.jpg"
            alt="Mala para tanque"
            className="promocao-img"
          />
          <div className="promocao-details">
            <h3>Mala Para Tanque</h3>
            <p className="old-price">De R$ 1120,00</p>
            <p className="new-price">Por R$ 880,00</p>
            <Button />
          </div>
        </div>

        <div className="promocao-card">
          <img
            src="capaceteSM5.jpg"
            alt="Capacete SM5"
            className="promocao-img"
          />
          <div className="promocao-details">
            <h3>Capacete SM5</h3>
            <p className="old-price">De R$ 2600,00</p>
            <p className="new-price">Por R$ 1450,00</p>
            <Button />
          </div>
        </div>

        <div className="promocao-card">
          <img
            src="suporteParaCelular.jpg"
            alt="Suporte para celular"
            className="promocao-img"
          />
          <div className="promocao-details">
            <h3>Suporte Celular</h3>
            <p className="old-price">De R$ 300,00</p>
            <p className="new-price">Por R$ 220,00</p>
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
}
