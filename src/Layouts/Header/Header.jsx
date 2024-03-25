import React, { useState } from "react";
import { Button, HeaderDiv, LogoSection1, SearchDiv } from "./Header.styles";
import { BsPersonCircle, BsArrowLeftShort } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { MdOutlineShoppingCart, MdSearch } from "react-icons/md";
import { Logo } from "../../Assets/Images/Images";

import {
  actionResetAllExpand,
  actionResetViewCartPage,
  actionResetViewProductPage,
  actionViewCartPage,
  actionViewProfilePage,
  actionResetViewProfilePage,
} from "../../State Management/Redux/Ducks/PagesNavigationReducer";
import { useSelector, useDispatch } from "react-redux";
import NavMenuModal from "../../Components/Portals/NavMenuModal/NavMenuModal";

//============ FUNCTIONAL COMPONENT ============
function Header(props) {
  //====== States for Bar Nav ======
  const [NavMenuOpen, setNavMenuOpen] = useState(false);

  //============== Reading State & Dispatch with React-redux Hooks ============
  const expansionStateObj = useSelector((state) => state.pagesNavigation);

  const cartItems = useSelector((state) => state.cartData);

  // ====== Sum of quantities of cart items with array reduce method ======
  const cartItemsCount = cartItems.reduce((accumulator, item) => {
    return accumulator + item.ProductQty;
  }, 0);

  const dispatch = useDispatch();

  //==== Events Handlers =====
  const BarMenuHandler = (e) => {
    setNavMenuOpen(!NavMenuOpen);
  };

  const arrowLeftHandler = (e) => {
    if (
      expansionStateObj.viewPageCategorially === true &&
      expansionStateObj.viewProductPage === true
    ) {
      dispatch(actionResetViewProductPage());
    } else if (
      expansionStateObj.viewPageCategorially === true &&
      expansionStateObj.viewCartPage === true
    ) {
      dispatch(actionResetViewCartPage());
    } else if (
      expansionStateObj.viewPageCategorially === true &&
      expansionStateObj.viewProfilePage === true
    ) {
      dispatch(actionResetViewProfilePage());
    } else {
      dispatch(actionResetAllExpand());
    }
    console.log(expansionStateObj);
  };

  const CartButtonHandler = (e) => {
    dispatch(actionViewCartPage());
    if (NavMenuOpen === true) {
      setNavMenuOpen(false);
    }
  };

  const HomeClickHandler = (e) => {
    dispatch(actionResetAllExpand());
    setNavMenuOpen(!NavMenuOpen);
  };

  const ProfileButtonHandler = (e) => {
    dispatch(actionViewProfilePage());
    if (NavMenuOpen === true) {
      setNavMenuOpen(false);
    }
  };

  // ========== RENDERING OF JSX ==========
  return (
    <HeaderDiv>
      <LogoSection1>
        <section>
          {expansionStateObj.viewPageCategorially ||
          expansionStateObj.viewProductPage ||
          expansionStateObj.viewCartPage ||
          expansionStateObj.viewProfilePage ? (
            <Button onClick={arrowLeftHandler} size={"38px"}>
              <BsArrowLeftShort />
            </Button>
          ) : null}

          <Button onClick={BarMenuHandler}>
            <FaBars />
          </Button>

          <img src={Logo} alt="Logo" />
        </section>

        <section>
          {expansionStateObj.viewPageCategorially ||
          expansionStateObj.viewProductPage ||
          expansionStateObj.viewCartPage ||
          expansionStateObj.viewProfilePage ? (
            <Button size={"29px"}>
              <MdSearch />
            </Button>
          ) : null}

          <Button
            onClick={ProfileButtonHandler}
            isActive={expansionStateObj.viewProfilePage ? true : false}
          >
            <BsPersonCircle />
          </Button>

          <Button
            onClick={CartButtonHandler}
            isActive={expansionStateObj.viewCartPage ? true : false}
          >
            <MdOutlineShoppingCart />
            {cartItems.length ? <span>{cartItemsCount}</span> : null}
          </Button>
        </section>
      </LogoSection1>

      {expansionStateObj.viewPageCategorially ||
      expansionStateObj.viewProductPage ||
      expansionStateObj.viewCartPage ||
      expansionStateObj.viewProfilePage ? null : (
        <SearchDiv>
          <Button>
            <MdSearch />
          </Button>

          <input
            type="text"
            placeholder="search for desserts, cakes or pizza e.t.c"
          />
        </SearchDiv>
      )}

      {NavMenuOpen ? (
        <NavMenuModal
          HomeClickHandler={HomeClickHandler}
          BarMenuHandler={BarMenuHandler}
          NavCartClickHandler={CartButtonHandler  }
          ProfileClickHandler={ProfileButtonHandler}
        />
      ) : null}
    </HeaderDiv>
  );
}

export default Header;
