import styled from "styled-components";
import { Colors } from "../../../types/variables";

export const DriverCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  background: ${Colors.Secondary};
  border: 2px solid ${Colors.Highlight};
  border-radius: 12px;
  position: relative;
`;

export const DriverFooter = styled.div`
  width: 100%;
  padding: 0.75rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DriverTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${Colors.TextPrimary};
  margin: 0;
`;

export const DriverNumber = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${Colors.TextPrimary};
  margin: 0;
`;

export const DriverButton = styled.button`
  font-size: 2rem;
  font-weight: 700;
  color: ${Colors.TextPrimary};
  padding: 0.5rem 1rem;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  svg {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    color: ${Colors.White};
  }

  &:disabled {
    color: ${Colors.TextPrimary};
    cursor: not-allowed;
  }
`;

export const DriverImage = styled.img`
  width: 90%;
  margin: 0 auto;
`;

export const CountryImage = styled.img`
  width: 60px;
  height: 40px;
  margin: 0 auto;
  position: absolute;
  top: 0;
  right: 0;
  border-top-right-radius: 12px;
`;
