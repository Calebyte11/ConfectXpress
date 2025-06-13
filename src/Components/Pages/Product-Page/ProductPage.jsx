import React, { useState } from "react";
// ======= importing uuid for creating id =========
import { v4 as uuid } from "uuid";
import {
  BuyButton,
  DetailsDiv,
  FavouriteButton,
  FlexDivRow,
  ImageDiv,
  NumOfRating,
  PriceDiv,
  ProductContainer,
  ProductFooter,
  ProductName,
  RatingButton,
  SoldByDiv,
} from "./ProductPage.styles";
import {
  MdOutlineAddShoppingCart,
  MdOutlineChevronRight,
  MdStore,
} from "react-icons/md";
import { BsStarFill, BsHeart, BsHeartFill } from "react-icons/bs";
import AddToCartModal from "../../Portals/AddToCartModal/AddToCartModal";
import { useDispatch } from "react-redux";
import { actionAddToCart } from "../../../State Management/Redux/Ducks/CartReducer";
import SellerProfilePage from "../SellerProfilePage/SellerProfilePage";

function ProductPage(props) {
  // ======= UseStates =========
  const [Liked, setLiked] = useState(false);
  const [AddBtnClick, setAddBtnClick] = useState(false);
  const [ProductQty, setProductQty] = useState(1);
  const [ShowSellerPage, setShowSellerPage] = useState(false);

  // ======= React-redux Hooks for Global State & Actions ======
  const dispatch = useDispatch();

  // const CartData = useSelector((state) => state.cartData);

  //======= Props Accessing and Destructring =======
  const PageData = props.dataForProductPage;
  console.log(PageData);

  // ========== Event Handlers ===========
  const LikedHandler = (e) => {
    setLiked(!Liked);
    console.log("Like!!!");
  };

  const AddToCartHandler = () => {
    setAddBtnClick(!AddBtnClick);

    if (AddBtnClick) {
      dispatch(
        actionAddToCart({
          ProductImgSrc: PageData.ImgSrc,
          ProductImgName: PageData.ImgName,
          ProductQty: ProductQty,
          ProductId: uuid(),
        })
      );
    }
  };

  const CloseHandler = (e) => {
    setAddBtnClick(false);
  };

  const MinusHandler = (e) => {
    if (ProductQty > 1) {
      setProductQty(ProductQty - 1);
    }
  };

  const PlusHandler = (e) => {
    if (ProductQty < 20) {
      setProductQty(ProductQty + 1);
    }
  };

  const SoldByClickHandler = (data) => {
    setShowSellerPage(!ShowSellerPage);
  };

  // ============ JSX RENDERING ===============
  if (ShowSellerPage === false) {
    return (
      <ProductContainer isFromHomepage={props.isFromHomepage}>
        <ImageDiv>
          <img src={PageData.ImgSrc || PageData.ProductImgSrc} alt="Product Img" />
        </ImageDiv>

        <DetailsDiv>
          <section>
            <ProductName>
              <h4>{PageData.ImgName}</h4>
              <h6>category of the product</h6>
            </ProductName>

            <FavouriteButton liked={Liked} onClick={LikedHandler}>
              {Liked ? <BsHeartFill /> : <BsHeart />}
            </FavouriteButton>
          </section>

          <PriceDiv>
            <h4>₦ 3,000</h4>
            <h5>₦ 4,500</h5>
            <h6>-40%</h6>
          </PriceDiv>

          <FlexDivRow>
            <RatingButton>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </RatingButton>

            <NumOfRating> | 19 verified ratings </NumOfRating>
          </FlexDivRow>

          <SoldByDiv onClick={() => SoldByClickHandler(PageData)}>
            <span>Sold By</span>
            <div>
              <button>
                <MdStore />
              </button>
              <span>Magic Tasty Treats</span>
              <button>
                <MdOutlineChevronRight />
              </button>
            </div>
          </SoldByDiv>
        </DetailsDiv>

        <ProductFooter>
          {AddBtnClick ? (
            <AddToCartModal
              ImgSrc={PageData.ImgSrc}
              AddToCartHandler={AddToCartHandler}
              CloseHandler={CloseHandler}
              PlusHandler={PlusHandler}
              MinusHandler={MinusHandler}
              ProductQty={ProductQty}
            />
          ) : (
            <BuyButton onClick={AddToCartHandler}>
              <MdOutlineAddShoppingCart />
              <h3>ADD TO CART</h3>
            </BuyButton>
          )}
        </ProductFooter>
      </ProductContainer>
    );
  } else if (ShowSellerPage === true) {
    return <SellerProfilePage CloseSellerPage={SoldByClickHandler} />;
  }
}

export default ProductPage;
