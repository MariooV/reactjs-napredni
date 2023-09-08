import { useEffect, useState } from "react";
import { getAllCars } from "../services/carsService";
import AppCar from "./AppCar";

const AppCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getAllCars().then(({ data }) => setCars(data));
  }, []);

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
        <AppCar key={index} id={index + 1} car={car} />
      ))}
    </div>
  );
};

export default AppCars;
