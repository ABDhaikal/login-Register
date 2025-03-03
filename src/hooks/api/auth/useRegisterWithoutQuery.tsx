import { axiosInstance } from "@/lib/axios";
import { useState } from "react";

interface Payload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const useRegister = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const register = async (payload: Payload) => {
    setIsLoading(true);
    try {
      const { email, firstName, lastName, password } = payload;
      await axiosInstance.post(`/users/register`, {
        email,
        firstName,
        lastName,
        password,
      });
    } catch (error) {
      console.error(error);
    } finally{
        setIsLoading(false);
    }
  };
  return { register, isLoading };
};

export default useRegister;