// src/routers/routes.jsx
import { Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Registrarse from '../Pages/Registrarse';
import Home from "../Pages/Home.jsx";     
import RecuperearContrasena from '../Pages/RecuperarContrasena';
 

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registrarse" element={<Registrarse />} />
      <Route path="/recuperarcontrasena" element={<RecuperearContrasena />} />
 
    </Routes>
  );
}