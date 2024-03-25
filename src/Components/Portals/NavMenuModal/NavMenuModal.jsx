import React from "react";
import {
  CloseNavBtn,
  MenuBodyDiv,
  MenuFooterDiv,
  MenuTopDiv,
  NavMenuDiv,
} from "./NavMenuModal.styles";
import { BsExclamationTriangle, BsHeart, BsPersonCircle, BsXLg } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";

import { OverlayDiv } from "../AddToCartModal/AddToCartModal.styles";
import { createPortal } from "react-dom";
import { MdOutlineShoppingCart, MdPhoneInTalk } from "react-icons/md";
import { FaShopify } from "react-icons/fa";
import { VscSignOut } from "react-icons/vsc";

//========= FUNCTIONAL COMPONENT =========
function NavMenuModal(props) {
  // ======= Props destructuring ========
  const { BarMenuHandler, HomeClickHandler, NavCartClickHandler, ProfileClickHandler } = props
  //===== The Root for the Portals  =====
  const PortalRoot = document.getElementById("portals-root");

  return createPortal(
    <OverlayDiv>
      <NavMenuDiv>
        <MenuTopDiv>
          <CloseNavBtn onClick={BarMenuHandler}>
            <BsXLg />
          </CloseNavBtn>
        </MenuTopDiv>

        <MenuBodyDiv>
          <hr />
          <div>
            <button>
              <BsPersonCircle />
            </button>
            <span> Hello! Calebyte109</span>
          </div>
          <hr />

          <ul>
            <li onClick={HomeClickHandler}>
              <span>
                <IoHomeOutline />
              </span>
              Home
            </li>
            <hr />
            <li onClick={NavCartClickHandler} >
              <span>
                <MdOutlineShoppingCart />
              </span>
              My Cart
            </li>
            <hr />
            <li>
              <span>
                <FaShopify />
              </span>
              My Orders
            </li>
            <hr />
            <li>
              <span>
                <BsHeart />
              </span>
              Favourites
            </li>
            <hr />
            <li onClick={ProfileClickHandler} >
              <span>
                <BsPersonCircle />
              </span>
              Profile
            </li>
            <hr />
          </ul>
        </MenuBodyDiv>

        <MenuFooterDiv>
          <ul>
            <hr />
            <li>
              <span>
                <MdPhoneInTalk />
              </span>
              Contact Us
            </li>
            <hr />
            <li>
              <span style={{ color: 'orange' }}>
                <BsExclamationTriangle />
              </span>
              Help center
            </li>
            <hr />
            <li style={{ color: 'red' }}>
              <span>
                <VscSignOut />
              </span>
              Sign Out
            </li>
            <hr />
          </ul>
        </MenuFooterDiv>
      </NavMenuDiv>
    </OverlayDiv>,

    PortalRoot
  );
}

export default NavMenuModal;
