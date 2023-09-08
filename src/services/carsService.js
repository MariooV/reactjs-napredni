import { API } from "../shared/api";

export const getAllCars = () => {
  return API.get("/cars");
};

export const postCar = (car) => {
  return API.post("/cars", car);
};

export const getCar = (id) => {
  return API.get(`/cars/${id}`);
};

export const patchCar = (id, car) => {
  return API.patch(`/cars/${id}`, car);
};

export const deleteCar = (id) => {
  return API.delete(`/cars/${id}`);
};
