import styled from "styled-components";

export const NavMenuDiv = styled.div`
  font-family: inherit;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #fff;
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0px 10px 0px;
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  z-index: 99999;
  border-radius: 10px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`;

export const MenuTopDiv = styled.div`
  height: 30px;
`;

export const CloseNavBtn = styled.button`
  background-color: transparent;
  width: 25px;
  aspect-ratio: 1;
  height: 25px;
  font-size: 20px;
  border: none;
  position: absolute;
  top: 15px;
  right: 15px;
`;

// ==== for menu body div and menu list ====
export const MenuBodyDiv = styled.div`
  /* background-color: blue; */

  & > hr {
    width: 90%;
    color: gray;
  }

  & > div {
    height: 170px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    justify-content: center;

    & > button {
      font-size: 87px;
      color: rgb(60, 64, 67);
      background-color: transparent;
      border: none;
    }

    & > span {
      font-size: 15px;
      font-weight: 400;
      text-transform: capitalize;
    }
  }

  & > ul {
    list-style: none;
    list-style: none;
    display: flex;
    padding: 10px;
    flex-direction: column;

    & > hr {
    width: 85%;
    color: gray;

    }

    & > li {
      font-size: 17px;
      margin-left: 25px;
      display: flex;
      flex-direction: row;
      gap: 8px;

      & > span {
        font-size: 21px;
      }
    }
  }
`;

// ========== for menu foot div =======
export const MenuFooterDiv = styled(MenuBodyDiv)`
  margin-bottom: 0px;
`;