import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import video from "../sounds/Intro2.mp4";
import "./Intro2.css";
export default function Intro2() {
  const navigate = useNavigate();
  const [error, setError] = useState();
 const [watchComplete, setWatchComplete] = useState(false);
 const [areDisabled, setAreDisabled] = useState(true);

 const handleWatchComplete =({played}) =>{
    if(played >=  0.99 && !watchComplete){
      setWatchComplete(true);
      setAreDisabled(false);
    }
 }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      navigate("/Level2");
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
          <div class="player-wrapper"> 
            <div className="player">
            <div className={
                watchComplete
                  ? " marker marker--is-complete" 
                  : "marker marker--not-complete"}
              >Completado
            </div>
            <ReactPlayer
                url={video}
                width="100%"
                height="100%"
                controls
                playing={true}
                onEnded={() =>{
                  alert("Termino el video, da click en comenzar")
                 
                  }
                  
                }
                className="react-player"
                onProgress={handleWatchComplete}
              />
              
            </div>           
              <form onSubmit={handleSubmit}>
                <div class="button_v1">
                  <input type="submit" value=" Comenzar" disabled={areDisabled} title={"Deja que el video termine"}/>
                </div>
               
              </form>
          </div>
        </div>
      </body>
    </div>
  );
}
