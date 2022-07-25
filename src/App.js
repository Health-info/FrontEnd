import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Menu from "./pages/menu/Menu";
import SignUp from "./pages/signup/SignUp";
import FitMain from "./pages/fitMain/FItMain";
import Background from "./pages/Background/background";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/fit" element={<FitMain />} />
          <Route path="/signup" element={<Background Tag={SignUp} />} />
          <Route path="/login" element={<Background Tag={Login} />} />
          <Route path="/" element={<Background Tag={Menu} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
