import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import Welcome from "./Components/Welcome/Welcome";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import RegisterF from "./Components/Register/RegisterF";
import MenuP from "./Components/MenuP/MenuP";
import Navbar from "./Components/Navbar/Navbar";
import Level1 from "./Components/Level1/Level1";
import Level2 from "./Components/Level2/Level2";
import Question1 from "./Components/Level2/Question1";
import Question2 from "./Components/Level2/Question2";
import Question3 from "./Components/Level2/Question3";
import Question4 from "./Components/Level2/Question4";
import Level3 from "./Components/Level3/Level3";
import Level4 from "./Components/Level4/Cards";
import Intro from './Components/Welcome/Intro';
import Intro1 from './Components/Level1/Intro1';
import Intro2 from './Components/Level2/Intro2';
import Intro3 from './Components/Level3/Intro3';
import Intro4 from './Components/Level4/Intro4';
import Guia from './Components/MenuP/Guia';
import GameOver from './Components/Level4/GameOver';
import Creditos from './Components/Level4/Creditos';

export default function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/Register" element={<Register />} />
          <Route path="/Guia" element={<Guia />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Intro" element={<Intro />} />
          <Route path="/Intro1" element={<Intro1 />} />
          <Route path="/Intro2" element={<Intro2 />} />
          <Route path="/Intro3" element={<Intro3 />} />
          <Route path="/Intro4" element={<Intro4 />} />
          <Route path="/GameOver" element={<GameOver />} />
          <Route path="/Creditos" element={<Creditos />} />
          <Route
            path="/Navbar"
            element={
              <ProtectedRoute>
                <Navbar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/MenuP"
            element={
              <ProtectedRoute>
                <MenuP />
              </ProtectedRoute>
            }
          />
          <Route
            path="/RegisterF"
            element={
              <ProtectedRoute>
                <RegisterF />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Level1"
            element={
              <ProtectedRoute>
                <Level1 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Level2"
            element={
              <ProtectedRoute>
                <Level2 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Level3"
            element={
              <ProtectedRoute>
                <Level3 />
              </ProtectedRoute>
            }
          />
           <Route
            path="/Level4"
            element={
              <ProtectedRoute>
                <Level4 />
              </ProtectedRoute>
            }
          />
           <Route
            path="/Question1"
            element={
              <ProtectedRoute>
                <Question1 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Question2"
            element={
              <ProtectedRoute>
                <Question2 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Question3"
            element={
              <ProtectedRoute>
                <Question3 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Question4"
            element={
              <ProtectedRoute>
                <Question4 />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Welcome />} exact />
        </Routes>
      </AuthProvider>
    </div>
  );
}
