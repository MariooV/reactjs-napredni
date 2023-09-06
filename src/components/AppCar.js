const AppCar = ({ car }) => {
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
    </div>
  );
};

export default AppCar;
