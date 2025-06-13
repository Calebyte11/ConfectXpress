import React from "react";
import {
  CatalogueCard,
  ReviewCards,
  SellerInfoCard,
  SellerProfileArrowLeftBtn,
  SellerProfileBodyDiv,
  SellerProfileCatalogDiv,
  SellerProfileContainer,
  SellerProfileHeader,
  SellerProfileInfoDiv,
  SellerProfileNameDiv,
  SellerProfileReviewDiv,
  ViewAllBtn,
} from "./SellerProfilePage.styles";
import { BsArrowLeftShort, BsStarFill } from "react-icons/bs";
import { MdOutlineChevronRight } from "react-icons/md";
import {
  NumOfRating,
  ProductName,
  RatingButton,
} from "../Product-Page/ProductPage.styles";
import { PepperoniPizza, ChinChin, CoconutCandy, Burger, Doughs, Pizza1, Sharwarma } from "../../../Assets/Images/Images";

// ===================== JSX FUNCTIONAL COMPONENT ========================

function SellerProfilePage(props) {
  // ====== Props destructuring ======
  const { CloseSellerPage } = props;

  // ======= Hooks ====
  // const dispatch = useDispatch();

  // const DataFromRedux = useSelector((state) => state.pagesNavigation)

  // ======= Event Handlers =====
  const SellerProfileArrowLeftBtnHandler = () => {
    CloseSellerPage();
  };

  return (
    <SellerProfileContainer>
      <SellerProfileHeader>
        <SellerProfileArrowLeftBtn onClick={SellerProfileArrowLeftBtnHandler}>
          <BsArrowLeftShort />
        </SellerProfileArrowLeftBtn>
        Seller Profile
      </SellerProfileHeader>

      <SellerProfileBodyDiv>
        <SellerProfileNameDiv>
          <ProductName>
            <h4>Magic Tasty Treats</h4>
            <h6>brand statements...</h6>
          </ProductName>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "40%",
            }}
          >
            <RatingButton>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </RatingButton>

            <NumOfRating>819 ratings</NumOfRating>
          </div>
        </SellerProfileNameDiv>
        <hr style={{ width: "85%" }} />

        <SellerProfileInfoDiv>
          Seller Information
          <SellerInfoCard>
            <ul>
              <li>Country : Nigeria</li>
              <li>State : Enugu</li>
              <li>City : Nsukka</li>
              <li>Succesful sales : 127</li>
            </ul>
          </SellerInfoCard>
        </SellerProfileInfoDiv>

        <SellerProfileReviewDiv>
          <div>
            Customer's Reviews (156)
            <ViewAllBtn>
              view all <MdOutlineChevronRight />
            </ViewAllBtn>
          </div>

          <ul>
            <li>
              <ReviewCards>
                <div>
                  <img src={PepperoniPizza} alt="sdgwhb" />

                  <h6>
                    "Delivery was fast enough and product was tasty too"
                  </h6>
                </div>
                <hr style={{ width: "90%" }} />

                <section>
                  <h4 style={{ fontWeight: "400" }}>By Username</h4>
                </section>
              </ReviewCards>
            </li>
            <li>
              <ReviewCards>
                <div>
                  <img src={CoconutCandy} alt="sdgwhb" />

                  <h6>
                    "Delivery was fast enough and product was tasty too"
                  </h6>
                </div>

              
                <hr style={{ width: "90%" }} />

                <section>
                  <h4 style={{ fontWeight: "400" }}>By Username</h4>
                </section>
              </ReviewCards>
            </li>
            <li>
              <ReviewCards>
                <div>
                  <img src={Doughs} alt="sdgwhb" />

                  <h6>
                    "Delivery was fast enough and product was tasty too"
                  </h6>
                </div>
                <hr style={{ width: "90%" }} />

                <section>
                  <h4 style={{ fontWeight: "400" }}>By Username</h4>
                </section>
              </ReviewCards>
            </li>
          </ul>
        </SellerProfileReviewDiv>

        <SellerProfileCatalogDiv>
          <div>
            Catalogue
            <ViewAllBtn>
              view all <MdOutlineChevronRight />
            </ViewAllBtn>
          </div>

          <ul>
            <li key={ChinChin}>
              <CatalogueCard>
                <img
                  src={ChinChin}
                  // onClick={(e) => {
                  //   ProductImgClickHandler(eachItem);
                  // }}
                  alt="Cakes"
                />

                <div>
                  <h4>Catalogue Product</h4>
                  <h6>Product's category</h6>
                </div>

                <div>
                  <h4>₦3,300</h4>
                  <h6
                    style={{ textDecoration: "line-through", fontSize: "12px" }}
                  >
                    ₦4,200
                  </h6>
                </div>
              </CatalogueCard>
            </li>
            <li key={Burger}>
              <CatalogueCard>
                <img
                  src={Burger}
                  // onClick={(e) => {
                  //   ProductImgClickHandler(eachItem);
                  // }}
                  alt="Cakes"
                />

                <div>
                  <h4>Catalogue Product</h4>
                  <h6>Product's category</h6>
                </div>

                <div>
                  <h4>₦3,300</h4>
                  <h6
                    style={{ textDecoration: "line-through", fontSize: "12px" }}
                  >
                    ₦4,200
                  </h6>
                </div>
              </CatalogueCard>
            </li>
            <li key={ChinChin}>
              <CatalogueCard>
                <img
                  src={ChinChin}
                  // onClick={(e) => {
                  //   ProductImgClickHandler(eachItem);
                  // }}
                  alt="Cakes"
                />

                <div>
                  <h4>Catalogue Product</h4>
                  <h6>Product's category</h6>
                </div>

                <div>
                  <h4>₦3,300</h4>
                  <h6
                    style={{ textDecoration: "line-through", fontSize: "12px" }}
                  >
                    ₦4,200
                  </h6>
                </div>
              </CatalogueCard>
            </li>
            <li key={Pizza1}>
              <CatalogueCard>
                <img
                  src={Pizza1}
                  // onClick={(e) => {
                  //   ProductImgClickHandler(eachItem);
                  // }}
                  alt="Cakes"
                />

                <div>
                  <h4>Catalogue Product</h4>
                  <h6>Product's category</h6>
                </div>

                <div>
                  <h4>₦3,300</h4>
                  <h6
                    style={{ textDecoration: "line-through", fontSize: "12px" }}
                  >
                    ₦4,200
                  </h6>
                </div>
              </CatalogueCard>
            </li>
            <li key={Sharwarma}>
              <CatalogueCard>
                <img
                  src={Sharwarma}
                  // onClick={(e) => {
                  //   ProductImgClickHandler(eachItem);
                  // }}
                  alt="Cakes"
                />

                <div>
                  <h4>Catalogue Product</h4>
                  <h6>Product's category</h6>
                </div>

                <div>
                  <h4>₦3,300</h4>
                  <h6
                    style={{ textDecoration: "line-through", fontSize: "12px" }}
                  >
                    ₦4,200
                  </h6>
                </div>
              </CatalogueCard>
            </li>
          </ul>
        </SellerProfileCatalogDiv>
      </SellerProfileBodyDiv>
    </SellerProfileContainer>
  );
}

export default SellerProfilePage;
