import styled from "styled-components";

interface ContainerProp {
  backgroundColor?: string;
}

export const Container = styled.div<ContainerProp>`
  width: 95%;
  max-width: 1400px;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
`;

export const ContainerFluid = styled.div<ContainerProp>`
  width: 100%;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
`;
