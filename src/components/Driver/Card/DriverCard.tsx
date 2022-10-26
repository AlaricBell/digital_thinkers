import { Driver } from "../../../types/drivers";
import * as S from "./DriverCardAtom";
import { useDispatch } from "react-redux";
import { setDrivers } from "../../../store/driver/driverSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const DriverCard: React.FC<{ data: Driver }> = ({ data }) => {
  const dispatch = useDispatch();

  const overtakeDriver = async (place: number) => {
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
          onClick={() => overtakeDriver(data.place)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </S.DriverButton>
        <S.DriverNumber>{data.place}#</S.DriverNumber>
      </S.DriverFooter>
      <S.CountryImage src={`https://countryflagsapi.com/png/${data.country}`} />
    </S.DriverCard>
  );
};

export default DriverCard;
