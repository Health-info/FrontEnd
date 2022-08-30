import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Menu from "./pages/menu/Menu";
import SignUp from "./pages/signup/SignUp";
import FitMain from "./pages/fitMain/FitMain";
import { siteUrl } from "./apiUrl";

function App() {
  const check = () => {
    const key = localStorage.getItem("login");
    if(key === null){//로그인 되지 않은 상태이다.
      if(window.location.href === `${siteUrl}/` || window.location.href === `${siteUrl}/fit`){//잘못된 접근
        window.location.href = '/login';//로그인 화면으로 강제 변경
      }
    }
    else{//로그인 된 상태이다.
      if(window.location.href === `${siteUrl}/login` || window.location.href === `${siteUrl}/signup`){
        window.location.href = '/';//메인 화면으로 강제 변경
      }
    }
  };
  useEffect(check, []);

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