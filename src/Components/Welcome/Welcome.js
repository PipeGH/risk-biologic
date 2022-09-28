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
  return (
    <div className='body-p'>
        <form>
          <div className="wrapper-p">
            <h2 data-text="👋&nbsp;Bienvenido👋&nbsp;"> 👋&nbsp;Bienvenido👋&nbsp;</h2>
         </div>  
          <input type="submit" value="Comenzar" className='button-p'
        onClick={() => {
          navigate("/login")
        }}
          />
        </form>
    </div>
  )
}



