"use client";

import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logoutAction } from "@/redux/slices/user";
import { log } from "console";

export default function Home() {
   const user = useAppSelector((state) => state.user);
   const dispatch = useAppDispatch();

   const logout = () => {
      dispatch(logoutAction());
      localStorage.removeItem("user");
   };
   return (
      <div className=" container flex flex-col items-center justify-center">
         <h1>Home Page</h1>
         <p> {user.email}</p>
         <p> {user.firstName}</p>
         <p>{user.lastName}</p>
         <Button
            onClick={logout}
            className={`${!!user.firstName ? "block" : "hidden"}`}
         >
            Logout
         </Button>
      </div>
   );
}
