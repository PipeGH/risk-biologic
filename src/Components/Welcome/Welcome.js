<<<<<<< HEAD
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";
import fondo from "../images/fondo.png"
export default function Welcome() {
  
  const navigate = useNavigate();   

=======
import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";
import audio from "../sounds/welcome.mp3";

export default function Welcome() {

    const navigate = useNavigate();
    useEffect (() =>{
      const sound = new Audio();
      sound.src = audio;
      sound.play();
    },[]);
>>>>>>> 7e63c3558bda0e4289b8b0e362ea6dcf9dd21131
  return (
    <div className='body-p'>
        <form>
          <div className="wrapper-p">
            <h2 data-text="¿Sabes que es un riesgo Biologico?">¿Sabes que es un riesgo Biologico?</h2>
            <img src={fondo} alt=""/>
         </div>  
<<<<<<< HEAD
          <input type="submit" value="Averigualo" className='button-p' onClick={() =>{
              navigate("/Intro")
          }}/>
=======
          <input type="submit" value="Comenzar" className='button-p'
        onClick={() => {
          navigate("/login")
        }}
          />
>>>>>>> 7e63c3558bda0e4289b8b0e362ea6dcf9dd21131
        </form>
    </div>
  )
}
<<<<<<< HEAD
=======



>>>>>>> 7e63c3558bda0e4289b8b0e362ea6dcf9dd21131
