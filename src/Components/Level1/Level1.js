import React, { useState }from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Level1.css";

export default function Level1() {
 

  let img = [
    "https://firebasestorage.googleapis.com/v0/b/biolog-risk-de075.appspot.com/o/img%2Friesgo1.png?alt=media&token=cf801ae4-cc8d-46b0-877a-eed7983beb62",
    "https://firebasestorage.googleapis.com/v0/b/biolog-risk-de075.appspot.com/o/img%2Fbioseguridad.jpg?alt=media&token=77869895-e746-42ad-a7b8-6848ae3633f1",
    "https://firebasestorage.googleapis.com/v0/b/biolog-risk-de075.appspot.com/o/img%2Fdes.png?alt=media&token=1e151a01-eb4e-4372-bd25-39437f62be08",
    "https://firebasestorage.googleapis.com/v0/b/biolog-risk-de075.appspot.com/o/img%2Fresiduos.png?alt=media&token=6b670971-9ea8-412d-b75f-1f072398cebb",
    "https://firebasestorage.googleapis.com/v0/b/biolog-risk-de075.appspot.com/o/img%2Fvacuna.jpg?alt=media&token=048d23f3-c181-43fb-83df-7c1f1f7043da",
    "https://firebasestorage.googleapis.com/v0/b/biolog-risk-de075.appspot.com/o/img%2Fautocuidado.jpg?alt=media&token=9a994b33-e817-4cf5-a7d4-9c91cfb36378",
  ];
  const navigate = useNavigate();
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate("/Question1");
  };
  
  return (
    <div className="body-l1">
      <div className="Navbar-l1">
        <Navbar />
      </div>
      <h1 className="title_g">Glosario de Terminos</h1>
      <div className="container">
        <div className="card">
          <div className="description">
            <h2>RIESGO BIOLÓGICO</h2>
            <p>
              Se define el Riesgo Biológico como la posible exposición a
              microorganismos que puedan dar lugar a enfermedades, motivada por
              la actividad laboral. Su transmisión puede ser por vía
              respiratoria, digestiva, sanguínea, piel o mucosas.
            </p>
          </div>
          <img src={img[0]} alt="" />
        </div>
        <div className="card">
          <div className="description">
            <h2>BIOSEGURIDAD</h2>
            <p>
              Se define como el conjunto de medidas preventivas, destinadas a
              mantener el control de factores de riesgo laborales procedentes de
              agentes biológicos, físicos o químicos, logrando la prevención de
              impactos nocivos, asegurando que el desarrollo o producto final de
              dichos procedimientos no atenten contra la salud y seguridad de
              trabajadores de la salud, pacientes, visitantes y el medio
              ambiente.
            </p>
          </div>
          <img src={img[1]} alt="" />
        </div>
        <div className="card">
          <div className="description">
            <h2>DESINFECCIÓN</h2>
            <p>
              Término genérico que se refiere al conjunto de operaciones
              destinadas a eliminar o reducir el número de agentes infecciosos
              en cualquier instrumento, superficie o material, por medios
              físicos o químicos.
            </p>
          </div>
          <img src={img[2]} alt="" />
        </div>
        <div className="card">
          <div className="description">
            <h2>RESIDUOS BIOSANITARIOS</h2>
            <p>
              Son específicos de la actividad sanitariapropiamente dicha,
              potencialmente contaminados con sustancias biológicas al haber
              estado en contacto con pacientes o líquidos biológicos.
            </p>
          </div>
          <img src={img[3]} alt="" />
        </div>
        <div className="card">
          <div className="description">
            <h2>VACUNA</h2>
            <p>
              Sustancias que contienen parte de los antígenos de un agente
              infeccioso. Su administración induce una respuesta inmune pero no
              la enfermedad, y ofrece protección contra la infección provocada
              por dicho agente.
            </p>
          </div>
          <img src={img[4]} alt="" />
        </div>
        <div className="card">
          <div className="description">
            <h2>AUTOCUIDADO</h2>
            <p>
              El autocuidado es definido por la OMS como "la capacidad de
              individuos, familias y comunidades para promover la salud,
              prevenir enfermedades, mantener la salud y hacer frente a las
              enfermedades y discapacidad con o sin el apoyo de un proveedor de
              atención médica". Son hábitos saludables que realizamos por
              iniciativa propia y que están orientadas al bienestar físico y
              psicológico.
            </p>
          </div>
          <img src={img[5]} alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="next">
            <input type="submit" value="Siguiente" />
          </div>
        </form>
      </div>
      <br />
    </div>
  );
}
