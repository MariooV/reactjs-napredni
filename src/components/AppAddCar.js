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

  const handleReset = (e) => {
    setBrand("");
    setModel("");
    setYear(0);
    setMaxSpeed(0);
    setNumberOfDoors(0);
    setIsAutomatic(false);
    setEngine("");
  };

  const handlePreview = (e) => {
    window.alert(
      JSON.stringify({
        brand,
        model,
        year,
        maxSpeed,
        numberOfDoors,
        isAutomatic,
        engine,
      })
    );
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
        required
        minLength={2}
      />
      <label>Model</label>
      <input
        value={model}
        onChange={(e) => setModel(e.target.value)}
        type="text"
        required
        minLength={2}
      />
      <label>Year</label>
      <select value={year} onChange={(e) => setYear(e.target.value)} required>
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
        required
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
        required
      />
      Petrol:
      <input
        value="petrol"
        onChange={(e) => setEngine(e.target.value)}
        name="engineType"
        type="radio"
        required
      />
      Electric:
      <input
        value="electric"
        onChange={(e) => setEngine(e.target.value)}
        name="engineType"
        type="radio"
        required
      />
      Hybrid:
      <input
        value="hybrid"
        onChange={(e) => setEngine(e.target.value)}
        name="engineType"
        type="radio"
        required
      />
      <br />
      <button type="submit">Add car</button>
      <button onClick={handleReset} type="reset">
        Reset
      </button>
      <button onClick={handlePreview} type="button">
        Preview
      </button>
    </form>
  );
};

export default AppAddCar;
