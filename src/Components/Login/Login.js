import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {

  const valorInputs ={
    email: "",
    password: "",
  }
  const [user, setUser] = useState(valorInputs);

  const { login, ResetPassword } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await login(user.email, user.password);
      navigate("/MenuP");
    } catch (error) {
      setError(error.message);
      if (error.code === "auth/user-not-found") {
        setError("Correo incorrecto, intente nuevamente.");
        setTimeout(function () { setError("") }, 800);
        setTimeout(function(){window.location.reload()}, 100);
        setUser({...valorInputs});
      }
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta, intente nuevamente.");
        setTimeout(function () { setError("") }, 800);
        setTimeout(function(){window.location.reload()}, 100);
        setUser({...valorInputs});
      }
      if (error.code === "auth/invalid-email") {
        setError("Proveedor de correo inexistente.");
        setTimeout(function () { setError("") }, 800);
        setTimeout(function(){window.location.reload()});
        setUser({...valorInputs});
      }
      if (error.code === "auth/internal-error") {
        setError("Error al procesar la solicitud");
        setTimeout(function () { setError("") }, 800);
        setTimeout(function(){window.location.reload()}, 100);
        setUser({...valorInputs});
      }
      if (error.code === "auth/too-many-requests") {
        setError(
          <p>
            Cuenta deshabilitada temporalmente,
            <br />
            debido a muchos intentos fallidos. <br />
            Restablezca su contraseña
          </p>
        );
        setTimeout(function () { setError("") }, 3000);
        setTimeout(function(){window.location.reload()}, 1000);
      }
      
    }
    
  };
  const handleResetPassword = async () => {
    if (!user.email) return setError("Por favor escriba su correo");

    console.log("reset");
    try {
      await ResetPassword(user.email);
      setError(
        <p>
          Hemos enviado un link a tu correo <br />
          para restablecer tu contraseña. <br />
          Recuerda revisar tu correo de spam
        </p>
      );
    } catch (error) {
      setError(error.message);
    }
  };
  const handleRegister = () => {
    navigate("/Register");
  };

  return (
    <div className="body1">
      <div className="error">
        {error && <p className="alert">{error}</p>}
        <br />
        <div className="wrapper">
          <div className="title">Iniciar Sesión</div>
          <form onSubmit={handleSubmit}>
            <div className="field-l">
              <input
                type="text"
                name="email"
                required
                onChange={handleChange}
              />
              <label>Correo Electronico</label>
            </div>
            <div className="field-l">
              <input
                type="password"
                name="password"
                required
                onChange={handleChange}
                maxLength="15"
              />
              <label>Contraeña</label>
            </div>
            <div className="content">
              <div className="pass-link">
                <input 
                type="button"
                onClick={handleResetPassword}
                value="¿Olvido su contraseña?"  
                />
              </div>
            </div>
            <div className="button-l">
              <input type="submit" className="login" value="Iniciar Sesión" />
            </div>
            <div className="signup-l">
            <label >¿Aun no se ha registrado?</label>
            </div>
            <div className="content">
              <div className="signup-link">
                <input
                type="button"
                onClick={handleRegister}
                  value="Registrese ahora"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
