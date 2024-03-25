import React from "react";
import {
  SellerProfileArrowLeftBtn,
  SellerProfileContainer,
  SellerProfileHeader,
} from "./SellerProfilePage.styles";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector} from "react-redux";
import { actionResetViewSellerProfile, actionViewProductPage } from "../../../State Management/Redux/Ducks/PagesNavigationReducer";

function SellerProfilePage() {
  // ======= Hooks ====
  const dispatch = useDispatch();



  const DataFromRedux = useSelector((state) => state.pagesNavigation)

  // ======= Event Handlers =====
  const SellerProfileArrowLeftBtnHandler = (dataFor) => {
    dispatch(actionResetViewSellerProfile());
    dispatch(actionViewProductPage())
    console.log(DataFromRedux.cachedDataForProductPage);
  };

  return (
    <SellerProfileContainer>
      <SellerProfileHeader>
        <SellerProfileArrowLeftBtn onClick={SellerProfileArrowLeftBtnHandler}>
          <BsArrowLeft />
        </SellerProfileArrowLeftBtn>
        Seller Profile
      </SellerProfileHeader>
    </SellerProfileContainer>
  );
}

export default SellerProfilePage;
