import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Style from "./login.module.css";

const loginApiUrl = "http://www.naver.com";

function Login() {
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
  const submitHandler = () => {
    console.log("login");
    if (inputId === "" || inputPw === "") return;

    axios
      .post(loginApiUrl, {
        email: inputId,
        password: inputPw,
      })
      .then((response) => {
        console.log(response);
        //        window.location.href = '/';
      })
      .catch((response) => {
        console.log(response);
      });
  };

  return (
    <div className={Style.cover}>
      <div className={Style.titleCover}>
        <h2 className={Style.title}>Health-Info</h2>
      </div>
      <div className={Style.formCover}>
        <form className={Style.loginform}>
          <div className={Style.formLabelCover}>
            <p className={Style.formLabel}>ID</p>
          </div>
          <input
            className="form-control shadow-lg"
            type="email"
            name="input_id"
            value={inputId}
            placeholder="Example@mail.com"
            onChange={handleInputId}
          />
          <div className={Style.formLabelCover}>
            <p className={Style.formLabel}>PW</p>
          </div>
          <input
            className="form-control shadow-lg"
            type="password"
            name="input_pw"
            value={inputPw}
            placeholder="Password"
            onChange={handleInputPw}
          />
        </form>
      </div>
      <div className={Style.buttonCover}>
        <div />
        <div className={Style.btnCover}>
          <button
            type="button"
            className={Style.loginBtn}
            onClick={submitHandler}
          >
            Login
          </button>
        </div>
        <div className={Style.btnCover}>
          <Link to="/signup">
            <button type="button" className={Style.signupBtn}>
              Sign up
            </button>
          </Link>
        </div>
        <div />
      </div>
    </div>
  );
}

export default Login;
