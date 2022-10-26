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

export const DriverPlaceSetterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > input {
    height: 3rem;
    width: 3rem;
    font-size: 1.5rem;
    text-align: center;
    font-weight: 700;
    color: ${Colors.Primary};
    background: ${Colors.White};
    border: none;
    outline: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type="number"] {
      -moz-appearance: textfield;
    }
  }

  & > button {
    height: 3rem;
    width: 3rem;
    font-weight: 700;
    color: ${Colors.Primary};
    padding: 0.5rem 1rem;
    background: ${Colors.TextPrimary};
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }

    &:hover {
      color: ${Colors.White};
    }

    &:disabled {
      color: ${Colors.Primary};
      cursor: not-allowed;
    }
  }
`;

export const DriverTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${Colors.TextPrimary};
  margin: 0;
`;

export const DriverNumber = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: ${Colors.TextPrimary};
  margin: 0;
  position: absolute;
  top: 0;
  left: 0.5rem;
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
  display: flex;
  justify-content: center;
  align-items: center;

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
  width: 65px;
  height: 40px;
  margin: 0 auto;
  position: absolute;
  top: 0;
  right: 0;
  border-top-right-radius: 12px;
`;
