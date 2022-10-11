import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";
import fondo from "../images/fondo.png"
export default function Welcome() {
  
  const navigate = useNavigate();   

  return (
    <div className='body-p'>
        <form>
          <div className="wrapper-p">
            <h2 data-text="¿Sabes que es un riesgo Biologico?">¿Sabes que es un riesgo Biologico?</h2>
            <img src={fondo} alt=""/>
         </div>  
          <input type="submit" value="Averigualo" className='button-p' onClick={() =>{
              navigate("/Intro")
          }}/>
        </form>
    </div>
  )
}
