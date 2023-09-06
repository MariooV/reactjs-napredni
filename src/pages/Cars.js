import AppCars from "../components/AppCars";
import Header from "../components/Header";
import { useContext, useEffect } from "react";
import { CarsContext } from "../storage/CarsProvider";

const Cars = () => {
  const contextObj = useContext(CarsContext);

  useEffect(() => {
    contextObj.setCars("xd");
  }, []);

  console.log(contextObj);

  return (
    <div
      style={{
        background: "grey",
        minHeight: "100vh",
        fontSize: "22px",
        fontWeight: "500",
      }}
    >
      <Header />
      <AppCars />
    </div>
  );
};

export default Cars;
