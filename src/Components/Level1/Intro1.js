import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import video from "../sounds/Intro1.mp4";
<<<<<<< HEAD
import audio from "../sounds/glosario.mp3";
=======
>>>>>>> 7e63c3558bda0e4289b8b0e362ea6dcf9dd21131
import "./Intro1.css";
export default function Intro1() {
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
>>>>>>> 7e63c3558bda0e4289b8b0e362ea6dcf9dd21131
    setError("");
    try {
      navigate("/Level1");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <body className="body_v1">
        <div>
          {error && <p class="alert_v1">{error}</p>}
          <br />
<<<<<<< HEAD
          <div class="player-wrapper_v1"> 
            <div className="player_v1">
=======
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
                className="react-player_v1"
=======
                className="react-player"
>>>>>>> 7e63c3558bda0e4289b8b0e362ea6dcf9dd21131
                onProgress={handleWatchComplete}
              />
              
            </div>           
              <form onSubmit={handleSubmit}>
                <div class="button_v1">
<<<<<<< HEAD
                  <input type="submit" value=" Comenzar" disabled={areDisabled} title={"Espera a que el video termine"}/>
=======
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
