import AppAddCar from "../components/AppAddCar";
import Header from "../components/Header";

const EditCar = () => {
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
      <AppAddCar />
    </div>
  );
};

export default EditCar;
