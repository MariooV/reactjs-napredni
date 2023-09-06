import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: "20px 0px 100px 0px",
      }}
    >
      <Link to="/cars">Cars</Link>
      <Link to="/add">Add Car</Link>
    </nav>
  );
};

export default Header;
