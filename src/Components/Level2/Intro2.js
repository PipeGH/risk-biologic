import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import video from "../sounds/Intro2.mp4";
import "./Intro2.css";
import audio from "../sounds/glosario.mp3";
  
export default function Intro2() {
  const navigate = useNavigate();
  const [error, setError] = useState();
 const [watchComplete, setWatchComplete] = useState(false);
 const [areDisabled, setAreDisabled] = useState(true);
 const sound = new Audio();
 sound.src = audio;
   
 const handleWatchComplete =({played}) =>{
    if(played >=  0.99 && !watchComplete){
      setWatchComplete(true);
      setAreDisabled(false);
    }
 }
  const handleSubmit = async (e) => {
    e.preventDefault();
    sound.play();
    try {
      navigate("/Level2");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <body className="body_v2">
        <div>
          {error && <p class="alert_v2">{error}</p>}
          <br />
          <div class="player-wrapper_v2"> 
            <div className="player_v2">
            <div className={
                watchComplete
                  ? " marker marker--is-complete" 
                  : "marker marker--not-complete"}
              >
            </div>
            <ReactPlayer
                url={video}
                width="100%"
                height="100%"
                controls
                playing={true}
                onEnded={() =>{
                  alert("Termino el video, da clic en comenzar")
                 
                  }
                  
                }
                className="react-player_v2"
                onProgress={handleWatchComplete}
              />
              
            </div>           
              <form onSubmit={handleSubmit}>
                <div class="button_v2">
                  <input type="submit" value=" Comenzar" disabled={areDisabled} title={"Espera a que el video termine"}/>
                </div>
               
              </form>
          </div>
        </div>
      </body>
    </div>
  );
}
