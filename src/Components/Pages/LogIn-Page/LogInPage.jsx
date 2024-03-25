import React, { useState } from "react";
import {
  LogInButton,
  LogInFormDiv,
  LogInPageDiv,
  LogInTopDiv,
  WithGoogleBtn,
} from "./LogInPage.styles";
import {
  // FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa";
import { GoogleIcon, Logo } from "../../../Assets/Images/Images";
import { CloseNavBtn } from "../../Portals/NavMenuModal/NavMenuModal.styles";
import { BsXLg } from "react-icons/bs";

function LogInPage(props) {
  // ====== Hooks =======
  const [LogInFormData, setLogInFormData] = useState({
    UserEmail: "",
    UserPassword: "",
  });

  // ====== props destructuring ======
  const { LogInFormBtnHandler, CloseSignInHandler } = props;

  // ====== form and event handlers =====
  const FormChangeHandler = (e) => {
    setLogInFormData({
      ...LogInFormData,
      [e.target.name]: e.target.value,
    });
  };

  const LogInBtnHandler = (e) =>{
    LogInFormBtnHandler(LogInFormData);
    console.log(LogInFormData);
  }


  return (
    <LogInPageDiv>
      <LogInTopDiv>
        <CloseNavBtn onClick={CloseSignInHandler}>
          <BsXLg />
        </CloseNavBtn>

        <img src={Logo} style={{ height: `120px`, width: `221px` }} alt="" />
        <span style={{ fontSize: "19px" }}>Welcome to ConfectXpress</span>
      </LogInTopDiv>

      <LogInFormDiv>
        <p>
          <input
            name="UserEmail"
            value={LogInFormData.UserEmail}
            onChange={FormChangeHandler}
            type="email"
            placeholder="Email or Phone Number"
          />
        </p>

        <p>
          <input
            name="UserPassword"
            value={LogInFormData.UserPassword}
            onChange={FormChangeHandler}
            type="password"
            placeholder="Password"
          />
          <span>
            <FaRegEyeSlash />
          </span>
        </p>

        <LogInButton onClick={LogInBtnHandler}>Log In</LogInButton>

        <span
          style={{
            fontSize: "16px",
            fontFamily: "inherit",
            color: "rgb(42, 115, 204)",
          }}
        >
          Forgotten Password?
        </span>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          <hr style={{ width: "35%", height: "1px" }} />
          <span style={{ fontSize: "16px" }}>Or</span>
          <hr style={{ width: "35%" }} />
        </div>

        <WithGoogleBtn>
          <img src={GoogleIcon} alt="" />
          Continue with Google
        </WithGoogleBtn>

        <span style={{ fontSize: "16px", fontFamily: "inherit" }}>
          Don't have an account?{" "}
          <a href="sign Up" style={{ color: "rgb(42, 115, 204)" }}>
            Sign Up
          </a>
        </span>
      </LogInFormDiv>
    </LogInPageDiv>
  );
}

export default LogInPage;
