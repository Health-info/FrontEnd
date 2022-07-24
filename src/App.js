//import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteTest from "./components/RouteTest";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import SignUp from "./pages/SignUp";
import Fit_main from "./pages/FIt_main";
import Chatting from "./pages/Chatting";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        {/* <RouteTest /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
