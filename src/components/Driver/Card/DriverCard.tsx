import { Driver } from "../../../types/drivers";
import * as S from "./DriverCardAtom";

const DriverCard: React.FC<{ data: Driver }> = ({ data }) => {
  return (
    <S.DriverCard>
      <S.DriverImage src={data.imgUrl} />

      <S.DriverTitle>{data.firstname}</S.DriverTitle>
      <S.DriverTitle>{data.lastname}</S.DriverTitle>

      <S.DriverFooter>
        <S.DriverButton>+</S.DriverButton>
        <S.DriverNumber>{data.place}#</S.DriverNumber>
        <S.DriverButton>+</S.DriverButton>
      </S.DriverFooter>
    </S.DriverCard>
  );
};

export default DriverCard;
