import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import video from "../sounds/Intro4.mp4";
import audio from "../sounds/glosario.mp3";
import "./Intro4.css";
export default function Intro4() {

  const navigate = useNavigate();
  const [error] = useState();
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
      navigate("/Level4");
    } catch (error) {
     Error(error.message);
    }
  };
  return (
    <div>
      <body className="body_v4">
        <div>
          {error && <p class="alert_v4">{error}</p>}
          <br />
          <div class="player-wrapper_v4"> 
            <div className="player_v4">
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
                className="react-player_v4"
                onProgress={handleWatchComplete}
              />
              
            </div>           
              <form onSubmit={handleSubmit}>
                <div class="button_v4">
                  <input type="submit" value=" Comenzar" disabled={areDisabled} title={"Espera a que el video termine"}/>
                </div>
               
              </form>
          </div>
        </div>
      </body>
    </div>
  );
}
