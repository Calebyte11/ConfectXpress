import styled from "styled-components";

// =============== Product container ================
export const ProductContainer = styled.div`
  margin: 0px;
  position: ${(props) => (props.isFromHomepage ? "absolute" : "none")};
  top: ${(props) => (props.isFromHomepage ? "70px" : "0px")};
  left: 0px;
  right: 0px;
  padding: 1px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

//============ Image Div ===============
export const ImageDiv = styled.div`
  width: 98%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  & > img {
    width: 100%;
    height: 300px;
    border-radius: 6px;
  }
`;

//============= Product Footer =============
export const ProductFooter = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0px 10px 0px;
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  z-index: 99999;
`;

// ========= Buy or Add to Cart Button =======
export const BuyButton = styled.button`
  width: 70%;
  height: 42px;
  margin: auto;
  background-color: #994799;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-family: inherit;
  font-size: 23px;
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 7px;

  & > h3 {
    font-size: 15px;
    font-weight: 600;
  }
`;

//========= Details Div =========
export const DetailsDiv = styled.div`
  width: 98%;
  min-height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;

  & > section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px;
  }
`;

// ======== Name and Category of the Product =======
export const ProductName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3px;
  width: 85%;
  height: 100%;
  margin: 0px;

  & > h4 {
    font-size: 15px;
    font-weight: 500;
    margin: 0px;
    text-transform: capitalize;
    line-height: 18px;
  }

  & > h6 {
    margin: auto 0px;
    color: #a0a4a8;
    font-size: 12px;
    font-weight: 500;
  }
`;

// ======== favourite button =======
export const FavouriteButton = styled.button`
  background-color: transparent;
  width: 12%;
  color: ${(props) => (props.liked ? "#994799" : "#4f4f4f")};
  border: none;
  outline: none;
  font-size: 16px;
  height: 30px;
  padding-top: 0px;
`;

// ========== price and slashed and discount =======
export const PriceDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 85%;
  height: 20px;
  padding: 0px;

  & > h4 {
    font-size: 16px;
    font-weight: 600;
    margin: 0px;
    text-transform: capitalize;
  }

  & > h5 {
    margin: 0px 0px 0px 5px;
    color: gray;
    font-size: 13px;
    font-weight: 500;
    text-decoration: line-through;
    text-decoration-color: gray;
  }

  & > h6 {
    margin-left: 10px;
    color: #994799;
    border-radius: 3px;
    background: #ffdfdf;
    padding: 1px 2px 1px 2px;
    font-size: 12px;
    font-weight: 500;
  }
`;

//======= Rating Button and it's Container ========
export const FlexDivRow = styled.div`
  display: flex;
  flex-direction: row;
`;

// ==== button
export const RatingButton = styled.button`
  background-color: transparent;
  border: none;
  padding-left: 0px;
  color: #f6a609;
  font-size: 13px;
`;

// ==== number of rating
export const NumOfRating = styled.span`
  font-size: 11px;
  color: #6570a7;
`;

// ======== for Sold-By div ===='
export const SoldByDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  gap: 50px;
  font-size: 14px;
  margin-top: 16px;
  box-shadow: rgba(32, 33, 36, 0.28) 0px 1px 6px;
  justify-content: space-between;
  font-weight: 600;
  padding: 0px 5px 0px 5px;
  height: 40px;

  & > div{
    display: flex;
    flex-direction: row;

    & > button{
    border: none;
    background: transparent;
    font-size: 17px;
    }
  }
`;
