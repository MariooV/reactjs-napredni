import React from "react";
import { useState } from "react";

export const CarsContext = React.createContext(null);

export const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState([1, 2, 3, 4]);
  return (
    <CarsContext.Provider value={{ cars, setCars }}>
      {children}
    </CarsContext.Provider>
  );
};

{
  /* <Container>
  <Header></Header>
</Container>;

<provider value>
    <App/>
</provider> */
}
