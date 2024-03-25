import styled from "styled-components";

// ========= for the page container div =====
export const SellerProfileContainer = styled.div``;

// ======= for the page header =======
export const SellerProfileHeader = styled.div`
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 7px;
  padding: 8px 4px 10px 4px;
  position: fixed;
  top: 0%;
  left: 0px;
  right: 0px;
  z-index: 9999;
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  color: #3c4043;
  font-family: inherit;
  font-size: 17px;
`;

export const SellerProfileArrowLeftBtn = styled.button`
  font-size: 25px;
  background: transparent;
  border: none;
`;
