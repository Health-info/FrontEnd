import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
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

  //Login버튼 클릭 이벤트
  const onClickLogin = () => {
    if (inputId.length < 5) {
      IdInput.current.focus();
      return;
    }
    if (inputPw.length < 5) {
      PwInput.current.focus();
      return;
    }
  };

  useEffect(() => {
    axios
      .get("/user_inform/login")
      .then((res) => console.log(res))
      .catch();
  });

  return (
    <div>
      <h2>Health-Info</h2>
      <div>
        <label htmlFor="input_id"> ID :</label>
        <input
          ref={IdInput}
          type="text"
          name="input_id"
          value={inputId}
          placeholder="example@mail.com"
          onChange={handleInputId}
        />
      </div>
      <div>
        <label htmlFor="input_pw">PW :</label>
        <input
          ref={PwInput}
          type="text"
          name="input_pw"
          value={inputPw}
          placeholder="Password"
          onChange={handleInputPw}
        />
      </div>
      <button type="button" onClick={onClickLogin}>
        Login
      </button>
      <br />
      <button type="button">Sign up</button>
    </div>
  );
}

export default Login;
