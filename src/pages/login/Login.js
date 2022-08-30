import axios from "axios";
import React, { useState } from "react";
import Style from "./login.module.css";
import { loginApiUrl } from "../../apiUrl";

function Login(isLogin) {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  //input data의 변화 있을 때마다 value값 변경하여 useState
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };
  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  //Login 클릭
  const submitHandler = (event) => {
    event.preventDefault();
    if (inputId === "" || inputPw === "") {
      alert("아이디나 비밀번호를 입력해주십시오.")
      return;
    }

    axios
      .post(loginApiUrl, {
        email: inputId,
        password: inputPw,
      })
      .then((response) => {
        console.log(response);
        isLogin = true;
        window.location.href = '/';
      })
      .catch((response) => {
        console.log(response);
        alert("오류 발생. 다시 로그인해주시기 바랍니다.");
      });
  };

  //Sign Up 버튼 클릭 handler
  const signUpHandler = () => {
    window.location.href='/signup'
  }

  return (
    <div className={Style.loginBoxCover}>
      <div />
      <div className={Style.Cover}>
        <form className={Style.loginCover} onSubmit={submitHandler}>
          <div className={Style.Cover}>
            <p className={Style.title}>Login</p>
          </div>
          <div className={Style.Cover}>
            <div className={Style.loginform}>
              <div className={Style.Cover}>
                <label htmlFor="loginId" className={Style.formLabel}>ID</label>
              </div>
              <div className={Style.Cover}>
                <input
                  className={Style.formInput}
                  id="loginId"
                  type="email"
                  name="input_id"
                  value={inputId}
                  placeholder="Example@mail.com"
                  onChange={handleInputId}
                />
              </div>
              <div className={Style.Cover}>
                <label htmlFor="loginPassword" className={Style.formLabel}>PW</label>
              </div>
              <div className={Style.Cover}>
                <input
                  className={Style.formInput}
                  id="loginPassword"
                  type="password"
                  name="input_pw"
                  value={inputPw}
                  placeholder="Password"
                  onChange={handleInputPw}
                />
              </div>
            </div>
          </div>
          <div className={Style.Cover}>
            <div className={Style.buttonCover}>
              <div className={Style.Cover}>
                <button type="button" className={Style.btn} onClick={signUpHandler}>Sign Up</button>
              </div>
              <div className={Style.Cover}>
                <button type="submit" className={Style.btn} onClick={submitHandler}>LogIn</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div />
    </div>
  );
}

export default Login;
