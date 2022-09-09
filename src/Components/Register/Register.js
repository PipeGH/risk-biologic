
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { useState} from 'react';
import "./Register.css";


 const Register = () => {
  const valorI ={
    email: "",
    password: "",
}
  const [user, setUser] = useState(valorI);
  
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/RegisterF");
    } catch (error) {
      setError(error.message);
      if (error.code === "auth/weak-password") {
        setError("La contraseña debe tener almenos 6 caracteres.");
        setTimeout(function () { setError("") }, 800);
        setUser({...valorI});

      }
      if (error.code === "auth/email-already-in-use") {
        setError("Correo existente, intente con uno diferente.");
        setTimeout(function () { setError("") }, 800);
        
        setUser({...valorI});
      }
      if (error.code === "auth/invalid-email") {
        setError(
          "Se ha producido un error interno, proveedor de correo inexistente."
        );
        setTimeout(function () { setError("") }, 800);
        
        setUser({...valorI});
      }
      if (error.code === "auth/internal-error") {
        setError("Correo invalido.");
        setTimeout(function () { setError("") }, 800);
        setUser({...valorI});
      }
    }
  };
  return (
    <div className="body-r">
      <div className="error1">
        {error && <p className="alert1">{error}</p>}
        
        <br />
        <div className="container-r">
          <div className="title-r">Formulario de Registro</div>
          <div className="content-r">
            <form onSubmit={handleSubmit}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Correo Electronico</span>
                  <input
                    type="text"
                    name="email"
                    placeholder="ejemplo@email.com"
                    required
                    onChange={handleChange}
                    value={user.email}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Contraseña</span>
                  <input
                    type="password"
                    name="password"
                    placeholder="****** "
                    onChange={handleChange}
                    value={user.password}
                  />
                </div>
              </div>
              <div className="button">
                <input type="submit" value="Registrar" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;

