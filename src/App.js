import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AddCar from "./pages/AddCar";
import Cars from "./pages/Cars";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}></Route>
      <Route index path="/cars" element={<Cars />}></Route>
      <Route path="/add" element={<AddCar />}></Route>
    </Routes>
  );
}

export default App;
