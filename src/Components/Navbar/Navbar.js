import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import {
  getFirestore,
  collection,
  where,
  getDocs,
  query
} from "firebase/firestore";
import { app } from "../../firebase";

import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./Navbar.elements";
import { FaBars, FaTimes} from "react-icons/fa";
import { FcBiohazard } from "react-icons/fc";
import { IoExit } from "react-icons/io5";
import { MdDeveloperMode } from "react-icons/md";
import { IconContext } from "react-icons";

export default function Navbar () {
  
 
  const [datos, setDatos] = useState([]);
  const db = getFirestore(app);
  const [setError] = useState();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { user, logout } = useAuth();

  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
  };
  const handleSubmit = async (e) =>{
    try{
      navigate("/Guia");
          
      } catch (error) {
        
        setError(error.message);
      }
  }
  
  useEffect(() => {
    const getDatos = async () => {
      try {
        const q = query(
          collection(db, "user"),
          where("email", "==", user.email)

        );
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push(doc.id, " => ", doc.data());
          setDatos(docs);
          
        });
      } catch (error) {
        setError(error)
      }
    };
    getDatos();
  },);
  
  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <FcBiohazard />
            <p>BiologicRisk</p>
             
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  { datos.map(dato =>(
                     <div key={dato.id}>
                       <img src={dato.img_jugador} alt=""/>
                       <span>{dato.displayName} </span>
                     </div>
                    ))}
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div  onClick={handleSubmit}>
                  <MdDeveloperMode />
<<<<<<< HEAD
                  Intrucciones
=======
                  INSTRUCCIONES
>>>>>>> 7e63c3558bda0e4289b8b0e362ea6dcf9dd21131
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div onClick={handleLogout}>
                  <IoExit />
                  Salir
                </div>
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

