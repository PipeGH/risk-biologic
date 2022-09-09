import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./MenuP.css";
export default function MenuP() {
  
    const navigate = useNavigate();
    const [error, setError] = useState();
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try{
      navigate("/Level1");
          
      } catch (error) {
        
        setError(error.message);
      }
    };
   
  return (
    <div>
        <body className="body2">
          <div class="error1">
            {error && <p class="alert1">{error}</p>}
            <br />
            <div class="container1">
              <div class="title1">Bienvenido</div>
              <div class="content1">
                <form onSubmit={handleSubmit}>
                  <div class="button1">
                    <input type="submit" value=" Comenzar" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </body>
      </div>
  )
}
