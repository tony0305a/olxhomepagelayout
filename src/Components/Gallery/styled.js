import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 328px;
  border-top: 1px solid #ccc;
  margin: 16px;
  h1 {
    font-weight: bold;
    font-size: 13px;
  }
  @media screen and (max-width: 720px) {
    width: 55%;
    margin: 8px;
  }
`;
export const Box = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  button {
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index: 1;
    @media screen and (max-width: 720px) {
      display: none;
    }
  }
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 720px) {
    text-overflow: hidden;
  }
`;
export const InnerBox = styled.div`
  display: inline;
  width: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Boxitem = styled.div`
  display: inline-block;
  width: 25%;
  @media screen and (max-width: 720px) {
    width: 20%;
  }
`;
export const Item = styled.div`
  display: flex;
  margin: 16px;
  flex-direction: column;
  justify-content: center;
  img {
    width: 100%;
    height: 178px;
    padding: 8px;
    border-radius: 16px;
  }
  span {
    width: 100%;
    height: 40px;
    @media screen and (max-width: 720px) {
      overflow: hidden;
      font-size: 17px;
    }
  }
`;
