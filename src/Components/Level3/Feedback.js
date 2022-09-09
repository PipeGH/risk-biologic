import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Feedback.css";

export default function Feedback() {
  
    const navigate = useNavigate();
    
    const [error, setError] = useState();
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try{
      navigate("/Level3");
          
      } catch (error) {
        
        setError(error.message);
      }
    };
    const Emoji = props => (
      <span
          className="emoji"
          role="img"
          aria-label={props.label ? props.label : ""}
          aria-hidden={props.label ? "false" : "true"}
      >
          {props.symbol}
      </span>
  );

  return (
    <div>
        <div className="body-Rp">
          <div class="error1">
            {error && <p class="alert1">{error}</p>}
            <br />
            <div class="container-Rp">
              <div class="title1">¡Excelente!</div>
              <div class="content1">
                <form onSubmit={handleSubmit}>
                <span className='span-Rp'>Acertaste todas las respuestas, 
                da click en Continuar para avanzar al siguiente nivel.</span>
                  <Emoji symbol="😄" label="grinning-face" className="emoji"/>
                    <input type="submit" value=" Continuar" className='button-Rp'/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

