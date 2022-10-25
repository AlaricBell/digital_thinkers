import { Driver } from "../../../types/drivers";
import * as S from "./DriverCardAtom";
import { useDispatch } from "react-redux";
import { setDrivers } from "../../../store/driver/driverSlice";
import axios from "axios";

const DriverCard: React.FC<{ data: Driver }> = ({ data }) => {
  const dispatch = useDispatch();

  const overtakePlayer = async (place: number) => {
    const newDriverPlaces = await axios.post(
      `/api/drivers/${data.place}/overtake`
    );
    dispatch(setDrivers(newDriverPlaces.data));
  };

  return (
    <S.DriverCard>
      <S.DriverImage src={data.imgUrl} />
      <S.DriverTitle>{data.firstname}</S.DriverTitle>
      <S.DriverTitle>{data.lastname}</S.DriverTitle>

      <S.DriverFooter>
        <S.DriverButton
          disabled={data.place === 1}
          onClick={() => overtakePlayer(data.place)}
        >
          +
        </S.DriverButton>
        <S.DriverNumber>{data.place}#</S.DriverNumber>
        <S.DriverButton>-</S.DriverButton>
      </S.DriverFooter>
    </S.DriverCard>
  );
};

export default DriverCard;
