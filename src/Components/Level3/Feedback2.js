import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Feedback2.css";

export default function Feedback() {
  
    const navigate = useNavigate();
    
    const [error, setError] = useState();
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try{
      navigate("/Question2");
          
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
        <div className="body-Rn">
          <div class="error1">
            {error && <p class="alert1">{error}</p>}
            <br />
            <div class="container-Rn">
              <div class="title1">¡Fallaste!</div>
              <div class="content1">
                <form onSubmit={handleSubmit}>
                <span className='span-Rn'>Tus respuestas no fueron del todo correctas, intentalo nuevamente.</span>
                  <Emoji symbol="😥" label="sad-but-relieved-face" className="emoji"/>
                    <input type="submit" value=" Atras" className='button-Rn'/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

