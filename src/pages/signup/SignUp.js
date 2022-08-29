import Style from "./signUp.module.css";
import React, { useRef, useState, useEffect } from "react";
import axios from 'axios';
import {
  emailSendApiUrl,
  emailAuthApiUrl,
  signUpApiUrl,
  loginApiUrl,
} from "../../apiUrl";
axios.defaults.withCredentials = true;

const SignUp = () => {
  const [inputId, setInputId] = useState("");
  const [inputAuthNumber, setInputAuthNumber] = useState("");
  const [emailAuthorized, setEmailAuthorized] = useState(false);//이메일 인증 시 true로 전황
  const [inputName, setInputName] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputPwCheck, setInputPwCheck] = useState("");
  const [inputGender, setInputGender] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [inputHeight, setInputHeight] = useState("");
  const [inputWeight, setInputWeight] = useState("");

  //Ref
  const idInput = useRef();
  const authNumberInput = useRef();
  const nameInput = useRef();
  const pwInput = useRef();
  const pwCheckInput = useRef();
  const ageInput = useRef();
  const heightInput = useRef();
  const weightInput = useRef();

  const [isId, setIsId] = useState(false);/* 이거 뭐야 지훈아? */

  //submit
  const submitHandler = () => {
    //공란 확인
    if (inputId.length == 0) {
      idInput.current.focus();
      alert("이메일을 입력해 주세요");
      return;
    }
    if (inputAuthNumber.length == 0 || !emailAuthorized) {
      authNumberInput.current.focus();
      alert("이메일 인증을 완료해 주세요");
      return;
    }
    if (inputPw.length == "") {
      pwInput.current.focus();
      alert("비밀번호를 확인해 주세요");
      return;
    }
    if (inputPwCheck.length == 0) {
      pwInput.current.focus();
      alert("비밀번호 확인란을 입력해 주세요");
      return;
    }
    if (inputName.length == 0) {
      nameInput.current.focus();
      alert("닉네임을 입력해 주세요");
      return;
    }
    if (inputPwCheck.length == 0) {
      pwCheckInput.current.focus();
      alert("이메일을 입력해 주세요");
      return;
    }
    if (inputAge.length == 0) {
      ageInput.current.focus();
      alert("나이를 입력해 주세요");
      return;
    }
    if (inputGender == "") {
      alert("성별을 입력해 주세요");
      return;
    }
    if (inputWeight.length == 0) {
      weightInput.current.focus();
      alert("몸무게를 입력해 주세요");
      return;
    }
    if (inputHeight.length == 0) {
      heightInput.current.focus();
      alert("키를 입력해 주세요");
      return;
    }

    //비밀번호 동일 확인
    if(inputPw !== inputPwCheck){
      alert("비밀번호를 다시 입력해주세요");
      pwInput.current.focus();
      setInputPw("");
      setInputPwCheck("");
      return;
    }

    //문제가 없는 경우 서버에 send
    axios.post(signUpApiUrl, {
      email: inputId,
      password: inputPw,
      nick: inputName,
      age: inputAge,
      gender: inputGender,
      weight: inputWeight,
      height: inputHeight,
    })
    .then((res) => {
      alert("정상적으로 회원가입 되었습니다.");
      axios.post(loginApiUrl, {
        email: inputId,
        password: inputPw,
      })
      .then((res) => {
        alert("정상적으로 로그인 되었습니다.");
        window.location.href="/";
      })
      .catch((res) => {
        alert("로그인 하지 못했습니다. 다시 로그인 해주세요");
        window.location.href="/login";
      })
    })
    .catch((res) => {
      alert("문제가 발생했습니다.");
      console.log(res);
    })
  };

  //password확인
  const passwordCheckFunc = () => {
    if (inputPw !== inputPwCheck) {
      document.querySelector("#passwordCheck").style.border = "solid 1px rgb(255, 0, 0)";
    }
    else {
      document.querySelector("#passwordCheck").style.border = "solid 1px rgb(200, 200, 200)";
    }
  };
  useEffect(passwordCheckFunc, [inputPwCheck]);

  //return클릭handler
  const returnHandler = () => {
    window.location.href="/login"
  };

  //이메일 인증 클릭 handler
  const emailSendHandler = () =>{
    if(inputId === '') {
      alert("이메일을 입력해 주세요.");
      return;
    }
    if(!inputId.includes("@") || !inputId.includes(".")){
      alert("정확한 이메일형식을 맞춰서 입력해 주세요.");
      return;
    }

    axios.post(emailSendApiUrl,{
      mail: inputId,
    })
    .then((res) => {
      console.log(res);
      alert("인증 메일을 보냈습니다.");
    })
    .catch((res) => {
      console.log(res);
      alert("문제가 발생했습니다.");
    })
  };

  //이메일 인증번호 제출 handler
  const emailAuthHandler = () =>{
    if(inputAuthNumber === '') {
      alert("인증번호를 입력해 주세요");
      return;
    }

    axios.post(emailAuthApiUrl,{
      authNum: Number(inputAuthNumber),
    })
    .then((res) => {
      console.log(res);
      setEmailAuthorized(true);
      alert("인증되었습니다.");
      document.querySelector("#signUpEmail").disabled = true;
      document.querySelector("#emailAuth").disabled = true;
    })
    .catch((res) => {
      console.log(res);
      alert("문제가 발생했습니다.");
    })
  };

  //input data의 변화 있을 때마다 value값 변경하여 useState
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };
  const handleInputAuthNumber = (e) => {
    setInputAuthNumber(e.target.value);
  }
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
    if(e.target.id === 'male'){
      setInputGender(true);
    }
    else{
      setInputGender(false);
    }
  };
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
    <form className={Style.signUpBoxCover}>
      <div className={Style.Cover}>
        <p className={Style.title}>Sign Up</p>
      </div>
      <div className={Style.Cover}>
        <div className={Style.signupMain}>
          {/*이메일*/}
          <div className={Style.Cover}>
            <div className={Style.labelInputArea}>
              <div className={Style.Cover}>
                <label 
                  htmlFor="signUpEmail"
                  className={Style.formLabel}>
                  Email
                </label>
              </div>
              <div className={Style.Cover}>
                <input
                  ref={idInput}
                  className={Style.formInput}
                  id="signUpEmail"
                  type="email"
                  name="input_id"
                  value={inputId}
                  placeholder="Example@mail.com"
                  onChange={handleInputId}
                />
              </div>
              <div className={Style.Cover}>
                <button className={Style.btn} type="button" onClick={emailSendHandler}>인증</button>
              </div>
            </div>
          </div>
          {/*이메일 인증*/}
          <div className={Style.Cover}>
            <div className={Style.labelInputArea}>
              <div className={Style.Cover}>
                <label 
                  htmlFor="emailAuth"
                  className={Style.formLabel}>
                  인증번호
                </label>
              </div>
              <div className={Style.Cover}>
                <input
                  ref={authNumberInput}
                  className={Style.formInput}
                  id="emailAuth"
                  type="email"
                  name="input_id"
                  value={inputAuthNumber}
                  placeholder="인증번호를 입력해 주세요"
                  onChange={handleInputAuthNumber}
                />
              </div>
              <div className={Style.Cover}>
                <button className={Style.btn} type="button" onClick={emailAuthHandler}>제출</button>
              </div>
            </div>
          </div>
          {/*비밀번호*/}
          <div className={Style.Cover}>
            <div className={Style.labelInputArea}>
              <div className={Style.Cover}>
                <label 
                  htmlFor="password"
                  className={Style.formLabel}>
                  password
                </label>
              </div>
              <div className={Style.Cover}>
                <input
                  ref={pwInput}
                  id="password"
                  className={Style.formInput}
                  type="password"
                  name="input_pw"
                  value={inputPw}
                  placeholder="Password"
                  onChange={handleInputPw}
                />
              </div>
              <div />
            </div>
          </div>
          {/*비밀번호 확인*/}
          <div className={Style.Cover}>
            <div className={Style.labelInputArea}>
              <div className={Style.Cover}>
                <label 
                  htmlFor="passwordCheck"
                  className={Style.formLabel}>
                  password Check
                </label>
              </div>
              <div className={Style.Cover}>
                <input
                  ref={pwCheckInput}
                  id="passwordCheck"
                  className={Style.formInput}
                  type="password"
                  name="input_pw_check"
                  placeholder="PassWord Check"
                  value={inputPwCheck}
                  onChange={handleInputPwCheck}
                />
              </div>
              <div />
            </div>
          </div>
          {/*닉네임*/}
          <div className={Style.Cover}>
            <div className={Style.labelInputArea}>
              <div className={Style.Cover}>
                <label 
                  htmlFor="Nickname"
                  className={Style.formLabel}>
                  Nickname
                </label>
              </div>
              <div className={Style.Cover}>
                <input
                  ref={nameInput}
                  id="Nickname"
                  className={Style.formInput}
                  type="text"
                  name="name"
                  value={inputName}
                  placeholder="Name"
                  onChange={handleInputName}
                />
              </div>
            </div>
          </div>
          {/*나이, 성별*/}
          <div className={Style.Cover}>
            <div className={Style.onelineTwoInputArea}>
              {/*나이*/}
              <div className={Style.Cover}>
                <div className={Style.labelInputOnlyArea}>
                  <div className={Style.Cover}>
                    <label 
                      htmlFor="age"
                      className={Style.formLabel}>
                      Age
                    </label>
                  </div>
                  <div className={Style.Cover}>
                    <input
                      ref={ageInput}
                      id="age"
                      className={Style.formInput}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      placeholder="Age"
                      value={inputAge}
                      onChange={handleInputAge}
                    />
                  </div>
                </div>
              </div>
              {/*성별*/}
              <div className={Style.Cover}>
                <div className={Style.labelInputOnlyArea}>
                  <div className={Style.Cover}>
                    <label
                      className={Style.formLabel}>
                      Gender
                    </label>
                  </div>
                  <div className={Style.Cover}>
                    <div className={Style.onelineTwoInputArea}>
                      <div className={Style.Cover}>
                        <div className={Style.formInputRadio}>
                          <input
                            id="male"
                            type="radio"
                            name="gender"
                            onChange={handelInputGender}
                          /><label htmlFor="male">Male</label>
                        </div>
                      </div>
                      <div className={Style.Cover}>
                        <div className={Style.formInputRadio}>
                          <input
                            id="female"
                            type="radio"
                            name="gender"
                            onChange={handelInputGender}
                          /><label htmlFor="female">Female</label>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*몸무게, 키*/}
          <div className={Style.Cover}>
            <div className={Style.onelineTwoInputArea}>
              {/*몸무게*/}
              <div className={Style.Cover}>
                <div className={Style.labelInputOnlyArea}>
                  <div className={Style.Cover}>
                    <label 
                      htmlFor="weight"
                      className={Style.formLabel}>
                      Weight
                    </label>
                  </div>
                  <div className={Style.Cover}>
                    <input
                      ref={weightInput}
                      id="weight"
                      className={Style.formInput}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      placeholder="Weight"
                      value={inputWeight}
                      onChange={handleInputWeight}
                    />
                  </div>
                </div>
              </div>
              {/*키*/}
              <div className={Style.Cover}>
                <div className={Style.labelInputOnlyArea}>
                  <div className={Style.Cover}>
                    <label 
                      htmlFor="height"
                      className={Style.formLabel}>
                      Height
                    </label>
                  </div>
                  <div className={Style.Cover}>
                    <input
                      ref={heightInput}
                      id="height"
                      className={Style.formInput}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      placeholder="Height"
                      value={inputHeight}
                      onChange={handleInputHeight}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.Cover}>
        <div className={Style.buttonCover}>
          <div className={Style.Cover}>
            <button className={Style.btn} type="button" onClick={returnHandler}>Return</button>
          </div>
          <div className={Style.Cover}>
            <button className={Style.btn} type="button" onClick={submitHandler}>Submit</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;