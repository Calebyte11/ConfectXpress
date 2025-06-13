import styled from "styled-components";

// ========= for the page container div =========
export const SellerProfileContainer = styled.div`
  width: 100%;
`;

// ======= for the page header =======
export const SellerProfileHeader = styled.div`
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 4px 10px 4px;
  position: fixed;
  top: 0%;
  left: 0px;
  right: 0px;
  z-index: 9999;
  color: #3c4043;
  font-family: inherit;
  font-size: 15px;
  font-weight: 800;
`;

export const SellerProfileArrowLeftBtn = styled.button`
  font-size: 36px;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// ======= for the page body =====
export const SellerProfileBodyDiv = styled.div`
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 7px;
`;

export const SellerProfileNameDiv = styled.div`
  width: 100%;
  display: flex;

  & > div {
    display: flex;
  }
`;

// ====== the info card =======
export const SellerProfileInfoDiv = styled.div`
  width: 100%;
  font-size: 15px;
`;

export const SellerInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7px auto 7px auto;
  z-index: 1;
  border-radius: 6px;
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  font-size: 12px;

  & > ul {
    padding: 10px;
    margin: 0px 10px 0px;

    & > li {
      list-style: none;
    }
  }
`;

// ======= the customer reviews cards =====
export const SellerProfileReviewDiv = styled.div`
  width: 100%;
  font-size: 15px;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  & > ul {
    margin: 0px;
    padding: 5px 15px;

    & > li {
      list-style: none;
    }
  }
`;

// for the view all button ======
export const ViewAllBtn = styled.button`
  background-color: transparent;
  border: none;
  font-family: inherit;
  font-size: 11px;
  font-weight: 400;
  color: #994799;
  margin-right: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ReviewCards = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7px auto 7px auto;
  z-index: 1;
  border-radius: 6px;
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  font-size: 12px;
  padding: 7px;
  overflow-y: hidden;

  & > div {

    display: flex;
    flex-direction: row;
    gap: 10px;
    align-content: center;

    & > img {
      width: 70px;
      height: 70px;
      border-radius: 7px;
    }

    & > h6{
      font-weight: 400;
      font-size: 11px;
    }
  }

  & > section {
    margin: 0px;
    height: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

// ======== for the catalogues region =====
export const SellerProfileCatalogDiv = styled.div`
  width: 100%;
  font-size: 15px;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  & > ul {
    margin: 0px;
    padding: 5px 10px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    overflow-x: auto;

    & > li {
      list-style: none;
    }
  }
`;

// ====== the catalogue card ======
export const CatalogueCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 145px;
  list-style: none;
  margin: auto;
  z-index: 1;
  border-radius: 6px;
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  padding: 7px;

  //==== product image ======
  & > img {
    width: 99%;
    height: 125px;
    min-height: 57%;
    margin: auto;
    border-radius: 4px;
  }

  & > div {
    & > h4 {
      font-size: 13px;
      font-weight: 400;
      width: 130px;
      margin: 5px 0px 0px 0px;
      text-transform: capitalize;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: inline-block;
      overflow-x: clip;
    }

    & > h6 {
      font-size: 11px;
      margin: 0px;
      color: #a0a4a8;
      font-weight: 500;
    }
  }
`;
