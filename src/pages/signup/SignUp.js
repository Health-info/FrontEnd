import Style from "./signUp.module.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [inputId, setInputId] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputPwCheck, setInputPwCheck] = useState("");
  const [inputGender, setInputGender] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [inputHeight, setInputHeight] = useState("");
  const [inputWeight, setInputWeight] = useState("");
  
  //submit
  const submitHandler = () => {
    console.log("sign Up");
  };

  //password확인
  const passwordCheckFunc = () => {
    if(inputPw !== inputPwCheck){
      if(!document.querySelector("#passwordCheckInput").className.includes(' is-invalid')){
        document.querySelector("#passwordCheckInput").className += ' is-invalid';
      }
    }
    else{
      if(document.querySelector("#passwordCheckInput").className.includes(' is-invalid')){
        document.querySelector("#passwordCheckInput").className = document.querySelector("#passwordCheckInput").className.replace(' is-invalid', '');
      }
    }
  };
  useEffect(passwordCheckFunc, [inputPwCheck]);

  //input data의 변화 있을 때마다 value값 변경하여 useState
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };
  const handleInputName = (e) => {
    setInputName(e.target.value);
  };
  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };
  const handleInputPwCheck = (e) => {
    setInputPwCheck(e.target.value);
  };
  const handelInputGender = (e) => {
    setInputGender(e.target.id);
  }
  const handleInputAge = (e) => {
    setInputAge(e.target.value);
  };
  const handleInputHeight = (e) => {
    setInputHeight(e.target.value);
  };
  const handleInputWeight = (e) => {
    setInputWeight(e.target.value);
  };

  return (
    <div className={Style.field}>
      <form>
        <h1>Sign Up</h1>
        {/* E-mail */}
        <div>
          <input
            className="basic"
            type="email"
            name="input_id"
            value={inputId}
            placeholder="Example@mail.com"
            onChange={handleInputId}
          />
        </div>
        <input
          className="basic"
          type="text"
          name="name"
          value={inputName}
          placeholder="Name"
          onChange={handleInputName}
        />
        <br />
        {/* Password */}
        <input
          className="basic"
          type="text"
          name="input_pw"
          value={inputPw}
          placeholder="PassWord"
          onChange={handleInputPw}
        />
        <br />
        {/* Password Check */}
        <input
          id="passwordCheckInput"
          className="basic"
          type="text"
          name="input_pw_check"
          placeholder="PassWord Check"
          value={inputPwCheck}
          onChange={handleInputPwCheck}
        />
        <br />
        {/* Gender Check */}
        <label htmlFor="male">Male</label>
        <input
          id="male"
          type="radio"
          name="gender"
          onChange={handelInputGender}
        />
        <label htmlFor="female">Female</label>
        <input
          id="female"
          type="radio"
          name="gender"
          onChange={handelInputGender}
        />
        {/* Age Check */}
        <input
          className="age"
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          placeholder="Age"
          value={inputAge}
          onChange={handleInputAge}
        />
        {/* Height Check */}
        <input
          className="height"
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          placeholder="Height"
          value={inputHeight}
          onChange={handleInputHeight}
        />
        {/* Weight Check */}
        <input
          className="weight"
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          placeholder="Weight"
          value={inputWeight}
          onChange={handleInputWeight}
        />
        {/* Return & Submit  */}
        <Link to="/login">
          <button className="return" type="button">
            Return
          </button>
        </Link>
        <button className="submit" type="button" onClick={submitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default SignUp;
