import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const IdInput = useRef();
  const PwInput = useRef();
  //input data의 변화 있을 때마다 value값 변경하여 useState
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  //Login 클릭
  const submitHandler = () => {
    console.log("login")
    if (inputId.length < 5) {
      IdInput.current.focus();
      return;
    }
    if (inputPw.length < 5) {
      PwInput.current.focus();
      return;
    }
  };

  return (
    <div className="contaner">
      <div className="row">
        <div className="col-12 position-relative my-5">
          <h2 className="fw-bolder fs-1 position-absolute top-50 start-50 translate-middle">Health-Info</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <form className="container bg-primary w-50 my-5 border border-dark-5 rounded-3">
            <div className="row">
              <div className="col-2 position-relative">
                <p className="fw-bolder position-absolute top-50 start-50 translate-middle">ID</p>
              </div>
              <div className="col-10 my-3">
                <input
                  className="form-control shadow-lg"
                  ref={IdInput}
                  type="text"
                  name="input_id"
                  value={inputId}
                  placeholder="example@mail.com"
                  onChange={handleInputId}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-2 position-relative">
                <p className="fw-bolder position-absolute top-50 start-50 translate-middle">PW</p>
              </div>
              <div className="col-10 my-3">
                <input
                  className="form-control shadow-lg"
                  ref={PwInput}
                  type="text"
                  name="input_pw"
                  value={inputPw}
                  placeholder="Password"
                  onChange={handleInputPw}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-6 position-relative">
          <button type="button" className="btn btn-info position-absolute top-50 end-0 translate-middle-y mx-5 shadow-lg border border-dark" onClick={submitHandler}>Login</button>
        </div>
        <div className="col-6 position-relative">
          <Link to="/">
            <button type="button" className="btn btn-info position-absolute top-50 start-0 translate-middle-y mx-5 shadow-lg border border-dark">Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
