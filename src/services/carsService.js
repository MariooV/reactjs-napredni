import { API } from "../shared/api";

export const getAllCars = () => {
  return API.get("/cars");
};
