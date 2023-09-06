import useIsDiesel from "../hooks/useIsDiesel";

const AppCar = ({ car }) => {
  const isDiesel = useIsDiesel(car.engine);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}
    >
      <span>Brand car: {car.brand}</span>
      <span>Model car: {car.model}</span>
      <span>Year car: {car.year}</span>
      <span>MaxSpeed car: {car.maxSpeed}</span>
      <span>IsAutomatic car: {car.isAutomatic ? "Yes" : "No"}</span>
      <span>Engine car: {car.engine}</span>
      <span>Number of dors car: {car.numberOfDoors}</span>
      <span>Engine is diesel: {isDiesel ? "Yes" : "No"}</span>
    </div>
  );
};

export default AppCar;
