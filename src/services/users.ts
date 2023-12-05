import axiosClient from "../libs/axios-client";
export const loginAPI = async(email: string, password: string) => {
  const response = await axiosClient.post("/users/login", {
    user: { email, password },
  });
  return response.data
};
