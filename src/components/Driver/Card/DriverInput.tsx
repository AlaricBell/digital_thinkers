import * as S from "./DriverCardAtom";
import { useDispatch } from "react-redux";
import { setDrivers } from "../../../store/driver/driverSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState } from "react";

const DriverInput: React.FC<{ currentPlace: number }> = ({ currentPlace }) => {
  const dispatch = useDispatch();
  const [addedPlace, setAddedPlace] = useState("0");

  const overtakeDriver = async (): Promise<void> => {
    const newDriverPlaces = await axios.post(
      `/api/drivers/${currentPlace}/overtake`,
      { added: addedPlace }
    );
    setAddedPlace(`0`);
    dispatch(setDrivers(newDriverPlaces.data));
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    e.preventDefault();
    if (!e.target.value) setAddedPlace("");
    else if (currentPlace - Number(e.target.value) < 1)
      setAddedPlace(`${currentPlace - 1}`);
    else setAddedPlace(e.target.value);
  };

  return (
    <S.DriverPlaceSetterContainer>
      <button disabled={currentPlace === 1} onClick={() => overtakeDriver()}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <input
        name="added"
        type="number"
        onChange={onChange}
        value={addedPlace}
      />
    </S.DriverPlaceSetterContainer>
  );
};

export default DriverInput;
