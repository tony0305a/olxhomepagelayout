import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .main {
    display: flex;
    flex-direction: row;
  }
  .locataion-product {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 720px) {
    display: none;
  }
`;
export const MobileWrapper = styled.div`
  display: none;
  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .main {
    display: flex;
    flex-direction: row;
  }
  }
`;
