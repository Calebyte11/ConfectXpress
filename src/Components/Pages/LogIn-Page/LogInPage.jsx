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
  // ====== Hooks and States ======
  const [SeePassword, setSeePassword] = useState(false);
  const [SeeConfirmPassword, setSeeConfirmPassword] = useState(false);

  const [NewAccount, setNewAccount] = useState(false);

  const [LogInFormData, setLogInFormData] = useState({
    UserFullname: "",
    UserPhoneNumber: "",
    UserPassword: "",
    UserConfirmPassword: "",
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
  // ====== log in button handler ====
  const LogInBtnHandler = (e) => {
    LogInFormBtnHandler(LogInFormData);
    console.log(LogInFormData);
  };
  
  // ===== create page nav handler ====
  const NewAccountPageHandler = (e) => {
    setNewAccount(!NewAccount);
  };

  // ======= slash eye handlers =====
  const SeePasswordHandler = (e) => {
    setSeePassword(!SeePassword);
    console.log('wfgyuwihwgy7u');
  };

  const SeeConfirmPasswordHandler = (e) => {
    setSeeConfirmPassword(!SeeConfirmPassword);

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
        {/* ====conditional rendering for name_object ==== */}
        {NewAccount ? (
          <p>
            <input
              name="UserFullname"
              value={LogInFormData.UserFullname}
              onChange={FormChangeHandler}
              type="text"
              placeholder="First and Last name"
            />
          </p>
        ) : null}

        <p>
          <input
            name="UserPhoneNumber"
            value={LogInFormData.UserPhoneNumber}
            onChange={FormChangeHandler}
            type="tel"
            placeholder="Phone Number"
          />
        </p>

        <p>
          <input
            name="UserPassword"
            value={LogInFormData.UserPassword}
            onChange={FormChangeHandler}
            type={SeePassword ? "text" : "password"}
            placeholder={NewAccount ? "At least 8 characters" : "Password"}
          />
          <span onClick={SeePasswordHandler}>
            <FaRegEyeSlash />
          </span>
        </p>

        {/* ====conditional rendering for confirm_password_object ==== */}
        {NewAccount ? (
          <p>
            <input
              name="UserConfirmPassword"
              value={LogInFormData.UserConfirmPassword}
              onChange={FormChangeHandler}
              type={SeeConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
            />
            <span onClick={SeeConfirmPasswordHandler}>
              <FaRegEyeSlash />
            </span>
          </p>
        ) : null}

        <LogInButton onClick={LogInBtnHandler}>
          {NewAccount ? "Create Account" : "Log In"}
        </LogInButton>

        {NewAccount ? null : (
          <span
            style={{
              fontSize: "16px",
              fontFamily: "inherit",
              color: "rgb(42, 115, 204)",
            }}
          >
            Forgotten Password?
          </span>
        )}

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

        {NewAccount ? (
          <span style={{ fontSize: "16px", fontFamily: "inherit" }}>
            Already have an account?{" "}
            <button onClick={NewAccountPageHandler}
              style={{
                color: "rgb(42, 115, 204)",
                border: "none",
                background: "transparent",
                fontSize: "16px",
                fontFamily: "inherit",
                textDecoration: "underline",
              }}
            >
              Log In
            </button>
          </span>
        ) : (
          <span style={{ fontSize: "16px", fontFamily: "inherit" }}>
            Don't have an account?{" "}
            <button onClick={NewAccountPageHandler}
              style={{
                color: "rgb(42, 115, 204)",
                border: "none",
                background: "transparent",
                fontSize: "16px",
                fontFamily: "inherit",
                textDecoration: "underline",
              }}>
              Create an account
            </button>
          </span>
        )}
      </LogInFormDiv>
    </LogInPageDiv>
  );
}

export default LogInPage;
