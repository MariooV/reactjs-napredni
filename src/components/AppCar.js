import { Link } from "react-router-dom";
import { deleteCar } from "../services/carsService";

const AppCar = ({ car, handleRefetch }) => {
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
      <Link to={`/edit/${car.id}`}>
        <button>Edit</button>
      </Link>
      <button
        onClick={() => {
          const answer = window.prompt(
            "Are you sure you want to delete? Y/N",
            "N"
          );
          if (answer === "Y") deleteCar(car.id).then(() => handleRefetch());
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default AppCar;
