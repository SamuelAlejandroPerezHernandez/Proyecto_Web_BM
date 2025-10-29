import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Pages/Login.jsx";   
import Home from "../Pages/Home.jsx";     
import Perfil from "../Pages/Perfil.jsx"; 


export default function MyRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}
