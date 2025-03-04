"use client";

import { useAppDispatch } from "@/redux/hooks";
import { loginAction } from "@/redux/slices/user";
import { useEffect } from "react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      const user = localStorage.getItem("user");
      if (user) {
         dispatch(loginAction(JSON.parse(user)));
      }
   }, []);

   return <>{children}</>;
};

export default AuthProvider;
