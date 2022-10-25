import styled from "styled-components";
import { Breakpoints } from "../../../types/variables";

interface ColumnProp {
  size?: number;
  sm?: number;
  md?: number;
  lg?: number;
}

export const Column = styled.div<ColumnProp>`
  position: relative;
  width: 100%;
  padding: 0.75rem;
  flex: 0 0 ${({ size }) => ((size || 12) / 12) * 100}%;
  max-width: ${({ size }) => ((size || 12) / 12) * 100}%;

  @media (min-width: ${Breakpoints.Small}) {
    flex: 0 0 ${({ sm, size }) => ((sm || size || 12) / 12) * 100}%;
    max-width: ${({ sm, size }) => ((sm || size || 12) / 12) * 100}%;
  }

  @media (min-width: ${Breakpoints.Medium}) {
    flex: 0 0 ${({ md, sm, size }) => ((md || sm || size || 12) / 12) * 100}%;
    max-width: ${({ md, sm, size }) => ((md || sm || size || 12) / 12) * 100}%;
  }

  @media (min-width: ${Breakpoints.Large}) {
    flex: 0 0
      ${({ lg, md, sm, size }) => ((lg || md || sm || size || 12) / 12) * 100}%;
    max-width: ${({ lg, md, sm, size }) =>
      ((lg || md || sm || size || 12) / 12) * 100}%;
  }
`;
