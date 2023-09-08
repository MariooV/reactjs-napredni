import { useEffect, useState } from "react";
import { getAllCars } from "../services/carsService";
import AppCar from "./AppCar";

const AppCars = () => {
  const [cars, setCars] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const handleRefetch = () => {
    setRefresh((prevState) => !prevState);
  };

  useEffect(() => {
    getAllCars().then(({ data }) => setCars(data));
  }, [refresh]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {cars.map((car, index) => (
        <AppCar key={index} car={car} handleRefetch={handleRefetch} />
      ))}
    </div>
  );
};

export default AppCars;
