import styled from "styled-components";
import { Colors } from "../../../types/variables";

export const DriverCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  border: 1px solid ${Colors.Primary};
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
  color: ${Colors.Dark};
  margin: 0;
`;

export const DriverNumber = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${Colors.Dark};
  margin: 0;
`;

export const DriverButton = styled.button`
  font-size: 2rem;
  font-weight: 700;
  color: ${Colors.Dark};
  padding: 0.5rem 1rem;
`;

export const DriverImage = styled.img`
  width: 90%;
  margin: 0 auto;
`;
