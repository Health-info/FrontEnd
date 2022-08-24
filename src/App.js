import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Menu from "./pages/menu/Menu";
import SignUp from "./pages/signup/SignUp";
import FitMain from "./pages/fitMain/FitMain";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/fit" element={<FitMain />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Menu />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;