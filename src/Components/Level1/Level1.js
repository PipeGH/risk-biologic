import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import riesgo1 from "../images/riesgo1.png";
import bioseguridad from "../images/bioseguridad.jpg"
import desinfeccion from "../images/des.png";
import residuos from "../images/residuos.png";
import vacuna from "../images/vacuna.jpg";
import autocuidado from "../images/autocuidado.jpg"
import "./Level1.css";
import audio from "../sounds/glosario.mp3";


export default function Level1() {
 

  let img = [
    riesgo1,
    bioseguridad,
    desinfeccion,
    residuos,
    vacuna,
    autocuidado
  ];
  const navigate = useNavigate();
  const sound = new Audio();
  sound.src = audio;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    sound.play();
    navigate("/Intro2");
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
          <img src={img[0]} loading="lazy" alt="" />
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
          <img src={img[1]} loading="lazy" alt="" />
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
          <img src={img[2]}  loading="lazy" alt="" />
        </div>
        <div className="card">
          <div className="description">
            <h2>RESIDUOS BIOSANITARIOS</h2>
            <p>
              Son específicos de la actividad sanitaria propiamente dicha,
              potencialmente contaminados con sustancias biológicas al haber
              estado en contacto con pacientes o líquidos biológicos.
            </p>
          </div>
          <img src={img[3]} loading="lazy" alt="" />
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
          <img src={img[4]} loading="lazy" alt="" />
        </div>
        <div className="card">
          <div className="description">
            <h2>AUTOCUIDADO</h2>
            <p>
              El autocuidado es definido por la OMS como "la capacidad de
              individuos, familias y comunidades para 
              mantener la salud y hacer frente a las
              enfermedades con o sin el apoyo de un proveedor de
              atención médica". Son hábitos saludables que realizamos por
              iniciativa propia y que están orientados al bienestar físico y
              psicológico.
            </p>
          </div>
          <img src={img[5]}  loading="lazy" alt="" />
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
