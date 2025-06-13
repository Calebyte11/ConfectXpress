import styled from "styled-components";

export const LogInPageDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 9999999;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
`;

// ===== for the top section of the page =====
export const LogInTopDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  margin-top: 20px;
`;

// ===== for the form div ====
export const LogInFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px 20px 0px;
  gap: 12px;

  & > p {
    display: flex;
    flex-direction: row;
    width: 80%;
    align-items: center;

    & > input {
      height: 40px;
      outline: none;
      border: none;
      padding-left: 10px;
      font-family: inherit;
      font-size: 16px;
      background-color: #f8f9fa;
      border: 1px solid #dfe1e5;
      border-radius: 7px;
    }

    & > span {
      font-size: 23px;
      margin-left: -35px;
      color: rgb(115 115 115);
      /* color: #252825; */
      margin-top: 2px;
    }
  }
`;

export const LogInButton = styled.button`
  height: 43px;
  width: 80%;
  border-style: none;
  border-radius: 7px;
  background-color: #994799;
  border: none;
  color: #fff;
  font-family: inherit;
  font-size: 16px;
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

`;

export const WithGoogleBtn = styled.button`
  height: 43px;
  width: 80%;
  border-style: none;
  border-radius: 7px;
  margin: auto;
  background-color: inherit;
  border: none;
  color: inherit;
  font-family: inherit;
  font-size: 16px;
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  & > img {
    height: 30px;
    aspect-ratio: 1;
  }
`;

// ==== for the footer/bottom secton ======
export const LogInBottomDIv = styled.div``;
