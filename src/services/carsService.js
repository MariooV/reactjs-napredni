import { API } from "../shared/api";

export const getAllCars = () => {
  return API.get("/cars");
};

export const postCar = (car) => {
  return API.post("/cars", car);
};
