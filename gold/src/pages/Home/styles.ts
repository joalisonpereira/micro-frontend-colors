import styled from "styled-components";

export interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 5em;
  background-color: #d4a125;
`;
