import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import video from "../sounds/Intro2.mp4";
import "./Intro2.css";
<<<<<<< HEAD
import audio from "../sounds/glosario.mp3";
  
=======
>>>>>>> 7e63c3558bda0e4289b8b0e362ea6dcf9dd21131
export default function Intro2() {
  const navigate = useNavigate();
  const [error, setError] = useState();
 const [watchComplete, setWatchComplete] = useState(false);
 const [areDisabled, setAreDisabled] = useState(true);
<<<<<<< HEAD
 const sound = new Audio();
 sound.src = audio;
   
=======

>>>>>>> 7e63c3558bda0e4289b8b0e362ea6dcf9dd21131
 const handleWatchComplete =({played}) =>{
    if(played >=  0.99 && !watchComplete){
      setWatchComplete(true);
      setAreDisabled(false);
    }
 }
  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    sound.play();
=======
    setError("");
>>>>>>> 7e63c3558bda0e4289b8b0e362ea6dcf9dd21131
    try {
      navigate("/Level2");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
<<<<<<< HEAD
      <body className="body_v2">
        <div>
          {error && <p class="alert_v2">{error}</p>}
          <br />
          <div class="player-wrapper_v2"> 
            <div className="player_v2">
=======
      <body className="body_v1">
        <div>
          {error && <p class="alert_v1">{error}</p>}
          <br />
          <div class="player-wrapper"> 
            <div className="player">
>>>>>>> 7e63c3558bda0e4289b8b0e362ea6dcf9dd21131
            <div className={
                watchComplete
                  ? " marker marker--is-complete" 
                  : "marker marker--not-complete"}
<<<<<<< HEAD
              >
=======
              >Completado
>>>>>>> 7e63c3558bda0e4289b8b0e362ea6dcf9dd21131
            </div>
            <ReactPlayer
                url={video}
                width="100%"
                height="100%"
                controls
                playing={true}
                onEnded={() =>{
<<<<<<< HEAD
                  alert("Termino el video, da clic en comenzar")
=======
                  alert("Termino el video, da click en comenzar")
>>>>>>> 7e63c3558bda0e4289b8b0e362ea6dcf9dd21131
                 
                  }
                  
                }
<<<<<<< HEAD
                className="react-player_v2"
=======
                className="react-player"
>>>>>>> 7e63c3558bda0e4289b8b0e362ea6dcf9dd21131
                onProgress={handleWatchComplete}
              />
              
            </div>           
              <form onSubmit={handleSubmit}>
<<<<<<< HEAD
                <div class="button_v2">
                  <input type="submit" value=" Comenzar" disabled={areDisabled} title={"Espera a que el video termine"}/>
=======
                <div class="button_v1">
                  <input type="submit" value=" Comenzar" disabled={areDisabled} title={"Deja que el video termine"}/>
>>>>>>> 7e63c3558bda0e4289b8b0e362ea6dcf9dd21131
                </div>
               
              </form>
          </div>
        </div>
      </body>
    </div>
  );
}
