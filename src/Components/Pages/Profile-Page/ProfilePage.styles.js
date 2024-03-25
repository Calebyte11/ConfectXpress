import styled from "styled-components";

// ===== for the page container =======
export const ProfilePageContainer = styled.div`
  width: 100%;
  color: #000000;
  font-family: inherit;
  overflow-x: hidden;
  overflow-y: hidden;
  position: absolute;
  top: 10%;
  left: 0%;
  right: 0%;
`;

// ==== for the page top div ========
export const ProfileTopDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    justify-content: center;

    & > button {
      font-size: 140px;
      height: 150px;
      color: rgb(60, 64, 67);
      background-color: transparent;
      border: none;
    }

    & > ul {
      list-style: none;
      padding: 0px;
      display: flex;
      flex-direction: column;
      margin-top: 0px;
      align-items: center;

      & > li {
        font-size: 17px;
        font-weight: 100;
        display: flex;
        height: 25px;
        flex-direction: row;
        align-items: center;

        & > span {
          font-size: 15px;
          font-weight: 400;
          height: 28px;
          text-transform: capitalize;
          color: blue;
        }
      }
    }
  }

  & > hr {
    width: 80%;
    color: gray;
  }
`;

// ==== for the page body div ====
export const ProfileBodyDiv = styled.div`
  & > ul {
    margin-top: 15px;
    list-style: none;
    padding: 0px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > li {
    }
  }
`;

// ======== for the profile my orders div =====
export const ProfileMyOrdersDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  box-shadow: rgba(32, 33, 36, 0.28) 0px 1px 6px;

  padding: 5px 5px 5px 9px;
  height: 140px;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > span {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 17px;
      gap: 8px;
      color: #000000;
      height: fit-content;
    }

    & > button {
      border: none;
      background: transparent;
      font-size: 13px;
      color: #994799;
      font-family: inherit;
    }
  }

  & > hr {
    width: 90%;
    color: gray;
  }

  & > ul {
    list-style: none;
    padding: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;

    & > li {
      width: 130px;
      height: 100px;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;

      & > button {
        border: none;
        background: transparent;
        color: #994799;
        font-size: 65px;
        height: 70px;
      }

      & > div {
        position: relative;
        display: flex;
        height: 30px;
        align-items: center;

        & > h6 {
          font-family: Arial;
          font-size: 12px;
          font-weight: 700;
          background: #994799;
          width: 16px;
          aspect-ratio: 1;
          color: #fff;
          border-radius: 50%;
          position: absolute;
          top: -27px;
          right: -16px;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
      }
    }
  }
`;

export const ProfileFavItemsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  gap: 50px;
  font-size: 16px;
  margin-top: 16px;
  box-shadow: rgba(32, 33, 36, 0.28) 0px 1px 6px;
  justify-content: space-between;
  padding: 5px 5px 5px 9px;

  & > span {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 17px;
    gap: 8px;
    color: #000000;
  }

  & > button {
    border: none;
    background: transparent;
    font-size: 19px;
    width: 25px;
  }
`;

// ====== for the page footer ====
export const ProfileBottomDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  & > button {
    background: transparent;
    border: none;
    height: 40px;
    font-size: 17px;
    font-family: inherit;
  }
`;
