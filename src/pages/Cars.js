import AppCars from "../components/AppCars";
import Header from "../components/Header";

const Cars = () => {
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
