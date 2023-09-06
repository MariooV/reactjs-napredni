import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postCar } from "../services/carsService";

const years = [];
for (let i = 1990; i <= 2018; i++) years.push(i);

const AppAddCar = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(0);
  const [maxSpeed, setMaxSpeed] = useState(0);
  const [numberOfDoors, setNumberOfDoors] = useState(0);
  const [isAutomatic, setIsAutomatic] = useState(false);
  const [engine, setEngine] = useState("");

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    postCar({
      brand,
      model,
      year,
      maxSpeed,
      numberOfDoors,
      isAutomatic,
      engine,
    });

    navigate("/cars");
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <label>Brand</label>
      <input
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        type="text"
      />
      <label>Model</label>
      <input
        value={model}
        onChange={(e) => setModel(e.target.value)}
        type="text"
      />
      <label>Year</label>
      <select value={year} onChange={(e) => setYear(e.target.value)}>
        {years.map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </select>
      <label>Max speed</label>
      <input
        value={maxSpeed}
        onChange={(e) => setMaxSpeed(e.target.value)}
        type="number"
      />
      <label>Number of doors</label>
      <input
        value={numberOfDoors}
        onChange={(e) => setNumberOfDoors(e.target.value)}
        type="number"
      />
      <label>Is automatic</label>
      <input
        value={isAutomatic}
        onChange={(e) => setIsAutomatic(e.target.checked)}
        type="checkbox"
      />
      <label>Engine Type</label>
      Diesel:{" "}
      <input
        value="diesel"
        onChange={(e) => setEngine(e.target.value)}
        name="engineType"
        type="radio"
      />
      Petrol:
      <input
        value="petrol"
        onChange={(e) => setEngine(e.target.value)}
        name="engineType"
        type="radio"
      />
      Electric:
      <input
        value="electric"
        onChange={(e) => setEngine(e.target.value)}
        name="engineType"
        type="radio"
      />
      Hybrid:
      <input
        value="hybrid"
        onChange={(e) => setEngine(e.target.value)}
        name="engineType"
        type="radio"
      />
      <br />
      <button type="submit">Add car</button>
    </form>
  );
};

export default AppAddCar;
