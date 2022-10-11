import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logoU from "../images/logo.png";
import "./Creditos.css";
export default function GameOver() {

  const [setError] = useState();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };    
  return (
    <div class="body-c">
      <div class="container-c">
        <div class="title1">Creditos</div>
        <div class="content-c">
          <span className="span-c">
            Desarrollado por: Johan F. Garnica
          </span>
          <span className="span-c">
            Diseños e ilustraciones: Willian A. Celis
          </span>
          <span className="span-c">
            Asesor Metodológico: Wilson D. Gordillo
          
          </span>
          <span className="span-c">
            Asesor de Contenidos: Lady C. Diaz
          </span>
          <span className="span-c">
            Voz de Docty: Juan C. Campos
          </span>
          <span className="span-c">
            Todos los Derechos Reservados
          </span>
          <img src={logoU} alt="" className="logoU"/>
          <form onSubmit={handleSubmit}>
            <input type="submit" value="Finalizar" className="button-c" />
          </form>
        </div>
      </div>
    </div>
  );
}
