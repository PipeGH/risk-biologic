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
import Feedback from "./Components/Level3/Feedback";
import Feedback2 from "./Components/Level3/Feedback2";

export default function App() {
  return (
    <div className="bg-slate-300 h-screen text-black flex">
      <AuthProvider>
        <Routes>
          <Route path="/Register" element={<Register />} />
          <Route path="/login" element={<Login />} />
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
            path="/Feedback"
            element={
              <ProtectedRoute>
                <Feedback />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Feedback2"
            element={
              <ProtectedRoute>
                <Feedback2 />
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