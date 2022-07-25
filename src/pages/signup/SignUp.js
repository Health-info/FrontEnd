import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [inputId, setInputId] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputHeight, setInputHeight] = useState("");
  const [inputWeight, setInputWeight] = useState("");

  //유효성 검사

  //Focus용
  const IdInput = useRef();
  const NameInput = useRef();
  const PwInput = useRef();
  const HeightInput = useRef();
  const WeightInput = useRef();

  const submitHandler = () => {
    console.log("login");
    if (inputId.length < 5) {
      IdInput.current.focus();
      return;
    }
    if (inputName.length < 2) {
      NameInput.current.focus();
      return;
    }
    if (inputPw.length < 5) {
      PwInput.current.focus();
      return;
    }
    if (inputHeight.length < 3) {
      HeightInput.current.focus();
      return;
    }
    if (inputWeight.length < 2) {
      WeightInput.current.focus();
      return;
    }
  };

  //input data의 변화 있을 때마다 value값 변경하여 useState
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };
  const handleInputName = (e) => {
    setInputName(e.target.value);
  };
  const handleInputHeight = (e) => {
    setInputHeight(e.target.value);
  };
  const handleInputWeight = (e) => {
    setInputWeight(e.target.value);
  };
  // 체크박스 하나만 선택
  const checkOnlyOne = (checkThis) => {
    const checkboxes = document.getElementsByName("gender");
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false;
      }
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      {/* E-mail */}
      <input
        ref={IdInput}
        type="email"
        name="input_id"
        value={inputId}
        placeholder="Example@mail.com"
        onChange={handleInputId}
      />
      <br />
      <input
        ref={NameInput}
        type="text"
        name="name"
        value={inputName}
        placeholder="Name"
        onChange={handleInputName}
      />
      <br />
      {/* Password */}
      <input
        ref={PwInput}
        type="text"
        name="input_pw"
        value={inputPw}
        placeholder="PassWord"
        onChange={handleInputPw}
      />
      <br />
      {/* Password Check */}
      <input type="text" name="input_pw_check" placeholder="PassWord Check" />
      <br />
      {/* Gender Check */}
      <input
        type="checkbox"
        name="gender"
        value="male"
        onChange={(e) => checkOnlyOne(e.target)}
        // Checkbox로 Focus주는 법 모르겠음
      />{" "}
      Male
      <input
        type="checkbox"
        name="gender"
        value="female"
        onChange={(e) => checkOnlyOne(e.target)}
      />
      Female
      <br />
      <input
        ref={HeightInput}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        placeholder="Height"
        onChange={handleInputHeight}
      />
      <input
        ref={WeightInput}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        placeholder="Weight"
        onChange={handleInputWeight}
      />
      <br />
      {/* Return & Submit  */}
      <Link to="/login">
        <button type="button">Return</button>
      </Link>
      <button type="button" onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
};
export default SignUp;
