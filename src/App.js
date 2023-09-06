import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cars from "./pages/Cars";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}></Route>
      <Route index path="/cars" element={<Cars />}></Route>
    </Routes>
  );
}

export default App;
