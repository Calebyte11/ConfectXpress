import React, { useState } from "react";
import {
  ProfileBodyDiv,
  ProfileBottomDiv,
  ProfileFavItemsDiv,
  ProfileMyOrdersDiv,
  ProfilePageContainer,
  ProfileTopDiv,
} from "./ProfilePage.styles";
import { BsHeart, BsPersonCircle } from "react-icons/bs";
import { MdOutlineChevronRight } from "react-icons/md";
import { FaCcMastercard, FaShopify, FaShippingFast } from "react-icons/fa";
import { GiHandTruck } from "react-icons/gi";
import { VscSignOut } from "react-icons/vsc";
import LogInPage from "../LogIn-Page/LogInPage";

function ProfilePage() {
  // ===== Hooks =======
  const [ProfileDetails, setProfileDetails] = useState({
    UserLoggedIn: false,
    ShowLogInPage: false,
    UserData: null,
  });

  const SignInBtnCickHandler = (e) => {
    setProfileDetails({
      UserLoggedIn: false,
      ShowLogInPage: true,
      UserData: null,
    });
  };

  const CloseSignInHandler = (e) => {
    setProfileDetails({
      UserLoggedIn: false,
      ShowLogInPage: false,
      UserData: null,
    });
  };

  const LogInFormBtnHandler = (data) => {
    setProfileDetails({
      UserLoggedIn: true,
      ShowLogInPage: false,
      UserData: data,
    });
    console.log(ProfileDetails);
  };

  // ======== Conditional Rendering of the main or log in/sign up page =======
  if (ProfileDetails.ShowLogInPage === false) {
    return (
      <ProfilePageContainer>
        <ProfileTopDiv>
          <div>
            <button>
              <BsPersonCircle />
            </button>
          </div>

          <div>
            <ul>
              {ProfileDetails.UserData ? (
                <>
                  <li>
                    <h5> Welcome! Calebyte</h5>
                  </li>
                  <li>
                    <p style={{fontSize : '13px'}} >{ProfileDetails.UserData.UserEmail}</p>
                  </li>
                </>
              ) : (
                <>
                  <li onClick={SignInBtnCickHandler}>
                    <span> Sign In/Register </span>
                  </li>
                </>
              )}
            </ul>
          </div>

          <hr />
        </ProfileTopDiv>

        <ProfileBodyDiv>
          <ul>
            <li>
              <ProfileMyOrdersDiv>
                <div>
                  <span>
                    <FaShopify />
                    My Orders
                  </span>

                  <button>view all</button>
                </div>
                <hr />

                <ul>
                  <li>
                    <button>
                      {/* <FaCcAmazonPay/> */}
                      <FaCcMastercard />
                    </button>
                    <div>
                      Unpaid
                      <h6>2</h6>
                    </div>
                  </li>
                  <li>
                    <button>
                      <GiHandTruck />
                    </button>
                    <div>
                      To be Delivered
                      <h6>{"1"}</h6>
                    </div>
                  </li>
                  <li>
                    <button>
                      <FaShippingFast />
                    </button>
                    <div>
                      Dispatched
                      <h6>1</h6>
                    </div>
                  </li>
                </ul>
              </ProfileMyOrdersDiv>
            </li>

            <li>
              <ProfileFavItemsDiv>
                <span>
                  <BsHeart />
                  Favourites
                </span>
                <button>
                  <MdOutlineChevronRight />
                </button>
              </ProfileFavItemsDiv>
            </li>
          </ul>
        </ProfileBodyDiv>

        <ProfileBottomDiv>
          <button style={{ color: "red" }}>
            <span>
              <VscSignOut />
            </span>
            Sign Out
          </button>
        </ProfileBottomDiv>
      </ProfilePageContainer>
    );
  } else if (ProfileDetails.ShowLogInPage === true) {
    return (
      <LogInPage
        LogInFormBtnHandler={(data) => LogInFormBtnHandler(data)}
        CloseSignInHandler={CloseSignInHandler}
      />
    );
  }
}

export default ProfilePage;
