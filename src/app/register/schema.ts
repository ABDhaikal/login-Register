import * as Yup from "yup";

import YupPassword from "yup-password";
YupPassword(Yup);

export const RegisterValidationSchema = Yup.object().shape({
   firstName: Yup.string().min(3).required("First name is required"),
   lastName: Yup.string().required("Last name is required"),
   email: Yup.string().email().required("Email is required"),
   password: Yup.string()
      .min(6)
      .minUppercase(1)
      .minNumbers(1)
      .required("Password is required"),
   confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
});