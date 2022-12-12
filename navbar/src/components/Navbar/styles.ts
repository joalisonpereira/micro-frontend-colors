import styled from "styled-components";

export interface ContainerProps {}

export const Container = styled.nav<ContainerProps>`
  background-color: #01f;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${(props) => props.theme.headerHeight}px;
  .inner {
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      font-family: "Poppins", sans-serif;
      color: #fff;
      cursor: pointer;
    }
    .apps {
      display: flex;
      a {
        font-family: "Poppins", sans-serif;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        :nth-child(1) {
          margin-right: ${(props) => props.theme.safeMargin}px;
        }
      }
    }
  }
`;
