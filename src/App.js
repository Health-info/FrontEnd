import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Menu from "./pages/menu/Menu";
import SignUp from "./pages/signup/SignUp";
import FitMain from "./pages/fitMain/FitMain";
import {
  siteUrl,
} from "./apiUrl";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const loginFunction = () => {
    setIsLogin(true);
  };
  const logoutFunction = () => {
    setIsLogin(false);
  };
  const notLogined = () =>{
    if(isLogin){//로그인 된 상태인 경우, '/fit'과 '/'만 이용가능하다.
      if(window.location.href === `${siteUrl}/login` || window.location.href === `${siteUrl}/signup`){
        window.location.href = `${siteUrl}/`;
      }
    }
    else{//로그인 되지 않은 상태인 경우, '/login'과 '/signup'만 이용가능하다.
      if(window.location.href === `${siteUrl}/` || window.location.href === `${siteUrl}/fit`){
        window.location.href = `${siteUrl}/login`;
      }
    }
  };
  useEffect(notLogined, [isLogin]);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/fit" element={<FitMain />} />
          <Route path="/signup" element={<SignUp loginFunction={loginFunction} />} />
          <Route path="/login" element={<Login loginFunction={loginFunction} />} />
          <Route path="/" element={<Menu logoutFunction={logoutFunction} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;