import RegisterForm from "./components/RegisterForm";

const Register = () => {
   return (
      <div className="flex min-h-svh flex-col items-center justify-center bg-[url('/bgdood.png')] bg-blend-darken bg-black/[.10]  p-6 md:p-10">
         <div className="w-full max-w-sm md:max-w-3xl">
            <RegisterForm />
         </div>
      </div>
   );
};

export default Register;
