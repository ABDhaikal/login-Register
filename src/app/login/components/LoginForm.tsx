"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import useRegister from "@/hooks/api/auth/useRegister";
import { LoginValidationSchema } from "./schema";
import useLogin from "@/hooks/api/auth/useLogin";

export default function LoginForm({
   className,
   ...props
}: React.ComponentProps<"div">) {
   const { mutateAsync: login, isPending } = useLogin();
   const formik = useFormik({
      initialValues: {
         login: "",
         password: "",
      },
      validationSchema: LoginValidationSchema,
      onSubmit: async (values) => {
         await login(values);
      },
   });

   return (
      <div className={cn("flex flex-col gap-6", className)} {...props}>
         <Card className="overflow-hidden py-0 shadow-2xl">
            <CardContent className="grid p-0 md:grid-cols-2">
               <div className="relative hidden bg-muted md:block">
                  <img
                     src="/cuteshine19_01.jpg"
                     alt="Image"
                     className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                  />
               </div>
               <form onSubmit={formik.handleSubmit} className="p-6 md:p-8">
                  <div className="flex flex-col gap-6">
                     <div className="flex flex-col items-center text-center">
                        <h1 className="text-2xl font-bold">Welcome back</h1>
                        <p className="text-balance text-muted-foreground">
                           Login to your Ncrit account
                        </p>
                     </div>

                     <div className="grid gap-2 relative">
                        <Label htmlFor="email">Email</Label>
                        <Input
                           name="login"
                           id="login"
                           type="email"
                           placeholder="m@example.com"
                           value={formik.values.login}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                        />
                        {!!formik.touched.login && !!formik.errors.login && (
                           <span className="text-sm text-destructive absolute top-full">
                              {formik.errors.login}
                           </span>
                        )}
                     </div>

                     <div className="grid gap-2 relative">
                        <div className="flex items-center">
                           <Label htmlFor="password">Password</Label>
                        </div>
                        <Input
                           name="password"
                           value={formik.values.password}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           id="password"
                           type="password"
                        />
                        {!!formik.touched.password &&
                           !!formik.errors.password && (
                              <span className="text-sm text-destructive absolute top-full ">
                                 {formik.errors.password}
                              </span>
                           )}
                     </div>

                     <Button
                        disabled={isPending}
                        type="submit"
                        className="w-full"
                     >
                        {isPending ? "يني لوادينع..." : "سوبميت"}
                     </Button>
                     <div className="text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <a
                           href="/register"
                           className="underline underline-offset-4"
                        >
                           Register
                        </a>
                     </div>
                  </div>
               </form>
            </CardContent>
         </Card>
         <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
            By clicking continue, you agree to our{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
         </div>
      </div>
   );
}
