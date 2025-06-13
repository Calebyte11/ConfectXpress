import React from "react";
import {
  ItalianCursine,
  Burger,
  Cupcake,
  ChinChin,
  CoconutCandy,
  MeatPie,
  JamDough,
} from "../../../../Assets/Images/Images.js";
import { TopDealsContainer } from "./TopDealsList.styles";

import { useDispatch } from "react-redux";
import {
  actionViewPageCategorially,
  actionViewProductPage,
} from "../../../../State Management/Redux/Ducks/PagesNavigationReducer";
import { MdOutlineChevronRight } from "react-icons/md";

const TopDealsArr = [
  { ImgSrc: ItalianCursine, ImgName: "Pizza Pepperoni" },
  { ImgSrc: Burger, ImgName: "Big Mac" },
  { ImgSrc: Cupcake, ImgName: "Cupcake" },
  { ImgSrc: ChinChin, ImgName: "Chin Chin" },
  { ImgSrc: CoconutCandy, ImgName: "Coconut Candy" },
  { ImgSrc: MeatPie, ImgName: "Meat Pie" },
  { ImgSrc: JamDough, ImgName: "Jam Doughnut" },
];



// ================THE FUNCTIONAL COMPONENT =============
function TopDealsList(props) {
  const activeStatus = {
    IsTopDealsPageActive: true,
  };

  //========== Reading State &  Dispatch with React-redux Hooks ==========
  const dispatch = useDispatch();

  // ======= Event Handlers =======
  const handleShowAll = (popularArr, activeStatus) => {
    dispatch(actionViewPageCategorially(popularArr, activeStatus));
  };

  const ProductImgClickHandler = (eachItem) => {
    dispatch(actionViewProductPage(eachItem));
  };

  // ========== CONDITIONAL RENDERING ===============
  return (
    <TopDealsContainer>
      <section>
        <span>Top Deals</span>
        <button onClick={() => handleShowAll(TopDealsArr, activeStatus)}>
          Show all
          <MdOutlineChevronRight/>
        </button>
      </section>

      <ul>
        {TopDealsArr.map((eachItem) => {
          return (
            <li key={eachItem.ImgSrc}>
              <h5>-40%</h5>
              <img
                src={eachItem.ImgSrc}
                onClick={(e) => {
                  ProductImgClickHandler(eachItem);
                }}
                alt="Cakes"
              />

              <div>
                <section>
                  <div>
                    <h4>{eachItem.ImgName}</h4>
                    <h6>category</h6>
                  </div>
                </section>

                <section>
                  <div>
                    <h4>₦3,300</h4>
                    <h5>₦4,300</h5>
                  </div>
                </section>
              </div>
            </li>
          );
        })}
      </ul>
    </TopDealsContainer>
  );
}

export default TopDealsList;
