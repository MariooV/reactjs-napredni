import Header from "./Header";

const Wrapper = ({ children }) => {
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
      {children}
    </div>
  );
};

export default Wrapper;
