import React from "react";
import { HomeDiv } from "./Homepage.styles";
import Body from "../../../../Layouts/Body/Body";
import Header from "../../../../Layouts/Header/Header";
import ProductPage from "../../Product-Page/ProductPage";

import { useSelector } from "react-redux";
import ProfilePage from "../../Profile-Page/ProfilePage";
import CartPage from "../../Cart-Page/CartPage";
import SellerProfilePage from "../../SellerProfilePage/SellerProfilePage";

function Homepage() {
  // ========= useState Hook ========
  const navigationStateObj = useSelector((state) => state.pagesNavigation);


  // ======== Conditional Rendering ========
  if (navigationStateObj.viewProductPage === true) {
    return (
      <HomeDiv>
        <Header />
        <ProductPage
          isFromHomepage={true}
          dataForProductPage={navigationStateObj.productPageDetails.pageData}
        />
      </HomeDiv>
    );
  } else if (navigationStateObj.viewProductPage === false) {
    return (
      <HomeDiv>
        <Header />
        <Body />
      </HomeDiv>
    );
  } else if (navigationStateObj.viewCartPage === true) {
    return (
      <HomeDiv>
        <Header />
        <CartPage />
      </HomeDiv>
    );
  } else if (navigationStateObj.viewProfilePage === true) {
    return (
      <HomeDiv>
        <Header />
        <ProfilePage />
      </HomeDiv>
    );
  } else if (navigationStateObj.viewSellerProfile === true){
    return (
      <SellerProfilePage/>
    )
  }
}

export default Homepage;
