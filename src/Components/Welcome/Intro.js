import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import video from "../sounds/intro.mp4";
import "./Intro.css";
export default function Intro() {
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
      navigate("/Login");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <body className="body_v">
        <div>
          {error && <p class="alert_v1">{error}</p>}
          <br />
          <div class="player-wrapper_v"> 
            <div className="player_v">
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
                  alert("Termino el video, da click en comenzar")
                 
                  }
                  
                }
                className="react-player_v"
                onProgress={handleWatchComplete}
              />
              
            </div>           
              <form onSubmit={handleSubmit}>
                <div class="button_v">
                  <input type="submit" value=" Comenzar" disabled={areDisabled} title={"Deja que el video termine"}/>
                </div>
               
              </form>
          </div>
        </div>
      </body>
    </div>
  );
}
